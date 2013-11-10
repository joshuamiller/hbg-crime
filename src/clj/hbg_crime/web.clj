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
            [hbg-crime.db :as db]))

(defn reports-html
  [req]
  (redirect "index.html"))

(defn reports-json
  [req]
  (response (encode (db/all-reports))))

(defn- reports-table
  [data]
  (vec (cons ["Start" "End" "Description" "Address" "Lat" "Lon"]
             (map #(vec [(str (:starttime %)) (str (:endtime %)) (:description %) (:address %) (str (:lat %)) (str (:lng %))]) data))))

(defn reports-csv
  [req id]
  (let [format (last (str/split id #"\."))
        date (first (str/split id #"\."))]
    (response (write-csv (reports-table (db/reports-for-date date))))))

(def routes
  (moustache/app
   (wrap-params)
   (wrap-content-type)
   (wrap-resource "public")
   ["reports"] {:get (fn [req] (reports-html req))}
   ["reports.json"] {:get (fn [req] (reports-json req))}
   ["reports" date] {:get (fn [req] (reports-csv req date))}
   [""] {:get (fn [req] (redirect "index.html"))}))
