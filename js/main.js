var sliders = [];

$(document).ready(function(){

	 //Instagram Feed


	 
	 var userFeed = new Instafeed({
	 get: 'tagged',
	 tagName: 'wolfpack',
	 accessToken: '12027293.467ede5.9c0cd6283fd9406f879b71e3de7595f4',
	 useHttp: true,
	 template: '<li><img src="{{image}}" /><span id="location">{{location}}</span></li>',
	 target: 'instafeed',
	 resolution: 'standard_resolution',
	 sortBy: 'most-liked',
	 limit: 10,
	 after: function(){
        $('.slider').each(function() {
        sliders.push(new Slider(this))
        })
	 }
	 });


	 userFeed.run();

	 //Buttons for Instafeed

	 $(".btn-next").on('click', function(e){
		sliders[0].goToNext();
	});

	 $(".btn-prev").on('click', function(e){
		sliders[0].goToPrev();
	});

	 //Scroll to page 

	$(".home").on('click', function(e){
		e.preventDefault();
		$.scrollTo( '#home', 800);
	});


	$(".about").on('click', function(e){
		e.preventDefault();
		$.scrollTo( '#main-content', 800);
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


