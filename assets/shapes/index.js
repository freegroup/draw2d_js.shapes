// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_display_7Segment = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_display_7Segment",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:65,height:102},attr), setter, getter);
     var port;
     // port_a
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(4.13923076923031, 5.791568627451031));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_a");
     port.setMaxFanOut(20);
     // port_b
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(2.6007692307687718, 20.098039215686274));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_b");
     port.setMaxFanOut(20);
     // port_c
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.0623076923072334, 34.80392156862745));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_c");
     port.setMaxFanOut(20);
     // port_d
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.29307692307646416, 49.509803921568626));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_d");
     port.setMaxFanOut(20);
     // port_e
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.4761538461543051, 64.2156862745098));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_e");
     port.setMaxFanOut(20);
     // port_f
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-2.0146153846158437, 78.92156862745098));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_f");
     port.setMaxFanOut(20);
     // port_g
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-3.5530769230773824, 93.62745098039215));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_g");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 65;
      this.originalHeight= 102;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L65,0 L65,102 L0,102");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // circle
        shape = this.canvas.paper.path('M5.771330394834047,1.9966776925255942Q5.886561433060251,0 7.886561433060251, 1.538558276800327e-14L63,4.3936176811846085e-13Q65,4.547473508864641e-13 64.87993486650917, 1.9963928380260398L58.98567946409698,100.00360716197441Q58.86561433060615,102 56.86561433060615, 102L2,102Q0,102 0.11523103822620406, 100.0033223074744L5.771330394834047,1.9966776925255942');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","circle");
        
        // seg_a
        shape = this.canvas.paper.path('M18.483499999999367,7Q18.483499999999367,6 19.483499999999367, 6L53.48349999999937,6Q54.48349999999937,6 54.48349999999937, 7L54.48349999999937,11Q54.48349999999937,12 53.48349999999937, 12L19.483499999999367,12Q18.483499999999367,12 18.483499999999367, 11L18.483499999999367,7');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_a");
        
        // seg_b
        shape = this.canvas.paper.path('M55.616420692729506,14.497864311373519Q55.68174156295527,13.5 56.6807499014086, 13.544523473592088L59.5879916615462,13.67409246391073Q60.586999999999534,13.718615937502818 60.52123174129865, 14.716450861800148L58.55802669574469,44.50216507570267Q58.4922584370438,45.5 57.4922584370438, 45.5L54.586999999999534,45.5Q53.586999999999534,45.5 53.652320870225296, 44.50213568862648L55.616420692729506,14.497864311373519');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_b");
        
        // seg_c
        shape = this.canvas.paper.path('M52.71992069272967,57.99786431137352Q52.785241562955434,57 53.78424990140877, 57.044523473592086L56.691491661546365,57.17409246391073Q57.6904999999997,57.21861593750282 57.62473174129882, 58.21645086180015L55.661526695744854,88.00216507570266Q55.59575843704397,89 54.59575843704397, 89L51.6904999999997,89Q50.6904999999997,89 50.75582087022546, 88.00213568862648L52.71992069272967,57.99786431137352');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_c");
        
        // seg_d
        shape = this.canvas.paper.path('M13.190499999999702,93Q13.190499999999702,92 14.190499999999702, 92L48.1904999999997,92Q49.1904999999997,92 49.1904999999997, 93L49.1904999999997,97Q49.1904999999997,98 48.1904999999997, 98L14.190499999999702,98Q13.190499999999702,98 13.190499999999702, 97L13.190499999999702,93');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_d");
        
        // seg_e
        shape = this.canvas.paper.path('M9.219920692729675,57.99786431137352Q9.285241562955434,57 10.28424990140877, 57.044523473592086L13.191491661546365,57.17409246391073Q14.190499999999702,57.21861593750282 14.12473174129882, 58.21645086180015L12.16152669574485,88.00216507570266Q12.095758437043969,89 11.095758437043969, 89L8.190499999999702,89Q7.190499999999702,89 7.255820870225461, 88.00213568862648L9.219920692729675,57.99786431137352');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_e");
        
        // seg_f
        shape = this.canvas.paper.path('M11.654599822503915,15.40312862274709Q11.785241562955434,13.407400000000052 13.783258239862105, 13.496446947184229L14.69248332309303,13.536968990318694Q16.6904999999997,13.62601593750287 16.55896348259794, 15.621685786097526L14.727294954445732,43.41173015140539Q14.595758437043969,45.40740000000005 12.595758437043969, 45.40740000000005L11.690499999999702,45.40740000000005Q9.690499999999702,45.40740000000005 9.821141740451221, 43.411671377253015L11.654599822503915,15.40312862274709');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_f");
        
        // seg_g
        shape = this.canvas.paper.path('M16.086999999999534,49.5Q16.086999999999534,48.5 17.086999999999534, 48.5L51.086999999999534,48.5Q52.086999999999534,48.5 52.086999999999534, 49.5L52.086999999999534,53.5Q52.086999999999534,54.5 51.086999999999534, 54.5L17.086999999999534,54.5Q16.086999999999534,54.5 16.086999999999534, 53.5L16.086999999999534,49.5');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_g");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_display_7Segment = draw2d_circuit_display_7Segment.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        // ensure that the ports has the same order as the segments
        //
        this.portLockup = [];
        this.portLockup.push({ p:this.getPort("port_a"), s:"seg_a"});
        this.portLockup.push({ p:this.getPort("port_b"), s:"seg_b"});
        this.portLockup.push({ p:this.getPort("port_c"), s:"seg_c"});
        this.portLockup.push({ p:this.getPort("port_d"), s:"seg_d"});
        this.portLockup.push({ p:this.getPort("port_e"), s:"seg_e"});
        this.portLockup.push({ p:this.getPort("port_f"), s:"seg_f"});
        this.portLockup.push({ p:this.getPort("port_g"), s:"seg_g"});
        
    },
    
    calculate:function()
    {
        var _this = this;
        this.portLockup.forEach(function(element, index){
            _this.layerAttr(element.s, { fill:element.p.getValue()?"#C21B7A":null});
        });
    }

});
draw2d_circuit_display_7Segment.logic="calculate: function () {\n    var _this = this;\n    this.portLockup.forEach(function (element, index) {\n        _this.layerAttr(element.s, { fill: element.p.getValue() ? \'#C21B7A\' : null });\n    });\n}";
draw2d_circuit_display_7Segment.github="./shapes/org/draw2d/circuit/display/7Segment.shape";
draw2d_circuit_display_7Segment.markdown="";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_display_Led = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_display_Led",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:30,height:32},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-3.3333333333333335, 51.5625));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("Port");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 30;
      this.originalHeight= 32;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L30,0 L30,32 L0,32");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":15,"ry":16,"cx":15,"cy":16,"stroke":"#1B1B1B","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","circle");
        
        // Line_shadow
        shape = this.canvas.paper.path('M5.5221000000005915 5.682400000001508L15.138100000001486,16.49680000000035L24.75410000000238,27.31119999999919');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M5.5221000000005915 5.682400000001508L15.138100000001486,16.49680000000035L24.75410000000238,27.31119999999919');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M25.944300000000567 5.062700000001314L5.283199999999852,27.96369999999979');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M25.944300000000567 5.062700000001314L5.283199999999852,27.96369999999979');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"opacity":1});
        shape.data("name","Line");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_display_Led = draw2d_circuit_display_Led.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         this.attr({resizeable:false});
         this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
         var _this = this;
 
         this.getInputPort(0).on("change:value", function(emitter, event){
             _this._state(event.value);
         });
         
         this.on("added",function(){
            _this._state(false);
         });
    },
    
    _state:function(flag){
         if(flag){
             this.layerAttr("circle",{fill:"#C21B7A"});
         }
         else{
            this.layerAttr("circle",{fill:"#f0f0f0"});
         }
    }

});
draw2d_circuit_display_Led.logic="calculate: function () {\n}";
draw2d_circuit_display_Led.github="./shapes/org/draw2d/circuit/display/Led.shape";
draw2d_circuit_display_Led.markdown="# High / Low Signal display\n\nsimple `HIGH`/ `LOW` display.\n\n    HIGH -> red\n \n    LOW -> gray";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_flipflop_D_FlipFlop = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_flipflop_D_FlipFlop",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:41.5,height:53.69360000000006},attr), setter, getter);
     var port;
     // output_q
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(103.63403614457793, 20.281746800363283));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output_q");
     port.setMaxFanOut(20);
     // input_t
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-4.819277108433735, 79.03304583786486));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input_t");
     port.setMaxFanOut(20);
     // input_d
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-4.819277108433735, 20.281746800363283));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input_d");
     port.setMaxFanOut(20);
     // output_q_not
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(103.63403614457793, 79.03304583786486));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output_q_not");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 41.5;
      this.originalHeight= 53.69360000000006;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L41.5,0 L41.5,53.69360000000006 L0,53.69360000000006");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M1.5,2Q1.5,1 2.5, 1L40.5,1Q41.5,1 41.5, 2L41.5,50Q41.5,51 40.5, 51L2.5,51Q1.5,51 1.5, 50L1.5,2');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'D');
        shape.attr({"x":4,"y":11,"text-anchor":"start","text":"D","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Rectangle
        shape = this.canvas.paper.path('M1.5 37.12699999999995L13.541999999999916 42.03299999999899L1.5 47.38499999999976Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"none","opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'Q');
        shape.attr({"x":28.28125,"y":11.5,"text-anchor":"start","text":"Q","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'Q');
        shape.attr({"x":27.78125,"y":42.69360000000006,"text-anchor":"start","text":"Q","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M27.8479999999995 36.49839999999767L35.374799999999595,36.49839999999767');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M27.8479999999995 36.49839999999767L35.374799999999595,36.49839999999767');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"opacity":1});
        shape.data("name","Line");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_flipflop_D_FlipFlop = draw2d_circuit_flipflop_D_FlipFlop.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.last_t = false;
    },
    
    calculate:function()
    {
        var d = this.getInputPort("input_d").getValue();
        var t = this.getInputPort("input_t").getValue();
        
        var q = this.getOutputPort("output_q");
        var q_ = this.getOutputPort("output_q_not");
        
        var rising = this.last_t===false && t===true; 
        
        if(rising===true){
            q.setValue(d);
            q_.setValue(!d)
        }
        this.last_t = t;
    }
});
draw2d_circuit_flipflop_D_FlipFlop.logic="calculate: function () {\n    var d = this.getInputPort(\'input_d\').getValue();\n    var t = this.getInputPort(\'input_t\').getValue();\n    var q = this.getOutputPort(\'output_q\');\n    var q_ = this.getOutputPort(\'output_q_not\');\n    var rising = this.last_t === false && t === true;\n    if (rising === true) {\n        q.setValue(d);\n        q_.setValue(!d);\n    }\n    this.last_t = t;\n}";
draw2d_circuit_flipflop_D_FlipFlop.github="./shapes/org/draw2d/circuit/flipflop/D_FlipFlop.shape";
draw2d_circuit_flipflop_D_FlipFlop.markdown="# D-FlipFlop\n\n## Description\n\nThe D FlipFLop is widely used. It is also known as a \n*data* or *delay* flip-flop.\n\nThe D flip-flop captures the value of the `D` input \nat a definite portion of the clock cycle (such \nas the rising edge of the clock). That captured \nvalue becomes the `Q` output. At other times, the \noutput Q does not change. The `D flip-flop` \ncan be viewed as a memory cell, a zero-order hold, \nor a delay line.\n\n\n## Logic table\n\n| Clock        | D       |  **Q***next*   |\n|:------------:|:-------:|:----------:|\n| Rising edge  | Low     |  **Low**       |\n| Rising edge  | High    |  **High**      |\n| non rising   | *       |  **Q***last*   |\n\n";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_gate_AND = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_gate_AND",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:30,height:40},attr), setter, getter);
     var port;
     // input01
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-1.6666666666666667, 22.5));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input01");
     port.setMaxFanOut(20);
     // input02
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-1.6666666666666667, 77.5));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input02");
     port.setMaxFanOut(20);
     // out
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(104.42708333333334, 50));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("out");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 30;
      this.originalHeight= 40;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L30,0 L30,40 L0,40");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M0,3Q0,0 3, 0L27,0Q30,0 30, 3L30,37Q30,40 27, 40L3,40Q0,40 0, 37L0,3');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'&');
        shape.attr({"x":9,"y":21,"text-anchor":"start","text":"&","font-family":"\"Arial\"","font-size":20,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_gate_AND = draw2d_circuit_gate_AND.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({resizeable:false});
    },
    
    calculate:function()
    {
        var i1 = this.getInputPort(0);
        var i2 = this.getInputPort(1);
        var o1 = this.getOutputPort(0);
        
        o1.setValue(i1.getValue() & i2.getValue());
    }
});
draw2d_circuit_gate_AND.logic="calculate: function () {\n    var i1 = this.getInputPort(0);\n    var i2 = this.getInputPort(1);\n    var o1 = this.getOutputPort(0);\n    o1.setValue(i1.getValue() & i2.getValue());\n}";
draw2d_circuit_gate_AND.github="./shapes/org/draw2d/circuit/gate/AND.shape";
draw2d_circuit_gate_AND.markdown="# AND Gate\n\n## Description\nThe **AND** gate is a basic digital logic gate that implements logical conjunction - it behaves according to the truth table on the bottom.\n\nA HIGH output results only if both the inputs to the AND gate are HIGH. If neither or only one input to the AND gate is HIGH, a LOW output results. In another sense, the function of AND effectively finds the minimum between two binary digits, just as the OR function finds the maximum.\n\n\n**Therefore, the output is always 0 except when all the inputs are 1.**\n\n## Logic table\n\n| INPUT 1   | INPUT   |  OUTPUT    |\n|:---------:|:-------:|:----------:|\n| Low       | Low     |  Low       |\n| High      | Low     |  Low       |\n| Low       | High    |  Low       |\n| High      | High    |  `High`    |\n\n";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_gate_NAND = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_gate_NAND",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:41,height:40},attr), setter, getter);
     var port;
     // input01
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0, 20));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input01");
     port.setMaxFanOut(20);
     // input02
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0, 80));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input02");
     port.setMaxFanOut(20);
     // output
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.4390243902439, 48.75));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 41;
      this.originalHeight= 40;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L41,0 L41,40 L0,40");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M0,3Q0,0 3, 0L27,0Q30,0 30, 3L30,37Q30,40 27, 40L3,40Q0,40 0, 37L0,3');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'&');
        shape.attr({"x":9,"y":21,"text-anchor":"start","text":"&","font-family":"\"Arial\"","font-size":20,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":6,"ry":6,"cx":35,"cy":19.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Circle");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_gate_NAND = draw2d_circuit_gate_NAND.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({resizeable:false});
    },
    
    calculate:function()
    {
        var i1 = this.getInputPort(0);
        var i2 = this.getInputPort(1);
        var o1 = this.getOutputPort(0);
        
        o1.setValue(!(i1.getValue() & i2.getValue()));
    }
});
draw2d_circuit_gate_NAND.logic="calculate: function () {\n    var i1 = this.getInputPort(0);\n    var i2 = this.getInputPort(1);\n    var o1 = this.getOutputPort(0);\n    o1.setValue(!(i1.getValue() & i2.getValue()));\n}";
draw2d_circuit_gate_NAND.github="./shapes/org/draw2d/circuit/gate/NAND.shape";
draw2d_circuit_gate_NAND.markdown="# AND Gate\n\n## Description\nThe **AND** gate is a basic digital logic gate that implements logical conjunction - it behaves according to the truth table on the bottom.\n\nA HIGH output results only if both the inputs to the AND gate are HIGH. If neither or only one input to the AND gate is HIGH, a LOW output results. In another sense, the function of AND effectively finds the minimum between two binary digits, just as the OR function finds the maximum.\n\n\n**Therefore, the output is always 0 except when all the inputs are 1.**\n\n## Logic table\n\n| INPUT 1   | INPUT   |  OUTPUT    |\n|:---------:|:-------:|:----------:|\n| Low       | Low     |  Low       |\n| High      | Low     |  Low       |\n| Low       | High    |  Low       |\n| High      | High    |  `High`    |\n\n";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_gate_NOR = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_gate_NOR",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:40,height:40},attr), setter, getter);
     var port;
     // input01
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0, 20));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input01");
     port.setMaxFanOut(20);
     // input02
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-2.5, 80));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input02");
     port.setMaxFanOut(20);
     // output
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.5, 51.25));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 40;
      this.originalHeight= 40;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L40,0 L40,40 L0,40");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M0,3Q0,0 3, 0L27,0Q30,0 30, 3L30,37Q30,40 27, 40L3,40Q0,40 0, 37L0,3');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'>1');
        shape.attr({"x":4,"y":21,"text-anchor":"start","text":">1","font-family":"\"Arial\"","font-size":20,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":6,"ry":6,"cx":34,"cy":20.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#FCFFFF","opacity":1});
        shape.data("name","Circle");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_gate_NOR = draw2d_circuit_gate_NOR.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({resizeable:false});
    },
    
    calculate:function()
    {
        var i1 = this.getInputPort(0);
        var i2 = this.getInputPort(1);
        var o1 = this.getOutputPort(0);
        
        o1.setValue(!(i1.getValue() | i2.getValue));
    }
});
draw2d_circuit_gate_NOR.logic="calculate: function () {\n    var i1 = this.getInputPort(0);\n    var i2 = this.getInputPort(1);\n    var o1 = this.getOutputPort(0);\n    o1.setValue(!(i1.getValue() | i2.getValue));\n}";
draw2d_circuit_gate_NOR.github="./shapes/org/draw2d/circuit/gate/NOR.shape";
draw2d_circuit_gate_NOR.markdown="# AND Gate\n\n## Description\nThe **AND** gate is a basic digital logic gate that implements logical conjunction - it behaves according to the truth table on the bottom.\n\nA HIGH output results only if both the inputs to the AND gate are HIGH. If neither or only one input to the AND gate is HIGH, a LOW output results. In another sense, the function of AND effectively finds the minimum between two binary digits, just as the OR function finds the maximum.\n\n\n**Therefore, the output is always 0 except when all the inputs are 1.**\n\n## Logic table\n\n| INPUT 1   | INPUT   |  OUTPUT    |\n|:---------:|:-------:|:----------:|\n| Low       | Low     |  Low       |\n| High      | Low     |  Low       |\n| Low       | High    |  Low       |\n| High      | High    |  `High`    |\n\n";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_gate_NOT = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_gate_NOT",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:40,height:42.5},attr), setter, getter);
     var port;
     // input01
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0, 54.11764705882353));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input01");
     port.setMaxFanOut(20);
     // output
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.5, 54.11764705882353));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 40;
      this.originalHeight= 42.5;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L40,0 L40,42.5 L0,42.5");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M0,5.5Q0,2.5 3, 2.5L27,2.5Q30,2.5 30, 5.5L30,39.5Q30,42.5 27, 42.5L3,42.5Q0,42.5 0, 39.5L0,5.5');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'1');
        shape.attr({"x":10,"y":16,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":20,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":6,"ry":6,"cx":34,"cy":23,"stroke":"#1B1B1B","stroke-width":1,"fill":"#FCFFFF","opacity":1});
        shape.data("name","Circle");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_gate_NOT = draw2d_circuit_gate_NOT.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({resizeable:false});
    },
    
    calculate:function()
    {
        var i1 = this.getInputPort(0);
        var o1 = this.getOutputPort(0);
        
        o1.setValue(!i1.getValue());
    }
});
draw2d_circuit_gate_NOT.logic="calculate: function () {\n    var i1 = this.getInputPort(0);\n    var o1 = this.getOutputPort(0);\n    o1.setValue(!i1.getValue());\n}";
draw2d_circuit_gate_NOT.github="./shapes/org/draw2d/circuit/gate/NOT.shape";
draw2d_circuit_gate_NOT.markdown="# NOT Gate\n\n## Description\nIn digital logic, an inverter or `NOT gate` is a logic \ngate which implements logical negation.\n\n\n## Logic table\n\n| INPUT   |  OUTPUT    |\n|:-------:|:----------:|\n| Low     |  High      |\n| High    |  Low       |\n\n";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_gate_OR = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_gate_OR",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:31,height:40},attr), setter, getter);
     var port;
     // input01
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-3.225806451612903, 22.5));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input01");
     port.setMaxFanOut(20);
     // input02
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-3.225806451612903, 78.75));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input02");
     port.setMaxFanOut(20);
     // output
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(116.12903225806451, 50));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("output");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 31;
      this.originalHeight= 40;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L31,0 L31,40 L0,40");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M0,3Q0,0 3, 0L27,0Q30,0 30, 3L30,37Q30,40 27, 40L3,40Q0,40 0, 37L0,3');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'>1');
        shape.attr({"x":4,"y":20.5,"text-anchor":"start","text":">1","font-family":"\"Arial\"","font-size":20,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_gate_OR = draw2d_circuit_gate_OR.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({resizeable:false});
    },
    
    calculate:function()
    {
        var i1 = this.getInputPort(0);
        var i2 = this.getInputPort(1);
        var o1 = this.getOutputPort(0);
        
        o1.setValue(i1.getValue() | i2.getValue());
    }
});
draw2d_circuit_gate_OR.logic="calculate: function () {\n    var i1 = this.getInputPort(0);\n    var i2 = this.getInputPort(1);\n    var o1 = this.getOutputPort(0);\n    o1.setValue(i1.getValue() | i2.getValue());\n}";
draw2d_circuit_gate_OR.github="./shapes/org/draw2d/circuit/gate/OR.shape";
draw2d_circuit_gate_OR.markdown="# AND Gate\n\n## Description\nThe **AND** gate is a basic digital logic gate that implements logical conjunction - it behaves according to the truth table on the bottom.\n\nA HIGH output results only if both the inputs to the AND gate are HIGH. If neither or only one input to the AND gate is HIGH, a LOW output results. In another sense, the function of AND effectively finds the minimum between two binary digits, just as the OR function finds the maximum.\n\n\n**Therefore, the output is always 0 except when all the inputs are 1.**\n\n## Logic table\n\n| INPUT 1   | INPUT   |  OUTPUT    |\n|:---------:|:-------:|:----------:|\n| Low       | Low     |  Low       |\n| High      | Low     |  Low       |\n| Low       | High    |  Low       |\n| High      | High    |  `High`    |\n\n";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_pulse_10hz = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_pulse_10hz",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:33.671875,height:49.5},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(104.45475638051043, 69.67272727272693));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("Port");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 33.671875;
      this.originalHeight= 49.5;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L33.671875,0 L33.671875,49.5 L0,49.5");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M33.671875 49.5L3.671875 49.5L3.671875 19.5L33.671875 19.5Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'10Hz');
        shape.attr({"x":4,"y":11,"text-anchor":"start","text":"10Hz","font-family":"\"Arial\"","font-size":11,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M6.119575000000168 41.672399999999925L13.426774999999907,41.672399999999925L13.426774999999907,28.884799999999814L24.387574999999742,28.884799999999814L24.387574999999742,41.21569999999974L30.324674999999843,41.21569999999974');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M6.119575000000168 41.672399999999925L13.426774999999907,41.672399999999925L13.426774999999907,28.884799999999814L24.387574999999742,28.884799999999814L24.387574999999742,41.21569999999974L30.324674999999843,41.21569999999974');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"opacity":1});
        shape.data("name","Line");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_pulse_10hz = draw2d_circuit_pulse_10hz.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
        this.hz = 10;
        this.running=false;
