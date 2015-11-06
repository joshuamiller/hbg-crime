(ns hbg-crime.dates
  "Functions related to date math and JS date wrangling"
  (:require [goog.date.Date]
            [goog.date.Interval]
            [clojure.string :as str]))

(defn date-for-timestamp
  "Split the date from an ISO timestamp string."
  [t]
  (first (str/split t #"T")))

(defn date-strftimed
  [d]
  (str (.getFullYear d) "-"
       (+ 1 (.getMonth d)) "-"
       (.getDate d)))

(defn- date-as-int
  [date]
  (js/parseInt (str/replace date #"-" "")))

(def offset-interval
  ;; No way to add correct # of hours to fix time zone
  ;; Add a day.
  (goog.date.Interval. 0 0 1))

(defn within?
  "Test whether Date d is within the range start..end"
  [d start end]
  (<= (date-as-int start)
      (date-as-int d)
      (date-as-int end)))

(defn today
  []
  (date-strftimed (goog.date.Date.)))

(defn month-ago
  []
  (let [date     (goog.date.Date.)
        interval (goog.date.Interval. 0 0 -30)]
    (.add date interval)
    (date-strftimed date)))
