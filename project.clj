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
                 [net.cgrand/moustache "1.1.0"]
                 [ring "1.0.3"]
                 [environ "0.4.0"]
                 [prismatic/dommy "0.1.1"]
                 [org.clojure/clojurescript "0.0-1934"]
                 [com.keminglabs/c2 "0.2.3-SNAPSHOT"]]
  :source-paths ["src/clj"]
  :cljsbuild {:builds
              [{:source-paths ["src/cljs"]
                :compiler
                {:pretty-print true
                 :output-to "resources/public/hbg-crime.js"
;                 :source-map "resources/public/hbg-crime.js.map"
                 :optimizations :simple}}]}
  :plugins [[lein-ring "0.8.2"]
            [lein-cljsbuild "0.3.4"]]
  :ring {:handler hbg-crime.web/routes})
