// depth1.js

$(function() {
	// //하나씩 나타나게 만들기
	// $('#depth1>ul>li>a').on('mouseenter', function() {
	// 	$('#depth1').find('ol').slideUp();
	// 	$(this).next().slideDown();
	// });

	// // 한꺼번에 나타나게 만들기
	var depth1 = $('#depth1');
	var depth1_view = depth1.find('ol');
	
	depth1.on('mouseenter', function() {
		depth1_view.stop().slideDown();
	});
	depth1.on('mouseleave', function() {
		depth1_view.stop().slideUp();
	});
});