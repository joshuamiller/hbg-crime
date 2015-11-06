(ns hbg-crime.components
  (:require [clojure.string :as string]
            [dommy.core :refer [toggle-class! px attr]
             :refer-macros [sel1]]
            [hbg-crime.dates :refer [date-for-timestamp today]]
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

(defn reports-by-key
  [key]
  (->> (frequencies (map key @reports))
    (filter #(not (nil? (first %))))
    (sort #(> (last %1) (last %2)))))

(defn reports-by-neighborhood
  []
  (reports-by-key :neighborhood))

(defn reports-by-category
  []
  (reports-by-key :description))

(defn bar-click
  [ev]
  (let [target (.-target ev)
        date   (attr target "data-date")]
    (toggle-class! target "highlighted")
    (doseq [report (filter #(= (date-for-timestamp (:endtime %)) date)
                           @reports)]
      (if-let [marker (:marker report)]
        (if (.getMap marker)
          (.setMap marker nil)
          (.setMap marker *map*))))))

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
    [:div
     [:h3 "Reports by Date"]
     [:a#end-date {:data-date (end-date)
                   :data-date-format "yyyy-mm-dd"
                   :data-date-end-date "0d"
                   :class "date-change"}
      "Change End Date"]
     [:div#barchart
      [:div#bars
       (for [[date val] (reports-by-date)]
         ^{:key date}
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
             date]]]])]]
     [:a#start-date {:data-date (start-date)
                     :data-date-format "yyyy-mm-dd"
                     :data-date-end-date "0d"
                     :class "date-change"}
      "Change Start Date"]]))

(defn- title-case
  [s]
  (string/join " " (map string/capitalize (string/split s #"[- ]"))))

(defn table-chart
  [src]
  [:tbody {:class "results"}
   (for [[name val] src]
     ^{:key name} [:tr
                   [:td (title-case name)]
                   [:td val]])])

(defn neighborhood-table
  []
  [:h3 "Top Categories"]
  [:table
   [:thead
    [:tr
     [:th "Neighborhood"]
     [:th "Reports"]]]
   [table-chart (reports-by-neighborhood)]])

(defn category-table
  []
  [:h3 "Top Categories"]
  [:table
   [:thead
    [:tr
     [:th "Offense"]
     [:th "Frequency"]]]
   [table-chart (reports-by-category)]])

(defn info-window-content
  [report]
  [:dl
   [:dt (:description report)]
   [:dd
    (:address report)
    [:br]
    (:endtime report)]])
