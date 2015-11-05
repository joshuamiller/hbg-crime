(defproject hbg-crime "0.1.0"
  :description "Process Harrisburg Crime Report Data"
  :url "http://hbg-crime.org"
  :license {:name "The MIT License"
            :url "http://opensource.org/licenses/MIT"}
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.8.0-beta2"]
                 [org.clojure/clojurescript "1.7.145"]
                 [org.apache.pdfbox/pdfbox "1.8.2"]
                 [enlive/enlive "1.1.1"]
                 [cheshire "5.0.2"]
                 [clojure-csv/clojure-csv "2.0.0-alpha1"]
                 [geocoder-clj "0.2.1"]
                 [org.clojure/java.jdbc "0.3.0-alpha5"]
                 [postgresql "9.1-901.jdbc4"]
                 [clj-time "0.4.4"]
                 [net.cgrand/moustache "1.1.0" :exclusions
                  [ring/ring-core org.clojure/clojure]]
                 [ring "1.0.3"]
                 [environ "0.4.0"]
                 [prismatic/dommy "1.1.0"]
                 [instaparse "1.4.1"]
                 [cljs-ajax "0.5.1"]
                 [reagent "0.5.1"]]
  :source-paths ["src/clj"]
  :cljsbuild {:builds
              [{:source-paths ["src/cljs"]
                :compiler
                {:output-to "resources/public/hbg-crime.js"
                 :output-dir "resources/public"
                 :externs ["google_maps_api_v3.js"
                           "jquery-1.9.js"
                           "foundation-datepicker.js"]
                 :optimizations :whitespace
                 :source-map "resources/public/hbg-crime.js.map"
                 :pretty-print true
                 }}]}
  :plugins [[lein-ring "0.8.13"]
            [lein-cljsbuild "1.1.0"]]
  :ring {:handler hbg-crime.web/routes}
  :aliases {"update-reports"
            ["run" "-m" "hbg-crime.core/insert-all-current-reports"]
            "regeocode-reports"
            ["run" "-m" "hbg-crime.core/regeocode-reports"]})
