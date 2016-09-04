// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_hardware_RaspiINPUT = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_hardware_RaspiINPUT",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:106.25999999999931,height:259.50000000000045},attr), setter, getter);
     var port;
     // gpo_9
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(87.92923019010017, 27.028901734104302));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_9");
     port.setMaxFanOut(20);
     // gpo_10
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(87.92923019010017, 36.80154142581882));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_10");
     port.setMaxFanOut(20);
     // gpo_11
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(87.92923019010017, 45.96548169556847));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_11");
     port.setMaxFanOut(20);
     // gpo_12
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(87.92923019010017, 55.20276493256265));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_12");
     port.setMaxFanOut(20);
     // gpo_13
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(87.92923019010017, 63.998025048169545));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_13");
     port.setMaxFanOut(20);
     // gpo_14
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(87.92923019010017, 73.60308285163764));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_14");
     port.setMaxFanOut(20);
     // gpo_15
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(87.92923019010017, 83.00871868978784));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_15");
     port.setMaxFanOut(20);
     // gpo_16
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(87.92923019010017, 91.90455684007681));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpo_16");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 106.25999999999931;
      this.originalHeight= 259.50000000000045;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L106.25999999999931,0 L106.25999999999931,259.50000000000045 L0,259.50000000000045");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M92.80000000000018,48Q92.80000000000018,46 94.80000000000018, 46L104.25999999999931,46Q106.25999999999931,46 106.25999999999931, 44L106.25999999999931,2Q106.25999999999931,0 104.25999999999931, 0L3.259999999999309,0Q1.2599999999993088,0 1.2599999999993088, 2L1.2599999999993088,44Q1.2599999999993088,46 1.2481969268556659, 47.99996517156282L0.011803073143642928,257.5000348284376Q0,259.50000000000045 2, 259.50000000000045L90.80000000000018,259.50000000000045Q92.80000000000018,259.50000000000045 92.80000000000018, 257.50000000000045L92.80000000000018,48');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'Input GPIO');
        shape.attr({"x":8.433599999999842,"y":21,"text-anchor":"start","text":"Input GPIO","font-family":"\"Arial\"","font-size":18,"stroke":"none","fill":"#BD2466","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":15.5,"ry":16.5,"cx":38.17006024419561,"cy":69.39887499999986,"stroke":"none","stroke-width":0,"fill":"#000000","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Rectangle
        shape = this.canvas.paper.path('M43.75408024419585 60.105025000000296L32.612960244196074 60.105025000000296L32.612960244196074 50.274625000000015L43.75408024419585 50.274625000000015Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#000000","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M30.924815107440736,83.68742174722047Q30.44116155235588,81.32120856431811 34.10093600532491, 80.53730360715895L34.10093600532491,80.53730360715895Q37.76071045829394,79.75339864999978 40.99098818166249, 80.42978257348136L40.99098818166249,80.42978257348136Q44.22126590503103,81.10616649696294 44.41711307461355, 83.57990071354288L44.41711307461355,83.57990071354288Q44.612960244196074,86.05363493012283 40.89821187939583, 87.32220267578282L40.89821187939583,87.32220267578282Q37.18346351459559,88.59077042144281 34.29596608856059, 87.32220267578282L34.29596608856059,87.32220267578282Q31.408468662525593,86.05363493012283 30.924815107440736, 83.68742174722047L30.924815107440736,83.68742174722047');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M55.45418518903647,52.684774099766614Q53.733734582847774,56.295874999999796 49.73546434134839, 56.17825240038365L45.684154891136885,56.05906947361763Q41.6858846496375,55.941446874001485 41.439632192430956, 51.9490341038436L41.38932543740248,51.133426684209084Q41.14307298019594,47.1410139140512 43.55925976809294, 45.07721283353885L43.55925976809294,45.07721283353885Q45.97544655598995,43.0134117530265 48.92850425588631, 42.42600568051239L48.92850425588631,42.42600568051239Q51.88156195578267,41.838599607998276 55.85059327786345, 42.33537960391366L56.16077573811711,42.37420329383533Q60.12980706019789,42.87098328975071 58.40935645400919, 46.482084189983894L55.45418518903647,52.684774099766614');
        shape.attr({"stroke":"#000000","stroke-width":2,"fill":"#6B8E23","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":5.5,"ry":5.5,"cx":38.112960244196074,"cy":75.10027500000024,"stroke":"#000000","stroke-width":1,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":4,"ry":4.5,"cx":43.032460244196045,"cy":65.82042500000034,"stroke":"none","stroke-width":0,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":4,"ry":4.5,"cx":34.532460244196045,"cy":65.32042500000034,"stroke":"none","stroke-width":0,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Rectangle
        shape = this.canvas.paper.path('M40.84056866252536,49.09992905405329Q39.215568662525584,52.84992905405397 35.21556866252422, 54.572902027026885L35.21556866252422,54.572902027026885Q31.215568662522855,56.295874999999796 28.871818662524447, 55.383712837837265L28.871818662524447,55.383712837837265Q26.52806866252604,54.471550675674735 24.934318662525357, 52.545874999999114L24.934318662525357,52.545874999999114Q23.340568662524674,50.620199324323494 21.903068662524902, 46.870199324323494L21.903068662524902,46.870199324323494Q20.46556866252513,43.120199324323494 26.340568662524902, 42.208037162161645L26.340568662524902,42.208037162161645Q32.215568662524674,41.295874999999796 37.3405686625249, 43.3229020270262L37.3405686625249,43.3229020270262Q42.46556866252513,45.34992905405261 40.84056866252536, 49.09992905405329L40.84056866252536,49.09992905405329');
        shape.attr({"stroke":"#000000","stroke-width":2,"fill":"#6B8E23","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M23.02882662060938,74.0007223716168Q23.59208457869363,69.60027500000024 27.74146188256441, 71.61934036716593L27.74146188256441,71.61934036716593Q31.890839186435187,73.63840573433163 32.17820392448016, 77.51343261639295L32.17820392448016,77.51343261639295Q32.46556866252513,81.38845949845427 29.711728774439734, 81.99436724922725L29.711728774439734,81.99436724922725Q26.95788888635434,82.60027500000024 24.711728774439734, 80.5007223716168L24.711728774439734,80.5007223716168Q22.46556866252513,78.40116974323337 23.02882662060938, 74.0007223716168L23.02882662060938,74.0007223716168');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M44.90960119620263,76.51260111401803Q45.730557192046945,73.35769425824128 49.652081781261586, 72.28416780326393L49.652081781261586,72.28416780326393Q53.57360637047623,71.21064134828657 53.500811374411114, 72.11279984946896L53.500811374411114,72.11279984946896Q53.428016378346,73.01495835065134 52.77048831127104, 77.06178392455286L52.77048831127104,77.06178392455286Q52.112960244196074,81.10860949845437 47.98473082138935, 81.88631594106755L47.98473082138935,81.88631594106755Q43.85650139858262,82.66402238368073 43.97257329947047, 81.16576517673775L43.97257329947047,81.16576517673775Q44.088645200358314,79.66750796979477 44.90960119620263, 76.51260111401803L44.90960119620263,76.51260111401803');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M47.176218202280324,63.220872371616906Q47.739476160364575,58.82042500000034 51.88885346423535, 60.839490367166036L51.88885346423535,60.839490367166036Q56.03823076810613,62.85855573433173 56.3255955061511, 66.73358261639305L56.3255955061511,66.73358261639305Q56.612960244196074,70.60860949845437 53.85912035611068, 71.21451724922736L53.85912035611068,71.21451724922736Q51.105280468025285,71.82042500000034 48.85912035611068, 69.7208723716169L48.85912035611068,69.7208723716169Q46.612960244196074,67.62131974323347 47.176218202280324, 63.220872371616906L47.176218202280324,63.220872371616906');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M41.095718202280295,55.94533856496514Q41.658976160364546,52.89887499999986 45.808353464235324, 54.29668948496078L45.808353464235324,54.29668948496078Q49.9577307681061,55.6945039699217 50.245095506151074, 58.37721488827174L50.245095506151074,58.37721488827174Q50.532460244196045,61.05992580662178 47.77862035611065, 61.47940040331082L47.77862035611065,61.47940040331082Q45.024780468025256,61.89887499999986 42.77862035611065, 60.44533856496514L42.77862035611065,60.44533856496514Q40.532460244196045,58.99180212993042 41.095718202280295, 55.94533856496514L41.095718202280295,55.94533856496514');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M24.07825340077011,60.159288069537524Q27.69093813901509,57.82042500000034 29.30628473824413, 59.667691675325386L29.30628473824413,59.667691675325386Q30.921631337473173,61.51495835065043 29.87755621375777, 65.86243163527183L29.87755621375777,65.86243163527183Q28.83348109004237,70.20990491989323 25.65014447235626, 70.9876113625071L25.65014447235626,70.9876113625071Q22.46680785467015,71.76531780512096 21.46618825859764, 67.13173447209783L21.46618825859764,67.13173447209783Q20.46556866252513,62.49815113907471 24.07825340077011, 60.159288069537524L24.07825340077011,60.159288069537524');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M33.30670269910638,52.553454946707916Q36.814328147937886,51.89887499999986 38.80670269910638, 52.958627384555484L38.80670269910638,52.958627384555484Q40.79907725027488,54.01837976911111 39.28820569131358, 56.5124675160032L39.28820569131358,56.5124675160032Q37.77733413235228,59.00655526289529 33.24738487274112, 59.66746349624805L33.24738487274112,59.66746349624805Q28.717435613129965,60.3283717296008 29.25825643170242, 56.76820331150839L29.25825643170242,56.76820331150839Q29.799077250274877,53.20803489341597 33.30670269910638, 52.553454946707916L33.30670269910638,52.553454946707916');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'9');
        shape.attr({"x":70.67006024419561,"y":71.60027500000024,"text-anchor":"start","text":"9","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'10');
        shape.attr({"x":65.57360637047623,"y":97,"text-anchor":"start","text":"10","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'11');
        shape.attr({"x":66.57360637047623,"y":120.8588749999999,"text-anchor":"start","text":"11","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'12');
        shape.attr({"x":66.67006024419561,"y":143.8588749999999,"text-anchor":"start","text":"12","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'13');
        shape.attr({"x":66.67006024419561,"y":167.23327500000005,"text-anchor":"start","text":"13","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'14');
        shape.attr({"x":66.57360637047623,"y":191.00137499999983,"text-anchor":"start","text":"14","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'15');
        shape.attr({"x":67.57360637047623,"y":217,"text-anchor":"start","text":"15","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'16');
        shape.attr({"x":67.57360637047623,"y":239.55374999999958,"text-anchor":"start","text":"16","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Line_shadow
        shape = this.canvas.paper.path('M53.5 48.5L52.5,49.5Q50.750892052200015,50.15600319199939 49.5, 51.5L48.5,53.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M53.5 48.5L52.5,49.5Q50.750892052200015,50.15600319199939 49.5, 51.5L48.5,53.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M37.5 52.5L36.5,50.5Q35.12265320419647,48.90872203999788 33.5, 47.5L30.5,46.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M37.5 52.5L36.5,50.5Q35.12265320419647,48.90872203999788 33.5, 47.5L30.5,46.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        

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
draw2d_circuit_hardware_RaspiINPUT = draw2d_circuit_hardware_RaspiINPUT.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         // your special code here
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function()
    {
        this.getOutputPorts().each(function(index,port){
            port.setValue(hardware.gpio.get(port.getName()));
        });
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function()
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function()
    {
    }
});
draw2d_circuit_hardware_RaspiINPUT.github="./shapes/org/draw2d/circuit/hardware/RaspiINPUT.shape";