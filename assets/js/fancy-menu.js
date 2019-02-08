
var main = {


  init : function() {
				/**
				* for each menu element, on mouseenter, 
				* we enlarge the image, and show both sdt_active span and 
				* sdt_wrap span. If the element has a sub menu (sdt_box),
				* then we slide it - if the element is the last one in the menu
				* we slide it to the left, otherwise to the right
				*/				
				
                $('#sdt_menu > li').bind('mouseenter',function(){
					var $elem = $(this);

					var $sub_links = $elem.find('.sublinks');
					var $top_padding = '140px';
					if($sub_links.length){
						$sub_links.show();
						$top_padding = '100px';
					}	

					$elem.find('img')
						 .stop(true)
						 .animate({
							'width':'170px',
							'height':'170px',
							'left':'0px'
						 },400,'easeOutBack')
						 .andSelf()
						 .find('.sdt_wrap')
					     .stop(true)
						 .animate({'top':$top_padding},500,'easeOutBack')
						 .andSelf()
						 .find('.sdt_active')
					     .stop(true)
						 .animate({'height':'170px'},300);
				}).bind('mouseleave',function(){
					var $elem = $(this);
					var $sub_menu = $elem.find('.sdt_box');
					if($sub_menu.length)
						$sub_menu.hide().css('left','0px');

					var $sub_links = $elem.find('.sublinks');
					if($sub_links.length)
						$sub_links.hide();
					
					$elem.find('.sdt_active')
						 .stop(true)
						 .animate({'height':'0px'},300)
						 .andSelf().find('img')
						 .stop(true)
						 .animate({
							'width':'0px',
							'height':'0px',
							'left':'85px'},400)
						 .andSelf()
						 .find('.sdt_wrap')
						 .stop(true)
						 .animate({'top':'25px'},500);
				});



                $('#flow_menu > li').bind('mouseenter',function(){
					var $elem = $(this);

					$elem.find('img')
						 .stop(true)
						 .animate({
							'width':'170px',
							'height':'170px',
							'left':'0px'
						 },400,'easeOutBack')
						 .andSelf()
						 .find('.flow_wrap')
					     .stop(true)
						 .animate({'top':'40px'},500,'easeOutBack')
						 .andSelf()
						 .find('.flow_active')
					     .stop(true)
						 .animate({'height':'60px'},300);
				}).bind('mouseleave',function(){
					var $elem = $(this);
					var $sub_menu = $elem.find('.flow_box');
					if($sub_menu.length)
						$sub_menu.hide().css('left','0px');

					$elem.find('.flow_active')
						 .stop(true)
						 .animate({'height':'0px'},300)
						 .andSelf().find('img')
						 .stop(true)
						 .animate({
							'width':'0px',
							'height':'0px',
							'left':'85px'},400)
						 .andSelf()
						 .find('.flow_wrap')
						 .stop(true)
						 .animate({'top':'5px'},500);
				});




  }

};

document.addEventListener('DOMContentLoaded', main.init);
