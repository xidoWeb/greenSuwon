// jquery_06.js

(function($) {
	// .scrollTop() 
	// $(window).on('scroll',function() {
	// 	console.log( $(this).scrollTop() );
	// })

	$('a').on('click', function(evt) {
		evt.preventDefault();
		// var timed = 500,
		// 		easing = easeInQuart;

		$('html, body').animate({scrollTop: $(this.hash).offset().top},500);

	})

})(this.jQuery);

