(ns hbg-crime.stats
  (:require [clj-time.coerce :as coerce]
            [clj-time.core :as time]
            [clj-time.format :as fmt]
            [clojure.string :as string]
            [hbg-crime.db :as db])
  (:import [java.util GregorianCalendar Calendar]))

(def days-of-week
  ["Sun" "Mon" "Tue" "Wed" "Thu" "Fri" "Sat"])

(def days-cycle
  (flatten (repeat days-of-week)))

(defn- last-week
  [date]
  (let [dow (time/day-of-week date)]
    (map #(nth days-cycle %) (range dow (+ dow 7)))))

(def date-formatter
  (fmt/formatter "YYYY-MM-dd"))

(defn reports-by-column-for-week
  [report column]
  (if (column report)
    (let [end (coerce/to-date-time (:endtime report))
          end-str (fmt/unparse date-formatter end)
          start (time/minus end (time/days 6))
          start-str (fmt/unparse date-formatter start)
          results (db/reports-for-range-grouped-by start-str end-str (name column) (column report))
          days (last-week end)]
      (for [n days]
        (if-let [res (first (filter #(= (nth days-cycle (time/day-of-week (coerce/to-date-time (:endtime %)))) n)
                                    results))]
          (:count res)
          0)))
    ; Value missing; return 0s
    '(0 0 0 0 0 0 0)))

(defn- neighborhood-name
  [n]
  (if n
    (string/join " " (map string/capitalize (string/split (name n) #"-")))))

(defn related-week-for-report
  [report]
  {:by-type (reports-by-column-for-week report :description)
   :by-neighborhood (reports-by-column-for-week report :neighborhood)
   :days (last-week (coerce/to-date-time (:endtime report)))
   :neighborhood-name (neighborhood-name (:neighborhood report))})
