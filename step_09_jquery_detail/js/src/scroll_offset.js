//  scroll_offset.js

// 윈도우 스크롤  => scroll , 마우스 스크롤(휠) => mousewheel
// var offset_top_before = $('.content').offset().top;
// var scrollTop_before  = $('.content').scrollTop();

// console.log(  offset_top_before );
// console.log(  scrollTop_before );

$(window).on('scroll', function() {
	// console.log('scroll');
	// offset().top;
	// scrollTop();
var offset_top_before = $('.content').offset().top;
var scrollTop_before  = $('.content').scrollTop();

console.log(  offset_top_before );
console.log(  scrollTop_before );

}); 