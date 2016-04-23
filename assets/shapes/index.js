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
     this._super( $.extend({stroke:0, bgColor:null, width:72.3095000000003,height:102},attr), setter, getter);
     var port;
     // port_a
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(13.829441498005046, 5.791568627451031));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     // port_b
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(12.446497348204542, 20.098039215686274));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     // port_c
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(11.063553198404037, 34.80392156862745));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     // port_d
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(10.372081123503785, 49.509803921568626));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     // port_e
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(9.680609048603532, 64.2156862745098));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     // port_f
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(8.297664898803028, 78.92156862745098));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     // port_g
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(6.914720749002523, 93.62745098039215));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 72.3095000000003;
      this.originalHeight= 102;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L72.3095000000003,0 L72.3095000000003,102 L0,102");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // circle
        shape = this.canvas.paper.path('M13.19606143306055 0L72.3095000000003 4.547473508864641e-13L66.17511433060645 102L7.309500000000298 102Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","circle");
        
        // seg_a
        shape = this.canvas.paper.path('M25.792999999999665 6L61.792999999999665 6L61.792999999999665 12L25.792999999999665 12Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_a");
        
        // seg_b
        shape = this.canvas.paper.path('M62.991241562955565 14L67.89649999999983 14.218615937502818L65.8017584370441 46L60.89649999999983 46Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_b");
        
        // seg_c
        shape = this.canvas.paper.path('M60.09474156295573 56.5L65 56.71861593750282L62.90525843704427 88.5L58 88.5Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_c");
        
        // seg_d
        shape = this.canvas.paper.path('M20.5 92L56.5 92L56.5 98L20.5 98Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_d");
        
        // seg_e
        shape = this.canvas.paper.path('M16.594741562955733 56.5L21.5 56.71861593750282L19.405258437044267 88.5L14.5 88.5Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_e");
        
        // seg_f
        shape = this.canvas.paper.path('M19.094741562955733 13.407400000000052L24 13.62601593750287L21.905258437044267 45.40740000000005L17 45.40740000000005Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_f");
        
        // seg_g
        shape = this.canvas.paper.path('M23.396499999999833 48.5L59.39649999999983 48.5L59.39649999999983 54.5L23.396499999999833 54.5Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_g");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
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
        // ensure that the ports has the same order as the segments
        //
        this.portLockup = [];
        this.portLockup.push({ p:this.getPort("port_a"), s:"seg_a"});
        this.portLockup.push({ p:this.getPort("port_b"), s:"seg_b"});
        this.portLockup.push({ p:this.getPort("port_c"), s:"seg_c"});
        this.portLockup.push({ p:this.getPort("port_d"), s:"seg_d"});
        this.portLockup.push({ p:this.getPort("port_e"), s:"seg_e"});
        this.portLockup.push({ p:this.getPort("port_f"), s:"seg_r"});
        this.portLockup.push({ p:this.getPort("port_g"), s:"seg_g"});
        
    },
    
    calculate:function()
    {
        var _this = this;
        this.portLockup.forEach(function(element, index){
            _this.layerShow(element.s, p.getValue());
        });
    }

});
draw2d_circuit_display_7Segment.logic="calculate: function () {\n    var _this = this;\n    this.portLockup.forEach(function (element, index) {\n        _this.layerShow(element.s, p.getValue());\n    });\n}";
draw2d_circuit_display_7Segment.github="./shapes/org/draw2d/circuit/display/7Segment.shape";
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
     this._super( $.extend({stroke:0, bgColor:null, width:36,height:32},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(13.88888888888889, 51.5625));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 36;
      this.originalHeight= 32;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L36,0 L36,32 L0,32");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":15,"ry":16,"cx":21,"cy":16,"stroke":"#1B1B1B","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","circle");
        
        // Line_shadow
        shape = this.canvas.paper.path('M11.5 5.5L21.5,16.5L30.5,27.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M11.5 5.5L21.5,16.5L30.5,27.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M31.5 5.5L11.5,27.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M31.5 5.5L11.5,27.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"opacity":1});
        shape.data("name","Line");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
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
             this.layerAttr("circle",{fill:"#ff5252"});
         }
         else{
            this.layerAttr("circle",{fill:"#009688"});
         }
    }

});
draw2d_circuit_display_Led.github="./shapes/org/draw2d/circuit/display/Led.shape";
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
     this._super( $.extend({stroke:0, bgColor:null, width:60,height:61},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(8.333333333333334, 18.0327868852459));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(8.333333333333334, 83.60655737704919));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(91.66666666666667, 50));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 60;
      this.originalHeight= 61;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L60,0 L60,61 L0,61");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M5,3Q5,0 8, 0L51,0Q54,0 54, 3L54,58Q54,61 51, 61L8,61Q5,61 5, 58L5,3');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'&');
        shape.attr({"x":22,"y":31,"text-anchor":"start","text":"&","font-family":"\"Arial\"","font-size":28,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
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

         // your special code here
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
     this._super( $.extend({stroke:0, bgColor:null, width:72,height:61},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(6.944444444444445, 18.0327868852459));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(6.944444444444445, 83.60655737704919));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(93.05555555555556, 50));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 72;
      this.originalHeight= 61;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L72,0 L72,61 L0,61");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M5,3Q5,0 8, 0L51,0Q54,0 54, 3L54,58Q54,61 51, 61L8,61Q5,61 5, 58L5,3');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'&');
        shape.attr({"x":22,"y":31,"text-anchor":"start","text":"&","font-family":"\"Arial\"","font-size":28,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":7,"ry":7,"cx":56,"cy":30.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Circle");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
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

         // your special code here
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
     this._super( $.extend({stroke:0, bgColor:null, width:68,height:61},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(7.352941176470589, 18.0327868852459));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(7.352941176470589, 83.60655737704919));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(92.64705882352942, 50));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 68;
      this.originalHeight= 61;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L68,0 L68,61 L0,61");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M5,3Q5,0 8, 0L51,0Q54,0 54, 3L54,58Q54,61 51, 61L8,61Q5,61 5, 58L5,3');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'>1');
        shape.attr({"x":17,"y":31,"text-anchor":"start","text":">1","font-family":"\"Arial\"","font-size":28,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":6,"ry":6,"cx":56,"cy":30.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#FCFFFF","opacity":1});
        shape.data("name","Circle");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
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

         // your special code here
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
     this._super( $.extend({stroke:0, bgColor:null, width:60,height:61},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(8.333333333333334, 18.0327868852459));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(8.333333333333334, 83.60655737704919));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#1C9BAB");
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(91.66666666666667, 50));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 60;
      this.originalHeight= 61;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L60,0 L60,61 L0,61");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M5,3Q5,0 8, 0L51,0Q54,0 54, 3L54,58Q54,61 51, 61L8,61Q5,61 5, 58L5,3');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'>1');
        shape.attr({"x":17,"y":31,"text-anchor":"start","text":">1","font-family":"\"Arial\"","font-size":28,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
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

         // your special code here
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
     this._super( $.extend({stroke:0, bgColor:null, width:46.5,height:43.5},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(89.24731182795698, 51.72413793103448));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 46.5;
      this.originalHeight= 43.5;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L46.5,0 L46.5,43.5 L0,43.5");
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


        this.setResizeable(false);
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
        
        var _this = this;
        
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