// addBanner.js

// (function($) {

var left = $('.l_btn');
var right = $('.r_btn');
var box = $('.bannerBox>ul');

/*
// step_01 -- banner 이동만들기
left.on('click', function() {
	box.stop().animate({marginLeft:0}, 500);
});

right.on('click', function() {
	box.stop().animate({marginLeft:-200 + '%'}, 500);
})
*/

// step_02 버튼 클릭시 하나씩 나타나게하기
var move = box.css('marginLeft');
// console.log(move);
box.find('li:last').prependTo(box);

left.on('click',function() {

	box.stop().animate({marginLeft: 0}, 500, function() {
		// box.prepend(box.find('li:last'));
		box.find('li:last').prependTo(box);
		box.css({marginLeft:'-100%'});
	});
});

right.on('click', function() {
	box.stop().animate({marginLeft: '-200%'}, 500, function() {
		box.find('li:first').appendTo(box);
		box.css({marginLeft:'-100%'});
	});
});

$(window).on('mousewheel DOMMouseScroll',function() {
	box.stop().animate({marginLeft: '-200%'}, 500, function() {
			box.find('li:first').appendTo(box);
			box.css({marginLeft:'-100%'});
		});
});

// })(this.jQuery);
