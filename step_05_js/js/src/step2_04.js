// step2_03.js

(function($) {
	var timed = 400;
	$('li').on('click', function() {
		var i = $(this).index();
		var banner_div = $('.banner').children('div');
		banner_div.hide();
		banner_div.eq(i).stop().slideDown();
	});

	// $('.banner').children('div').last().slideDown();


	// .children()     : 자식
	// .find()      : 자손
	// .parent()    : 부모
	// .siblings()  : 형제
	// .next()      : 다음(바로뒤)
	// .prev()      : 이전(바로전)
	// .nextAll()   : 이후 모든것
	// .prevAll()   : 이전 모든것
	// .not()       : 아닌것
	// .index()			: 순서값을 가져오기
	// .eq()				: 순서를 주는것
	// $(this)			: 조건중 이벤트 선택자에 맞는 선택된 아이!!!
})(this.jQuery);
