(ns hbg-crime.application
  (:use [c2.core :only [unify]]
        [goog.date :only [Date]])
  (:require [c2.scale :as scale]
            [dommy.attrs :as attr]
            [dommy.core :as dommy]
            [goog.net.XhrIo :as xhr]
            [clojure.string :as str])
  (:use-macros [c2.util :only [bind!]]
               [dommy.macros :only [sel sel1 node]]))


(def lon -76.884382)
(def lat 40.2725855)

(declare listen-on-chart)

(declare *map*)

(def reports (atom {:reports []
                    :start-date ""
                    :end-date ""}))
(def reports-by-date (atom []))
(def reports-by-type (atom []))

(defn- date-for-timestamp
  [t]
  (first (str/split t #"T")))

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

(defn types-chart
  [data]
  (bind! "#types"
         [:tbody#types
          (unify data (fn [[label val]]
                        [:tr
                         [:td label]
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
  [r]
  (let [lat (:lat r)
        lng (:lng r)
        pos (google.maps.LatLng. lat lng)
        marker (google.maps.Marker. (clj->js {"position" pos "title" (:description r)}))
        window (info-window-for-report r marker)]
    (google.maps.event.addListener marker "click" (fn [] (.open window *map* marker)))
    marker))

(defn- parse-date
  [date]
  (let [arr (str/split date #"-")
        y (js/parseInt (first arr))
        m (- (js/parseInt (nth arr 1)) 1)
        d (js/parseInt (nth arr 2))]
    (Date. y m d)))

(defn parse-reports
  [resp]
  (let [results (js->clj (.getResponseJson (.-target resp)) :keywordize-keys true)
        with-markers (map #(assoc % :marker (report-marker %)) results)
        dates (sort (distinct (map #(date-for-timestamp (:endtime %)) results)))
        by-date (reverse (sort (frequencies (map #(date-for-timestamp (:endtime %)) results))))
        by-type (take 5 (sort #(> (last %1) (last %2)) (frequencies (map :description results))))]
    (swap! reports #(assoc %
                      :reports with-markers
                      :all-by-date by-date
                      :all-by-type by-type
                      :start-date (parse-date (first dates))
                      :end-date (parse-date (last dates))))
    (reset! reports-by-date by-date)
    (reset! reports-by-type by-type)
    (bar-chart)
    (types-chart (:reports-by-type @reports))
    (listen-on-chart)))

(defn ^:export get-reports
  []
  (xhr/send "reports.json" parse-reports "GET"))

(defn ^:export create-map
  []
  (let [map-opts (clj->js {"center" (google.maps.LatLng. lat lon)
                           "zoom" 13
                           "mapTypeId" "roadmap"})]
    (set! *map* (google.maps.Map. (sel1 :#map) map-opts))))

(defn- set-date
  [which ev]
  (let [date (Date. (get ev "date"))]
    (swap! reports #(assoc % which date))
    (reset! reports-by-date
            (filter #(and (> (parse-date (date-for-timestamp (first %))) (:start-date @reports))
                          (>= (:end-date @reports) (parse-date (date-for-timestamp (first %)))))
                    (:all-by-date @reports))
            (-> (js/$ (str "#" (name which)))
                (.fdatepicker "hide")))))

(defn listen-on-chart
  []
  (-> (js/$ "#end-date")
      (.fdatepicker)
      (.fdatepicker "setValue" (.getTime (:end-date @reports)))
      (.on "changeDate" (fn [ev] (set-date :end-date (js->clj ev)))))
  (-> (js/$ "#start-date")
      (.fdatepicker)
      (.fdatepicker "setValue" (.getTime (:start-date @reports)))
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
