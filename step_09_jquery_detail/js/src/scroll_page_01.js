// scroll_page_01.js

$(function() {

	var page_link = $('#headBox a'),
			btn_top = $('#topBtn>button'),
			headbox = $('#headBox'),
	    head_offset = headbox.offset().top,
	    conBox_offset = $('#conBox').offset().top,
	    subBox_offset = $('#subBox').offset().top;

	page_link.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:$(this.hash).offset().top});
	});

	btn_top.on('click',function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0});
	});
	$(window).on('scroll', function() {
		var scroll_top = $(window).scrollTop();
		// headbox.addClass('fix');
		headScroll(scroll_top);
		// console.log(head_offset);
		// console.log(scroll_top);
		if(scroll_top >= conBox_offset){
			$('#conBox').find('p').fadeIn(1000);
		}	
		if(scroll_top >= subBox_offset){
			// 첫번째 방법(delay기능을 이용하여 시간순으로 나타나기)
			// step_01
			/*
			$('#subBox').find('img:nth-of-type(1)').delay(0).fadeIn(500);
			$('#subBox').find('img:nth-of-type(2)').delay(500).fadeIn(500);
			$('#subBox').find('img:nth-of-type(3)').delay(1000).fadeIn(500);
			$('#subBox').find('img:nth-of-type(4)').delay(1500).fadeIn(500);
			$('#subBox').find('img:nth-of-type(5)').delay(2000).fadeIn(500);
			*/
			//step_02
			var subBox = $('#subBox'),
					subBox_img = $('#subBox').find('img'),
					timed = 500;
			// subBox_img.eq(?).delay(?).fadeIn(timed);
			// console.log(subBox_img.length); // html내에서 존재하는 subBox내의 이미지수량 확인
			for (var i = 0; i < subBox_img.length; i++) {
				subBox_img.eq(i).delay(timed*i).fadeIn(timed);
			}
			// 두번째 방법(함수 기능을 이용하여 시간순으로 나타나기)
			/*
			$('#subBox').find('img').eq(0).fadeIn(500, function() {
				$('#subBox').find('img').eq(1).fadeIn(500, function(){
					$('#subBox').find('img').eq(2).fadeIn(500, function() {						
						$('#subBox').find('img').eq(3).fadeIn(500, function() {
							$('#subBox').find('img').eq(4).fadeIn(500);
						});
					});
				});
			});
			*/
		}
	});
// 반복처리하기위해 함수표기
	function headScroll(t) {

		if(head_offset <= t){
				headbox.addClass('fix');
			}else{
				headbox.removeClass('fix');
			}
	};


});