(ns hbg-crime.core
  (:import [org.apache.pdfbox.pdmodel PDDocument]
           [org.apache.pdfbox.util PDFTextStripper]
           [java.io File StringWriter]
           [java.net URL])
  (:require [clojure.string :as str]
            [feedparser-clj.core :as feed]
            [net.cgrand.enlive-html :as html]
            [cheshire.core :as json]
            [clojure-csv.core :as csv]))

(defn police-blog-feed
  []
  (feed/parse-feed "http://harrisburgpa.gov/feed/"))

(defn pdf-link-for-url
  [url]
  (let [source (-> url URL. html/html-resource)]
    (-> (html/select source [:div.post_text :p :a]) first :attrs :href)))

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

(defn parse-line
  [line]
  (if-let [matches (first (re-seq entry-regex line))]
    {:start-time (nth matches 1)
     :end-time (nth matches 2)
     :address (str/trim (nth matches 3))
     :description (str/trim (nth matches 4))}))

(defn results-of-file
  [src]
  (let [text (text-of-pdf src)
        lines (str/split text #"\n")
        parsed-lines (map parse-line lines)]
    (filter identity parsed-lines)))

(defn all-current-reports
  []
  (->> (current-crime-report-links)
       (map results-of-file)
       (flatten)
       (distinct)))

(defn reports-as-json
  [reports]
  (json/encode reports))

(defn reports-as-csv
  [reports]
  (->> reports
       (map #(vec [(or (:start-time %) "")
                   (:end-time %)
                   (:address %)
                   (:description %)]))
       (cons ["Start (if applicable)" "End" "Address" "Description"])
       (vec)
       (csv/write-csv)))
