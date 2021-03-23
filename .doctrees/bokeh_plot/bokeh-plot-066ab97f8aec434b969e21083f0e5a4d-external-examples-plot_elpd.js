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
    
      
      
    
      var element = document.getElementById("eb955515-d0fd-45ab-ae3b-099db90d950b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'eb955515-d0fd-45ab-ae3b-099db90d950b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"796f4cc2-b02a-42f2-917f-74c1c8090e01":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"source":{"id":"17315"}},"id":"17317","type":"CDSView"},{"attributes":{},"id":"17296","type":"PanTool"},{"attributes":{},"id":"17295","type":"ResetTool"},{"attributes":{"children":[{"id":"17334"},{"id":"17332"}]},"id":"17335","type":"Column"},{"attributes":{},"id":"17300","type":"UndoTool"},{"attributes":{},"id":"17279","type":"DataRange1d"},{"attributes":{},"id":"17281","type":"DataRange1d"},{"attributes":{},"id":"17292","type":"BasicTicker"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"17318","type":"Title"},{"attributes":{"axis":{"id":"17291"},"dimension":1,"ticker":null},"id":"17294","type":"Grid"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"17323"},"major_label_policy":{"id":"17322"},"ticker":{"id":"17292"}},"id":"17291","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17304","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"17287"},"ticker":null},"id":"17290","type":"Grid"},{"attributes":{},"id":"17326","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17303","type":"BoxAnnotation"},{"attributes":{"active_multi":null,"tools":[{"id":"17295"},{"id":"17296"},{"id":"17297"},{"id":"17298"},{"id":"17299"},{"id":"17300"},{"id":"17301"},{"id":"17302"}]},"id":"17305","type":"Toolbar"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17314","type":"Scatter"},{"attributes":{},"id":"17301","type":"SaveTool"},{"attributes":{"formatter":{"id":"17326"},"major_label_policy":{"id":"17325"},"ticker":{"id":"17288"}},"id":"17287","type":"LinearAxis"},{"attributes":{},"id":"17322","type":"AllLabels"},{"attributes":{},"id":"17298","type":"WheelZoomTool"},{"attributes":{},"id":"17327","type":"Selection"},{"attributes":{"toolbars":[{"id":"17305"}],"tools":[{"id":"17295"},{"id":"17296"},{"id":"17297"},{"id":"17298"},{"id":"17299"},{"id":"17300"},{"id":"17301"},{"id":"17302"}]},"id":"17333","type":"ProxyToolbar"},{"attributes":{},"id":"17323","type":"BasicTickFormatter"},{"attributes":{},"id":"17285","type":"LinearScale"},{"attributes":{},"id":"17325","type":"AllLabels"},{"attributes":{},"id":"17283","type":"LinearScale"},{"attributes":{"overlay":{"id":"17304"}},"id":"17299","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"17315"},"glyph":{"id":"17314"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17317"}},"id":"17316","type":"GlyphRenderer"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17327"},"selection_policy":{"id":"17328"}},"id":"17315","type":"ColumnDataSource"},{"attributes":{},"id":"17288","type":"BasicTicker"},{"attributes":{"overlay":{"id":"17303"}},"id":"17297","type":"BoxZoomTool"},{"attributes":{"children":[[{"id":"17278"},0,0]]},"id":"17332","type":"GridBox"},{"attributes":{"below":[{"id":"17287"}],"center":[{"id":"17290"},{"id":"17294"}],"height":288,"left":[{"id":"17291"}],"output_backend":"webgl","renderers":[{"id":"17316"}],"title":{"id":"17318"},"toolbar":{"id":"17305"},"toolbar_location":null,"width":432,"x_range":{"id":"17279"},"x_scale":{"id":"17283"},"y_range":{"id":"17281"},"y_scale":{"id":"17285"}},"id":"17278","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17328","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"17333"},"toolbar_location":"above"},"id":"17334","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"17302","type":"HoverTool"}],"root_ids":["17335"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"796f4cc2-b02a-42f2-917f-74c1c8090e01","root_ids":["17335"],"roots":{"17335":"eb955515-d0fd-45ab-ae3b-099db90d950b"}}];
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