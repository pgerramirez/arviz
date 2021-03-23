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
    
      
      
    
      var element = document.getElementById("e68cc791-c0b4-4d18-8203-eb7f60f07799");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e68cc791-c0b4-4d18-8203-eb7f60f07799' but no matching script tag was found.")
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
                    
                  var docs_json = '{"0921b79b-46b0-4c36-a4e8-db31554b7517":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17835","type":"PolyAnnotation"},{"attributes":{},"id":"17816","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17860"},"selection_policy":{"id":"17861"}},"id":"17845","type":"ColumnDataSource"},{"attributes":{},"id":"17812","type":"DataRange1d"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17850","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17846","type":"Circle"},{"attributes":{"overlay":{"id":"17835"}},"id":"17830","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"17818"}],"center":[{"id":"17821"},{"id":"17825"}],"height":500,"left":[{"id":"17822"}],"output_backend":"webgl","renderers":[{"id":"17848"},{"id":"17850"}],"title":{"id":"17851"},"toolbar":{"id":"17836"},"toolbar_location":null,"width":500,"x_range":{"id":"17810"},"x_scale":{"id":"17814"},"y_range":{"id":"17812"},"y_scale":{"id":"17816"}},"id":"17809","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"17834"}},"id":"17828","type":"BoxZoomTool"},{"attributes":{},"id":"17861","type":"UnionRenderers"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"17859"},"major_label_policy":{"id":"17858"},"ticker":{"id":"17819"}},"id":"17818","type":"LinearAxis"},{"attributes":{},"id":"17858","type":"AllLabels"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"17856"},"major_label_policy":{"id":"17855"},"ticker":{"id":"17823"}},"id":"17822","type":"LinearAxis"},{"attributes":{},"id":"17860","type":"Selection"},{"attributes":{"children":[{"id":"17867"},{"id":"17865"}]},"id":"17868","type":"Column"},{"attributes":{"callback":null},"id":"17833","type":"HoverTool"},{"attributes":{},"id":"17855","type":"AllLabels"},{"attributes":{},"id":"17826","type":"ResetTool"},{"attributes":{},"id":"17819","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"17836"}],"tools":[{"id":"17826"},{"id":"17827"},{"id":"17828"},{"id":"17829"},{"id":"17830"},{"id":"17831"},{"id":"17832"},{"id":"17833"}]},"id":"17866","type":"ProxyToolbar"},{"attributes":{"text":"sigma"},"id":"17851","type":"Title"},{"attributes":{},"id":"17832","type":"SaveTool"},{"attributes":{"axis":{"id":"17818"},"ticker":null},"id":"17821","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17834","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"17809"},0,0]]},"id":"17865","type":"GridBox"},{"attributes":{"active_multi":null,"tools":[{"id":"17826"},{"id":"17827"},{"id":"17828"},{"id":"17829"},{"id":"17830"},{"id":"17831"},{"id":"17832"},{"id":"17833"}]},"id":"17836","type":"Toolbar"},{"attributes":{},"id":"17823","type":"BasicTicker"},{"attributes":{},"id":"17856","type":"BasicTickFormatter"},{"attributes":{},"id":"17829","type":"WheelZoomTool"},{"attributes":{},"id":"17859","type":"BasicTickFormatter"},{"attributes":{},"id":"17810","type":"DataRange1d"},{"attributes":{},"id":"17831","type":"UndoTool"},{"attributes":{},"id":"17827","type":"PanTool"},{"attributes":{"source":{"id":"17845"}},"id":"17849","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17847","type":"Circle"},{"attributes":{"toolbar":{"id":"17866"},"toolbar_location":"above"},"id":"17867","type":"ToolbarBox"},{"attributes":{},"id":"17814","type":"LinearScale"},{"attributes":{"axis":{"id":"17822"},"dimension":1,"ticker":null},"id":"17825","type":"Grid"},{"attributes":{"data_source":{"id":"17845"},"glyph":{"id":"17846"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17847"},"view":{"id":"17849"}},"id":"17848","type":"GlyphRenderer"}],"root_ids":["17868"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"0921b79b-46b0-4c36-a4e8-db31554b7517","root_ids":["17868"],"roots":{"17868":"e68cc791-c0b4-4d18-8203-eb7f60f07799"}}];
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