// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_Basic = draw2d.SetFigure.extend({            

   NAME: "draw2d_Basic",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:102,height:110},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(4.901960784313725, 24.545454545454543));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#C02B1D");
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(4.901960784313725, 71.81818181818181));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#C02B1D");
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(95.09803921568627, 50));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#C02B1D");
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 102;
      this.originalHeight= 110;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L102,0 L102,110 L0,110");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // undefined
        shape = this.canvas.paper.path('M4.5,4.5Q4,0 8.5, 0.5L93.5,0.5Q97,0 97.5, 4.5L97.5,106.5Q97,110 93.5, 110.5L8.5,110.5Q4,110 4.5, 106.5L4.5,4.5');
        shape.attr({"fill":"79-#d9d9d9-#f0f0f0","stroke":"#303030","stroke-width":1,"opacity":1});
        shape.data("name","undefined");
        

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
draw2d_Basic = draw2d_Basic.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);


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
    }

});
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_HighLowSource = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_HighLowSource",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:64,height:35},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(92.1875, 48.82567857142801));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#C02B1D");
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 64;
      this.originalHeight= 35;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L64,0 L64,35 L0,35");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // undefined
        shape = this.canvas.paper.path('M38.5,0.5Q37.64771944153745,0.12149527324845621 37.5, 0.5L37.5,0.5Q37.64771944153745,0 33.5, 0.5L4.5,0.5Q0,0 0.5, 4.5L0.5,31.5Q0,35 4.5, 35.5L33.5,35.5Q37.64771944153745,35 37.5, 34.5L37.5,34.5Q37.64771944153745,34.878504726751544 38.5, 34.5L38.5,34.5Q40.020461784651616,34.678744560939776 41.5, 34.5L41.5,34.5Q43.07259312364613,33.891767275292295 44.5, 33.5L44.5,33.5Q45.9363434492966,32.60673443562155 47.5, 31.5L47.5,31.5Q48.52469915708434,30.86269111450156 49.5, 29.5L49.5,29.5Q50.75901436860431,28.712629185713013 51.5, 27.5L51.5,27.5Q52.571400546764835,26.2218771929829 53.5, 24.5L53.5,24.5Q53.90678925466227,23.46611537522631 54.5, 21.5L54.5,21.5Q54.72460538213954,20.529076160791647 54.5, 19.5L54.5,19.5Q55,17.5 54.5, 15.5L54.5,15.5Q54.72460538213954,14.470923839208353 54.5, 13.5L54.5,13.5Q53.90678925466227,11.533884624773691 53.5, 10.5L53.5,10.5Q52.571400546764835,8.778122807017098 51.5, 7.5L51.5,7.5Q50.75901436860431,6.287370814286987 49.5, 5.5L49.5,5.5Q48.52469915708434,4.137308885498442 47.5, 3.5L47.5,3.5Q45.9363434492966,2.393265564378453 44.5, 1.5L44.5,1.5Q43.07259312364613,1.1082327247077046 41.5, 0.5L41.5,0.5Q40.020461784651616,0.3212554390602236 38.5, 0.5L38.5,0.5');
        shape.attr({"stroke":"#303030","stroke-width":2,"fill":"none","opacity":1});
        shape.data("name","undefined");
        
        // high
        shape = this.canvas.paper.text(0,0,'High');
        shape.attr({"x":10.0546875,"y":16.4921875,"text-anchor":"start","text":"High","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#E3103A","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","high");
        
        // low
        shape = this.canvas.paper.text(0,0,'Low');
        shape.attr({"x":10.0546875,"y":16.4921875,"text-anchor":"start","text":"Low","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#1911F7","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
draw2d_circuit_HighLowSource = draw2d_circuit_HighLowSource.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);


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
    }

});
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_Led = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_Led",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:39,height:32},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(12.820512820512821, 50));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#C02B1D");
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 39;
      this.originalHeight= 32;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L39,0 L39,32 L0,32");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":15,"ry":16,"cx":24,"cy":16,"stroke":"none","stroke-width":0,"fill":"#95C06A","opacity":1});
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
draw2d_circuit_Led = draw2d_circuit_Led.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         this.getInputPort(0).on("change:value", function(emitter, event){
             console.log(event);
         });
    }

});
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
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(8.333333333333334, 18.0327868852459));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#C02B1D");
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(8.333333333333334, 83.60655737704919));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#C02B1D");
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(91.66666666666667, 50));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#C02B1D");
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
        shape = this.canvas.paper.path('M5.5 0.5L54.5 0.5L54.5 61.5L5.5 61.5Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'&');
        shape.attr({"x":19,"y":29,"text-anchor":"start","text":"&","font-family":"\"Arial\"","font-size":30,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
    }

});
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_gate_empty = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_gate_empty",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:60,height:61},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(8.333333333333334, 18.0327868852459));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#C02B1D");
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(8.333333333333334, 83.60655737704919));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#C02B1D");
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(91.66666666666667, 50));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#C02B1D");
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
        shape = this.canvas.paper.path('M5.5 0.5L54.5 0.5L54.5 61.5L5.5 61.5Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");
        

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
draw2d_circuit_gate_empty = draw2d_circuit_gate_empty.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);


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
    }

});