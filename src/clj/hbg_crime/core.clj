(ns hbg-crime.core
  (:import [org.apache.pdfbox.pdmodel PDDocument]
           [org.apache.pdfbox.util PDFTextStripper]
           [java.io File StringWriter]
           [java.net URL])
  (:require [clojure.string :as str]
            [net.cgrand.enlive-html :as html]
            [cheshire.core :as json]
            [clojure-csv.core :as csv]
            [geocoder.google :as geo]
            [clj-time.core :as tc]
            [clj-time.format :as tf]
            [hbg-crime.db :as db]
            [hbg-crime.geometry :as g]))

(defn pdf-link-for-url
  [url]
  (let [source (-> url URL. html/html-resource)
        entries (html/select source [:div.post_text :p :a])
        links (map #(get-in % [:attrs :href]) entries)]
    (first (filter #(re-find #"Crime" %) links))))

(def crime-reports-url
  "http://harrisburgpa.gov/police-log/")

(defn current-crime-report-links
  []
  (let [source (-> crime-reports-url URL. html/html-resource)
        entries (html/select source [:a.pdf])
        crime-links (filter #(= "crime" (get-in % [:attrs :data-tags])) entries)]
    (map #(get-in % [:attrs :href]) crime-links)))

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

;; Harrisburg city zips (not perfect)
(def zips #{"17101" "17102" "17103" "17104" "17120" "17110"})
(defn- first-zip-match
  [results]
  (first (filter #(not (empty? (filter
                                (fn [el]
                                  (contains? zips (:short-name el)))
                                (:address-components %))))
                 results)))

(defn classify-neighborhood
  [report]
  (if-let [neighborhood (g/neighborhood-for-point [(:lng report) (:lat report)])]
    (name neighborhood)))

(defn geocode-report
  [report]
  (let [res (first-zip-match (geo/geocode-address
                              (str (str/replace (:address report) "FIRST BLK" "100") ", Harrisburg, PA")))
        loc (get-in res [:geometry :location])]
    (-> report
        (merge loc)
        (assoc :neighborhood (classify-neighborhood report)))))

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
  [& [n]]
  (doseq [report (filter identity (all-current-reports n))]
    (db/insert-report report)))

(defn assign-neighborhoods
  []
  (doseq [report (db/ungeocoded-reports)]
    (db/update-report! (assoc report :neighborhood (classify-neighborhood report)))))

(defn regeocode-reports
  []
  (doseq [report (db/ungeocoded-reports)]
    (db/update-report! (geocode-report report))))

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
