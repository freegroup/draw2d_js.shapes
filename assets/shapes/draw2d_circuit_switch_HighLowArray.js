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
draw2d_circuit_switch_HighLowArray = draw2d_circuit_switch_HighLowArray.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);


        this.setResizeable(false);
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

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
draw2d_circuit_switch_HighLowArray.logic="// Generated Code for the Draw2D touch HTML5 lib\n//                                                        \n// http://www.draw2d.org                                  \n//                                                        \n// Go to the Designer http://www.draw2d.org               \n// to design your own shape or download user generated    \n//                                                        \nvar draw2d_circuit_switch_HighLowArray = draw2d.SetFigure.extend({            \n\n   NAME: \"draw2d_circuit_switch_HighLowArray\",\n\n   init:function(attr, setter, getter)\n   {\n     this._super( $.extend({stroke:0, bgColor:null, width:20,height:160},attr), setter, getter);\n     var port;\n     // port01\n     port = this.createPort(\"output\", new draw2d.layout.locator.XYRelPortLocator(120, 6.24381249999999));\n     port.setConnectionDirection(1);\n     port.setBackgroundColor(\"#37B1DE\");\n     port.setName(\"port01\");\n     port.setMaxFanOut(20);\n     // port02\n     port = this.createPort(\"output\", new draw2d.layout.locator.XYRelPortLocator(120, 19.375));\n     port.setConnectionDirection(1);\n     port.setBackgroundColor(\"#37B1DE\");\n     port.setName(\"port02\");\n     port.setMaxFanOut(20);\n     // port03\n     port = this.createPort(\"output\", new draw2d.layout.locator.XYRelPortLocator(120, 31.25));\n     port.setConnectionDirection(1);\n     port.setBackgroundColor(\"#37B1DE\");\n     port.setName(\"port03\");\n     port.setMaxFanOut(20);\n     // port04\n     port = this.createPort(\"output\", new draw2d.layout.locator.XYRelPortLocator(120, 43.75));\n     port.setConnectionDirection(1);\n     port.setBackgroundColor(\"#37B1DE\");\n     port.setName(\"port04\");\n     port.setMaxFanOut(20);\n     // port05\n     port = this.createPort(\"output\", new draw2d.layout.locator.XYRelPortLocator(120, 56.122437500000046));\n     port.setConnectionDirection(1);\n     port.setBackgroundColor(\"#37B1DE\");\n     port.setName(\"port05\");\n     port.setMaxFanOut(20);\n     // port06\n     port = this.createPort(\"output\", new draw2d.layout.locator.XYRelPortLocator(120, 68.72787499999987));\n     port.setConnectionDirection(1);\n     port.setBackgroundColor(\"#37B1DE\");\n     port.setName(\"port06\");\n     port.setMaxFanOut(20);\n     // port07\n     port = this.createPort(\"output\", new draw2d.layout.locator.XYRelPortLocator(120, 81.1621875000003));\n     port.setConnectionDirection(1);\n     port.setBackgroundColor(\"#37B1DE\");\n     port.setName(\"port07\");\n     port.setMaxFanOut(20);\n     // port08\n     port = this.createPort(\"output\", new draw2d.layout.locator.XYRelPortLocator(120, 93.93256250000007));\n     port.setConnectionDirection(1);\n     port.setBackgroundColor(\"#37B1DE\");\n     port.setName(\"port08\");\n     port.setMaxFanOut(20);\n     this.persistPorts=false;\n   },\n\n   createShapeElement : function()\n   {\n      var shape = this._super();\n      this.originalWidth = 20;\n      this.originalHeight= 160;\n      return shape;\n   },\n\n   createSet: function()\n   {\n       this.canvas.paper.setStart();\n\n        // BoundingBox\n        shape = this.canvas.paper.path(\"M0,0 L20,0 L20,160 L0,160\");\n        shape.attr({\"stroke\":\"none\",\"stroke-width\":0,\"fill\":\"none\"});\n        shape.data(\"name\",\"BoundingBox\");\n        \n        // rect01\n        shape = this.canvas.paper.path(\'M20 20L0 20L0 0L20 0Z\');\n        shape.attr({\"stroke\":\"#303030\",\"stroke-width\":1,\"fill\":\"#FFFFFF\",\"opacity\":1});\n        shape.data(\"name\",\"rect01\");\n        \n        // rect02\n        shape = this.canvas.paper.path(\'M20 40L0 40L0 20L20 20Z\');\n        shape.attr({\"stroke\":\"#303030\",\"stroke-width\":1,\"fill\":\"#FFFFFF\",\"opacity\":1});\n        shape.data(\"name\",\"rect02\");\n        \n        // rect03\n        shape = this.canvas.paper.path(\'M20 60L0 60L0 40L20 40Z\');\n        shape.attr({\"stroke\":\"#303030\",\"stroke-width\":1,\"fill\":\"#FFFFFF\",\"opacity\":1});\n        shape.data(\"name\",\"rect03\");\n        \n        // rect04\n        shape = this.canvas.paper.path(\'M20 80L0 80L0 60L20 60Z\');\n        shape.attr({\"stroke\":\"#303030\",\"stroke-width\":1,\"fill\":\"#FFFFFF\",\"opacity\":1});\n        shape.data(\"name\",\"rect04\");\n        \n        // rect05\n        shape = this.canvas.paper.path(\'M20 100L0 100L0 80L20 80Z\');\n        shape.attr({\"stroke\":\"#303030\",\"stroke-width\":1,\"fill\":\"#FFFFFF\",\"opacity\":1});\n        shape.data(\"name\",\"rect05\");\n        \n        // rect06\n        shape = this.canvas.paper.path(\'M20 120L0 120L0 100L20 100Z\');\n        shape.attr({\"stroke\":\"#303030\",\"stroke-width\":1,\"fill\":\"#FFFFFF\",\"opacity\":1});\n        shape.data(\"name\",\"rect06\");\n        \n        // rect07\n        shape = this.canvas.paper.path(\'M20 140L0 140L0 120L20 120Z\');\n        shape.attr({\"stroke\":\"#303030\",\"stroke-width\":1,\"fill\":\"#FFFFFF\",\"opacity\":1});\n        shape.data(\"name\",\"rect07\");\n        \n        // rect08\n        shape = this.canvas.paper.path(\'M20 160L0 160L0 140L20 140Z\');\n        shape.attr({\"stroke\":\"#303030\",\"stroke-width\":1,\"fill\":\"#FFFFFF\",\"opacity\":1});\n        shape.data(\"name\",\"rect08\");\n        \n\n        return this.canvas.paper.setFinish();\n   },\n\n   applyAlpha: function()\n   {\n   },\n\n   layerGet: function(name, attributes)\n   {\n      var result=null;\n      this.svgNodes.some(function(shape){\n         if(shape.data(\"name\")===name){\n            result=shape;\n         }\n         return result!==null;\n      });\n\n      return result;\n   },\n\n   layerAttr: function(name, attributes)\n   {\n     this.svgNodes.forEach(function(shape){\n             if(shape.data(\"name\")===name){\n                  shape.attr(attributes);\n             }\n     });\n   },\n\n   layerShow: function(name, flag, duration)\n   {\n      if(duration){\n        this.svgNodes.forEach(function(node){\n            if(node.data(\"name\")===name){\n                if(flag){\n                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);\n                }\n                else{\n                    node.animate({ opacity : 0 }, duration, function () { this.hide() });\n                }\n            }\n        });\n      }\n      else{\n          this.svgNodes.forEach(function(node){\n              if(node.data(\"name\")===name){\n                   if(flag){node.show();}\n                   else{node.hide();}\n               }\n           });\n      }\n   },\n\n    calculate: function()\n    {\n    },\n\n    onStart: function()\n    {\n    },\n\n    onStop:function()\n    {\n    },\n\n    /**\n     * @method\n     */\n    addPort: function(port, locator)\n    {\n        this._super(port, locator);\n        return port;\n    },\n\n    /**\n     * @method\n     * Return an objects with all important attributes for XML or JSON serialization\n     *\n     * @returns {Object}\n     */\n    getPersistentAttributes : function()\n    {\n        var memento = this._super();\n\n        // add all decorations to the memento\n        //\n        memento.labels = [];\n        this.children.each(function(i,e){\n            var labelJSON = e.figure.getPersistentAttributes();\n            labelJSON.locator=e.locator.NAME;\n            memento.labels.push(labelJSON);\n        });\n\n        return memento;\n    },\n\n    /**\n     * @method\n     * Read all attributes from the serialized properties and transfer them into the shape.\n     *\n     * @param {Object} memento\n     * @returns\n     */\n    setPersistentAttributes : function(memento)\n    {\n        this._super(memento);\n\n        // remove all decorations created in the constructor of this element\n        //\n        this.resetChildren();\n\n        // and add all children of the JSON document.\n        //\n        $.each(memento.labels, $.proxy(function(i,json){\n            // create the figure stored in the JSON\n            var figure =  eval(\"new \"+json.type+\"()\");\n\n            // apply all attributes\n            figure.attr(json);\n\n            // instantiate the locator\n            var locator =  eval(\"new \"+json.locator+\"()\");\n\n            // add the new figure as child to this figure\n            this.add(figure, locator);\n        },this));\n    }\n});\n\n/**\n * by \'Draw2D Shape Designer\'\n *\n * Custom JS code to tweak the standard behaviour of the generated\n * shape. add your custome code and event handler here.\n *\n *\n */\ndraw2d_circuit_switch_HighLowArray = draw2d_circuit_switch_HighLowArray.extend({\n\n    init: function(attr, setter, getter){\n         this._super(attr, setter, getter);\n\n\n        this.setResizeable(false);\n        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());\n\n        this.on(\"click\",function(emitter, event){\n            var h = emitter.getHeight();\n            var modh = h/8;\n            var index = (event.relY/modh)|0;\n            var port = emitter.getOutputPort(index);\n            port.setValue(!port.getValue());\n            emitter.layerAttr(\"rect0\"+(index+1), {fill:port.getValue()?\"#C21B7A\":null});\n        });\n    },\n    \n    calculate: function()\n    {\n    \n        \n    }\n\n});";
draw2d_circuit_switch_HighLowArray.github="./shapes/org/draw2d/circuit/switch/HighLowArray.shape";
draw2d_circuit_switch_HighLowArray.markdown="";