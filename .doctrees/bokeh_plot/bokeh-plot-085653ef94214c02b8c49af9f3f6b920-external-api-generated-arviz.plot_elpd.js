(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("f5054414-4eac-477e-9840-312b0ba4d04e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f5054414-4eac-477e-9840-312b0ba4d04e' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js": "HjagQp6T0/7bxYTAXbLotF1MLAGWmhkY5siA1Gc/pcEgvgRPtMsRn0gQtMwGKiw1", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js": "ZEPPTjL+mdyqgIq+/pl9KTwzji8Kow2NnI3zWY8+sFinWP/SYJ80BnfeJsa45iYj", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js": "exLqv2ACDRIaV7ZK1iL8aGzGYQvKVuT3U2CT7FsQREBxRah6JrkVCoFy0koY1YqV"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"2f911835-c93d-4f1d-8ddf-e5a25ca9cd7b":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{},"id":"14204","type":"LinearScale"},{"attributes":{"text":"centered model - non centered model"},"id":"14239","type":"Title"},{"attributes":{"children":[{"id":"14255"},{"id":"14253"}]},"id":"14256","type":"Column"},{"attributes":{},"id":"14202","type":"DataRange1d"},{"attributes":{"overlay":{"id":"14225"}},"id":"14220","type":"LassoSelectTool"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"14244"},"major_label_policy":{"id":"14243"},"ticker":{"id":"14213"}},"id":"14212","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"14235","type":"Scatter"},{"attributes":{},"id":"14243","type":"AllLabels"},{"attributes":{},"id":"14246","type":"AllLabels"},{"attributes":{"formatter":{"id":"14247"},"major_label_policy":{"id":"14246"},"ticker":{"id":"14209"}},"id":"14208","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"14224","type":"BoxAnnotation"},{"attributes":{},"id":"14213","type":"BasicTicker"},{"attributes":{"axis":{"id":"14212"},"dimension":1,"ticker":null},"id":"14215","type":"Grid"},{"attributes":{},"id":"14248","type":"Selection"},{"attributes":{},"id":"14219","type":"WheelZoomTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"14248"},"selection_policy":{"id":"14249"}},"id":"14236","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"14224"}},"id":"14218","type":"BoxZoomTool"},{"attributes":{},"id":"14216","type":"ResetTool"},{"attributes":{},"id":"14249","type":"UnionRenderers"},{"attributes":{},"id":"14247","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"14199"},0,0]]},"id":"14253","type":"GridBox"},{"attributes":{"toolbar":{"id":"14254"},"toolbar_location":"above"},"id":"14255","type":"ToolbarBox"},{"attributes":{"active_multi":null,"tools":[{"id":"14216"},{"id":"14217"},{"id":"14218"},{"id":"14219"},{"id":"14220"},{"id":"14221"},{"id":"14222"},{"id":"14223"}]},"id":"14226","type":"Toolbar"},{"attributes":{"axis":{"id":"14208"},"ticker":null},"id":"14211","type":"Grid"},{"attributes":{"below":[{"id":"14208"}],"center":[{"id":"14211"},{"id":"14215"}],"height":288,"left":[{"id":"14212"}],"output_backend":"webgl","renderers":[{"id":"14237"}],"title":{"id":"14239"},"toolbar":{"id":"14226"},"toolbar_location":null,"width":432,"x_range":{"id":"14200"},"x_scale":{"id":"14204"},"y_range":{"id":"14202"},"y_scale":{"id":"14206"}},"id":"14199","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"14223","type":"HoverTool"},{"attributes":{},"id":"14206","type":"LinearScale"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"14225","type":"PolyAnnotation"},{"attributes":{},"id":"14200","type":"DataRange1d"},{"attributes":{},"id":"14244","type":"BasicTickFormatter"},{"attributes":{},"id":"14222","type":"SaveTool"},{"attributes":{},"id":"14209","type":"BasicTicker"},{"attributes":{},"id":"14221","type":"UndoTool"},{"attributes":{"toolbars":[{"id":"14226"}],"tools":[{"id":"14216"},{"id":"14217"},{"id":"14218"},{"id":"14219"},{"id":"14220"},{"id":"14221"},{"id":"14222"},{"id":"14223"}]},"id":"14254","type":"ProxyToolbar"},{"attributes":{"source":{"id":"14236"}},"id":"14238","type":"CDSView"},{"attributes":{"data_source":{"id":"14236"},"glyph":{"id":"14235"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"14238"}},"id":"14237","type":"GlyphRenderer"},{"attributes":{},"id":"14217","type":"PanTool"}],"root_ids":["14256"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"2f911835-c93d-4f1d-8ddf-e5a25ca9cd7b","root_ids":["14256"],"roots":{"14256":"f5054414-4eac-477e-9840-312b0ba4d04e"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();