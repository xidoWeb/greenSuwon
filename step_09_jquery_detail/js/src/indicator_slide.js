// indicator_slide.js

$(function() {
// start --------------------------------------------
// bannerBox 변수 할당
var slideBanner = $('#slideBanner'), // 슬라이드 배너
		slideBannerWidth = slideBanner.width(),
	  bannerBox = 	$('.banner_box'),
	  bannerBoxLi = bannerBox.find('li').length,
		bannerBoxLiWidth = bannerBox.find('li').width(slideBannerWidth+'px'),
		bannerBoxWidthSet = slideBannerWidth * (bannerBoxLi+1),
		delayTime = 100;

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
    bannerBox.stop().delay(delayTime).animate({marginLeft:-100 * index +'%'});
	});

// $('lbtn') 클릭시 배너 이동
var lbtn = $('.lbtn');
	
	lbtn.on('click', function(e) {
		e.preventDefault();
		var bannerBoxMargin = parseInt(bannerBox.css('marginLeft')),
				bannerIndex = Math.abs(bannerBoxMargin / slideBannerWidth)-1;
				console.log(bannerIndex);
/*
		// banner_box의 마진값이 0일경우 마지막 위치로 이동
		if(bannerBoxMargin == 0){
			bannerBox.css({marginLeft:-slideBannerWidth*bannerBoxLi});
		}else{
			bannerBox.stop().animate({marginLeft:'+='+ slideBannerWidth});	
		}
		// 문제점: 이동후의 값이 아닌, 이동전의 상태를 파악!!
*/
		// 위 문제점 수정
		if(bannerBoxMargin == -slideBannerWidth){
			bannerBox.stop().delay(delayTime).animate({marginLeft:'+='+ slideBannerWidth},
				function() {
					bannerBox.css({marginLeft:-slideBannerWidth*bannerBoxLi});
				});	
		}else{
			bannerBox.stop().delay(delayTime).animate({marginLeft:'+='+ slideBannerWidth});	
		}


		// indicator navi 위치 찾아가기
		if(bannerIndex == 0){
			bannerIndex = bannerBoxLi;
		}
			indicator.find('li').css({backgroundColor:'#fff'});
			indicator.find('li').eq(bannerIndex).css({backgroundColor:'#f4a'});
	});

// $('rbtn') 클릭시 배너 이동
var rbtn = $('.rbtn');
	rbtn.on('click', function(e) {
		e.preventDefault();
		var bannerBoxMargin = parseInt(bannerBox.css('marginLeft')),
				bannerIndex = Math.abs(bannerBoxMargin / slideBannerWidth)+1;
				console.log(bannerIndex);

		if(bannerBoxMargin == (-slideBannerWidth*bannerBoxLi)){
			bannerBox.stop().css({marginLeft:0});
			bannerBox.stop().delay(delayTime).animate({marginLeft:-slideBannerWidth});
		}else{	
			bannerBox.stop().delay(delayTime).animate({marginLeft:'-='+ slideBannerWidth});
		}
	if(bannerIndex == bannerBoxLi+1){
			bannerIndex = 1;
		}
			indicator.find('li').css({backgroundColor:'#fff'});
			indicator.find('li').eq(bannerIndex).css({backgroundColor:'#f4a'});
	});

slideBanner.css({overflow:'hidden'});

// end-----------------------------------------------
});