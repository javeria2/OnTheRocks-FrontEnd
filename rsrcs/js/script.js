$(document).ready(function(){
	// sticky nav
	$('.js-del-sec').waypoint(function(direction){
		if(direction=="down") {
			$('nav').addClass('sticky-navbar');
		} else {
			$('nav').removeClass('sticky-navbar');
		}
	}, { offset: '20%'});

	// smooth scroll
	$('.js-yeah-btn').click(function(){
		$('html, body').animate({
				scrollTop: $('.js-subscription').offset().top
			},
			800, function() {
			/* stuff to do after animation is complete */
		});
	});
	$('.js-learn-btn').click(function(){
		$('html, body').animate({
				scrollTop: $('.js-how-it-works').offset().top
			},
			800, function() {
			/* stuff to do after animation is complete */
		});
	});
	//on clicking anchors
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

});
