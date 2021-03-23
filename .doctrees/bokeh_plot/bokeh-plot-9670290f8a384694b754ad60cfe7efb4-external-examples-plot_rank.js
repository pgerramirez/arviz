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
    
      
      
    
      var element = document.getElementById("1e07f206-5ee8-4ebe-981a-5b2c1da7bc8e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1e07f206-5ee8-4ebe-981a-5b2c1da7bc8e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"cc505a4f-35e1-465f-bb65-377b73e274cf":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40804"},"selection_policy":{"id":"40805"}},"id":"40746","type":"ColumnDataSource"},{"attributes":{"source":{"id":"40746"}},"id":"40750","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40748","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40823"},"selection_policy":{"id":"40824"}},"id":"40780","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"40695"}},"id":"40689","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"40746"},"glyph":{"id":"40747"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40748"},"view":{"id":"40750"}},"id":"40749","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"40713"},"ticker":null},"id":"40716","type":"Grid"},{"attributes":{"data_source":{"id":"40752"},"glyph":{"id":"40753"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40754"},"view":{"id":"40756"}},"id":"40755","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"40728","type":"HoverTool"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"40757","type":"Span"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40815"},"major_label_policy":{"id":"40814"},"ticker":{"id":"40792"}},"id":"40717","type":"LinearAxis"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40753","type":"VBar"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40818"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"40817"},"ticker":{"id":"40714"}},"id":"40713","type":"LinearAxis"},{"attributes":{"source":{"id":"40752"}},"id":"40756","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40806"},"selection_policy":{"id":"40807"}},"id":"40752","type":"ColumnDataSource"},{"attributes":{},"id":"40714","type":"BasicTicker"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40754","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40776","type":"VBar"},{"attributes":{"data_source":{"id":"40786"},"glyph":{"id":"40787"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40788"},"view":{"id":"40790"}},"id":"40789","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"40785","type":"Span"},{"attributes":{"axis":{"id":"40717"},"dimension":1,"ticker":null},"id":"40720","type":"Grid"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40787","type":"VBar"},{"attributes":{},"id":"40802","type":"Selection"},{"attributes":{},"id":"40692","type":"UndoTool"},{"attributes":{"text":"mu"},"id":"40794","type":"Title"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40759","type":"VBar"},{"attributes":{"overlay":{"id":"40696"}},"id":"40691","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40741","type":"VBar"},{"attributes":{"source":{"id":"40780"}},"id":"40784","type":"CDSView"},{"attributes":{"overlay":{"id":"40729"}},"id":"40723","type":"BoxZoomTool"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40808"},"selection_policy":{"id":"40809"}},"id":"40758","type":"ColumnDataSource"},{"attributes":{},"id":"40803","type":"UnionRenderers"},{"attributes":{},"id":"40722","type":"PanTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40760","type":"VBar"},{"attributes":{},"id":"40721","type":"ResetTool"},{"attributes":{},"id":"40727","type":"SaveTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40788","type":"VBar"},{"attributes":{},"id":"40724","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"40780"},"glyph":{"id":"40781"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40782"},"view":{"id":"40784"}},"id":"40783","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"40791","type":"Span"},{"attributes":{"callback":null},"id":"40694","type":"HoverTool"},{"attributes":{"overlay":{"id":"40730"}},"id":"40725","type":"LassoSelectTool"},{"attributes":{"source":{"id":"40786"}},"id":"40790","type":"CDSView"},{"attributes":{},"id":"40726","type":"UndoTool"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40825"},"selection_policy":{"id":"40826"}},"id":"40786","type":"ColumnDataSource"},{"attributes":{},"id":"40819","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40775","type":"VBar"},{"attributes":{},"id":"40820","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40819"},"selection_policy":{"id":"40820"}},"id":"40768","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"40768"},"glyph":{"id":"40769"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40770"},"view":{"id":"40772"}},"id":"40771","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40769","type":"VBar"},{"attributes":{"toolbars":[{"id":"40697"},{"id":"40731"}],"tools":[{"id":"40687"},{"id":"40688"},{"id":"40689"},{"id":"40690"},{"id":"40691"},{"id":"40692"},{"id":"40693"},{"id":"40694"},{"id":"40721"},{"id":"40722"},{"id":"40723"},{"id":"40724"},{"id":"40725"},{"id":"40726"},{"id":"40727"},{"id":"40728"}]},"id":"40831","type":"ProxyToolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40770","type":"VBar"},{"attributes":{},"id":"40805","type":"UnionRenderers"},{"attributes":{},"id":"40690","type":"WheelZoomTool"},{"attributes":{},"id":"40804","type":"Selection"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"40763","type":"Span"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"40779","type":"Span"},{"attributes":{"toolbar":{"id":"40831"},"toolbar_location":"above"},"id":"40832","type":"ToolbarBox"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"40773","type":"Span"},{"attributes":{"source":{"id":"40758"}},"id":"40762","type":"CDSView"},{"attributes":{"ticks":[0,1,2,3]},"id":"40792","type":"FixedTicker"},{"attributes":{"data_source":{"id":"40758"},"glyph":{"id":"40759"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40760"},"view":{"id":"40762"}},"id":"40761","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"40695","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"40679"},"ticker":null},"id":"40682","type":"Grid"},{"attributes":{"source":{"id":"40768"}},"id":"40772","type":"CDSView"},{"attributes":{},"id":"40822","type":"UnionRenderers"},{"attributes":{},"id":"40688","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"40729","type":"BoxAnnotation"},{"attributes":{},"id":"40821","type":"Selection"},{"attributes":{},"id":"40687","type":"ResetTool"},{"attributes":{"axis":{"id":"40683"},"dimension":1,"ticker":null},"id":"40686","type":"Grid"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40747","type":"VBar"},{"attributes":{"source":{"id":"40740"}},"id":"40744","type":"CDSView"},{"attributes":{"source":{"id":"40774"}},"id":"40778","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40781","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40821"},"selection_policy":{"id":"40822"}},"id":"40774","type":"ColumnDataSource"},{"attributes":{},"id":"40807","type":"UnionRenderers"},{"attributes":{},"id":"40806","type":"Selection"},{"attributes":{"below":[{"id":"40713"}],"center":[{"id":"40716"},{"id":"40720"},{"id":"40773"},{"id":"40779"},{"id":"40785"},{"id":"40791"}],"height":331,"left":[{"id":"40717"}],"output_backend":"webgl","renderers":[{"id":"40771"},{"id":"40777"},{"id":"40783"},{"id":"40789"}],"title":{"id":"40794"},"toolbar":{"id":"40731"},"toolbar_location":null,"width":496,"x_range":{"id":"40671"},"x_scale":{"id":"40709"},"y_range":{"id":"40673"},"y_scale":{"id":"40711"}},"id":"40706","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"40774"},"glyph":{"id":"40775"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40776"},"view":{"id":"40778"}},"id":"40777","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"40687"},{"id":"40688"},{"id":"40689"},{"id":"40690"},{"id":"40691"},{"id":"40692"},{"id":"40693"},{"id":"40694"}]},"id":"40697","type":"Toolbar"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"40730","type":"PolyAnnotation"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"40745","type":"Span"},{"attributes":{},"id":"40797","type":"AllLabels"},{"attributes":{},"id":"40798","type":"BasicTickFormatter"},{"attributes":{},"id":"40824","type":"UnionRenderers"},{"attributes":{"children":[{"id":"40832"},{"id":"40830"}]},"id":"40833","type":"Column"},{"attributes":{},"id":"40823","type":"Selection"},{"attributes":{},"id":"40693","type":"SaveTool"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40802"},"selection_policy":{"id":"40803"}},"id":"40740","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40782","type":"VBar"},{"attributes":{},"id":"40809","type":"UnionRenderers"},{"attributes":{},"id":"40709","type":"LinearScale"},{"attributes":{},"id":"40808","type":"Selection"},{"attributes":{},"id":"40800","type":"AllLabels"},{"attributes":{},"id":"40801","type":"BasicTickFormatter"},{"attributes":{},"id":"40814","type":"AllLabels"},{"attributes":{"below":[{"id":"40679"}],"center":[{"id":"40682"},{"id":"40686"},{"id":"40745"},{"id":"40751"},{"id":"40757"},{"id":"40763"}],"height":331,"left":[{"id":"40683"}],"output_backend":"webgl","renderers":[{"id":"40743"},{"id":"40749"},{"id":"40755"},{"id":"40761"}],"title":{"id":"40766"},"toolbar":{"id":"40697"},"toolbar_location":null,"width":496,"x_range":{"id":"40671"},"x_scale":{"id":"40675"},"y_range":{"id":"40673"},"y_scale":{"id":"40677"}},"id":"40670","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"40696","type":"PolyAnnotation"},{"attributes":{},"id":"40815","type":"BasicTickFormatter"},{"attributes":{"text":"tau"},"id":"40766","type":"Title"},{"attributes":{"active_multi":null,"tools":[{"id":"40721"},{"id":"40722"},{"id":"40723"},{"id":"40724"},{"id":"40725"},{"id":"40726"},{"id":"40727"},{"id":"40728"}]},"id":"40731","type":"Toolbar"},{"attributes":{},"id":"40826","type":"UnionRenderers"},{"attributes":{},"id":"40680","type":"BasicTicker"},{"attributes":{},"id":"40825","type":"Selection"},{"attributes":{},"id":"40677","type":"LinearScale"},{"attributes":{},"id":"40675","type":"LinearScale"},{"attributes":{"children":[[{"id":"40670"},0,0],[{"id":"40706"},0,1]]},"id":"40830","type":"GridBox"},{"attributes":{},"id":"40671","type":"DataRange1d"},{"attributes":{"data_source":{"id":"40740"},"glyph":{"id":"40741"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40742"},"view":{"id":"40744"}},"id":"40743","type":"GlyphRenderer"},{"attributes":{},"id":"40817","type":"AllLabels"},{"attributes":{},"id":"40711","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40742","type":"VBar"},{"attributes":{},"id":"40818","type":"BasicTickFormatter"},{"attributes":{"ticks":[0,1,2,3]},"id":"40764","type":"FixedTicker"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"40751","type":"Span"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40801"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"40800"},"ticker":{"id":"40680"}},"id":"40679","type":"LinearAxis"},{"attributes":{},"id":"40673","type":"DataRange1d"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40798"},"major_label_policy":{"id":"40797"},"ticker":{"id":"40764"}},"id":"40683","type":"LinearAxis"}],"root_ids":["40833"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"cc505a4f-35e1-465f-bb65-377b73e274cf","root_ids":["40833"],"roots":{"40833":"1e07f206-5ee8-4ebe-981a-5b2c1da7bc8e"}}];
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