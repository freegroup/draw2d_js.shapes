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
     this._super( $.extend({stroke:0, bgColor:null, width:58.46519999999964,height:35.983999999999924},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.79730848436411, 65.26233881725204));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 58.46519999999964;
      this.originalHeight= 35.983999999999924;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L58.46519999999964,0 L58.46519999999964,35.983999999999924 L0,35.983999999999924");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Label
        shape = this.canvas.paper.text(0,0,'1');
        shape.attr({"x":4,"y":23.983999999999924,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":14,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":3.5,"ry":3.5,"cx":42.016000000000076,"cy":23.483999999999924,"stroke":"none","stroke-width":0,"fill":"#000000","opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":3.4500000000000455,"ry":3.5,"cx":17.559375000000045,"cy":23.483999999999924,"stroke":"none","stroke-width":0,"fill":"#000000","opacity":1});
        shape.data("name","Circle");
        
        // off
        shape = this.canvas.paper.path('M39.23520000000008,8.735999999999876Q37.23520000000008,8.735999999999876 37.23520000000008, 6.735999999999876L37.23520000000008,2Q37.23520000000008,0 35.23520000000008, 0L24.235200000000077,0Q22.235200000000077,0 22.235200000000077, 2L22.235200000000077,6.735999999999876Q22.235200000000077,8.735999999999876 20.235200000000077, 8.735999999999876L15.408800000000156,8.735999999999876Q13.408800000000156,8.735999999999876 13.408800000000156, 10.735999999999876L13.408800000000156,11.735999999999876Q13.408800000000156,13.735999999999876 15.408800000000156, 13.735999999999876L43.408800000000156,13.735999999999876Q45.408800000000156,13.735999999999876 45.408800000000156, 11.735999999999876L45.408800000000156,10.735999999999876Q45.408800000000156,8.735999999999876 43.408800000000156, 8.735999999999876L39.23520000000008,8.735999999999876');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","off");
        
        // on
        shape = this.canvas.paper.path('M39.23520000000008,14.735999999999876Q37.23520000000008,14.735999999999876 37.23520000000008, 12.735999999999876L37.23520000000008,8Q37.23520000000008,6 35.23520000000008, 6L24.235200000000077,6Q22.235200000000077,6 22.235200000000077, 8L22.235200000000077,12.735999999999876Q22.235200000000077,14.735999999999876 20.235200000000077, 14.735999999999876L15.408800000000156,14.735999999999876Q13.408800000000156,14.735999999999876 13.408800000000156, 16.735999999999876L13.408800000000156,17.735999999999876Q13.408800000000156,19.735999999999876 15.408800000000156, 19.735999999999876L43.408800000000156,19.735999999999876Q45.408800000000156,19.735999999999876 45.408800000000156, 17.735999999999876L45.408800000000156,16.735999999999876Q45.408800000000156,14.735999999999876 43.408800000000156, 14.735999999999876L39.23520000000008,14.735999999999876');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","on");
        
        // Line_shadow
        shape = this.canvas.paper.path('M43.5 23.5L50.5,23.5L58.5,23.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M43.5 23.5L50.5,23.5L58.5,23.5');
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
draw2d_circuit_switch_PushButton.logic="calculate: function () {\n}";
draw2d_circuit_switch_PushButton.github="./shapes/org/draw2d/circuit/switch/PushButton.shape";
draw2d_circuit_switch_PushButton.markdown="# Header \n## Subheader \nbe nice and write a help file for your new \ncreated ***DigitalTrainingStudion*** shape. \n\n  - point 1\n  - point 2\n  - point 3";