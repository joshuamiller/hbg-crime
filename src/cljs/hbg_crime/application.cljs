(ns hbg-crime.application
  (:require [ajax.core :refer [GET]]
            [dommy.core :as dommy :refer-macros [sel1]]
            [hbg-crime.components :refer [*map*] :as comp]
            [hbg-crime.dates :refer [date-strftimed
                                     local-date-string-from-date
                                     today month-ago]]
            [reagent.core :as r]))

;; Map center point. 12th and Herr St
(def lon -76.874382)
(def lat 40.2725855)

(declare listen-on-chart)

(defn info-window-for-report
  [report marker]
  (google.maps.InfoWindow.
   (clj->js {:content (r/render-component-to-string
                       (comp/info-window-content report))})))

(defn report-marker
  "Build a Google Maps marker and give it an info window."
  [r]
  (let [lat (get r "lat")
        lng (get r "lng")
        pos (google.maps.LatLng. lat lng)
        marker (google.maps.Marker.
                (clj->js {:position pos :title (:description r)}))
        window (info-window-for-report r marker)]
    (google.maps.event.addListener marker "click"
                                   (fn [] (.open window *map* marker)))
    marker))

(defn parse-reports
  "Parse reports JSON and assign results to appropriate atom."
  [results]
  (let [with-markers (map #(assoc % :marker (report-marker %)) results)]
    (reset! comp/reports with-markers)
    (listen-on-chart)))

(defn get-reports
  "Get current reports from the server and trigger parse/display functions."
  ([]
   (get-reports (month-ago) (today)))
  ([start end]
   (GET (str (date-strftimed start) "/"
             (date-strftimed end) "/"
             "reports.json")
        {:handler parse-reports
         :reponse-format :json
         :keywords? true})))

(defn create-map
  "Create a Google Map element, center it, and assign it to the *map* var."
  []
  (let [map-opts (clj->js {"center" (google.maps.LatLng. lat lon)
                           "zoom" 13
                           "mapTypeId" "roadmap"})]
    (set! *map* (google.maps.Map. (sel1 :#map) map-opts))))

(defn- set-date
  [which ev]
  (let [date (local-date-string-from-date (get ev "date"))]
    (case which
      :start-date (get-reports date (comp/end-date))
      :end-date (get-reports (comp/start-date) date)))
  (-> (js/$ (str "#" (name which)))
    (.fdatepicker "hide")))

(defn listen-on-chart
  "Sets listeners on reports by date chart to change date range and to
   toggle markers on map."
  []
  (-> (js/$ "#end-date")
      (.fdatepicker)
      (.on "changeDate" #(set-date :end-date (js->clj %))))
  (-> (js/$ "#start-date")
      (.fdatepicker)
      (.on "changeDate" #(set-date :start-date (js->clj %)))))

(r/render [comp/neighborhood-table] (sel1 :#neighborhoods))
(r/render [comp/category-table] (sel1 :#types))

(defn log-reports
  []
  (.log js/console (clj->js (map :marker @comp/reports))))
(r/render [comp/bar-chart] (sel1 :#barchart))
(create-map)
(get-reports)
