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
     this._super( $.extend({stroke:0, bgColor:null, width:NaN,height:Infinity},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(NaN, 0));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(NaN, 0));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(NaN, 0));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(NaN, 0));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(NaN, 0));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(NaN, 0));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     // Port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(NaN, 0));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = NaN;
      this.originalHeight= Infinity;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 LNaN,0 LNaN,Infinity L0,Infinity");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // circle
        shape = this.canvas.paper.path('MNaN 0LNaN 4.547473508864641e-13LNaN 102LNaN 102Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","circle");
        
        // Rectangle
        shape = this.canvas.paper.path('MNaN NaNLNaN NaNLNaN NaNLNaN NaNZ');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('MNaN 6LNaN 6LNaN 12LNaN 12Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('MNaN 48.5LNaN 48.5LNaN 54.5LNaN 54.5Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('MNaN 92LNaN 92LNaN 98LNaN 98Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('MNaN 14LNaN 14.218615937502818LNaN 46LNaN 46Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('MNaN 56.5LNaN 56.71861593750282LNaN 88.5LNaN 88.5Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('MNaN 13.407400000000052LNaN 13.62601593750287LNaN 45.40740000000005LNaN 45.40740000000005Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('MNaN 56.5LNaN 56.71861593750282LNaN 88.5LNaN 88.5Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
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