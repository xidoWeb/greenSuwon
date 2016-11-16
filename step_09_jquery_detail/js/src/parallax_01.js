//  parallax_01.js

$(function() {
	$(window).on('scroll',function() {
		// console.log( $(this).scrollTop()/10 );
		var wScroll = $(this).scrollTop();

		$('.logo').css({
			transform:'translate(0px, '+ wScroll +'%)'
		});
		$('.back_bird').css({
			transform:'translate(0px, '+ wScroll/4 +'%)'
		});
		$('.front_bird').css({
			transform:'translate(0px, -'+ wScroll/20 +'%)'
		});
	});
});