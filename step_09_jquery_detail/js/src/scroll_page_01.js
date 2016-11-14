// scroll_page_01.js

$(function() {

	var page_link = $('#headBox a');
	page_link.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:$(this.hash).offset().top});
	});

	var btn_top = $('#topBtn>button');
	btn_top.on('click',function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0});
	});

	var headbox = $('#headBox');
	var head_offset = headbox.offset().top;
	$(window).on('scroll', function() {
		var scroll_top = $(window).scrollTop();
		// headbox.addClass('fix');
		headScroll(scroll_top);
		// console.log(head_offset);
		// console.log(scroll_top);
	});

	function headScroll(t) {

		if(head_offset <= t){
				headbox.addClass('fix');
			}else{
				headbox.removeClass('fix');
			}
	};
});