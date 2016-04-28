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
     this._super( $.extend({stroke:0, bgColor:null, width:78.1935999999996,height:40.608999999999924},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.34384399746327, 57.82954517471489));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 78.1935999999996;
      this.originalHeight= 40.608999999999924;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L78.1935999999996,0 L78.1935999999996,40.608999999999924 L0,40.608999999999924");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Label
        shape = this.canvas.paper.text(0,0,'1');
        shape.attr({"x":4,"y":23.608999999999924,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":23,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":3.5,"ry":3.5,"cx":61.74440000000004,"cy":23.483999999999924,"stroke":"none","stroke-width":0,"fill":"#000000","opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":3.4500000000000455,"ry":3.5,"cx":37.28777500000001,"cy":23.483999999999924,"stroke":"none","stroke-width":0,"fill":"#000000","opacity":1});
        shape.data("name","Circle");
        
        // low
        shape = this.canvas.paper.path('M58.96360000000004,8.735999999999876Q56.96360000000004,8.735999999999876 56.96360000000004, 6.735999999999876L56.96360000000004,2Q56.96360000000004,0 54.96360000000004, 0L43.96360000000004,0Q41.96360000000004,0 41.96360000000004, 2L41.96360000000004,6.735999999999876Q41.96360000000004,8.735999999999876 39.96360000000004, 8.735999999999876L35.13720000000012,8.735999999999876Q33.13720000000012,8.735999999999876 33.13720000000012, 10.735999999999876L33.13720000000012,11.735999999999876Q33.13720000000012,13.735999999999876 35.13720000000012, 13.735999999999876L63.13720000000012,13.735999999999876Q65.13720000000012,13.735999999999876 65.13720000000012, 11.735999999999876L65.13720000000012,10.735999999999876Q65.13720000000012,8.735999999999876 63.13720000000012, 8.735999999999876L58.96360000000004,8.735999999999876');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","low");
        
        // high
        shape = this.canvas.paper.path('M58.96360000000004,16.235999999999876Q56.96360000000004,16.235999999999876 56.96360000000004, 14.235999999999876L56.96360000000004,9.5Q56.96360000000004,7.5 54.96360000000004, 7.5L43.96360000000004,7.5Q41.96360000000004,7.5 41.96360000000004, 9.5L41.96360000000004,14.235999999999876Q41.96360000000004,16.235999999999876 39.96360000000004, 16.235999999999876L35.13720000000012,16.235999999999876Q33.13720000000012,16.235999999999876 33.13720000000012, 18.235999999999876L33.13720000000012,19.235999999999876Q33.13720000000012,21.235999999999876 35.13720000000012, 21.235999999999876L63.13720000000012,21.235999999999876Q65.13720000000012,21.235999999999876 65.13720000000012, 19.235999999999876L65.13720000000012,18.235999999999876Q65.13720000000012,16.235999999999876 63.13720000000012, 16.235999999999876L58.96360000000004,16.235999999999876');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","high");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":3.4500000000000455,"ry":3.5,"cx":19.78777500000001,"cy":23.983999999999924,"stroke":"none","stroke-width":0,"fill":"#000000","opacity":1});
        shape.data("name","Circle");
        
        // Line_shadow
        shape = this.canvas.paper.path('M62.5 23.5L70.5,23.5L78.5,23.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M62.5 23.5L70.5,23.5L78.5,23.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":2,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M20.5 24.5L28.5,24.5L35.5,24.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M20.5 24.5L28.5,24.5L35.5,24.5');
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
draw2d_circuit_switch_PushButton.markdown="# Header \n## Subheader \nbe nice and write a help file for your new \ncreated ***DigitalTrainingStudion*** shape. \n\n  - point 1\n  - point 2\n  - point 3";