// step2_03.js

(function($) {
	var timed = 400;
	var body = $('body');
	body.animate({backgroundColor:'#f0f'}, timed, 'easeInExpo');
	// easeInSine, easeOutSine, easeInOutSine, 
	//(Quad, Cubic, Quart, Quint, Expo, Circ, Back, Elastic, Bounce)

	
	body.append('<div>box');
	$('div').addClass('box');

	var box = $('.box');
	box.animate({'width':'100px','height':'500px','backgroundColor':'#f96'});
	box.on('mouseenter', function() {
		box.stop().animate({'width':'200px', 
			                 'height':'300px', 
		                   'backgroundColor':'#aaa'},timed);
	});

	box.on('mouseleave',function() {
		box.stop().animate({'width':'100px','height':'500px','backgroundColor':'#f96'});
	});

})(this.jQuery);
