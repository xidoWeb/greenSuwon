//  scroll_offset.js

// 윈도우 스크롤  => scroll , 마우스 스크롤(휠) => mousewheel
// 마우스 이동  => mousemove

// var offset_top_before = $('.content').offset().top;
// var scrollTop_before  = $('.content').scrollTop();

// console.log(  offset_top_before );
// console.log(  scrollTop_before );

$(window).on('scroll', function() {
	// console.log('scroll');
	// offset().top;
	// scrollTop();
	var scrollTop_before  = $(this).scrollTop();
	var offset_top_before = $('.sub1').offset().top;
	$('.scroll_top').find('span').text(scrollTop_before);
	$('.offset').find('span').text(offset_top_before);
}); 

$(window).on('mousemove', function(e) {
	var areax = e.pageX;
	var areay = e.pageY;
	console.log('x좌표: ' + areax + '|' + 'y좌표: ' + areay);

	mousearea(areax);
	

});

function mousearea(areax) {
	if(areax < 360){
		$('.content').css({backgroundColor:'#fac'});
	}else if(areax >= 360 && areax < 768){
		$('.content').css({backgroundColor:'#acf'});
	}else{
		$('.content').css({backgroundColor:'#c8f'});
	}
};