// only for test purpose        
//        this.onStart();
    },
    
    calculate:function()
    {
       this.getOutputPort(0).setValue(this.value);
    },
    
    onStart:function()
    {
        var _this = this;
        this.running=true;
        var tick = function() {
            setTimeout(function() {
                if(_this.running){
                    requestAnimationFrame(tick);
                }
                _this.value = !_this.value;
            }, 1000 / _this.hz);
        }
        tick();
    },
    
    onStop:function()
    {
        this.running = false;
    }

});
draw2d_circuit_pulse_10hz.logic="calculate: function () {\n    this.getOutputPort(0).setValue(this.value);\n}";
draw2d_circuit_pulse_10hz.github="./shapes/org/draw2d/circuit/pulse/10hz.shape";
draw2d_circuit_pulse_10hz.markdown="# Clock Signal\n\nIn electronics and especially synchronous digital circuits, \na clock signal is a particular type of signal that \noscillates between a `high` and a `low` state and is \nutilized like a metronome to coordinate actions \nof digital circuits.\n\nThe hertz (symbol `Hz`) is the unit of frequency in the \nInternational System of Units (SI) and is defined as \none cycle per second. \n\nIt is named for Heinrich Rudolf Hertz, the first person \nto provide conclusive proof of the existence of \nelectromagnetic waves.";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_pulse_50hz = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_pulse_50hz",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:32,height:48.60950000000048},attr), setter, getter);
     var port;
     // circle
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(105.2001953125, 69.8754358715884));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("circle");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 32;
      this.originalHeight= 48.60950000000048;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L32,0 L32,48.60950000000048 L0,48.60950000000048");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M1.6640625 18.60950000000048L31.6640625 18.60950000000048L31.6640625 48.60950000000048L1.6640625 48.60950000000048Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'50Hz');
        shape.attr({"x":4,"y":11,"text-anchor":"start","text":"50Hz","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M3.393662499999664 41.239300000000185L10.575662499999908,41.239300000000185L10.575662499999908,30.979299999999967L22.066862499999843,30.979299999999967L22.066862499999843,40.828899999999976L28.6332625,40.828899999999976');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M3.393662499999664 41.239300000000185L10.575662499999908,41.239300000000185L10.575662499999908,30.979299999999967L22.066862499999843,30.979299999999967L22.066862499999843,40.828899999999976L28.6332625,40.828899999999976');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"opacity":1});
        shape.data("name","Line");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_pulse_50hz = draw2d_circuit_pulse_50hz.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
        this.hz = 50;
        this.running=false;
// only for test purpose        
//        this.onStart();
    },
    
    calculate:function()
    {
       this.getOutputPort(0).setValue(this.value);
    },
    
    onStart:function()
    {
        var _this = this;
        this.running=true;
        var tick = function() {
            setTimeout(function() {
                if(_this.running){
                    requestAnimationFrame(tick);
                }
                _this.value = !_this.value;
            }, 1000 / _this.hz);
        }
        tick();
    },
    
    onStop:function()
    {
        this.running = false;
    }

});
draw2d_circuit_pulse_50hz.logic="calculate: function () {\n    this.getOutputPort(0).setValue(this.value);\n}";
draw2d_circuit_pulse_50hz.github="./shapes/org/draw2d/circuit/pulse/50hz.shape";
draw2d_circuit_pulse_50hz.markdown="# Clock Signal\n\nIn electronics and especially synchronous digital circuits, \na clock signal is a particular type of signal that \noscillates between a `high` and a `low` state and is \nutilized like a metronome to coordinate actions \nof digital circuits.\n\nThe hertz (symbol `Hz`) is the unit of frequency in the \nInternational System of Units (SI) and is defined as \none cycle per second. \n\nIt is named for Heinrich Rudolf Hertz, the first person \nto provide conclusive proof of the existence of \nelectromagnetic waves.\n\n";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_switch_HighLow = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_switch_HighLow",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:42,height:43.5},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(98.80952380952381, 51.72413793103448));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 42;
      this.originalHeight= 43.5;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L42,0 L42,43.5 L0,43.5");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Label
        shape = this.canvas.paper.text(0,0,'1');
        shape.attr({"x":4.5,"y":11,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":11,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'0');
        shape.attr({"x":4,"y":32.5,"text-anchor":"start","text":"0","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":3,"ry":3.5,"cx":39,"cy":22.5,"stroke":"none","stroke-width":0,"fill":"#000000","opacity":1});
        shape.data("name","Circle");
        
        // high_shadow
        shape = this.canvas.paper.path('M39.298300000000836 22.446912500003236L13.857399999999416,11.09151250000059');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"opacity":1});
        shape.data("name","high_shadow");
        
        // high
        shape = this.canvas.paper.path('M39.298300000000836 22.446912500003236L13.857399999999416,11.09151250000059');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":2,"opacity":1});
        shape.data("name","high");
        
        // low_shadow
        shape = this.canvas.paper.path('M38.75319999999738 22.708312500000375L13.644500000000335,32.351312499998585');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"opacity":1});
        shape.data("name","low_shadow");
        
        // low
        shape = this.canvas.paper.path('M38.75319999999738 22.708312500000375L13.644500000000335,32.351312499998585');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":2,"opacity":1});
        shape.data("name","low");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_switch_HighLow = draw2d_circuit_switch_HighLow.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);
        var _this = this;

        this.attr({resizeable:false});
        
        this.value = false;
        this.on("click",function(){            
            _this.value = !_this.value;
            _this.layerShow("low" , !_this.value, 100);
            _this.layerShow("high",  _this.value, 100);
            _this.getOutputPort(0).setValue(_this.value);
        });

        this.on("added",function(){
            _this.layerShow("low" , !_this.value);
            _this.layerShow("high",  _this.value);
            _this.getOutputPort(0).setValue(_this.value);
        });
    },
    
    calculate: function()
    {
        // do nothing per default;
    }

});
draw2d_circuit_switch_HighLow.logic="calculate: function () {\n}";
draw2d_circuit_switch_HighLow.github="./shapes/org/draw2d/circuit/switch/HighLow.shape";
draw2d_circuit_switch_HighLow.markdown="";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_switch_HighLowArray = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_switch_HighLowArray",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:20,height:160},attr), setter, getter);
     var port;
     // port01
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 6.24381249999999));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port01");
     port.setMaxFanOut(20);
     // port02
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 19.375));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port02");
     port.setMaxFanOut(20);
     // port03
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 31.25));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port03");
     port.setMaxFanOut(20);
     // port04
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 43.75));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port04");
     port.setMaxFanOut(20);
     // port05
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 56.122437500000046));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port05");
     port.setMaxFanOut(20);
     // port06
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 68.72787499999987));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port06");
     port.setMaxFanOut(20);
     // port07
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 81.1621875000003));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port07");
     port.setMaxFanOut(20);
     // port08
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 93.93256250000007));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port08");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 20;
      this.originalHeight= 160;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L20,0 L20,160 L0,160");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // rect01
        shape = this.canvas.paper.path('M20 20L0 20L0 0L20 0Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","rect01");
        
        // rect02
        shape = this.canvas.paper.path('M20 40L0 40L0 20L20 20Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","rect02");
        
        // rect03
        shape = this.canvas.paper.path('M20 60L0 60L0 40L20 40Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","rect03");
        
        // rect04
        shape = this.canvas.paper.path('M20 80L0 80L0 60L20 60Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","rect04");
        
        // rect05
        shape = this.canvas.paper.path('M20 100L0 100L0 80L20 80Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","rect05");
        
        // rect06
        shape = this.canvas.paper.path('M20 120L0 120L0 100L20 100Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","rect06");
        
        // rect07
        shape = this.canvas.paper.path('M20 140L0 140L0 120L20 120Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","rect07");
        
        // rect08
        shape = this.canvas.paper.path('M20 160L0 160L0 140L20 140Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","rect08");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_switch_HighLowArray = draw2d_circuit_switch_HighLowArray.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);


        this.setResizeable(false);
        
        this.on("click",function(emitter, event){
            var h = emitter.getHeight();
            var modh = h/8;
            var index = (event.relY/modh)|0;
            var port = emitter.getOutputPort(index);
            port.setValue(!port.getValue());
            emitter.layerAttr("rect0"+(index+1), {fill:port.getValue()?"#C21B7A":null});
        });
    },
    
    calculate: function()
    {
    
        
    }

});
draw2d_circuit_switch_HighLowArray.logic="calculate: function () {\n}";
draw2d_circuit_switch_HighLowArray.github="./shapes/org/draw2d/circuit/switch/HighLowArray.shape";
draw2d_circuit_switch_HighLowArray.markdown="";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_switch_PushButton = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_switch_PushButton",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:45.35582499999964,height:27.483999999999924},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(107.32450021579413, 87.26531800320183));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 45.35582499999964;
      this.originalHeight= 27.483999999999924;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L45.35582499999964,0 L45.35582499999964,27.483999999999924 L0,27.483999999999924");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Label
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":4.5,"ry":4,"cx":4.5,"cy":22.983999999999924,"stroke":"none","stroke-width":0,"fill":"#000000","opacity":1});
        shape.data("name","Label");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":4.5,"ry":4,"cx":27.5,"cy":23.483999999999924,"stroke":"none","stroke-width":0,"fill":"#000000","opacity":1});
        shape.data("name","Circle");
        
        // low
        shape = this.canvas.paper.path('M26.125825000000077,8.735999999999876Q24.125825000000077,8.735999999999876 24.125825000000077, 6.735999999999876L24.125825000000077,2Q24.125825000000077,0 22.125825000000077, 0L11.125825000000077,0Q9.125825000000077,0 9.125825000000077, 2L9.125825000000077,6.735999999999876Q9.125825000000077,8.735999999999876 7.125825000000077, 8.735999999999876L2.2994250000001557,8.735999999999876Q0.2994250000001557,8.735999999999876 0.2994250000001557, 10.735999999999876L0.2994250000001557,11.735999999999876Q0.2994250000001557,13.735999999999876 2.2994250000001557, 13.735999999999876L30.299425000000156,13.735999999999876Q32.299425000000156,13.735999999999876 32.299425000000156, 11.735999999999876L32.299425000000156,10.735999999999876Q32.299425000000156,8.735999999999876 30.299425000000156, 8.735999999999876L26.125825000000077,8.735999999999876');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","low");
        
        // high
        shape = this.canvas.paper.path('M22.31382500000018,16.235999999999876Q20.50182500000028,16.235999999999876 21.26817190867477, 14.388647187036133L23.359478091325588,9.347352812963743Q24.125825000000077,7.5 22.125825000000077, 7.5L11.125825000000077,7.5Q9.125825000000077,7.5 9.62777239007231, 9.435987814424376L10.888877609927716,14.3000121855755Q11.39082499999995,16.235999999999876 9.39082499999995, 16.235999999999876L2.2994250000001557,16.235999999999876Q0.2994250000001557,16.235999999999876 0.2994250000001557, 18.235999999999876L0.2994250000001557,19.235999999999876Q0.2994250000001557,21.235999999999876 2.2994250000001557, 21.235999999999876L30.299425000000156,21.235999999999876Q32.299425000000156,21.235999999999876 32.299425000000156, 19.235999999999876L32.299425000000156,18.235999999999876Q32.299425000000156,16.235999999999876 30.299425000000156, 16.235999999999876L26.125825000000077,16.235999999999876Q24.125825000000077,16.235999999999876 22.31382500000018, 16.235999999999876L22.31382500000018,16.235999999999876');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","high");
        
        // Line_shadow
        shape = this.canvas.paper.path('M30.043224999999893 23.936999999999443L37.69952499999954,23.936999999999443L45.35582499999964,23.936999999999443');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M30.043224999999893 23.936999999999443L37.69952499999954,23.936999999999443L45.35582499999964,23.936999999999443');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":2,"opacity":1});
        shape.data("name","Line");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_switch_PushButton = draw2d_circuit_switch_PushButton.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);


        this.setResizeable(false);
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
        
        var _this = this;
        
        this.value = false;
        this.on("mousedown",function(){            
            _this.layerShow("low" , false, 100);
            _this.layerShow("high", true, 100);
            _this.getOutputPort(0).setValue(true);
        });
        this.on("mouseup",function(){            
            _this.value = !_this.value;
            _this.layerShow("low" , true, 100);
            _this.layerShow("high", false, 100);
            _this.getOutputPort(0).setValue(false);
        });

        this.on("added",function(){
            _this.layerShow("low" , true);
            _this.layerShow("high", false);
            _this.getOutputPort(0).setValue(false);
        });
    },
    
    calculate: function()
    {
        // do nothing per default;
    }

});
draw2d_circuit_switch_PushButton.logic="calculate: function () {\n}";
draw2d_circuit_switch_PushButton.github="./shapes/org/draw2d/circuit/switch/PushButton.shape";
draw2d_circuit_switch_PushButton.markdown="# Push Button\n\ntoggles the output if the user press \nthe mouse button down in the simulation mode.";