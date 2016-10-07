// jquery_06.js

(function($) {
	$('h1').on('click', function(	) {	
		var h_width = $(this).width(); 
			console.log(	h_width );
		$('.size_text').animate({
			                       'margin-left':h_width / 4, 
			                       'width':h_width / 2
			                      }, 500);
	});
})(this.jQuery);

