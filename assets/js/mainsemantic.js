
function modalify(){
	function deleteModal() {
        $('.ui.modal').each(function() {
            $(this).remove();
        });
    }
    $('.photocard').click(function() {
        // Delete any modals hanging around
        deleteModal();
        var image = $(this).children('img').attr('src');
        var header = $(this).children('img').attr('alt');
        if(header){
			$('body').append('<div class="ui modal"  style="height:90%;"><div class="header">'+header+'</div><div class="scrolling content" style="100%;max-height:95%;"><img src="'+image+'" class="ui fluid image centered" /></div></div>');        
		}else{
			$('body').append('<div class="ui modal" style="height:90%;"><div class="content" style="max-height:1800px;"><img src="'+image+'" class="ui fluid image centered" /></div></div>');        
		}
        $('.ui.modal')
            .modal('show');
    })

    $('.lightbox').click(function() {
        // Delete any modals hanging around
        deleteModal();
        var image = $(this).attr('src');
        var header = $(this).attr('alt');
        if(header){
			$('body').append('<div class="ui modal"  style="height:90%;"><div class="header">'+header+'</div><div class="scrolling content" style="100%;max-height:95%;"><img src="'+image+'" class="ui fluid image centered" /></div></div>');        
		}else{
			$('body').append('<div class="ui modal" style="height:90%;"><div class="content" style="max-height:1800px;"><img src="'+image+'" class="ui fluid image centered" /></div></div>');        
		}
        $('.ui.modal')
            .modal('show');
    })



}
function init_menu(){
	
	      $('.ui.menu .ui.dropdown').dropdown({
        on: 'hover'
      });
      $('.ui.menu a.item')
        .on('click', function() {
          $(this)
            .addClass('active')
            .siblings()
            .removeClass('active')
          ;
        })
      ;


      // fix menu when passed
      $('.masthead')
        .visibility({
          once: false,
          onBottomPassed: function() {
            $('.fixed.menu').transition('fade in');
          },
          onBottomPassedReverse: function() {
            $('.fixed.menu').transition('fade out');
          }
        })
      ;
      // create sidebar and attach to menu open
      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
      ;


}

$(document).ready(function(){
	init_menu();
	modalify();

$('.ui.accordion')
  .accordion()
;

$('.ui.sticky.toc')
  .sticky({
    context: '#toc-leftbar'
  });

$('.ui.sticky.leftbar')
  .sticky({
    context: '#leftbar'
  });

/*---LAZY LOAD IMAGES--*/
$('.image.lazy')
  .visibility({
    type       : 'image',
    transition : 'fade in',
    duration   : 400
  })
;


/*----YOUTUBE---*/

var youtube = document.querySelectorAll( ".youtube" );
for (var i = 0; i < youtube.length; i++) {
 
    // thumbnail image source.
    var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg"; 
 
    // Load the image asynchronously
    var image = new Image();
        image.src = source;
        image.addEventListener( "load", function() {
            youtube[ i ].appendChild( image );
        }( i ) );

    youtube[i].addEventListener( "click", function() {
 
	var iframe = document.createElement( "iframe" );
 
            iframe.setAttribute( "frameborder", "0" );
            iframe.setAttribute( "allowfullscreen", "" );
            iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
 
            this.innerHTML = "";
            this.appendChild( iframe );
    } );

}

/*----- PLAY BUTTON FOR CODE----*/

var newDiv = document.createElement('div');
newDiv.innerHTML='<div class="ui green right ribbon label autorun"><i class="download icon"></i>Download</div>';
$('.highlight pre').prepend(newDiv);

$( ".autorun" ).bind( "click", function() {
  var mycode= $(this).parent('div').parent('pre').children('code').text();

var link = document.createElement("a");
link.href = 'data:text/txt,' + encodeURIComponent(mycode);
link.download = "myfile.py";
link.click();
});

});    

