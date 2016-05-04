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
        shape.attr({"x":4.5,"y":11,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":11,"stroke":"none","fill":"#C21B7A","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
        shape = this.canvas.paper.path('M39.5 22.5L13.5,11.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"opacity":1});
        shape.data("name","high_shadow");
        
        // high
        shape = this.canvas.paper.path('M39.5 22.5L13.5,11.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":2,"opacity":1});
        shape.data("name","high");
        
        // low_shadow
        shape = this.canvas.paper.path('M38.5 22.5L13.5,32.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"opacity":1});
        shape.data("name","low_shadow");
        
        // low
        shape = this.canvas.paper.path('M38.5 22.5L13.5,32.5');
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
draw2d_circuit_switch_HighLow.logic="// Generated Code for the Draw2D touch HTML5 lib\n//                                                        \n// http://www.draw2d.org                                  \n//                                                        \n// Go to the Designer http://www.draw2d.org               \n// to design your own shape or download user generated    \n//                                                        \nvar draw2d_circuit_switch_HighLow = draw2d.SetFigure.extend({            \n\n   NAME: \"draw2d_circuit_switch_HighLow\",\n\n   init:function(attr, setter, getter)\n   {\n     this._super( $.extend({stroke:0, bgColor:null, width:42,height:43.5},attr), setter, getter);\n     var port;\n     // Port\n     port = this.createPort(\"output\", new draw2d.layout.locator.XYRelPortLocator(98.80952380952381, 51.72413793103448));\n     port.setConnectionDirection(1);\n     port.setBackgroundColor(\"#37B1DE\");\n     port.setName(\"Port\");\n     port.setMaxFanOut(20);\n     this.persistPorts=false;\n   },\n\n   createShapeElement : function()\n   {\n      var shape = this._super();\n      this.originalWidth = 42;\n      this.originalHeight= 43.5;\n      return shape;\n   },\n\n   createSet: function()\n   {\n       this.canvas.paper.setStart();\n\n        // BoundingBox\n        shape = this.canvas.paper.path(\"M0,0 L42,0 L42,43.5 L0,43.5\");\n        shape.attr({\"stroke\":\"none\",\"stroke-width\":0,\"fill\":\"none\"});\n        shape.data(\"name\",\"BoundingBox\");\n        \n        // Label\n        shape = this.canvas.paper.text(0,0,\'1\');\n        shape.attr({\"x\":4.5,\"y\":11,\"text-anchor\":\"start\",\"text\":\"1\",\"font-family\":\"\\\"Arial\\\"\",\"font-size\":11,\"stroke\":\"none\",\"fill\":\"#C21B7A\",\"stroke-scale\":true,\"font-weight\":\"normal\",\"stroke-width\":0,\"opacity\":1});\n        shape.data(\"name\",\"Label\");\n        \n        // Label\n        shape = this.canvas.paper.text(0,0,\'0\');\n        shape.attr({\"x\":4,\"y\":32.5,\"text-anchor\":\"start\",\"text\":\"0\",\"font-family\":\"\\\"Arial\\\"\",\"font-size\":12,\"stroke\":\"none\",\"fill\":\"#080808\",\"stroke-scale\":true,\"font-weight\":\"normal\",\"stroke-width\":0,\"opacity\":1});\n        shape.data(\"name\",\"Label\");\n        \n        // Circle\n        shape = this.canvas.paper.ellipse();\n        shape.attr({\"rx\":3,\"ry\":3.5,\"cx\":39,\"cy\":22.5,\"stroke\":\"none\",\"stroke-width\":0,\"fill\":\"#000000\",\"opacity\":1});\n        shape.data(\"name\",\"Circle\");\n        \n        // high_shadow\n        shape = this.canvas.paper.path(\'M39.5 22.5L13.5,11.5\');\n        shape.attr({\"stroke-linecap\":\"round\",\"stroke-linejoin\":\"round\",\"stroke\":\"none\",\"stroke-width\":2,\"opacity\":1});\n        shape.data(\"name\",\"high_shadow\");\n        \n        // high\n        shape = this.canvas.paper.path(\'M39.5 22.5L13.5,11.5\');\n        shape.attr({\"stroke-linecap\":\"round\",\"stroke-linejoin\":\"round\",\"stroke\":\"#000000\",\"stroke-width\":2,\"opacity\":1});\n        shape.data(\"name\",\"high\");\n        \n        // low_shadow\n        shape = this.canvas.paper.path(\'M38.5 22.5L13.5,32.5\');\n        shape.attr({\"stroke-linecap\":\"round\",\"stroke-linejoin\":\"round\",\"stroke\":\"none\",\"stroke-width\":2,\"opacity\":1});\n        shape.data(\"name\",\"low_shadow\");\n        \n        // low\n        shape = this.canvas.paper.path(\'M38.5 22.5L13.5,32.5\');\n        shape.attr({\"stroke-linecap\":\"round\",\"stroke-linejoin\":\"round\",\"stroke\":\"#000000\",\"stroke-width\":2,\"opacity\":1});\n        shape.data(\"name\",\"low\");\n        \n\n        return this.canvas.paper.setFinish();\n   },\n\n   applyAlpha: function()\n   {\n   },\n\n   layerGet: function(name, attributes)\n   {\n      var result=null;\n      this.svgNodes.some(function(shape){\n         if(shape.data(\"name\")===name){\n            result=shape;\n         }\n         return result!==null;\n      });\n\n      return result;\n   },\n\n   layerAttr: function(name, attributes)\n   {\n     this.svgNodes.forEach(function(shape){\n             if(shape.data(\"name\")===name){\n                  shape.attr(attributes);\n             }\n     });\n   },\n\n   layerShow: function(name, flag, duration)\n   {\n      if(duration){\n        this.svgNodes.forEach(function(node){\n            if(node.data(\"name\")===name){\n                if(flag){\n                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);\n                }\n                else{\n                    node.animate({ opacity : 0 }, duration, function () { this.hide() });\n                }\n            }\n        });\n      }\n      else{\n          this.svgNodes.forEach(function(node){\n              if(node.data(\"name\")===name){\n                   if(flag){node.show();}\n                   else{node.hide();}\n               }\n           });\n      }\n   },\n\n    calculate: function()\n    {\n    },\n\n    onStart: function()\n    {\n    },\n\n    onStop:function()\n    {\n    },\n\n    /**\n     * @method\n     */\n    addPort: function(port, locator)\n    {\n        this._super(port, locator);\n        return port;\n    },\n\n    /**\n     * @method\n     * Return an objects with all important attributes for XML or JSON serialization\n     *\n     * @returns {Object}\n     */\n    getPersistentAttributes : function()\n    {\n        var memento = this._super();\n\n        // add all decorations to the memento\n        //\n        memento.labels = [];\n        this.children.each(function(i,e){\n            var labelJSON = e.figure.getPersistentAttributes();\n            labelJSON.locator=e.locator.NAME;\n            memento.labels.push(labelJSON);\n        });\n\n        return memento;\n    },\n\n    /**\n     * @method\n     * Read all attributes from the serialized properties and transfer them into the shape.\n     *\n     * @param {Object} memento\n     * @returns\n     */\n    setPersistentAttributes : function(memento)\n    {\n        this._super(memento);\n\n        // remove all decorations created in the constructor of this element\n        //\n        this.resetChildren();\n\n        // and add all children of the JSON document.\n        //\n        $.each(memento.labels, $.proxy(function(i,json){\n            // create the figure stored in the JSON\n            var figure =  eval(\"new \"+json.type+\"()\");\n\n            // apply all attributes\n            figure.attr(json);\n\n            // instantiate the locator\n            var locator =  eval(\"new \"+json.locator+\"()\");\n\n            // add the new figure as child to this figure\n            this.add(figure, locator);\n        },this));\n    }\n});\n\n/**\n * by \'Draw2D Shape Designer\'\n *\n * Custom JS code to tweak the standard behaviour of the generated\n * shape. add your custome code and event handler here.\n *\n *\n */\ndraw2d_circuit_switch_HighLow = draw2d_circuit_switch_HighLow.extend({\n\n    init: function(attr, setter, getter){\n         this._super(attr, setter, getter);\n        var _this = this;\n\n        this.attr({resizeable:false});\n        \n        this.value = false;\n        this.on(\"click\",function(){            \n            _this.value = !_this.value;\n            _this.layerShow(\"low\" , !_this.value, 100);\n            _this.layerShow(\"high\",  _this.value, 100);\n            _this.getOutputPort(0).setValue(_this.value);\n        });\n\n        this.on(\"added\",function(){\n            _this.layerShow(\"low\" , !_this.value);\n            _this.layerShow(\"high\",  _this.value);\n            _this.getOutputPort(0).setValue(_this.value);\n        });\n    },\n    \n    calculate: function()\n    {\n        // do nothing per default;\n    }\n\n});";
draw2d_circuit_switch_HighLow.github="./shapes/org/draw2d/circuit/switch/HighLow.shape";
draw2d_circuit_switch_HighLow.markdown="# Push Button\n\ntoggles the output if the user press \nthe mouse button down in the simulation mode.";