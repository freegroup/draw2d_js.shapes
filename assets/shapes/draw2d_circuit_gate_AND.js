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
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.6666666666666667, 22.5));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     port.setName("input01");
     port.setMaxFanOut(20);
     // input02
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.6666666666666667, 77.5));
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
draw2d_circuit_gate_AND = draw2d_circuit_gate_AND.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

    },
    
    calculate:function()
    {
        var i1 = this.getInputPort(0);
        var i2 = this.getInputPort(1);
        var o1 = this.getOutputPort(0);
        
        o1.setValue(i1.getValue() & i2.getValue());
    }
});
draw2d_circuit_gate_AND.logic="// Generated Code for the Draw2D touch HTML5 lib\n//                                                        \n// http://www.draw2d.org                                  \n//                                                        \n// Go to the Designer http://www.draw2d.org               \n// to design your own shape or download user generated    \n//                                                        \nvar draw2d_circuit_gate_AND = draw2d.SetFigure.extend({            \n\n   NAME: \"draw2d_circuit_gate_AND\",\n\n   init:function(attr, setter, getter)\n   {\n     this._super( $.extend({stroke:0, bgColor:null, width:30,height:40},attr), setter, getter);\n     var port;\n     // input01\n     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.6666666666666667, 22.5));\n     port.setConnectionDirection(3);\n     port.setBackgroundColor(\"#1C9BAB\");\n     port.setName(\"input01\");\n     port.setMaxFanOut(20);\n     // input02\n     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.6666666666666667, 77.5));\n     port.setConnectionDirection(3);\n     port.setBackgroundColor(\"#1C9BAB\");\n     port.setName(\"input02\");\n     port.setMaxFanOut(20);\n     // out\n     port = this.createPort(\"output\", new draw2d.layout.locator.XYRelPortLocator(104.42708333333334, 50));\n     port.setConnectionDirection(1);\n     port.setBackgroundColor(\"#1C9BAB\");\n     port.setName(\"out\");\n     port.setMaxFanOut(20);\n     this.persistPorts=false;\n   },\n\n   createShapeElement : function()\n   {\n      var shape = this._super();\n      this.originalWidth = 30;\n      this.originalHeight= 40;\n      return shape;\n   },\n\n   createSet: function()\n   {\n       this.canvas.paper.setStart();\n\n        // BoundingBox\n        shape = this.canvas.paper.path(\"M0,0 L30,0 L30,40 L0,40\");\n        shape.attr({\"stroke\":\"none\",\"stroke-width\":0,\"fill\":\"none\"});\n        shape.data(\"name\",\"BoundingBox\");\n        \n        // Rectangle\n        shape = this.canvas.paper.path(\'M0,3Q0,0 3, 0L27,0Q30,0 30, 3L30,37Q30,40 27, 40L3,40Q0,40 0, 37L0,3\');\n        shape.attr({\"stroke\":\"#303030\",\"stroke-width\":1,\"fill\":\"#FFFFFF\",\"opacity\":1});\n        shape.data(\"name\",\"Rectangle\");\n        \n        // Label\n        shape = this.canvas.paper.text(0,0,\'&\');\n        shape.attr({\"x\":9,\"y\":21,\"text-anchor\":\"start\",\"text\":\"&\",\"font-family\":\"\\\"Arial\\\"\",\"font-size\":20,\"stroke\":\"none\",\"fill\":\"#080808\",\"stroke-scale\":true,\"font-weight\":\"normal\",\"stroke-width\":0,\"opacity\":1});\n        shape.data(\"name\",\"Label\");\n        \n\n        return this.canvas.paper.setFinish();\n   },\n\n   applyAlpha: function()\n   {\n   },\n\n   layerGet: function(name, attributes)\n   {\n      var result=null;\n      this.svgNodes.some(function(shape){\n         if(shape.data(\"name\")===name){\n            result=shape;\n         }\n         return result!==null;\n      });\n\n      return result;\n   },\n\n   layerAttr: function(name, attributes)\n   {\n     this.svgNodes.forEach(function(shape){\n             if(shape.data(\"name\")===name){\n                  shape.attr(attributes);\n             }\n     });\n   },\n\n   layerShow: function(name, flag, duration)\n   {\n      if(duration){\n        this.svgNodes.forEach(function(node){\n            if(node.data(\"name\")===name){\n                if(flag){\n                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);\n                }\n                else{\n                    node.animate({ opacity : 0 }, duration, function () { this.hide() });\n                }\n            }\n        });\n      }\n      else{\n          this.svgNodes.forEach(function(node){\n              if(node.data(\"name\")===name){\n                   if(flag){node.show();}\n                   else{node.hide();}\n               }\n           });\n      }\n   },\n\n    calculate: function()\n    {\n    },\n\n    onStart: function()\n    {\n    },\n\n    onStop:function()\n    {\n    },\n\n    /**\n     * @method\n     */\n    addPort: function(port, locator)\n    {\n        this._super(port, locator);\n        return port;\n    },\n\n    /**\n     * @method\n     * Return an objects with all important attributes for XML or JSON serialization\n     *\n     * @returns {Object}\n     */\n    getPersistentAttributes : function()\n    {\n        var memento = this._super();\n\n        // add all decorations to the memento\n        //\n        memento.labels = [];\n        this.children.each(function(i,e){\n            var labelJSON = e.figure.getPersistentAttributes();\n            labelJSON.locator=e.locator.NAME;\n            memento.labels.push(labelJSON);\n        });\n\n        return memento;\n    },\n\n    /**\n     * @method\n     * Read all attributes from the serialized properties and transfer them into the shape.\n     *\n     * @param {Object} memento\n     * @returns\n     */\n    setPersistentAttributes : function(memento)\n    {\n        this._super(memento);\n\n        // remove all decorations created in the constructor of this element\n        //\n        this.resetChildren();\n\n        // and add all children of the JSON document.\n        //\n        $.each(memento.labels, $.proxy(function(i,json){\n            // create the figure stored in the JSON\n            var figure =  eval(\"new \"+json.type+\"()\");\n\n            // apply all attributes\n            figure.attr(json);\n\n            // instantiate the locator\n            var locator =  eval(\"new \"+json.locator+\"()\");\n\n            // add the new figure as child to this figure\n            this.add(figure, locator);\n        },this));\n    }\n});\n\n/**\n * by \'Draw2D Shape Designer\'\n *\n * Custom JS code to tweak the standard behaviour of the generated\n * shape. add your custome code and event handler here.\n *\n *\n */\ndraw2d_circuit_gate_AND = draw2d_circuit_gate_AND.extend({\n\n    init: function(attr, setter, getter){\n        this._super(attr, setter, getter);\n\n        this.attr({resizeable:false});\n        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());\n\n    },\n    \n    calculate:function()\n    {\n        var i1 = this.getInputPort(0);\n        var i2 = this.getInputPort(1);\n        var o1 = this.getOutputPort(0);\n        \n        o1.setValue(i1.getValue() & i2.getValue());\n    }\n});";
draw2d_circuit_gate_AND.github="./shapes/org/draw2d/circuit/gate/AND.shape";
draw2d_circuit_gate_AND.markdown="# AND Gate\n\n## Description\nThe **AND** gate is a basic digital logic gate that implements logical conjunction - it behaves according to the truth table on the bottom.\n\nA HIGH output results only if both the inputs to the AND gate are HIGH. If neither or only one input to the AND gate is HIGH, a LOW output results. In another sense, the function of AND effectively finds the minimum between two binary digits, just as the OR function finds the maximum.\n\n\n**Therefore, the output is always 0 except when all the inputs are 1.**\n\n## Logic table\n\n| INPUT 1   | INPUT   |  OUTPUT    |\n|:---------:|:-------:|:----------:|\n| Low       | Low     |  Low       |\n| High      | Low     |  Low       |\n| Low       | High    |  Low       |\n| High      | High    |  `High`    |\n\n";