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
        shape = this.canvas.paper.path('M12.965599356608141,3.9933553850511885Q13.19606143306055,0 17.19606143306055, 3.077116553600654e-14L68.3095000000003,4.239761853504576e-13Q72.3095000000003,4.547473508864641e-13 72.06936973301863, 3.9927856760516107L66.41524459758811,98.00721432394884Q66.17511433060645,102 62.17511433060645, 102L11.309500000000298,102Q7.309500000000298,102 7.539962076452707, 98.00664461494881L12.965599356608141,3.9933553850511885');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","circle");
        
        // seg_a
        shape = this.canvas.paper.path('M25.792999999999665 6L61.792999999999665 6L61.792999999999665 12L25.792999999999665 12Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_a");
        
        // seg_b
        shape = this.canvas.paper.path('M62.991241562955565 13.5L67.89649999999983 13.718615937502818L65.8017584370441 45.5L60.89649999999983 45.5Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_b");
        
        // seg_c
        shape = this.canvas.paper.path('M60.09474156295573 57L65 57.21861593750282L62.90525843704427 89L58 89Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_c");
        
        // seg_d
        shape = this.canvas.paper.path('M20.5 92L56.5 92L56.5 98L20.5 98Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_d");
        
        // seg_e
        shape = this.canvas.paper.path('M16.594741562955733 57L21.5 57.21861593750282L19.405258437044267 89L14.5 89Z');
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
            _this.layerShow(element.s, element.p.getValue());
        });
    }

});
draw2d_circuit_display_7Segment.logic="calculate: function () {\n    var _this = this;\n    this.portLockup.forEach(function (element, index) {\n        _this.layerShow(element.s, element.p.getValue());\n    });\n}";
draw2d_circuit_display_7Segment.github="./shapes/org/draw2d/circuit/display/7Segment.shape";