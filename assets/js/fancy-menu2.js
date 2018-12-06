
var main = {


  init : function() {
				/**
				* for auto-hiding menu, and for the fancy thumbnail popups 
				*/				
				var prevScrollpos = window.pageYOffset;
				window.onscroll = function() {
				var currentScrollPos = window.pageYOffset;
				  if (prevScrollpos > currentScrollPos) {
					document.getElementById("sticky-button").style.top = "0";
				  } else {
					document.getElementById("sticky-button").style.top = "-100px";
				  }
				  prevScrollpos = currentScrollPos;
				}

                $('#sdt_menu > li').bind('mouseenter',function(){
					var $elem = $(this);


					$elem.find('img')
						 .stop(true)
						 .animate({
							'width':'170px',
							'height':'170px',
							'left':'0px'
						 },400,'easeOutBack');
				}).bind('mouseleave',function(){
					var $elem = $(this);					
					$elem.find('.sdt_active')
						 .stop(true)
						 .animate({'height':'0px'},300)
						 .andSelf().find('img')
						 .stop(true)
						 .animate({
							'width':'0px',
							'height':'0px',
							'left':'85px'},400);
				});

 

var arrScripts = document.getElementsByTagName('script');
var currScript = arrScripts[arrScripts.length - 1];

var elem = $('<img id="dynamic">');

elem.attr('src', '{{include.poster}}');
elem.attr('class', 'img-responsive');

elem.appendTo(currScript.parentNode);

elem.mouseover(function () {
	this.src = "{{include.url}}";
}).mouseout( function (elm) {
	this.src = "{{include.poster}}";
});

 }

};

// 2fc73a3a967e97599c9763d05e564189

document.addEventListener('DOMContentLoaded', main.init);
