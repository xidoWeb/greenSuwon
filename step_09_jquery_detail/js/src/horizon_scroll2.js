//  horizon_scroll.js

$(function() {
		var winW = $(window).width();
		$('#wrap').find('.horizon_view').on('mousewheel',function(e) {	
			var evt = e.originalEvent;
			var delta = evt.wheelDelta;
			// console.log(delta);
			var wrap_list = $(this).index();
			console.log(winW * wrap_list);
			if(delta < 0 ){
					$(window).scrollLeft(winW * wrap_list);
			}else{
					$(window).scrollLeft(winW * (wrap_list-1));
			}
		});
});