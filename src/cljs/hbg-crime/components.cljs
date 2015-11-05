(ns hbg-crime.components
  (:require [c2.scale :as scale]
            [clojure.string :as string]
            [dommy.attrs :as attr]
            [hbg-crime.dates :refer [date-for-timestamp]]
            [reagent.core :as r])
  (:use-macros [dommy.macros :only [sel1]]))

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
  (attr/toggle-class! (.-target e) "highlighted")
  (doseq [report (filter #(= (date-for-timestamp (:endtime %))) @reports)]
    (if (.getMap (:marker report))
      (.setMap (:marker report) nil)
      (.setMap (:marker report) *map*))))

(defn bar-chart
  []
  (let [width (attr/px (sel1 :#barchart) :width)
        bar-height 30
        s (scale/linear :domain [0 (apply max (vals (reports-by-date)))]
                        :range [0 width])]
    [:div#bars
     (for [(reports-by-date) [date val]]
       [:div {:style {:width (str width "px")}}
        [:a {:href (str "/" date "/" date "/reports.csv")
             :class "download"}
         [:i {:class "fa fa-cloud-download"}]]
        [:div {:style {:height (str bar-height "px")
                       :width (str (s val) "px")
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
  (for [src [name val]])
  [:tr
   [:td (title-case name)]
   [:td val]])

(defn neighborhood-table
  []
  (table-chart (reports-by-neighborhood)))

(defn category-table
  []
  (table-chart (reports-by-category)))
