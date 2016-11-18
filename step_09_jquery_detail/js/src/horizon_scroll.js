//  horizon_scroll.js

$(function() {
	var winW = $(window).width();			
	var wrapLeft = parseInt($('#wrap').css('marginLeft'));
		console.log(wrapLeft);
	

// 마우스 이동시 영역포인트 위치 체크
	$(window).on('click',function(e) {
		var winX = e.pageX,
				winY = e.pageY,
				mouse_p = winX/winW*100;
				
		// console.log("가로좌표: ", winX);
		// 마우스 위치를 일정 자리에 위치 했을때, $('#wrap')이동처리
		// 브라우저상에서 가로 10% 이하영역 에서는 왼쪽 화면이 보이게!
		// 브라우저상에서 가로 90% 이상영역 에서는 오른쪽 화면이 보이게!
		// slide_h_scroll(winX);
		console.log(mouse_p);
			var wrapmargin = $('#wrap').css('marginLeft');
		if(mouse_p > 90){		
			
				$('#wrap').stop().animate({scrollLeft: wrapLeft-=winW},1000);		
			
			}else if(mouse_p < 10){		
		
				$('#wrap').stop().animate({scrollLeft: wrapLeft+=winW},1000);		
		
			}
	});

		// $('body').css({overflowX:'hidden'});
		$('#wrap').css({marginLeft:0});
		$('#gnb li').on('click',function(e) {
			e.preventDefault();

			var gnb_list = $(this).index();
			// console.log(gnb_list);
			$('#wrap').animate({marginLeft:-winW * gnb_list},1000);
		});

		var div_length = $('#wrap>div').length -1;
		var maxLeft = winW * div_length;
		console.log(maxLeft);
		$('#wrap>div').on('mousewheel DOMMouseScroll', function(e) {
			var evt =	e.originalEvent;
			var delta = 0;
			var E = evt.wheelDelta;
			var wheel_index = $(this).index();
			var wrapMargin = parseInt($('#wrap').css('marginLeft'));
			//console.log(wheel_index);
			// (function() {if(wrapMargin >= 0){$('#wrap').css({marginLeft:0});}})();
			if(E > 0){			
				if(wrapMargin >= 0){
					$('#wrap').stop().css({marginLeft:0});
				}else{
					$('#wrap').stop().animate({marginLeft:wrapLeft+=winW},1000);
				}		
			}else{
				if(wrapMargin <= -maxLeft){
					$('#wrap').stop().css({marginLeft:-maxLeft});
				}else{
					$('#wrap').stop().animate({marginLeft:wrapLeft-=winW},1000);
				}
			}
		});
	});