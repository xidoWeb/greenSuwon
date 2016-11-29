// indicator_slide.js

$(function() {
// start --------------------------------------------
// bannerBox 변수 할당
var slideBanner = $('#slideBanner'), // 슬라이드 배너
		slideBannerWidth = slideBanner.width(),
	  bannerBox = 	$('.banner_box'),
	  bannerBoxLi = bannerBox.find('li').length,
		bannerBoxLiWidth = bannerBox.find('li').width(slideBannerWidth+'px'),
		bannerBoxWidthSet = slideBannerWidth * (bannerBoxLi+1);

// indicator 변수 할당
var indicator = $('.indicator');
	// indicator는 배너의 갯수만큼 자동 생성되도록 처리!!


// --------------------
		bannerBox.width(bannerBoxWidthSet +'px'); // 배너의 박스 넓이
		bannerBox.find('li:last').clone().prependTo(bannerBox);
		indicator.find('li:last').clone().prependTo(indicator);
		
		// indicator 처음 복제된 버튼 숨기기, 1번 버튼색처리
		indicator.find('li:first').hide();
		indicator.find('li').eq(1).css({backgroundColor:'#f4a'});

// indicator버튼 클릭시 banner 이동하여 위치

	indicator.find('li').on('click', function(e) {
		e.preventDefault();
		var $this = $(this),
        index = $this.index();

    $this.css({backgroundColor:'#f4a'});
    indicator.find('li').not($this).css({backgroundColor:'#fff'});
    bannerBox.stop().animate({marginLeft:-100 * index +'%'});
	});


// end-----------------------------------------------
});