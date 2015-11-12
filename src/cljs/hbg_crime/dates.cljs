(ns hbg-crime.dates
  "Functions related to date math and JS date wrangling"
  (:require [goog.date.UtcDateTime]
            [goog.string :as gstr]
            [goog.string.format :as gformat]
            [clojure.string :as str]))

(defn- date-strftimed
  [d]
  (str (.getUTCFullYear d) "-"
       (gstr/format "%02d" (+ 1 (.getUTCMonth d))) "-"
       (gstr/format "%02d" (.getUTCDate d))))

(defn display-date
  "Build a date of the format 2015-11-30"
  [d]
  (-> d
      (goog.date.UtcDateTime.)
      (date-strftimed)))

(defn- date-as-int
  [date]
  (js/parseInt (str/replace date #"-" "")))

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
    (display-date date)))
