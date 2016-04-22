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
        shape = this.canvas.paper.path('M4,4Q4,0 8, 0L93,0Q97,0 97, 4L97,106Q97,110 93, 110L8,110Q4,110 4, 106L4,4');
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

         // your special code here
    }

});