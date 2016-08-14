$(document).ready(function(){
	document.querySelector(".js-animate-1").style.opacity = 0;
	document.querySelector(".js-animate-2").style.opacity = 0;
	document.querySelector(".js-frame").style.opacity = 0;

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

	// animations
	$(".js-animate-1").waypoint(function(direction){
		$(".js-animate-1").addClass('animated fadeIn');
		document.querySelector(".js-animate-1.animated").style.opacity = 1;
	}, {
		offset: '50%'
	});
	$(".js-frame").waypoint(function(direction){
		$(".js-frame").addClass('animated fadeInUp');
		document.querySelector(".js-frame").style.opacity = 1;
	}, {
		offset: '50%'
	});
	$(".js-animate-2").waypoint(function(direction){
		$(".js-animate-2").addClass('animated fadeIn');
		document.querySelector(".js-animate-2.animated").style.opacity = 1;
	}, {
		offset: '50%'
	});
	$(".js-animate-3").waypoint(function(direction){
		$(".js-animate-3").addClass('animated pulse');
	}, {
		offset: '50%'
	});

	// burger nav
	$('.burger-icon').click(function(){
		if($('.burger-icon i').hasClass('fa-bars')){
			$('.burger-icon i').addClass("fa-times");
			$('.burger-icon i').removeClass("fa-bars");
		} else {
			$('.burger-icon i').removeClass("fa-times");
			$('.burger-icon i').addClass("fa-bars");
		}

		$('.top-nav').slideToggle(400);
	});

	// google maps

	new GMaps({
	  div: '#map',
	  lat: 40.1146914,
	  lng: -88.3121289,
	  zoom: 12
	});

});
