//  sliding_menu_01.js

$(function() {

	//menu_button 클릭시 사라지게!!!
	$('.btn>button').on('click', function(e) {
		e.preventDefault();
		// var asideLeft = $('aside').css('left');

		// if(asideLeft >= 0){
		// 	$('aside').stop().animate({left:0}, 500);
		// }else{
		// 	$('aside').stop().animate({left:'-15rem'}, 500);
		// }

	$('aside').toggleClass('active');
	
	});

});