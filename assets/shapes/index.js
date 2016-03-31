// Generated Code for the Draw2D touch HTML5 lib          
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Thu Mar 31 2016 22:41:45 GMT+0200 (CEST)                                         
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
       },                                                 
                                                          
       createShapeElement : function()                    
       {                                                  
          var shape = this._super();                      
          this.originalWidth = 102;                 
          this.originalHeight= 110;                
          return shape;                                   
       },                                                 
                                                          
       createSet: function(){                             
            var set= this.canvas.paper.set();             
                                                          
            // BoundingBox                                 
            shape = this.canvas.paper.path("M0,0 L102,0 L102,110 L0,110");                    
            shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});                       
            set.push(shape);                              
                                               
            // undefined                                 
            shape = this.canvas.paper.path('M4.5,4.5Q4,0 8.5, 0.5L93.5,0.5Q97,0 97.5, 4.5L97.5,106.5Q97,110 93.5, 110.5L8.5,110.5Q4,110 4.5, 106.5L4.5,4.5');                    
            shape.attr({"fill":"79-#d9d9d9-#f0f0f0","stroke":"#303030","stroke-width":1,"opacity":1});                       
            set.push(shape);                              
                                               
            return set;                                   
       },                                                 
                                                          
       applyAlpha: function(){                            
       }                                                  
});                                                         
                                                          

// Generated Code for the Draw2D touch HTML5 lib          
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Thu Mar 31 2016 22:41:45 GMT+0200 (CEST)                                         
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_gate_AND = draw2d.SetFigure.extend({            
                                                          
       NAME: "draw2d_circuit_gate_AND",                           
                                                          
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
       },                                                 
                                                          
       createShapeElement : function()                    
       {                                                  
          var shape = this._super();                      
          this.originalWidth = 60;                 
          this.originalHeight= 61;                
          return shape;                                   
       },                                                 
                                                          
       createSet: function(){                             
            var set= this.canvas.paper.set();             
                                                          
            // BoundingBox                                 
            shape = this.canvas.paper.path("M0,0 L60,0 L60,61 L0,61");                    
            shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});                       
            set.push(shape);                              
                                               
            // Rectangle                                 
            shape = this.canvas.paper.path('M5.5 0.5L54.5 0.5L54.5 61.5L5.5 61.5Z');                    
            shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});                       
            set.push(shape);                              
                                               
            // Label                                 
            shape = this.canvas.paper.text(0,0,'&');                    
            shape.attr({"x":19,"y":29,"text-anchor":"start","text":"&","font-family":"\"Arial\"","font-size":30,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});                       
            set.push(shape);                              
                                               
            return set;                                   
       },                                                 
                                                          
       applyAlpha: function(){                            
       }                                                  
});                                                         
                                                          

// Generated Code for the Draw2D touch HTML5 lib          
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Thu Mar 31 2016 22:41:44 GMT+0200 (CEST)                                         
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
       },                                                 
                                                          
       createShapeElement : function()                    
       {                                                  
          var shape = this._super();                      
          this.originalWidth = 60;                 
          this.originalHeight= 61;                
          return shape;                                   
       },                                                 
                                                          
       createSet: function(){                             
            var set= this.canvas.paper.set();             
                                                          
            // BoundingBox                                 
            shape = this.canvas.paper.path("M0,0 L60,0 L60,61 L0,61");                    
            shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});                       
            set.push(shape);                              
                                               
            // Rectangle                                 
            shape = this.canvas.paper.path('M5.5 0.5L54.5 0.5L54.5 61.5L5.5 61.5Z');                    
            shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});                       
            set.push(shape);                              
                                               
            return set;                                   
       },                                                 
                                                          
       applyAlpha: function(){                            
       }                                                  
});                                                         
                                                          
