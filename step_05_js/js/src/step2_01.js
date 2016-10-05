
$(function() {
	var box = $('div');
	// box
	// .on('mouseenter', function(){
	// 	$(this).animate({height: '+=15px'});
	// })
	// .on('mouseleave', function(){
	// 	$(this).animate({height: '-=15px'});
	// });

	$('div:nth-child(1)').css({color:'#333', borderRadius:'1rem'});
	$('div').eq(2).css({color:'#333', borderRadius:'1rem'});
});
