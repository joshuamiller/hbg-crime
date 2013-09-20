(ns hbg-crime.core
  (:import [org.apache.pdfbox.pdmodel PDDocument]
           [org.apache.pdfbox.util PDFTextStripper]
           [java.io File])
  (:require [clojure.string :as str]))

(defn text-of-pdf
  [src]
  (with-open [pd (PDDocument/load (File. src))]
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
