(ns hbg-crime.web
  (:use ring.middleware.resource
        ring.middleware.params
        ring.middleware.content-type
        ring.util.response
        cheshire.core)
  (:require [net.cgrand.moustache :as moustache]
            [ring.adapter.jetty :as jetty]
            [hbg-crime.core :as hc]
            [hbg-crime.db :as db]))

(defn reports-html
  [req]
  (redirect "index.html"))

(defn reports-json
  [req]
  (response (encode (db/all-reports))))

(def routes
  (moustache/app
   (wrap-params)
   (wrap-content-type)
   (wrap-resource "public")
   ["reports"] {:get (fn [req] (reports-html req))}
   ["reports.json"] {:get (fn [req] (reports-json req))}
   [""] {:get (fn [req] (redirect "index.html"))}))
