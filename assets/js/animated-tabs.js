$(window).load(function() {

    var highestBox = 0;
    $('.animtab').each(function() {

      if ($(this).height() > highestBox)
        highestBox = $(this).height();
    });
    
    if(highestBox > $('.tabs').height()){
    $('.tabs').height(highestBox+30);
	}

});


$(window).resize(function() {

    var highestBox = 0;
    $('.animtab').each(function() {

      if ($(this).height() > highestBox)
        highestBox = $(this).height();
    });
    
    if(highestBox > $('.tabs').height()){
    $('.tabs').height(highestBox+30);
	}

});
