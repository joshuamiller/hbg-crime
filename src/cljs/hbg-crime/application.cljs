(ns hbg-crime.application
  (:use [c2.core :only [unify]]
        [hbg-crime.dates :only [date-for-timestamp
                                local-date-string-from-date
                                within?]])
  (:require [c2.scale :as scale]
            [clojure.string :as string]
            [dommy.attrs :as attr]
            [dommy.core :as dommy]
            [ajax.core :refer [GET]])
  (:use-macros [c2.util :only [bind!]]
               [dommy.macros :only [sel sel1 node]]))

;; Map center point. 12th and Herr St
(def lon -76.874382)
(def lat 40.2725855)

(declare listen-on-chart)
(declare *map*)

(def reports (atom {:reports []
                    :start-date ""
                    :end-date ""}))
(def reports-by-date (atom []))
(def reports-by-type (atom []))
(def reports-by-neighborhood (atom []))

(defn bar-chart
  []
  (let [width (attr/px (sel1 :#barchart) :width)
        bar-height 30
        s (scale/linear :domain [0 (apply max (vals @reports-by-date))]
                        :range [0 width])]
    (bind! "#barchart"
           [:div#bars
            (unify @reports-by-date
                   (fn [[label val]]
                     (let [date (date-for-timestamp label)]
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
                               :title (str val " reports")}
                           date]
                          ]]])))])))

(defn- title-case
  [s]
  (string/join " " (map string/capitalize (string/split s #"[- ]"))))

(defn table-chart
  [id data]
  (bind! (str "#" id)
         [(keyword (str "tbody.results#" id))
          (unify @data (fn [[label val]]
                        [:tr
                         [:td (title-case label)]
                         [:td val]]))]))

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

(defn- by-type
  "The top 5 crime report types by frequency."
  [reports]
  (take 5 (sort #(> (last %1) (last %2)) (frequencies (map :description reports)))))

(defn- by-neighborhood
  "Neighborhoods ordered by crime frequency"
  [reports]
  (sort #(> (last %1) (last %2)) (frequencies (map :neighborhood reports))))

(defn parse-reports
  "Parse reports JSON and assign results to appropriate atoms."
  [results]
  (let [with-markers (map #(assoc % :marker (report-marker %)) results)
        dates (sort (distinct (map #(date-for-timestamp (:endtime %)) results)))
        by-date (reverse (sort (frequencies (map #(date-for-timestamp (:endtime %)) results))))
]
    (swap! reports #(assoc %
                      :reports with-markers
                      :all-by-date by-date
                      :start-date (first dates)
                      :end-date (last dates)))
    (reset! reports-by-date by-date)
    (reset! reports-by-type (by-type results))
    (reset! reports-by-neighborhood (by-neighborhood results))
    (bar-chart)
    (table-chart "types" reports-by-type)
    (table-chart "neighborhoods" reports-by-neighborhood)
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
                       (doseq [report (filter #(= (date-for-timestamp (:endtime %)) date) (:reports @reports))]
                         (if (.getMap (:marker report))
                           (.setMap (:marker report) nil)
                           (.setMap (:marker report) *map*))))))))
