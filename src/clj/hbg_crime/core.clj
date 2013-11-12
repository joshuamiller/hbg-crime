(ns hbg-crime.core
  (:import [org.apache.pdfbox.pdmodel PDDocument]
           [org.apache.pdfbox.util PDFTextStripper]
           [java.io File StringWriter]
           [java.net URL])
  (:require [clojure.string :as str]
            [feedparser-clj.core :as feed]
            [net.cgrand.enlive-html :as html]
            [cheshire.core :as json]
            [clojure-csv.core :as csv]
            [geocoder.google :as geo]
            [clj-time.core :as tc]
            [clj-time.format :as tf]
            [hbg-crime.db :as db]))

(defn police-blog-feed
  []
  (feed/parse-feed "http://harrisburgpa.gov/feed/"))

(defn pdf-link-for-url
  [url]
  (let [source (-> url URL. html/html-resource)
        entries (html/select source [:div.post_text :p :a])
        links (map #(get-in % [:attrs :href]) entries)]
    (first (filter #(re-find #"Crime" %) links))))

(defn current-crime-report-links
  []
  (->> (:entries (police-blog-feed))
       (filter #(re-find #"Crime Report" (:title %)))
       (map :link)
       (map pdf-link-for-url)))

(defn text-of-pdf
  [url]
  (with-open [pd (PDDocument/load (URL. url))]
    (let [stripper (PDFTextStripper.)]
      (.getText stripper pd))))

(def entry-regex #"^(\d{2}\/\d{2}\/\d{4} \d{2}:\d{2})?\s*(\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}) (.{34})(.*)")
(def formatter
  (tf/formatter "MM/dd/YYYY HH:mm" (tc/time-zone-for-id "America/New_York")))

(defn parse-line
  [line]
  (if-let [matches (first (re-seq entry-regex line))]
    {:starttime (if-let [time (nth matches 1)]
                  (tf/parse formatter time))
     :endtime (tf/parse formatter (nth matches 2))
     :address (str/trim (nth matches 3))
     :description (str/trim (nth matches 4))}))

(defn geocode-report
  [report]
  (let [res (first (geo/geocode-address
                    (str (:address report) ", Harrisburg, PA")))
        loc (get-in res [:geometry :location])]
    (merge report loc)))

(defn results-of-file
  [src]
  (let [text (text-of-pdf src)
        lines (str/split text #"\n")
        parsed-lines (filter identity (map parse-line lines))
        geocoded-reports (map geocode-report parsed-lines)]
    geocoded-reports))

(defn all-current-reports
  [& [n]]
  (->> (take (or n 1) (current-crime-report-links))
       (map results-of-file)
       (flatten)
       (distinct)))

(defn insert-all-current-reports
  []
  (doseq [report (filter identity (all-current-reports))]
    (db/insert-report report)))

(defn reports-as-json
  [reports]
  (json/encode reports))

(defn reports-as-csv
  [reports]
  (->> reports
       (map #(vec [(or (:starttime %) "")
                   (:endtime %)
                   (:address %)
                   (:description %)]))
       (cons ["Start (if applicable)" "End" "Address" "Description"])
       (vec)
       (csv/write-csv)))
