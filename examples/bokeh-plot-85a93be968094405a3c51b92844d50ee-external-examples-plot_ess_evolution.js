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
    
      
      
    
      var element = document.getElementById("70a5e186-ea9e-482a-8cf0-43a697260e24");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '70a5e186-ea9e-482a-8cf0-43a697260e24' but no matching script tag was found.")
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
                    
                  var docs_json = '{"8cd7309c-eb68-4ffe-8877-bfa747e654fc":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"source":{"id":"17589"}},"id":"17593","type":"CDSView"},{"attributes":{},"id":"17608","type":"UnionRenderers"},{"attributes":{},"id":"17556","type":"PanTool"},{"attributes":{},"id":"17605","type":"AllLabels"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17585","type":"Line"},{"attributes":{"data_source":{"id":"17579"},"glyph":{"id":"17580"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17581"},"view":{"id":"17583"}},"id":"17582","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17607"},"selection_policy":{"id":"17608"}},"id":"17574","type":"ColumnDataSource"},{"attributes":{},"id":"17606","type":"BasicTickFormatter"},{"attributes":{"above":[{"id":"17595"}],"below":[{"id":"17547"}],"center":[{"id":"17550"},{"id":"17554"}],"height":500,"left":[{"id":"17551"}],"output_backend":"webgl","renderers":[{"id":"17577"},{"id":"17582"},{"id":"17587"},{"id":"17592"},{"id":"17594"}],"title":{"id":"17598"},"toolbar":{"id":"17565"},"toolbar_location":null,"width":500,"x_range":{"id":"17539"},"x_scale":{"id":"17543"},"y_range":{"id":"17541"},"y_scale":{"id":"17545"}},"id":"17538","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"17547"},"ticker":null},"id":"17550","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17576","type":"Circle"},{"attributes":{"source":{"id":"17584"}},"id":"17588","type":"CDSView"},{"attributes":{},"id":"17611","type":"Selection"},{"attributes":{"toolbar":{"id":"17619"},"toolbar_location":"above"},"id":"17620","type":"ToolbarBox"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17590","type":"Circle"},{"attributes":{"data_source":{"id":"17574"},"glyph":{"id":"17575"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17576"},"view":{"id":"17578"}},"id":"17577","type":"GlyphRenderer"},{"attributes":{},"id":"17558","type":"WheelZoomTool"},{"attributes":{},"id":"17603","type":"BasicTickFormatter"},{"attributes":{},"id":"17543","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17613"},"selection_policy":{"id":"17614"}},"id":"17589","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17580","type":"Line"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17594","type":"Span"},{"attributes":{"children":[[{"id":"17538"},0,0]]},"id":"17618","type":"GridBox"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"17577"},{"id":"17582"}]},"id":"17596","type":"LegendItem"},{"attributes":{},"id":"17561","type":"SaveTool"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"17606"},"major_label_policy":{"id":"17605"},"ticker":{"id":"17548"}},"id":"17547","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17581","type":"Line"},{"attributes":{"text":"b"},"id":"17598","type":"Title"},{"attributes":{"axis_label":"ESS","formatter":{"id":"17603"},"major_label_policy":{"id":"17602"},"ticker":{"id":"17552"}},"id":"17551","type":"LinearAxis"},{"attributes":{"source":{"id":"17574"}},"id":"17578","type":"CDSView"},{"attributes":{},"id":"17612","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17591","type":"Circle"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"17592"},{"id":"17587"}]},"id":"17597","type":"LegendItem"},{"attributes":{"callback":null},"id":"17562","type":"HoverTool"},{"attributes":{"toolbars":[{"id":"17565"}],"tools":[{"id":"17555"},{"id":"17556"},{"id":"17557"},{"id":"17558"},{"id":"17559"},{"id":"17560"},{"id":"17561"},{"id":"17562"}]},"id":"17619","type":"ProxyToolbar"},{"attributes":{},"id":"17539","type":"DataRange1d"},{"attributes":{"data_source":{"id":"17584"},"glyph":{"id":"17585"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17586"},"view":{"id":"17588"}},"id":"17587","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"17564"}},"id":"17559","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17575","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17611"},"selection_policy":{"id":"17612"}},"id":"17584","type":"ColumnDataSource"},{"attributes":{},"id":"17552","type":"BasicTicker"},{"attributes":{},"id":"17602","type":"AllLabels"},{"attributes":{},"id":"17613","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17586","type":"Line"},{"attributes":{},"id":"17614","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17563","type":"BoxAnnotation"},{"attributes":{"active_multi":null,"tools":[{"id":"17555"},{"id":"17556"},{"id":"17557"},{"id":"17558"},{"id":"17559"},{"id":"17560"},{"id":"17561"},{"id":"17562"}]},"id":"17565","type":"Toolbar"},{"attributes":{"overlay":{"id":"17563"}},"id":"17557","type":"BoxZoomTool"},{"attributes":{},"id":"17541","type":"DataRange1d"},{"attributes":{"click_policy":"hide","items":[{"id":"17596"},{"id":"17597"}],"location":"center_right","orientation":"horizontal"},"id":"17595","type":"Legend"},{"attributes":{},"id":"17555","type":"ResetTool"},{"attributes":{"data_source":{"id":"17589"},"glyph":{"id":"17590"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17591"},"view":{"id":"17593"}},"id":"17592","type":"GlyphRenderer"},{"attributes":{},"id":"17548","type":"BasicTicker"},{"attributes":{"axis":{"id":"17551"},"dimension":1,"ticker":null},"id":"17554","type":"Grid"},{"attributes":{},"id":"17545","type":"LinearScale"},{"attributes":{},"id":"17607","type":"Selection"},{"attributes":{"children":[{"id":"17620"},{"id":"17618"}]},"id":"17621","type":"Column"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17609"},"selection_policy":{"id":"17610"}},"id":"17579","type":"ColumnDataSource"},{"attributes":{},"id":"17609","type":"Selection"},{"attributes":{"source":{"id":"17579"}},"id":"17583","type":"CDSView"},{"attributes":{},"id":"17610","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17564","type":"PolyAnnotation"},{"attributes":{},"id":"17560","type":"UndoTool"}],"root_ids":["17621"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"8cd7309c-eb68-4ffe-8877-bfa747e654fc","root_ids":["17621"],"roots":{"17621":"70a5e186-ea9e-482a-8cf0-43a697260e24"}}];
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