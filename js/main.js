$(document).ready(function(){


	// Hide Nav on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('nav').outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();
	    
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('nav').removeClass('nav-down').addClass('nav-up');
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('nav').removeClass('nav-up').addClass('nav-down');
	        }
	    }
	    
	    lastScrollTop = st;
	}



	//Slider

	// function and variables, 'unslick' while window size reach maximum width (641px)
    var maxWidth = 768,
      slickVar = {
	      speed: 500,
		  fade: true,
		  cssEase: 'linear',
	  	  infinite: true,
		  nextArrow:"<i class='fa fa fa-angle-double-right fa-5x btn btn-next'></i>",
	      prevArrow:"<i class='fa fa fa-angle-double-left fa-5x btn btn-prev'></i>",
		  responsive: [{
	      breakpoint: maxWidth,
	      settings: "unslick"
   		 }]
      },
      runSlick = function() {
        $('.slider').slick(slickVar);
      };

      // slick initialization while document ready
      runSlick();

      // listen to jQuery's window resize
      $(window).on('resize', function(){
        var width = $(window).width();
        if(width > maxWidth) {
          // reinit slick while window's width is less than maximum width (641px)
          runSlick();
        }
      });


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
	
})


