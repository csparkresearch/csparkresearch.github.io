
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
			$('body').append('<div class="ui modal fullscreen"  height="100%"><div class="header">'+header+'</div><div class="scrolling content fullscreen"><img src="'+image+'" class="ui fluid image centered" /></div></div>');        
		}else{
			$('body').append('<div class="ui modal"><div class="scrolling content"><img src="'+image+'" width="100%" /></div></div>');        
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

$('.ui.sticky')
  .sticky({
    context: '#example1'
  })
;

});    

