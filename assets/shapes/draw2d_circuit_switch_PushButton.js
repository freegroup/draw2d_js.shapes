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
     this._super( $.extend({stroke:0, bgColor:null, width:89.07457499999964,height:34.483999999999924},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.17968567349375, 68.10114835865902));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Port");
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 89.07457499999964;
      this.originalHeight= 34.483999999999924;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L89.07457499999964,0 L89.07457499999964,34.483999999999924 L0,34.483999999999924");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Label
        shape = this.canvas.paper.text(0,0,'High');
        shape.attr({"x":4,"y":22.483999999999924,"text-anchor":"start","text":"High","font-family":"\"Arial\"","font-size":13,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":4.5,"ry":4,"cx":48.21875,"cy":22.983999999999924,"stroke":"none","stroke-width":0,"fill":"#000000","opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":4.5,"ry":4,"cx":71.21875,"cy":23.483999999999924,"stroke":"none","stroke-width":0,"fill":"#000000","opacity":1});
        shape.data("name","Circle");
        
        // low
        shape = this.canvas.paper.path('M69.84457500000008,8.735999999999876Q67.84457500000008,8.735999999999876 67.84457500000008, 6.735999999999876L67.84457500000008,2Q67.84457500000008,0 65.84457500000008, 0L54.84457500000008,0Q52.84457500000008,0 52.84457500000008, 2L52.84457500000008,6.735999999999876Q52.84457500000008,8.735999999999876 50.84457500000008, 8.735999999999876L46.018175000000156,8.735999999999876Q44.018175000000156,8.735999999999876 44.018175000000156, 10.735999999999876L44.018175000000156,11.735999999999876Q44.018175000000156,13.735999999999876 46.018175000000156, 13.735999999999876L74.01817500000016,13.735999999999876Q76.01817500000016,13.735999999999876 76.01817500000016, 11.735999999999876L76.01817500000016,10.735999999999876Q76.01817500000016,8.735999999999876 74.01817500000016, 8.735999999999876L69.84457500000008,8.735999999999876');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","low");
        
        // high
        shape = this.canvas.paper.path('M66.03257500000018,16.235999999999876Q64.22057500000028,16.235999999999876 64.98692190867477, 14.388647187036133L67.07822809132558,9.347352812963743Q67.84457500000008,7.5 65.84457500000008, 7.5L54.84457500000008,7.5Q52.84457500000008,7.5 53.34652239007231, 9.435987814424376L54.60762760992772,14.3000121855755Q55.10957499999995,16.235999999999876 53.10957499999995, 16.235999999999876L46.018175000000156,16.235999999999876Q44.018175000000156,16.235999999999876 44.018175000000156, 18.235999999999876L44.018175000000156,19.235999999999876Q44.018175000000156,21.235999999999876 46.018175000000156, 21.235999999999876L74.01817500000016,21.235999999999876Q76.01817500000016,21.235999999999876 76.01817500000016, 19.235999999999876L76.01817500000016,18.235999999999876Q76.01817500000016,16.235999999999876 74.01817500000016, 16.235999999999876L69.84457500000008,16.235999999999876Q67.84457500000008,16.235999999999876 66.03257500000018, 16.235999999999876L66.03257500000018,16.235999999999876');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","high");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":4.5,"ry":4,"cx":35.71875,"cy":22.983999999999924,"stroke":"none","stroke-width":0,"fill":"#000000","opacity":1});
        shape.data("name","Circle");
        
        // Line_shadow
        shape = this.canvas.paper.path('M73.5 23.5L81.5,23.5L89.5,23.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M73.5 23.5L81.5,23.5L89.5,23.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":2,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M33.5 23.5L41.5,23.5L49.5,23.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M33.5 23.5L41.5,23.5L49.5,23.5');
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