
$(document).ready(function(){

	//Toggle mobile navbar

	$(".icon").on('click', function(e){
		$(".nav-main").toggleClass("responsive");

	})

	 //Scroll to page 

	$(".home").on('click', function(e){
		e.preventDefault();
		$.scrollTo( '#home', 800);
	});


	$(".about").on('click', function(e){
		e.preventDefault();
		$.scrollTo( '#main-content', 800);
	});

	$(".work").on('click', function(e){
		e.preventDefault();
		$.scrollTo( '#work', 800);
	});


	$(".contact").on('click', function(e){
		e.preventDefault();
		$.scrollTo( '#contact', 800);
	});

	//Hide Nav on Scroll

	$(function(e){
	  	var prevScroll = 0,
	    curDir = 'down',
	    prevDir = 'up';
  
  		$(window).scroll(function(e){
    	if($(this).scrollTop() >= prevScroll){
          curDir = 'down';
          if(curDir != prevDir){
          $('.nav').stop();
    	  $('.nav').animate({ top: '-50px' }, 300);
          prevDir = curDir;
          	}
    	  } else {
	          curDir = 'up';
	          if(curDir != prevDir){
	          $('.nav').stop();
	          $('.nav').animate({ top: '0px' }, 300);
	          prevDir = curDir;
         		 }
     		 }
      	prevScroll = $(this).scrollTop();
 	 });
	})

	

}
)


