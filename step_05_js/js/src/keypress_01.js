// keypress_01.js

(function($) {
	// mousedown / mouseup <-> keydown / keyup
	// click <-> keypress
	/*
	$('input').on('keydown', function() {
		$('body').css({backgroundColor:'#fac'});
	});
	$('input').on('keyup', function() {
		$('body').css({backgroundColor:'#0ac'});
	});
	*/

/*
	var count_up = 0, count_down = 0;
	$('input').on('keydown', function() {
		count_up++;
		count_down--;
		$('.result>p').text(count_up);
		$('.result>h2').text(count_down);
	});
*/
$('input').keydown(function(event){
  console.log(event.witch);
});



})(this.jQuery);
