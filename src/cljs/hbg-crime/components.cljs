(ns hbg-crime.components
  (:require [c2.scale :as scale]
            [hbg-crime.dates :refer [date-for-timestamp]]
            [reagent.core :as r]))

(defonce reports
  (r/atom {:reports []
           :start-date ""
           :end-date ""}))

(defn reports-by-date
  []
  (let [dates (->> @reports
                (map :reports)
                (map :endtime)
                (map :date-for-timestamp))]
    (-> dates
      (frequencies)
      (sort)
      (reverse))))
