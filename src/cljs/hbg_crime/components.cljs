(ns hbg-crime.components
  (:require [clojure.string :as string]
            [dommy.core :refer [toggle-class! px]
             :refer-macros [sel1]]
            [hbg-crime.dates :refer [date-for-timestamp]]
            [reagent.core :as r]))

(declare *map*)

(defonce reports (r/atom []))

(defn end-timestamps
  []
  (->> @reports
    (map :endtime)
    (map date-for-timestamp)))

(defn sorted-timestamps
  []
  (-> (end-timestamps)
    (distinct)
    (sort)))

(defn start-date
  []
  (first (sorted-timestamps)))

(defn end-date
  []
  (last (sorted-timestamps)))

(defn reports-by-date
  []
  (-> (end-timestamps)
    (frequencies)
    (sort)
    (reverse)))

(defn reports-by-neighborhood
  []
  (-> (map :neighborhood reports)
    (frequencies)
    (sort #(> (last %1) (last %2)))))

(defn reports-by-category
  []
  (-> (map :description reports)
    (frequencies)
    (sort #(> (last %1) (last %2))))  )

(defn bar-click
  [ev]
  (toggle-class! (.-target ev) "highlighted")
  (doseq [report (filter #(= (date-for-timestamp (:endtime %))) @reports)]
    (if (.getMap (:marker report))
      (.setMap (:marker report) nil)
      (.setMap (:marker report) *map*))))

(defn scale
  [[domain-min domain-max] [range-min range-max] val]
  (let [ratio (/ val (- domain-max domain-min))]
    (* ratio (- range-max range-min))))

(defn bar-chart
  []
  (let [width (px (sel1 :#barchart) :width)
        bar-height 30
        domain [0 (apply max (vals (reports-by-date)))]
        range [0 width]]
    [:div#bars
     (for [[date val] (reports-by-date)]
       [:div {:style {:width (str width "px")}}
        [:a {:href (str "/" date "/" date "/reports.csv")
             :class "download"}
         [:i {:class "fa fa-cloud-download"}]]
        [:div {:style {:height (str bar-height "px")
                       :width (str (scale domain range val) "px")
                       :background-color "gray"
                       :padding "4px"
                       :border "2px solid white"}}
         [:span {:style {:color "white"}}
          [:a {:href (str "#" date)
               :class "date"
               :data-date date
               :title (str val " reports")
               :onClick bar-click}
           date]]]])]))

(defn- title-case
  [s]
  (string/join " " (map string/capitalize (string/split s #"[- ]"))))

(defn table-chart
  [src]
  (for [[name val] src]
    [:tr
     [:td (title-case name)]
     [:td val]]))

(defn neighborhood-table
  []
  (table-chart (reports-by-neighborhood)))

(defn category-table
  []
  (table-chart (reports-by-category)))

(defn info-window-content
  [report]
  [:dl
   [:dt (:description report)]
   [:dd
    (:address report)
    [:br]
    (:endtime report)]])
