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
    
      
      
    
      var element = document.getElementById("3c11231a-ae52-420b-9c57-adfcb6990a6e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3c11231a-ae52-420b-9c57-adfcb6990a6e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"10729df8-88fa-48b6-b022-e8065148aa27":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{},"id":"35452","type":"ResetTool"},{"attributes":{"callback":null},"id":"35459","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35496","type":"BoxAnnotation"},{"attributes":{},"id":"35453","type":"PanTool"},{"attributes":{},"id":"35559","type":"UnionRenderers"},{"attributes":{},"id":"35558","type":"Selection"},{"attributes":{},"id":"35458","type":"SaveTool"},{"attributes":{"overlay":{"id":"35461"}},"id":"35456","type":"LassoSelectTool"},{"attributes":{},"id":"35457","type":"UndoTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35541"},"major_label_policy":{"id":"35540"},"ticker":{"id":"35445"}},"id":"35444","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35497","type":"PolyAnnotation"},{"attributes":{},"id":"35537","type":"AllLabels"},{"attributes":{},"id":"35538","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"35495","type":"HoverTool"},{"attributes":{"active_multi":null,"tools":[{"id":"35488"},{"id":"35489"},{"id":"35490"},{"id":"35491"},{"id":"35492"},{"id":"35493"},{"id":"35494"},{"id":"35495"}]},"id":"35498","type":"Toolbar"},{"attributes":{"children":[[{"id":"35435"},0,0],[{"id":"35471"},0,1]]},"id":"35563","type":"GridBox"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35460","type":"BoxAnnotation"},{"attributes":{},"id":"35540","type":"AllLabels"},{"attributes":{"overlay":{"id":"35497"}},"id":"35492","type":"LassoSelectTool"},{"attributes":{},"id":"35455","type":"WheelZoomTool"},{"attributes":{},"id":"35541","type":"BasicTickFormatter"},{"attributes":{},"id":"35472","type":"DataRange1d"},{"attributes":{"data_source":{"id":"35516"},"glyph":{"id":"35515"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35518"}},"id":"35517","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"35460"}},"id":"35454","type":"BoxZoomTool"},{"attributes":{"source":{"id":"35507"}},"id":"35511","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35461","type":"PolyAnnotation"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"35512","type":"Span"},{"attributes":{},"id":"35551","type":"AllLabels"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"35513","type":"Span"},{"attributes":{},"id":"35440","type":"LinearScale"},{"attributes":{},"id":"35552","type":"BasicTickFormatter"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35544"},"selection_policy":{"id":"35545"}},"id":"35516","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"35526","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35509","type":"Circle"},{"attributes":{},"id":"35542","type":"Selection"},{"attributes":{},"id":"35543","type":"UnionRenderers"},{"attributes":{"text":"tau"},"id":"35519","type":"Title"},{"attributes":{},"id":"35442","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35523","type":"Circle"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35514","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35515","type":"Scatter"},{"attributes":{"source":{"id":"35516"}},"id":"35518","type":"CDSView"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35538"},"major_label_policy":{"id":"35537"},"ticker":{"id":"35449"}},"id":"35448","type":"LinearAxis"},{"attributes":{},"id":"35554","type":"AllLabels"},{"attributes":{"source":{"id":"35521"}},"id":"35525","type":"CDSView"},{"attributes":{},"id":"35555","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35522","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35556"},"selection_policy":{"id":"35557"}},"id":"35521","type":"ColumnDataSource"},{"attributes":{"end":1,"start":-0.05},"id":"35438","type":"DataRange1d"},{"attributes":{"data_source":{"id":"35530"},"glyph":{"id":"35529"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35532"}},"id":"35531","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"35565"},{"id":"35563"}]},"id":"35566","type":"Column"},{"attributes":{"active_multi":null,"tools":[{"id":"35452"},{"id":"35453"},{"id":"35454"},{"id":"35455"},{"id":"35456"},{"id":"35457"},{"id":"35458"},{"id":"35459"}]},"id":"35462","type":"Toolbar"},{"attributes":{},"id":"35445","type":"BasicTicker"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"35527","type":"Span"},{"attributes":{"data_source":{"id":"35521"},"glyph":{"id":"35522"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35523"},"view":{"id":"35525"}},"id":"35524","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35542"},"selection_policy":{"id":"35543"}},"id":"35507","type":"ColumnDataSource"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35558"},"selection_policy":{"id":"35559"}},"id":"35530","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"35448"},"dimension":1,"ticker":null},"id":"35451","type":"Grid"},{"attributes":{},"id":"35545","type":"UnionRenderers"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35555"},"major_label_policy":{"id":"35554"},"ticker":{"id":"35481"}},"id":"35480","type":"LinearAxis"},{"attributes":{},"id":"35544","type":"Selection"},{"attributes":{"end":1,"start":-0.05},"id":"35474","type":"DataRange1d"},{"attributes":{"text":"mu"},"id":"35533","type":"Title"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35552"},"major_label_policy":{"id":"35551"},"ticker":{"id":"35485"}},"id":"35484","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35508","type":"Circle"},{"attributes":{"toolbars":[{"id":"35462"},{"id":"35498"}],"tools":[{"id":"35452"},{"id":"35453"},{"id":"35454"},{"id":"35455"},{"id":"35456"},{"id":"35457"},{"id":"35458"},{"id":"35459"},{"id":"35488"},{"id":"35489"},{"id":"35490"},{"id":"35491"},{"id":"35492"},{"id":"35493"},{"id":"35494"},{"id":"35495"}]},"id":"35564","type":"ProxyToolbar"},{"attributes":{},"id":"35476","type":"LinearScale"},{"attributes":{},"id":"35436","type":"DataRange1d"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35528","type":"Span"},{"attributes":{},"id":"35478","type":"LinearScale"},{"attributes":{},"id":"35449","type":"BasicTicker"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35529","type":"Scatter"},{"attributes":{},"id":"35494","type":"SaveTool"},{"attributes":{"below":[{"id":"35444"}],"center":[{"id":"35447"},{"id":"35451"}],"height":500,"left":[{"id":"35448"}],"output_backend":"webgl","renderers":[{"id":"35510"},{"id":"35512"},{"id":"35513"},{"id":"35514"},{"id":"35517"}],"title":{"id":"35519"},"toolbar":{"id":"35462"},"toolbar_location":null,"width":500,"x_range":{"id":"35436"},"x_scale":{"id":"35440"},"y_range":{"id":"35438"},"y_scale":{"id":"35442"}},"id":"35435","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"35530"}},"id":"35532","type":"CDSView"},{"attributes":{},"id":"35481","type":"BasicTicker"},{"attributes":{"axis":{"id":"35480"},"ticker":null},"id":"35483","type":"Grid"},{"attributes":{},"id":"35556","type":"Selection"},{"attributes":{"toolbar":{"id":"35564"},"toolbar_location":"above"},"id":"35565","type":"ToolbarBox"},{"attributes":{},"id":"35557","type":"UnionRenderers"},{"attributes":{"below":[{"id":"35480"}],"center":[{"id":"35483"},{"id":"35487"}],"height":500,"left":[{"id":"35484"}],"output_backend":"webgl","renderers":[{"id":"35524"},{"id":"35526"},{"id":"35527"},{"id":"35528"},{"id":"35531"}],"title":{"id":"35533"},"toolbar":{"id":"35498"},"toolbar_location":null,"width":500,"x_range":{"id":"35472"},"x_scale":{"id":"35476"},"y_range":{"id":"35474"},"y_scale":{"id":"35478"}},"id":"35471","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"35484"},"dimension":1,"ticker":null},"id":"35487","type":"Grid"},{"attributes":{},"id":"35485","type":"BasicTicker"},{"attributes":{},"id":"35491","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"35507"},"glyph":{"id":"35508"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35509"},"view":{"id":"35511"}},"id":"35510","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"35444"},"ticker":null},"id":"35447","type":"Grid"},{"attributes":{"overlay":{"id":"35496"}},"id":"35490","type":"BoxZoomTool"},{"attributes":{},"id":"35489","type":"PanTool"},{"attributes":{},"id":"35488","type":"ResetTool"},{"attributes":{},"id":"35493","type":"UndoTool"}],"root_ids":["35566"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"10729df8-88fa-48b6-b022-e8065148aa27","root_ids":["35566"],"roots":{"35566":"3c11231a-ae52-420b-9c57-adfcb6990a6e"}}];
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