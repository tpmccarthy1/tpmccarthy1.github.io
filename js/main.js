
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

	 $('.slider').slick({
  	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  nextArrow:"<i class='fa fa-arrow-circle-o-right fa-3x btn btn-next'></i>",
      prevArrow:"<i class='fa fa-arrow-circle-o-left fa-3x btn btn-prev'></i>",
	  responsive: [
    {
      breakpoint: 600,
      settings: "unslick"
    }
  		]
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
	

}
)


