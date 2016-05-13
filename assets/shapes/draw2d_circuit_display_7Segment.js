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
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(4.13923076923031, 5.791568627451031));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_a");
     port.setMaxFanOut(20);
     // port_b
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(2.6007692307687718, 20.098039215686274));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_b");
     port.setMaxFanOut(20);
     // port_c
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(1.0623076923072334, 34.80392156862745));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_c");
     port.setMaxFanOut(20);
     // port_d
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(0.29307692307646416, 49.509803921568626));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_d");
     port.setMaxFanOut(20);
     // port_e
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-0.4761538461543051, 64.2156862745098));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_e");
     port.setMaxFanOut(20);
     // port_f
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-2.0146153846158437, 78.92156862745098));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_f");
     port.setMaxFanOut(20);
     // port_g
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-3.5530769230773824, 93.62745098039215));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("port_g");
     port.setMaxFanOut(20);
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
        shape = this.canvas.paper.path('M18.483499999999367,7Q18.483499999999367,6 19.483499999999367, 6L53.48349999999937,6Q54.48349999999937,6 54.48349999999937, 7L54.48349999999937,11Q54.48349999999937,12 53.48349999999937, 12L19.483499999999367,12Q18.483499999999367,12 18.483499999999367, 11L18.483499999999367,7');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_a");
        
        // seg_b
        shape = this.canvas.paper.path('M55.616420692729506,14.497864311373519Q55.68174156295527,13.5 56.6807499014086, 13.544523473592088L59.5879916615462,13.67409246391073Q60.586999999999534,13.718615937502818 60.52123174129865, 14.716450861800148L58.55802669574469,44.50216507570267Q58.4922584370438,45.5 57.4922584370438, 45.5L54.586999999999534,45.5Q53.586999999999534,45.5 53.652320870225296, 44.50213568862648L55.616420692729506,14.497864311373519');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_b");
        
        // seg_c
        shape = this.canvas.paper.path('M52.71992069272967,57.99786431137352Q52.785241562955434,57 53.78424990140877, 57.044523473592086L56.691491661546365,57.17409246391073Q57.6904999999997,57.21861593750282 57.62473174129882, 58.21645086180015L55.661526695744854,88.00216507570266Q55.59575843704397,89 54.59575843704397, 89L51.6904999999997,89Q50.6904999999997,89 50.75582087022546, 88.00213568862648L52.71992069272967,57.99786431137352');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_c");
        
        // seg_d
        shape = this.canvas.paper.path('M13.190499999999702,93Q13.190499999999702,92 14.190499999999702, 92L48.1904999999997,92Q49.1904999999997,92 49.1904999999997, 93L49.1904999999997,97Q49.1904999999997,98 48.1904999999997, 98L14.190499999999702,98Q13.190499999999702,98 13.190499999999702, 97L13.190499999999702,93');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_d");
        
        // seg_e
        shape = this.canvas.paper.path('M9.219920692729675,57.99786431137352Q9.285241562955434,57 10.28424990140877, 57.044523473592086L13.191491661546365,57.17409246391073Q14.190499999999702,57.21861593750282 14.12473174129882, 58.21645086180015L12.16152669574485,88.00216507570266Q12.095758437043969,89 11.095758437043969, 89L8.190499999999702,89Q7.190499999999702,89 7.255820870225461, 88.00213568862648L9.219920692729675,57.99786431137352');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_e");
        
        // seg_f
        shape = this.canvas.paper.path('M11.654599822503915,15.40312862274709Q11.785241562955434,13.407400000000052 13.783258239862105, 13.496446947184229L14.69248332309303,13.536968990318694Q16.6904999999997,13.62601593750287 16.55896348259794, 15.621685786097526L14.727294954445732,43.41173015140539Q14.595758437043969,45.40740000000005 12.595758437043969, 45.40740000000005L11.690499999999702,45.40740000000005Q9.690499999999702,45.40740000000005 9.821141740451221, 43.411671377253015L11.654599822503915,15.40312862274709');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_f");
        
        // seg_g
        shape = this.canvas.paper.path('M16.086999999999534,49.5Q16.086999999999534,48.5 17.086999999999534, 48.5L51.086999999999534,48.5Q52.086999999999534,48.5 52.086999999999534, 49.5L52.086999999999534,53.5Q52.086999999999534,54.5 51.086999999999534, 54.5L17.086999999999534,54.5Q16.086999999999534,54.5 16.086999999999534, 53.5L16.086999999999534,49.5');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_g");
        

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
draw2d_circuit_display_7Segment = draw2d_circuit_display_7Segment.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

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
            _this.layerAttr(element.s, { fill:element.p.getValue()?"#C21B7A":null});
        });
    }

});
draw2d_circuit_display_7Segment.github="./shapes/org/draw2d/circuit/display/7Segment.shape";