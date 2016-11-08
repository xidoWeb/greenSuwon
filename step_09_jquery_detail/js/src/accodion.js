// accodion.js

$(function() {
	// 아코디언 세로형
	var accoV = $('#accodionV');
	// $('#accodionV dt').on('click', function() {})
	accoV.find('dt').on('click', function() {
		accoV.find('dd').slideUp();
		$(this).next('dd').slideDown();
	});

	// 아코디언 가로형
	// var accoH = $('#accodianH');
	// accoH.find('dt').on('mouseenter', function() {
	// 	accoH.find('dd').stop().animate({width:0},300);
	// 	$(this).next('dd').stop().animate({width:50+'%'},500);
	// });
});