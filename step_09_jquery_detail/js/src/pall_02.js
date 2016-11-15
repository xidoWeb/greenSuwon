//  pall_02.js
$(function() {
	var pall_top = $('.pall_02').offset().top;
	$(window).on('scroll', function() {
		var win_scroll = $(window).scrollTop();
		// console.log(pall_top);
		// console.log(win_scroll);

		if(win_scroll >= pall_top){
			var img_tr =	win_scroll - pall_top;
			console.log(img_tr);
			$('.pall_02').css({backgroundPosition:'center '+ -img_tr/10+'px'});
		}

	});

});