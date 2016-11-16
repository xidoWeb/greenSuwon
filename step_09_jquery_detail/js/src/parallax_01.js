//  parallax_01.js

$(function() {

	$('.logo').css({transform:'scale(0)'});

	$(window).on('scroll',function() {
		// console.log( $(this).scrollTop()/10 );
		var wScroll = $(this).scrollTop();

		$('.logo').css({
			transform:'translate(0, '+ wScroll +'%) scale('+ wScroll/300 +')',
			opacity:wScroll/100

		});
		$('.back_bird').css({
			transform:'translate('+ wScroll/10+'%,'+ wScroll/4 +'%)'
		});
		$('.front_bird').css({
			transform:'translate(0px, -'+ wScroll/20 +'%)'
		});
	});
});