(ns hbg-crime.application
  (:use [c2.core :only [unify]])
  (:require [c2.scale :as scale]
            [dommy.attrs :as attr]
            [dommy.core :as dommy]
            [goog.net.XhrIo :as xhr]
            [google.maps.LatLng]
            [google.maps.Map]
            [clojure.string :as str])
  (:use-macros [c2.util :only [bind!]]
               [dommy.macros :only [sel sel1 node]]))


(def lon -76.897382)
(def lat 40.2725855)

(declare listen-on-chart)

(declare *map*)

(def reports (atom []))

(defn bar-chart
  [data]
  (let [width 500
        bar-height 20
        s (scale/linear :domain [0 (apply max (vals data))]
                        :range [0 width])]
    (bind! "#barchart"
           [:div#bars
            (unify data (fn [[label val]]
                          (let [date (first (str/split label #"T"))]
                            [:div {:style {:height (str bar-height "px")
                                           :width (str (s val) "px")
                                           :background-color "gray"}}
                             [:span {:style {:color "white"}}
                              [:a {:href (str "#" date)
                                   :class "date"
                                   :data-date date}
                               date]]])))])))

(defn echo-reports
  [resp]
  (let [results (js->clj (.getResponseJson (.-target resp)))]
    (compare-and-set! reports @reports results)
    (bar-chart (reverse (frequencies (map #(get % "endtime") results))))
    (listen-on-chart)))

(defn get-reports
  []
  (xhr/send "reports.json" echo-reports "GET"))

(defn place-report
  [r]
  (let [lat (get r "lat")
        lng (get r "lng")
        pos (google.maps.LatLng. lat lng)]
    (google.maps.Marker. (clj->js {"position" pos "map" *map* "title" (get r "description")}))))

(defn create-map
  []
  (let [map-opts (clj->js {"center" (google.maps.LatLng. lat lon)
                           "zoom" 11
                           "mapTypeId" "roadmap"})]
    (set! *map* (google.maps.Map. (sel1 :#map) map-opts))))

(defn listen-on-chart
  []
  (doseq [bar-link (sel :a.date)]
    (let [date (attr/attr bar-link "data-date")]
      (dommy/listen! bar-link :click
                     (fn [e]
                       (doseq [report (filter #(= (first (str/split (get % "endtime") "T")) date) @reports)]
                         (place-report report)))))))
