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
    
      
      
    
      var element = document.getElementById("ca780898-6268-47c0-bb99-fca80f06ee78");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ca780898-6268-47c0-bb99-fca80f06ee78' but no matching script tag was found.")
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
                    
                  var docs_json = '{"961e72b1-d82d-4245-ab92-cec930f44532":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"axis_label":"Value $\\\\pm$ MCSE for quantiles","formatter":{"id":"35722"},"major_label_policy":{"id":"35721"},"ticker":{"id":"35685"}},"id":"35684","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35697","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"35695","type":"HoverTool"},{"attributes":{},"id":"35726","type":"Selection"},{"attributes":{},"id":"35727","type":"UnionRenderers"},{"attributes":{"axis":{"id":"35684"},"dimension":1,"ticker":null},"id":"35687","type":"Grid"},{"attributes":{},"id":"35685","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35709","type":"Scatter"},{"attributes":{"overlay":{"id":"35696"}},"id":"35690","type":"BoxZoomTool"},{"attributes":{},"id":"35689","type":"PanTool"},{"attributes":{},"id":"35688","type":"ResetTool"},{"attributes":{},"id":"35694","type":"SaveTool"},{"attributes":{},"id":"35691","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"35697"}},"id":"35692","type":"LassoSelectTool"},{"attributes":{},"id":"35693","type":"UndoTool"},{"attributes":{},"id":"35672","type":"DataRange1d"},{"attributes":{},"id":"35676","type":"LinearScale"},{"attributes":{},"id":"35721","type":"AllLabels"},{"attributes":{},"id":"35722","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35725"},"major_label_policy":{"id":"35724"},"ticker":{"id":"35681"}},"id":"35680","type":"LinearAxis"},{"attributes":{"children":[{"id":"35735"},{"id":"35733"}]},"id":"35736","type":"Column"},{"attributes":{"axis":{"id":"35680"},"ticker":null},"id":"35683","type":"Grid"},{"attributes":{"active_multi":null,"tools":[{"id":"35688"},{"id":"35689"},{"id":"35690"},{"id":"35691"},{"id":"35692"},{"id":"35693"},{"id":"35694"},{"id":"35695"}]},"id":"35698","type":"Toolbar"},{"attributes":{},"id":"35729","type":"UnionRenderers"},{"attributes":{},"id":"35728","type":"Selection"},{"attributes":{},"id":"35674","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"+Pb8QR1Vsj+MDk73BYq3PyGJcH1IOro/R5qJktxXvD8QN5uHrHi+P+EQ5SCCFsA/nVhJgBDHwD+XHUgZYI7BP8j2F6KAXsI/quCp6LMbwz/9bt2KgNHDP6iPWFCyiMQ/uNKGtzpMxT8aURts6RbGP6Hdfy6V9cY/RM+ntqz9xz+OhgC/8fHIP+aFOeHb5sk//PpdgzyUyz/cM4wQ6vPNPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35726"},"selection_policy":{"id":"35727"}},"id":"35707","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"35713","type":"MultiLine"},{"attributes":{},"id":"35681","type":"BasicTicker"},{"attributes":{},"id":"35724","type":"AllLabels"},{"attributes":{"source":{"id":"35707"}},"id":"35711","type":"CDSView"},{"attributes":{"children":[[{"id":"35671"},0,0]]},"id":"35733","type":"GridBox"},{"attributes":{"data_source":{"id":"35707"},"glyph":{"id":"35708"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35709"},"view":{"id":"35711"}},"id":"35710","type":"GlyphRenderer"},{"attributes":{},"id":"35725","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"35712"},"glyph":{"id":"35713"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35714"},"view":{"id":"35716"}},"id":"35715","type":"GlyphRenderer"},{"attributes":{},"id":"35678","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35696","type":"BoxAnnotation"},{"attributes":{"data":{"xs":[[0.05,0.05],[0.09736842105263158,0.09736842105263158],[0.14473684210526316,0.14473684210526316],[0.19210526315789472,0.19210526315789472],[0.23947368421052628,0.23947368421052628],[0.28684210526315784,0.28684210526315784],[0.33421052631578946,0.33421052631578946],[0.381578947368421,0.381578947368421],[0.4289473684210526,0.4289473684210526],[0.47631578947368414,0.47631578947368414],[0.5236842105263158,0.5236842105263158],[0.5710526315789474,0.5710526315789474],[0.618421052631579,0.618421052631579],[0.6657894736842105,0.6657894736842105],[0.7131578947368421,0.7131578947368421],[0.7605263157894736,0.7605263157894736],[0.8078947368421052,0.8078947368421052],[0.8552631578947368,0.8552631578947368],[0.9026315789473683,0.9026315789473683],[0.95,0.95]],"ys":[[0.06542507260989384,0.07779740932825195],[0.08783828101486021,0.09606135597316004],[0.09938050528645676,0.10552315572600299],[0.10794861576931342,0.11348270780810846],[0.11602734321885094,0.12203033330056018],[0.12350211909750375,0.12787167939093885],[0.12891616867169003,0.13323376159544686],[0.13473004088066556,0.13958486303584752],[0.14096481555257187,0.1460531576744907],[0.14714684275886325,0.15141900007039433],[0.15249024001585332,0.15717175454660753],[0.15761692093229293,0.16322637365277673],[0.16410729163047846,0.16867037944462424],[0.17025660267247006,0.17489182297617661],[0.17657098829958856,0.18216819265595885],[0.185369502560243,0.18948857007780892],[0.19264880841245133,0.19711830100588604],[0.20027922695307082,0.2044362824100993],[0.2124901683329975,0.2184324622519046],[0.23108929611368745,0.2369230522137875]]},"selected":{"id":"35728"},"selection_policy":{"id":"35729"}},"id":"35712","type":"ColumnDataSource"},{"attributes":{"source":{"id":"35712"}},"id":"35716","type":"CDSView"},{"attributes":{"below":[{"id":"35680"}],"center":[{"id":"35683"},{"id":"35687"}],"height":500,"left":[{"id":"35684"}],"output_backend":"webgl","renderers":[{"id":"35710"},{"id":"35715"}],"title":{"id":"35717"},"toolbar":{"id":"35698"},"toolbar_location":null,"width":500,"x_range":{"id":"35672"},"x_scale":{"id":"35676"},"y_range":{"id":"35674"},"y_scale":{"id":"35678"}},"id":"35671","subtype":"Figure","type":"Plot"},{"attributes":{"toolbar":{"id":"35734"},"toolbar_location":"above"},"id":"35735","type":"ToolbarBox"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35708","type":"Scatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"35714","type":"MultiLine"},{"attributes":{"text":"sigma_a"},"id":"35717","type":"Title"},{"attributes":{"toolbars":[{"id":"35698"}],"tools":[{"id":"35688"},{"id":"35689"},{"id":"35690"},{"id":"35691"},{"id":"35692"},{"id":"35693"},{"id":"35694"},{"id":"35695"}]},"id":"35734","type":"ProxyToolbar"}],"root_ids":["35736"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"961e72b1-d82d-4245-ab92-cec930f44532","root_ids":["35736"],"roots":{"35736":"ca780898-6268-47c0-bb99-fca80f06ee78"}}];
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