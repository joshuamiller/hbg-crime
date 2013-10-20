(ns hbg-crime.application
  (:use [c2.core :only [unify]])
  (:require [c2.scale :as scale]
            [goog.net.XhrIo :as xhr]
            [clojure.string :as str])
  (:use-macros [c2.util :only [bind!]]))
 
(defn bar-chart
  [data]
  (let [width 500, bar-height 20
           s (scale/linear :domain [0 (apply max (vals data))]
                           :range [0 width])]
    (bind! "#barchart"
           [:div#bars
            (unify data (fn [[label val]]
                          [:div {:style {:height (str bar-height "px")
                                         :width (str (s val) "px")
                                         :background-color "gray"}}
                           [:span {:style {:color "white"}}
                            (first (str/split label #"T"))]]))])))

(defn echo-reports
  [resp]
  (let [reports (js->clj (.getResponseJson (.-target resp)))]
    (bar-chart (reverse (frequencies (map #(get % "endtime") reports))))))

(defn get-reports
  []
  (xhr/send "reports.json" echo-reports "GET"))
