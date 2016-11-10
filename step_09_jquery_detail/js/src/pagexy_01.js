//  pagexy_01.js

(function($) {
	var winWidth = $(window).width();
	$('#wrap').on('mousemove',function(e) {
		var poX = e.pageX;
		var poY = e.pageY;
		// console.log(poX);
		// console.log(poY);

		$('.front').css({transform:'translate(' + poX/50 +'%,'+ poY/200 + '%)'});
		$('.back').css({transform:'translate(' + -poX/50 +'%,'+ -poY/200 + '%)'});
	});

})(this.jQuery);