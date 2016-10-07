// jquery_06.js

(function($) {
	/*
	// h1값을 파악후, p값을 h1의 절반으로 만들기
	$('h1').on('click', function(	) {	
		var h_width = $(this).width(); 
			console.log(	h_width );
		$('.size_text').animate({
			                       'margin-left':h_width / 4, 
			                       'width':h_width / 2
			                      }, 500);
	});
	*/

	// console.log($(window.document).width()+'px');
// 화면의 가로값이 변경될 경우 새로고침처리
	var win_width = $(window).width();
	$(window).on('resize',function() {
		var resize_width = $(window).width();
		if(win_width !== resize_width){
			location.reload();
		}
	});
// 화면의 뷰형태에 따라 이미지 변경
	(function winView() {
			var win_width = $(window).width();
	
			if(win_width < 500){
				$('body').animate({'backgroundColor':'#0af'});
			} else if(500 <= win_width &&  win_width < 1024){
				$('body').animate({'backgroundColor':'#a0f'});
			} else {
				$('body').animate({'backgroundColor':'#cca'});
			}
		})();

	//winView();



})(this.jQuery);

