(ns hbg-crime.web
  (:use ring.middleware.resource
        ring.middleware.params
        ring.middleware.content-type
        ring.util.response
        clojure-csv.core
        cheshire.core)
  (:require [clojure.string :as str]
            [net.cgrand.moustache :as moustache]
            [ring.adapter.jetty :as jetty]
            [hbg-crime.core :as hc]
            [hbg-crime.db :as db]
            [hbg-crime.stats :as stats]))

(defn reports-html
  [req]
  (redirect "index.html"))

(defn reports-json
  ([req]
     (response (encode (db/all-reports))))
  ([req start end]
     (response (encode (db/reports-for-range start end)))))

(defn- reports-table
  [data]
  (vec (cons ["Start" "End" "Description" "Address" "Lat" "Lon" "Neighborhood"]
             (map #(vec [(str (:starttime %)) (str (:endtime %)) (:description %) (:address %) (str (:lat %)) (str (:lng %)) (str (:neighborhood %))]) data))))

(defn reports-csv
  [req start end]
  (response (write-csv (reports-table (db/reports-for-range start end)))))

(defn report-related-json
  [req id]
  (if-let [report (db/single-report (Integer/parseInt id))]
    (response (encode (stats/related-week-for-report report)))))

(def routes
  (moustache/app
   (wrap-params)
   (wrap-content-type)
   (wrap-resource "public")
   ["reports"] {:get (fn [req] (reports-html req))}
   ["reports" id "related.json"] {:get (fn [req] (report-related-json req id))}
   ["reports.json"] {:get (fn [req] (reports-json req))}
   [start end "reports.json"] {:get (fn [req] (reports-json req start end))}
   [start end "reports.csv"] {:get (fn [req] (reports-csv req start end))}
   [""] {:get (fn [req] (redirect "index.html"))}))

(defn -main
  [port]
  (jetty/run-jetty routes {:port (Integer. port)}))
