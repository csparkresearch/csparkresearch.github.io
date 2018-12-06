$(window).load(function(){
 var item_num = $('nav li').length + 1;
 var btn_state = true;
 $('article:first-of-type').addClass('myshow');
 
 $('nav li').hover(function(){
   $(this).addClass('hover');
 },function(){
   $(this).removeClass('hover');
 });
   
 $('nav li').on('click',function(){
   if(btn_state){
     btn_state = !btn_state;
     $('nav li').removeClass('currentPage');
     $(this).addClass('currentPage');

     var i = $('nav li').index(this);
     $('article').removeClass('myshow');
     $('article').addClass('myhide');
     $('article').eq(i).addClass('myshow');
     
     setTimeout(function(){
       btn_state = !btn_state;
     },500);
   }
 });
  
 
});
