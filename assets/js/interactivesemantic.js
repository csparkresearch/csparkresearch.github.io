
$(document).ready(function(){

                $('.launchsvg').bind('click', function(){
                  var link= $(this).attr('href');
				  JSBridge.openSVG(link);
                });

                $('.launchxml').bind('click', function(){
                  var link= $(this).attr('href');
				  JSBridge.openXML(link);
                });


        }); 

