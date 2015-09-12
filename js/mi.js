$(document).ready(function(){
var i = 1
        $("header nav .boton").click(function(){
           if(i==1) {
             $('ul').animate({left:'0'}); 
             i = 0;
          }
           
          else {
           $('ul').animate({left:'-100%'});
           i = 1;
                }
            
                    });
        });
            