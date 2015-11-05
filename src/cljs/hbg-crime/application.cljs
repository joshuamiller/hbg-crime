(ns hbg-crime.application
  (:require [ajax.core :refer [GET]]
            [dommy.core :as dommy]
            [hbg-crime.components :refer [*map*] :as comp]
            [hbg-crime.dates :refer [date-for-timestamp
                                     local-date-string-from-date
                                     within?]])
  (:use-macros [dommy.macros :only [sel sel1 node]]))

;; Map center point. 12th and Herr St
(def lon -76.874382)
(def lat 40.2725855)

(declare listen-on-chart)

(defn info-window-content
  [report]
  (str "<dl><dt>" (:description report) "</dt>"
       "<dd>"     (:address report)
       "<br/>"    (:endtime report) "</dd></dl>"))

(defn info-window-for-report
  [report marker]
  (google.maps.InfoWindow. (clj->js {"content" (info-window-content report)})))

(defn report-marker
  "Build a Google Maps marker and give it an info window."
  [r]
  (let [lat (:lat r)
        lng (:lng r)
        pos (google.maps.LatLng. lat lng)
        marker (google.maps.Marker. (clj->js {"position" pos "title" (:description r)}))
        window (info-window-for-report r marker)]
    (google.maps.event.addListener marker "click" (fn [] (.open window *map* marker)))
    marker))

(defn parse-reports
  "Parse reports JSON and assign results to appropriate atoms."
  [results]
  (let [with-markers (map #(assoc % :marker (report-marker %)) results)]
    (swap! comp/reports with-markers)
    (listen-on-chart)))

(defn ^:export get-reports
  "Get current reports from the server and trigger parse/display functions."
  []
  (GET "reports.json" {:handler parse-reports
                       :reponse-format :json
                       :keywords? true}))

(defn ^:export create-map
  "Create a Google Map element, center it, and assign it to the *map* var."
  []
  (let [map-opts (clj->js {"center" (google.maps.LatLng. lat lon)
                           "zoom" 13
                           "mapTypeId" "roadmap"})]
    (set! *map* (google.maps.Map. (sel1 :#map) map-opts))))

(defn- set-date
  "On date range change, alter the date/type atoms so they're re-rendered."
  [which ev]
  (let [date (local-date-string-from-date (get ev "date"))]
    (swap! reports #(assoc % which date))
    (reset! reports-by-date
            (filter #(within? (date-for-timestamp (first %))
                              (:start-date @reports)
                              (:end-date @reports))
                    (:all-by-date @reports)))
    (let [filtered-reports (filter #(within? (date-for-timestamp (:endtime %))
                                             (:start-date @reports)
                                             (:end-date @reports))
                                   (:reports @reports))]
      (reset! reports-by-type
              (by-type filtered-reports))
      (reset! reports-by-neighborhood
              (by-neighborhood filtered-reports)))
    (-> (js/$ (str "#" (name which)))
        (.fdatepicker "hide"))))

(defn listen-on-chart
  "Sets listeners on reports by date chart to change date range and to
   toggle markers on map."
  []
  (-> (js/$ "#end-date")
      (.fdatepicker)
      (.on "changeDate" (fn [ev] (set-date :end-date (js->clj ev)))))
  (-> (js/$ "#start-date")
      (.fdatepicker)
      (.on "changeDate" (fn [ev] (set-date :start-date (js->clj ev)))))
  (doseq [bar-link (sel :a.date)]
    (let [date (attr/attr bar-link "data-date")]
      (dommy/listen! bar-link :click
                     (fn [e]
                       (attr/toggle-class! (.-target e) "highlighted")
                       (doseq [report (filter #(= (date-for-timestamp (:endtime %)) date) (:reports @comp/reports))]
                         (if (.getMap (:marker report))
                           (.setMap (:marker report) nil)
                           (.setMap (:marker report) *map*))))))))
