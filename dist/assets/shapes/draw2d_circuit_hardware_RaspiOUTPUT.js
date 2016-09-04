// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_hardware_RaspiOUTPUT = draw2d.SetFigure.extend({            

   NAME: "draw2d_circuit_hardware_RaspiOUTPUT",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:106.61262500000112,height:259.50000000000045},attr), setter, getter);
     var port;
     // gpi_1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(15.249587226836221, 28.968047990643996));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_1");
     port.setMaxFanOut(1);
     // gpi_2
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(15.249587226836221, 38.7283236994219));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_2");
     port.setMaxFanOut(1);
     // gpi_3
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(15.249587226836221, 47.892263969171545));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_3");
     port.setMaxFanOut(1);
     // gpi_4
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(15.249587226836221, 57.12954720616573));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_4");
     port.setMaxFanOut(1);
     // gpi_5
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(15.249587226836221, 65.92480732177262));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_5");
     port.setMaxFanOut(1);
     // gpi_6
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(15.249587226836221, 75.1445086705201));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_6");
     port.setMaxFanOut(1);
     // gpi_7
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(15.249587226836221, 84.93550096339092));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_7");
     port.setMaxFanOut(1);
     // gpi_8
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(15.249587226836221, 93.83133911367989));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("gpi_8");
     port.setMaxFanOut(1);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 106.61262500000112;
      this.originalHeight= 259.50000000000045;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L106.61262500000112,0 L106.61262500000112,259.50000000000045 L0,259.50000000000045");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M106.60618588992817,47.99999999907308Q106.60612499999843,46 106.60612499999843, 44L106.60612499999843,2Q106.60612499999843,0 104.60612499999843, 0L3.6061249999984284,0Q1.6061249999984284,0 1.6061249999984284, 2L1.6061249999984284,44Q1.6061249999984284,46 3.6061249999984284, 46L14.34612499999912,46Q16.34612499999912,46 16.34612499999912, 48L16.34612499999912,257.50000000000045Q16.34612499999912,259.50000000000045 18.34612499999912, 259.50000000000045L104.61262500000112,259.50000000000045Q106.61262500000112,259.50000000000045 106.61256411007138, 257.50000000092734L106.60618588992817,47.99999999907308');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'Output GPIO');
        shape.attr({"x":4,"y":22.440124999999625,"text-anchor":"start","text":"Output GPIO","font-family":"\"Arial\"","font-size":17,"stroke":"none","fill":"#BD2466","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'1');
        shape.attr({"x":25.25798524419497,"y":76.6720845357213,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'2');
        shape.attr({"x":27.25798524419497,"y":102,"text-anchor":"start","text":"2","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'3');
        shape.attr({"x":27.25798524419497,"y":125.8588749999999,"text-anchor":"start","text":"3","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'4');
        shape.attr({"x":27.25798524419497,"y":148.8588749999999,"text-anchor":"start","text":"4","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'5');
        shape.attr({"x":27.25798524419497,"y":172.23327500000005,"text-anchor":"start","text":"5","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'6');
        shape.attr({"x":27.25798524419497,"y":198.00137499999983,"text-anchor":"start","text":"6","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'7');
        shape.attr({"x":27.25798524419497,"y":223,"text-anchor":"start","text":"7","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'8');
        shape.attr({"x":27.25798524419497,"y":244.55374999999958,"text-anchor":"start","text":"8","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":15.5,"ry":16.5,"cx":69.08258524419489,"cy":72.39887499999986,"stroke":"none","stroke-width":0,"fill":"#000000","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Rectangle
        shape = this.canvas.paper.path('M74.66660524419513 63.105025000000296L63.52548524419535 63.105025000000296L63.52548524419535 53.274625000000015L74.66660524419513 53.274625000000015Z');
        shape.attr({"stroke":"none","stroke-width":0,"fill":"#000000","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M61.83734010744001,86.68742174722047Q61.35368655235516,84.32120856431811 65.01346100532419, 83.53730360715895L65.01346100532419,83.53730360715895Q68.67323545829322,82.75339864999978 71.90351318166176, 83.42978257348136L71.90351318166176,83.42978257348136Q75.13379090503031,84.10616649696294 75.32963807461283, 86.57990071354288L75.32963807461283,86.57990071354288Q75.52548524419535,89.05363493012283 71.81073687939511, 90.32220267578282L71.81073687939511,90.32220267578282Q68.09598851459486,91.59077042144281 65.20849108855987, 90.32220267578282L65.20849108855987,90.32220267578282Q62.32099366252487,89.05363493012283 61.83734010744001, 86.68742174722047L61.83734010744001,86.68742174722047');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M86.36671018903576,55.684774099766614Q84.64625958284705,59.295874999999796 80.64798934134767, 59.17825240038365L76.59667989113616,59.05906947361763Q72.59840964963678,58.941446874001485 72.35215719243024, 54.9490341038436L72.30185043740175,54.133426684209084Q72.05559798019522,50.1410139140512 74.47178476809222, 48.07721283353885L74.47178476809222,48.07721283353885Q76.88797155598922,46.0134117530265 79.84102925588559, 45.42600568051239L79.84102925588559,45.42600568051239Q82.79408695578195,44.838599607998276 86.76311827786273, 45.33537960391366L87.07330073811639,45.37420329383533Q91.04233206019717,45.87098328975071 89.32188145400846, 49.482084189983894L86.36671018903576,55.684774099766614');
        shape.attr({"stroke":"#000000","stroke-width":2,"fill":"#6B8E23","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":5.5,"ry":5.5,"cx":69.02548524419535,"cy":78.10027500000024,"stroke":"#000000","stroke-width":1,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":4,"ry":4.5,"cx":73.94498524419532,"cy":68.82042500000034,"stroke":"none","stroke-width":0,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":4,"ry":4.5,"cx":65.44498524419532,"cy":68.32042500000034,"stroke":"none","stroke-width":0,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Circle");
        
        // Rectangle
        shape = this.canvas.paper.path('M71.75309366252463,52.09992905405329Q70.12809366252486,55.84992905405397 66.1280936625235, 57.572902027026885L66.1280936625235,57.572902027026885Q62.12809366252213,59.295874999999796 59.784343662523725, 58.383712837837265L59.784343662523725,58.383712837837265Q57.440593662525316,57.471550675674735 55.846843662524634, 55.545874999999114L55.846843662524634,55.545874999999114Q54.25309366252395,53.620199324323494 52.81559366252418, 49.870199324323494L52.81559366252418,49.870199324323494Q51.37809366252441,46.120199324323494 57.25309366252418, 45.208037162161645L57.25309366252418,45.208037162161645Q63.12809366252395,44.295874999999796 68.25309366252418, 46.3229020270262L68.25309366252418,46.3229020270262Q73.3780936625244,48.34992905405261 71.75309366252463, 52.09992905405329L71.75309366252463,52.09992905405329');
        shape.attr({"stroke":"#000000","stroke-width":2,"fill":"#6B8E23","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M53.94135162060866,77.0007223716168Q54.50460957869291,72.60027500000024 58.653986882563686, 74.61934036716593L58.653986882563686,74.61934036716593Q62.803364186434465,76.63840573433163 63.090728924479436, 80.51343261639295L63.090728924479436,80.51343261639295Q63.37809366252441,84.38845949845427 60.62425377443901, 84.99436724922725L60.62425377443901,84.99436724922725Q57.87041388635362,85.60027500000024 55.62425377443901, 83.5007223716168L55.62425377443901,83.5007223716168Q53.37809366252441,81.40116974323337 53.94135162060866, 77.0007223716168L53.94135162060866,77.0007223716168');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M75.8221261962019,79.51260111401803Q76.64308219204622,76.35769425824128 80.56460678126086, 75.28416780326393L80.56460678126086,75.28416780326393Q84.4861313704755,74.21064134828657 84.41333637441039, 75.11279984946896L84.41333637441039,75.11279984946896Q84.34054137834528,76.01495835065134 83.68301331127032, 80.06178392455286L83.68301331127032,80.06178392455286Q83.02548524419535,84.10860949845437 78.89725582138863, 84.88631594106755L78.89725582138863,84.88631594106755Q74.7690263985819,85.66402238368073 74.88509829946975, 84.16576517673775L74.88509829946975,84.16576517673775Q75.00117020035759,82.66750796979477 75.8221261962019, 79.51260111401803L75.8221261962019,79.51260111401803');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M78.0887432022796,66.2208723716169Q78.65200116036385,61.82042500000034 82.80137846423463, 63.839490367166036L82.80137846423463,63.839490367166036Q86.95075576810541,65.85855573433173 87.23812050615038, 69.73358261639305L87.23812050615038,69.73358261639305Q87.52548524419535,73.60860949845437 84.77164535610996, 74.21451724922736L84.77164535610996,74.21451724922736Q82.01780546802456,74.82042500000034 79.77164535610996, 72.7208723716169L79.77164535610996,72.7208723716169Q77.52548524419535,70.62131974323347 78.0887432022796, 66.2208723716169L78.0887432022796,66.2208723716169');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M72.00824320227957,58.94533856496514Q72.57150116036382,55.89887499999986 76.7208784642346, 57.29668948496078L76.7208784642346,57.29668948496078Q80.87025576810538,58.6945039699217 81.15762050615035, 61.37721488827174L81.15762050615035,61.37721488827174Q81.44498524419532,64.05992580662178 78.69114535610993, 64.47940040331082L78.69114535610993,64.47940040331082Q75.93730546802453,64.89887499999986 73.69114535610993, 63.44533856496514L73.69114535610993,63.44533856496514Q71.44498524419532,61.99180212993042 72.00824320227957, 58.94533856496514L72.00824320227957,58.94533856496514');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M54.990778400769386,63.159288069537524Q58.603463139014366,60.82042500000034 60.21880973824341, 62.667691675325386L60.21880973824341,62.667691675325386Q61.83415633747245,64.51495835065043 60.79008121375705, 68.86243163527183L60.79008121375705,68.86243163527183Q59.74600609004165,73.20990491989323 56.56266947235554, 73.9876113625071L56.56266947235554,73.9876113625071Q53.37933285466943,74.76531780512096 52.37871325859692, 70.13173447209783L52.37871325859692,70.13173447209783Q51.37809366252441,65.49815113907471 54.990778400769386, 63.159288069537524L54.990778400769386,63.159288069537524');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Rectangle
        shape = this.canvas.paper.path('M64.21922769910566,55.553454946707916Q67.72685314793716,54.89887499999986 69.71922769910566, 55.958627384555484L69.71922769910566,55.958627384555484Q71.71160225027415,57.01837976911111 70.20073069131286, 59.5124675160032L70.20073069131286,59.5124675160032Q68.68985913235156,62.00655526289529 64.1599098727404, 62.66746349624805L64.1599098727404,62.66746349624805Q59.62996061312924,63.3283717296008 60.1707814317017, 59.76820331150839L60.1707814317017,59.76820331150839Q60.711602250274154,56.20803489341597 64.21922769910566, 55.553454946707916L64.21922769910566,55.553454946707916');
        shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#B3003B","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Line_shadow
        shape = this.canvas.paper.path('M81.5 51.5L80.5,52.5Q78.66341705219929,53.15600319199939 77.5, 54.5L76.5,56.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M81.5 51.5L80.5,52.5Q78.66341705219929,53.15600319199939 77.5, 54.5L76.5,56.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line");
        
        // Line_shadow
        shape = this.canvas.paper.path('M65.5 55.5L64.5,53.5Q63.035178204195745,51.90872203999788 60.5, 50.5L58.5,49.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"stroke-dasharray":null,"opacity":1});
        shape.data("name","Line_shadow");
        
        // Line
        shape = this.canvas.paper.path('M65.5 55.5L64.5,53.5Q63.035178204195745,51.90872203999788 60.5, 50.5L58.5,49.5');
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
draw2d_circuit_hardware_RaspiOUTPUT = draw2d_circuit_hardware_RaspiOUTPUT.extend({

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
        this.getInputPorts().each(function(index,port){
            if(port.hasChangedValue() && port.getConnections().getSize()>0){
                hardware.gpio.set(port.getName(), port.getValue());
            }
        });
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
draw2d_circuit_hardware_RaspiOUTPUT.github="./shapes/org/draw2d/circuit/hardware/RaspiOUTPUT.shape";