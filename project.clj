(defproject hbg-crime "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.apache.pdfbox/pdfbox "1.8.2"]
                 [org.clojars.scsibug/feedparser-clj "0.4.0"]
                 [enlive/enlive "1.1.1"]
                 [cheshire "5.0.2"]
                 [clojure-csv/clojure-csv "2.0.0-alpha1"]
                 [geocoder-clj "0.2.1"]
                 [org.clojure/java.jdbc "0.3.0-alpha5"]
                 [postgresql "9.1-901.jdbc4"]
                 [clj-time "0.4.4"]
                 [environ "0.4.0"]])
