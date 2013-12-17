(ns hbg-crime.db
  (:use environ.core)
  (:require [clojure.java.jdbc :as j]
            [clojure.java.jdbc.sql :as s]
            [clojure.string :as string]
            [clj-time.core :as time]
            [clj-time.coerce :as coerce]))

(def db (env :database-url))

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

(defn- sql-report
  [report]
  (assoc report :starttime (coerce/to-timestamp (:starttime report))
                :endtime (coerce/to-timestamp (:endtime report))))

(defn insert-report
  [report]
  (let [record (sql-report report)]
    (j/with-connection db
      (if (and (not (report-exists? record))
               (not (empty? record)))
        (j/insert-record :reports record)))))

(defn- format-local
  [t]
  (if t
    (str (time/to-time-zone (coerce/from-date t) (time/time-zone-for-id "America/New_York")))))

(defn ungeocoded-reports
  []
  (j/query db (s/select * :reports "where neighborhood is null")))

(defn all-reports
  []
  (let [reports (j/query db (s/select * :reports (s/order-by {:endtime :desc})))]
    (map #(assoc %
            :endtime (format-local (:endtime %))
            :starttime (format-local (:starttime %))) reports)))

(defn update-report!
  [report]
  (let [id (:id report)]
    (j/update! db :reports (dissoc report :id) (s/where {:id id}))))

(defn reports-for-date
  [date]
  (j/query db (s/select * :reports (str "where endtime::date = '"
                                        date
                                        "'"))))

(defn reports-for-range
  [start end]
  (j/query db (s/select * :reports (str "where endtime::date >= '"
                                        start
                                        "' and endtime::date <= '"
                                        end "'"))))

(defn reports-for-range-grouped-by
  [start end column value]
  (j/query db (s/select "endtime::date, count(*)" :reports
                        (str "where endtime::date >= '"
                             start
                             "' and endtime::date <= '"
                             end
                             "' and " column " = '"
                             (string/replace value #"'" "''") "' "
                             "group by endtime::date"))))
