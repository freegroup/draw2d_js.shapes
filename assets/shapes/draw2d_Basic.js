// Generated Code for the Draw2D touch HTML5 lib          
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Thu Mar 31 2016 17:19:41 GMT+0200 (CEST)                                         
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
                                                          
