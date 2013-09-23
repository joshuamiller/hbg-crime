(ns hbg-crime.db
  (:use environ.core)
  (:require [clojure.java.jdbc :as j]
            [clojure.java.jdbc.sql :as s]))

(def db (clojure.string/replace-first (env :database-url)
                                      "postgres:"
                                      "jdbc:postgresql:"))
(def conn (j/get-connection db))

(defn create-reports-table
  []
  (j/with-connection db
    (j/create-table :reports
                    [:id :serial "PRIMARY KEY"]
                    [:starttime :timestamp]
                    [:endtime :timestamp]
                    [:address :text]
                    [:description :text]
                    [:lat "decimal(17,15)"]
                    [:lng "decimal(17,15)"])))

(defn insert-report
  [report]
  (j/with-connection db
    (j/insert-record :reports report)))
