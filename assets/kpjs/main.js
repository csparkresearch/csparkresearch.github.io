
(function($) {

	"use strict";

	var cfg = {		
		scrollDuration : 500, // smoothscroll duration
	},	

	$WIN = $(window);	

   // Add the User Agent to the <html>
   // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
	var doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);

	
	/* Preloader 
	 * -------------------------------------------------- */
	var ssPreloader = function() {

		$WIN.on('load', function() {	

			// force page scroll position to top at page refresh
			$('html, body').animate({ scrollTop: 0 }, 'normal');

         // will fade out the whole preloader DIV that covers the website.
	      $("#preloader").delay(500).fadeOut('slow');
	  
	  	});
	};


	/* Mobile Menu
	 * ---------------------------------------------------- */ 
	var ssMobileMenu = function() {

  		var toggleButton = $('.header-menu-toggle'),
          nav = $('#header-nav-wrap');

		toggleButton.on('click', function(event){
			event.preventDefault();

			toggleButton.toggleClass('is-clicked');
			nav.slideToggle();
		});

		if (toggleButton.is(':visible')) nav.addClass('mobile');

		$(window).resize(function() {
			if (toggleButton.is(':visible')) nav.addClass('mobile');
			else nav.removeClass('mobile');
		});

		$('#header-nav-wrap').find('a').on("click", function() {  

			if (nav.hasClass('mobile')) {   		
				toggleButton.toggleClass('is-clicked'); 
				nav.slideToggle();   		
			}     
		});

	}; 


	/* FitVids
	 * ---------------------------------------------------- */
	var ssFitVids = function() {
		$(".fluid-video-wrapper").fitVids();
	}; 




  /* Highlight the current section in the navigation bar
	* ------------------------------------------------------ */
	var ssWaypoints = function() {

		var sections = $("section"),
		navigation_links = $(".header-main-nav li a");
		sections.waypoint( {

	       handler: function(direction) {

			   var active_section;

				active_section = $('section#' + this.element.id);

				if (direction === "up") active_section = active_section.prev();

				var active_link = $('.header-main-nav li a[href="#' + active_section.attr("id") + '"]');			

	         navigation_links.parent().removeClass("current");
				active_link.parent().addClass("current");

			}, 

			offset: '25%'

		});
	};


  /* Smooth Scrolling
	* ------------------------------------------------------ */
	var ssSmoothScroll = function() {

		$('.smoothscroll').on('click', function (e) {
			var target = this.hash,
			$target    = $(target);
	 	
		 	e.preventDefault();
		 	e.stopPropagation();	  

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 75
			}, cfg.scrollDuration, 'swing', function () {
				// Replace window.location.hash which causes jump
				if (history.pushState) {
					history.pushState(null, null, target);
				} else {
					// Fallback for older browsers
					window.location.hash = target;
				}
			});

	  	});

	};



  /* Placeholder Plugin Settings
	* ------------------------------------------------------ */
	var ssPlaceholder = function() {
		$('input, textarea, select').placeholder();  
	};



  	/* Alert Boxes
  	------------------------------------------------------- */
  	var ssAlertBoxes = function() {

  		$('.alert-box').on('click', '.close', function() {
		  $(this).parent().fadeOut(500);
		}); 

  	};	  	
	


  /* Animate On Scroll
  	* ------------------------------------------------------ */
	var ssAOS = function() {

		AOS.init( {
      	offset: 200,
      	duration: 600,
      	easing: 'ease-in-sine',
      	delay: 300,
			once: true,
			disable: 'mobile'
    	});

	};



 
  /* Back to Top
	* ------------------------------------------------------ */
	var ssBackToTop = function() {

		var pxShow  = 500,         // height on which the button will show
		fadeInTime  = 400,         // how slow/fast you want the button to show
		fadeOutTime = 400,         // how slow/fast you want the button to hide
		scrollSpeed = 300,         // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
		goTopButton = $("#go-top")

		// Show or hide the sticky footer button
		$(window).on('scroll', function() {
			if ($(window).scrollTop() >= pxShow) {
				goTopButton.fadeIn(fadeInTime);
			} else {
				goTopButton.fadeOut(fadeOutTime);
			}
		});
	};	

  
	var onready = function() {
		// Create lightbox elements once and append to body
		$('body').append(`
			<div id="custom-lightbox" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background-color:rgba(0,0,0,0.9); z-index:9999;">
				<div style="position:relative; width:90%; max-width:1200px; margin:40px auto;">
					<span id="lightbox-close" style="position:absolute; right:-20px; top:-20px; color:white; font-size:24px; cursor:pointer;">&times;</span>
					<img id="lightbox-image" src="" style="width:100%; height:auto; display:block; max-height:90vh; object-fit:contain;">
				</div>
			</div>
		`);
	
		// Handle clicks on photocard elements
		$('.photocard, img.photocard').click(function(e) {
			e.preventDefault();
			
			// Get the image source
			let imgSrc;
			if ($(this).is('img')) {
				// If the clicked element is an image with photocard class
				imgSrc = $(this).attr('src');
			} else {
				// If the clicked element is a div with photocard class
				imgSrc = $(this).find('img').attr('src');
			}
	
			// Set the image source and show lightbox
			$('#lightbox-image').attr('src', imgSrc);
			$('#custom-lightbox').fadeIn(300);
		});
	
		// Close lightbox when clicking the close button or outside the image
		$('#lightbox-close, #custom-lightbox').click(function(e) {
			if (e.target === this) {
				$('#custom-lightbox').fadeOut(300);
			}
		});
	
		// Prevent closing when clicking on the image itself
		$('#lightbox-image').click(function(e) {
			e.stopPropagation();
		});
	
		// Close lightbox with escape key
		$(document).keyup(function(e) {
			if (e.key === "Escape") {
				$('#custom-lightbox').fadeOut(300);
			}
		});




		// Create observer options for lazy loading images
		const options = {
			root: null, // use viewport
			rootMargin: '50px', // start loading when image is 50px from viewport
			threshold: 0.1 // trigger when at least 10% of the image is visible
		};

		// Create observer
		const imageObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const img = entry.target;
					
					// Handle srcset if it exists
					if (img.dataset.srcset) {
						img.srcset = img.dataset.srcset;
						img.removeAttribute('data-srcset');
					}
					
					// Handle regular src
					if (img.dataset.src) {
						img.src = img.dataset.src;
						img.removeAttribute('data-src');
					}
					
					// Add a loading animation class
					img.classList.add('fade-in');
					
					// Stop observing this image
					observer.unobserve(img);
				}
			});
		}, options);

		// Find all images to lazy load
		const lazyImages = document.querySelectorAll('img[data-src], img[data-srcset]');

		// Observe each image
		lazyImages.forEach(img => {
			imageObserver.observe(img);
		});


		function isMobile() {
			return window.innerWidth <= 768; // You can adjust this breakpoint
		}
	
		function setResponsiveImage() {
			const images = document.getElementsByClassName('responsive-image');
			Array.from(images).forEach(img => {
				const srcToUse = isMobile() ? 
					img.getAttribute('data-src-mobile') : 
					img.getAttribute('data-src-desktop');
				
				if (img.src !== srcToUse) {
					img.src = srcToUse;
				}
			});
		}
	
		// Set initial image
		setResponsiveImage();
	
		// Update on resize
		let resizeTimer;
		window.addEventListener('resize', function() {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(setResponsiveImage, 250);
		});

		$('.ui.form').form({
			fields: {
				name: {
					identifier: 'name',
					rules: [{
						type: 'empty',
						prompt: 'Please enter your name'
					}]
				},
				email: {
					identifier: 'email',
					rules: [{
						type: 'email',
						prompt: 'Please enter a valid email address'
					}]
				},
				subject: {
					identifier: 'subject',
					rules: [{
						type: 'empty',
						prompt: 'Please enter a subject'
					}]
				},
				message: {
					identifier: 'message',
					rules: [{
						type: 'minLength[10]',
						prompt: 'Please enter at least 10 characters in your message'
					}]
				}
			},
			inline: true,
			on: 'blur'
		});


	};
	
  /* Initialize
	* ------------------------------------------------------ */
	(function ssInit() {

		ssPreloader();
		ssMobileMenu();
		ssFitVids();
		ssWaypoints();
		ssSmoothScroll();
		ssPlaceholder();
		ssAlertBoxes();
		ssAOS();		
		ssBackToTop();
		onready();

		
	})();
 

})(jQuery);