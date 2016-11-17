//  mousewheel_01.js
$(function() {
	/* // 마우스 휠 테스트 --------------------------------------------------------- 
	// 마우스 휠 이벤트기능: mousewheel(firefox제외), DOMMouseScroll(firefox에서만 존재)!
	$('html, body').on('mousewheel DOMMouseScroll', function(e) {
		var evt = e.originalEvent;
		var delta = 0;

			//firefox 에서는 originalEvent내에 detail이 존재
			if(!!evt.detail){
					console.log(evt.detail*40);
					$('p').text(evt.detail*40);
			}
			//그외 기능에서는 wheelDelta값이 존재
			else{
					console.log(evt.wheelDelta);
					$('p').text(evt.wheelDelta);
			}
	});
	*/

	// console.log('gnb영역 리스트 갯수: ', $('#gnb').find('li').length);
	// console.log($('.wheel_area').length);
	var win_h = $(window).height();

	$('#gnb').find('li').on('click',function(e) {
		e.preventDefault();

		// console.log($(this).index());
		var li_index = $(this).index();
		var scroll_h = win_h * li_index;
		$('html, body').animate({scrollTop:scroll_h});
	});

$('.wheel_area').on('mousewheel DOMMouseScroll', function(e) {
		var evt = e.originalEvent;
		var delta = 0;
		var wheel_i = $(this).index();
			//firefox 에서는 originalEvent내에 detail이 존재
			if(!!evt.detail){
				var wheel_delta = evt.detail;
				if( wheel_delta > 0){
					var wheel_h = (wheel_i+1) * win_h;
				}else{
					var wheel_h = (wheel_i-1) * win_h;
				}
			}
			//그외 기능에서는 wheelDelta값이 존재
			else{
				var wheel_delta = evt.wheelDelta;
				if( wheel_delta < 0){
					var wheel_h = (wheel_i+1) * win_h;
				}else{
					var wheel_h = (wheel_i-1) * win_h;
				}
			}
				$('html, body').stop().animate({scrollTop:wheel_h});
	});
});
