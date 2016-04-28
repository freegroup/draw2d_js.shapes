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
     this._super( $.extend({stroke:0, bgColor:null, width:66.83764999999948,height:34},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.57216778268004, 69.0705882352939));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 66.83764999999948;
      this.originalHeight= 34;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L66.83764999999948,0 L66.83764999999948,34 L0,34");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Label
        shape = this.canvas.paper.text(0,0,'1');
        shape.attr({"x":4,"y":17,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":23,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":4.5,"ry":4,"cx":25.981824999999844,"cy":22.983999999999924,"stroke":"none","stroke-width":0,"fill":"#000000","opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":4.5,"ry":4,"cx":48.981824999999844,"cy":23.483999999999924,"stroke":"none","stroke-width":0,"fill":"#000000","opacity":1});
        shape.data("name","Circle");
        
        // low
        shape = this.canvas.paper.path('M47.60764999999992,8.735999999999876Q45.60764999999992,8.735999999999876 45.60764999999992, 6.735999999999876L45.60764999999992,2Q45.60764999999992,0 43.60764999999992, 0L32.60764999999992,0Q30.60764999999992,0 30.60764999999992, 2L30.60764999999992,6.735999999999876Q30.60764999999992,8.735999999999876 28.60764999999992, 8.735999999999876L23.78125,8.735999999999876Q21.78125,8.735999999999876 21.78125, 10.735999999999876L21.78125,11.735999999999876Q21.78125,13.735999999999876 23.78125, 13.735999999999876L51.78125,13.735999999999876Q53.78125,13.735999999999876 53.78125, 11.735999999999876L53.78125,10.735999999999876Q53.78125,8.735999999999876 51.78125, 8.735999999999876L47.60764999999992,8.735999999999876');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","low");
        
        // high
        shape = this.canvas.paper.path('M43.79565000000002,16.235999999999876Q41.983650000000125,16.235999999999876 42.74999690867461, 14.388647187036133L44.841303091325436,9.347352812963743Q45.60764999999992,7.5 43.60764999999992, 7.5L32.60764999999992,7.5Q30.60764999999992,7.5 31.109597390072153, 9.435987814424376L32.37070260992756,14.3000121855755Q32.872649999999794,16.235999999999876 30.872649999999794, 16.235999999999876L23.78125,16.235999999999876Q21.78125,16.235999999999876 21.78125, 18.235999999999876L21.78125,19.235999999999876Q21.78125,21.235999999999876 23.78125, 21.235999999999876L51.78125,21.235999999999876Q53.78125,21.235999999999876 53.78125, 19.235999999999876L53.78125,18.235999999999876Q53.78125,16.235999999999876 51.78125, 16.235999999999876L47.60764999999992,16.235999999999876Q45.60764999999992,16.235999999999876 43.79565000000002, 16.235999999999876L43.79565000000002,16.235999999999876');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","high");
        
        // Line_shadow
        shape = this.canvas.paper.path('M51.5 23.5L59.5,23.5L66.5,23.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M51.5 23.5L59.5,23.5L66.5,23.5');
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