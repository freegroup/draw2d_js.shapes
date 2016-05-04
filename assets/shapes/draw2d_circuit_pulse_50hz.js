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
        shape = this.canvas.paper.path('M3.5 41.5L10.5,41.5L10.5,30.5L22.5,30.5L22.5,40.5L28.5,40.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M3.5 41.5L10.5,41.5L10.5,30.5L22.5,30.5L22.5,40.5L28.5,40.5');
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
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
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
draw2d_circuit_pulse_50hz.logic="// Generated Code for the Draw2D touch HTML5 lib\n//                                                        \n// http://www.draw2d.org                                  \n//                                                        \n// Go to the Designer http://www.draw2d.org               \n// to design your own shape or download user generated    \n//                                                        \nvar draw2d_circuit_pulse_50hz = draw2d.SetFigure.extend({            \n\n   NAME: \"draw2d_circuit_pulse_50hz\",\n\n   init:function(attr, setter, getter)\n   {\n     this._super( $.extend({stroke:0, bgColor:null, width:32,height:48.60950000000048},attr), setter, getter);\n     var port;\n     // circle\n     port = this.createPort(\"output\", new draw2d.layout.locator.XYRelPortLocator(105.2001953125, 69.8754358715884));\n     port.setConnectionDirection(1);\n     port.setBackgroundColor(\"#1C9BAB\");\n     port.setName(\"circle\");\n     port.setMaxFanOut(20);\n     this.persistPorts=false;\n   },\n\n   createShapeElement : function()\n   {\n      var shape = this._super();\n      this.originalWidth = 32;\n      this.originalHeight= 48.60950000000048;\n      return shape;\n   },\n\n   createSet: function()\n   {\n       this.canvas.paper.setStart();\n\n        // BoundingBox\n        shape = this.canvas.paper.path(\"M0,0 L32,0 L32,48.60950000000048 L0,48.60950000000048\");\n        shape.attr({\"stroke\":\"none\",\"stroke-width\":0,\"fill\":\"none\"});\n        shape.data(\"name\",\"BoundingBox\");\n        \n        // Rectangle\n        shape = this.canvas.paper.path(\'M1.6640625 18.60950000000048L31.6640625 18.60950000000048L31.6640625 48.60950000000048L1.6640625 48.60950000000048Z\');\n        shape.attr({\"stroke\":\"#303030\",\"stroke-width\":1,\"fill\":\"#FFFFFF\",\"opacity\":1});\n        shape.data(\"name\",\"Rectangle\");\n        \n        // Label\n        shape = this.canvas.paper.text(0,0,\'50Hz\');\n        shape.attr({\"x\":4,\"y\":11,\"text-anchor\":\"start\",\"text\":\"50Hz\",\"font-family\":\"\\\"Arial\\\"\",\"font-size\":10,\"stroke\":\"none\",\"fill\":\"#080808\",\"stroke-scale\":true,\"font-weight\":\"normal\",\"stroke-width\":0,\"opacity\":1});\n        shape.data(\"name\",\"Label\");\n        \n        // Line_shadow\n        shape = this.canvas.paper.path(\'M3.5 41.5L10.5,41.5L10.5,30.5L22.5,30.5L22.5,40.5L28.5,40.5\');\n        shape.attr({\"stroke-linecap\":\"round\",\"stroke-linejoin\":\"round\",\"stroke\":\"none\",\"stroke-width\":1,\"opacity\":1});\n        shape.data(\"name\",\"Line_shadow\");\n        \n        // Line\n        shape = this.canvas.paper.path(\'M3.5 41.5L10.5,41.5L10.5,30.5L22.5,30.5L22.5,40.5L28.5,40.5\');\n        shape.attr({\"stroke-linecap\":\"round\",\"stroke-linejoin\":\"round\",\"stroke\":\"#000000\",\"stroke-width\":1,\"opacity\":1});\n        shape.data(\"name\",\"Line\");\n        \n\n        return this.canvas.paper.setFinish();\n   },\n\n   applyAlpha: function()\n   {\n   },\n\n   layerGet: function(name, attributes)\n   {\n      var result=null;\n      this.svgNodes.some(function(shape){\n         if(shape.data(\"name\")===name){\n            result=shape;\n         }\n         return result!==null;\n      });\n\n      return result;\n   },\n\n   layerAttr: function(name, attributes)\n   {\n     this.svgNodes.forEach(function(shape){\n             if(shape.data(\"name\")===name){\n                  shape.attr(attributes);\n             }\n     });\n   },\n\n   layerShow: function(name, flag, duration)\n   {\n      if(duration){\n        this.svgNodes.forEach(function(node){\n            if(node.data(\"name\")===name){\n                if(flag){\n                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);\n                }\n                else{\n                    node.animate({ opacity : 0 }, duration, function () { this.hide() });\n                }\n            }\n        });\n      }\n      else{\n          this.svgNodes.forEach(function(node){\n              if(node.data(\"name\")===name){\n                   if(flag){node.show();}\n                   else{node.hide();}\n               }\n           });\n      }\n   },\n\n    calculate: function()\n    {\n    },\n\n    onStart: function()\n    {\n    },\n\n    onStop:function()\n    {\n    },\n\n    /**\n     * @method\n     */\n    addPort: function(port, locator)\n    {\n        this._super(port, locator);\n        return port;\n    },\n\n    /**\n     * @method\n     * Return an objects with all important attributes for XML or JSON serialization\n     *\n     * @returns {Object}\n     */\n    getPersistentAttributes : function()\n    {\n        var memento = this._super();\n\n        // add all decorations to the memento\n        //\n        memento.labels = [];\n        this.children.each(function(i,e){\n            var labelJSON = e.figure.getPersistentAttributes();\n            labelJSON.locator=e.locator.NAME;\n            memento.labels.push(labelJSON);\n        });\n\n        return memento;\n    },\n\n    /**\n     * @method\n     * Read all attributes from the serialized properties and transfer them into the shape.\n     *\n     * @param {Object} memento\n     * @returns\n     */\n    setPersistentAttributes : function(memento)\n    {\n        this._super(memento);\n\n        // remove all decorations created in the constructor of this element\n        //\n        this.resetChildren();\n\n        // and add all children of the JSON document.\n        //\n        $.each(memento.labels, $.proxy(function(i,json){\n            // create the figure stored in the JSON\n            var figure =  eval(\"new \"+json.type+\"()\");\n\n            // apply all attributes\n            figure.attr(json);\n\n            // instantiate the locator\n            var locator =  eval(\"new \"+json.locator+\"()\");\n\n            // add the new figure as child to this figure\n            this.add(figure, locator);\n        },this));\n    }\n});\n\n/**\n * by \'Draw2D Shape Designer\'\n *\n * Custom JS code to tweak the standard behaviour of the generated\n * shape. add your custome code and event handler here.\n *\n *\n */\ndraw2d_circuit_pulse_50hz = draw2d_circuit_pulse_50hz.extend({\n\n    init: function(attr, setter, getter){\n        this._super(attr, setter, getter);\n\n        this.attr({resizeable:false});\n        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());\n        this.hz = 50;\n        this.running=false;\n// only for test purpose        \n//        this.onStart();\n    },\n    \n    calculate:function()\n    {\n       this.getOutputPort(0).setValue(this.value);\n    },\n    \n    onStart:function()\n    {\n        var _this = this;\n        this.running=true;\n        var tick = function() {\n            setTimeout(function() {\n                if(_this.running){\n                    requestAnimationFrame(tick);\n                }\n                _this.value = !_this.value;\n            }, 1000 / _this.hz);\n        }\n        tick();\n    },\n    \n    onStop:function()\n    {\n        this.running = false;\n    }\n\n});";
draw2d_circuit_pulse_50hz.github="./shapes/org/draw2d/circuit/pulse/50hz.shape";
draw2d_circuit_pulse_50hz.markdown="# Clock Signal\n\nIn electronics and especially synchronous digital circuits, \na clock signal is a particular type of signal that \noscillates between a `high` and a `low` state and is \nutilized like a metronome to coordinate actions \nof digital circuits.\n\nThe hertz (symbol `Hz`) is the unit of frequency in the \nInternational System of Units (SI) and is defined as \none cycle per second. \n\nIt is named for Heinrich Rudolf Hertz, the first person \nto provide conclusive proof of the existence of \nelectromagnetic waves.\n\n";