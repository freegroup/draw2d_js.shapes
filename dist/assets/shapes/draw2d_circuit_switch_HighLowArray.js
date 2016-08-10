// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_switch_HighLowArray = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_switch_HighLowArray",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:20,height:160},attr), setter, getter);
     var port;
     // port01
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 6.24381249999999));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port01");
     port.setMaxFanOut(20);
     // port02
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 19.375));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port02");
     port.setMaxFanOut(20);
     // port03
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 31.25));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port03");
     port.setMaxFanOut(20);
     // port04
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 43.75));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port04");
     port.setMaxFanOut(20);
     // port05
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 56.122437500000046));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port05");
     port.setMaxFanOut(20);
     // port06
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 68.72787499999987));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port06");
     port.setMaxFanOut(20);
     // port07
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 81.1621875000003));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port07");
     port.setMaxFanOut(20);
     // port08
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 93.93256250000007));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("port08");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 20;
      this.originalHeight= 160;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L20,0 L20,160 L0,160");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // rect01
        shape = this.canvas.paper.path('M20 20L0 20L0 0L20 0Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","rect01");
        
        // rect02
        shape = this.canvas.paper.path('M20 40L0 40L0 20L20 20Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","rect02");
        
        // rect03
        shape = this.canvas.paper.path('M20 60L0 60L0 40L20 40Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","rect03");
        
        // rect04
        shape = this.canvas.paper.path('M20 80L0 80L0 60L20 60Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","rect04");
        
        // rect05
        shape = this.canvas.paper.path('M20 100L0 100L0 80L20 80Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","rect05");
        
        // rect06
        shape = this.canvas.paper.path('M20 120L0 120L0 100L20 100Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","rect06");
        
        // rect07
        shape = this.canvas.paper.path('M20 140L0 140L0 120L20 120Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","rect07");
        
        // rect08
        shape = this.canvas.paper.path('M20 160L0 160L0 140L20 140Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","rect08");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      if(this.svgNodes===null) return null;

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
     if(this.svgNodes===null) return;

     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(this.svgNodes===null) return;

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
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    getParameterSettings: function()
    {
        return [];
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
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
draw2d_circuit_switch_HighLowArray = draw2d_circuit_switch_HighLowArray.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);


        this.setResizeable(false);
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        this.on("click",function(emitter, event){
            var h = emitter.getHeight();
            var modh = h/8;
            var index = (event.relY/modh)|0;
            var port = emitter.getOutputPort(index);
            port.setValue(!port.getValue());
            emitter.layerAttr("rect0"+(index+1), {fill:port.getValue()?"#C21B7A":null});
        });
    },
    
    calculate: function()
    {
    
        
    }

});
draw2d_circuit_switch_HighLowArray.github="./shapes/org/draw2d/circuit/switch/HighLowArray.shape";