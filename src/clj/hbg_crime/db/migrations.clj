(ns hbg-crime.db.migrations
  (:use hbg-crime.db)
  (:require [clojure.java.jdbc :as j]
            [clojure.java.jdbc.sql :as s]
            [clj-time.core :as time]
            [clj-time.coerce :as coerce]))

(defn add-neighborhoods
  []
  (j/execute! db ["alter table reports add column neighborhood varchar(20)"])
  (j/execute! db ["create index nbhood_idx on reports (neighborhood)"]))
