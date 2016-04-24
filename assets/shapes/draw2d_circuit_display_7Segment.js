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
     this._super( $.extend({stroke:0, bgColor:null, width:65,height:102},attr), setter, getter);
     var port;
     // port_a
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(4.13923076923031, 5.791568627451031));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_a");
     // port_b
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(2.6007692307687718, 20.098039215686274));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_b");
     // port_c
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(1.0623076923072334, 34.80392156862745));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_c");
     // port_d
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(0.29307692307646416, 49.509803921568626));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_d");
     // port_e
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-0.4761538461543051, 64.2156862745098));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_e");
     // port_f
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-2.0146153846158437, 78.92156862745098));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_f");
     // port_g
     port = this.createPort("input", new draw2d.layout.locator.XYRelPortLocator(-3.5530769230773824, 93.62745098039215));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_g");
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 65;
      this.originalHeight= 102;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L65,0 L65,102 L0,102");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // circle
        shape = this.canvas.paper.path('M5.771330394834047,1.9966776925255942Q5.886561433060251,0 7.886561433060251, 1.538558276800327e-14L63,4.3936176811846085e-13Q65,4.547473508864641e-13 64.87993486650917, 1.9963928380260398L58.98567946409698,100.00360716197441Q58.86561433060615,102 56.86561433060615, 102L2,102Q0,102 0.11523103822620406, 100.0033223074744L5.771330394834047,1.9966776925255942');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","circle");
        
        // seg_a
        shape = this.canvas.paper.path('M18.483499999999367 6L54.48349999999937 6L54.48349999999937 12L18.483499999999367 12Z');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_a");
        
        // seg_b
        shape = this.canvas.paper.path('M55.68174156295527 13.5L60.586999999999534 13.718615937502818L58.4922584370438 45.5L53.586999999999534 45.5Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_b");
        
        // seg_c
        shape = this.canvas.paper.path('M52.785241562955434 57L57.6904999999997 57.21861593750282L55.59575843704397 89L50.6904999999997 89Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_c");
        
        // seg_d
        shape = this.canvas.paper.path('M13.190499999999702 92L49.1904999999997 92L49.1904999999997 98L13.190499999999702 98Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_d");
        
        // seg_e
        shape = this.canvas.paper.path('M9.285241562955434 57L14.190499999999702 57.21861593750282L12.095758437043969 89L7.190499999999702 89Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_e");
        
        // seg_f
        shape = this.canvas.paper.path('M11.785241562955434 13.407400000000052L16.6904999999997 13.62601593750287L14.595758437043969 45.40740000000005L9.690499999999702 45.40740000000005Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_f");
        
        // seg_g
        shape = this.canvas.paper.path('M16.086999999999534 48.5L52.086999999999534 48.5L52.086999999999534 54.5L16.086999999999534 54.5Z');
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
        this.portLockup.push({ p:this.getPort("port_f"), s:"seg_f"});
        this.portLockup.push({ p:this.getPort("port_g"), s:"seg_g"});
        
    },
    
    calculate:function()
    {
        var _this = this;
        this.portLockup.forEach(function(element, index){
            _this.layerAttr(element.s, { bgColor:element.p.getValue()?"#ff0000":null});
        });
    }

});
draw2d_circuit_display_7Segment.logic="calculate: function () {\n    var _this = this;\n    this.portLockup.forEach(function (element, index) {\n        _this.layerAttr(element.s, { bgColor: element.p.getValue() ? \'#ff0000\' : null });\n    });\n}";
draw2d_circuit_display_7Segment.github="./shapes/org/draw2d/circuit/display/7Segment.shape";