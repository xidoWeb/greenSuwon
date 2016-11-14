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
	})

})(this.jQuery);