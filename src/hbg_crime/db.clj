(ns hbg-crime.db
  (:use environ.core)
  (:require [clojure.java.jdbc :as j]
            [clojure.java.jdbc.sql :as s]
            [clj-time.coerce :as time]))

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
                    [:lat :decimal]
                    [:lng :decimal])))

(defn report-exists?
  [report]
  (not (empty?
        (j/query db
          (s/select * :reports (s/where {:starttime (:starttime report)
                                         :endtime (:endtime report)
                                         :address (:address report)}))))))

(defn sql-report
  [report]
  (assoc report :starttime (time/to-sql-date (:starttime report))
                :endtime (time/to-sql-date (:endtime report))))

(defn insert-report
  [report]
  (let [record (sql-report report)]
    (j/with-connection db
      (if (and (not (report-exists? record))
               (not (empty? record)))
        (j/insert-record :reports record)))))
