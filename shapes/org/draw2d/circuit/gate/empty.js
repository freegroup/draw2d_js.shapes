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
        shape = this.canvas.paper.path('M5 0L54 0L54 61L5 61Z');
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

         // your special code here
    }

});
draw2d_circuit_gate_empty.github="./shapes/org/draw2d/circuit/gate/empty.shape";