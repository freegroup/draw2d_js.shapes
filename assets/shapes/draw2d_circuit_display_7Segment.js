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
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(13.829441498005046, 5.791568627451031));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(12.446497348204542, 20.098039215686274));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(11.063553198404037, 34.80392156862745));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(10.372081123503785, 49.509803921568626));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(9.680609048603532, 64.2156862745098));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(8.297664898803028, 78.92156862745098));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(6.914720749002523, 93.62745098039215));
     port.setConnectionDirection();
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
draw2d_circuit_display_7Segment.github="./shapes/org/draw2d/circuit/display/7Segment.shape";