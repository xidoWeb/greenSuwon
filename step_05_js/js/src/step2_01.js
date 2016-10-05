
$(function() {
	var box = $('div');
	var timed = 300;
	// box
	// .on('mouseenter', function(){
	// 	$(this).animate({height: '+=15px'});
	// })
	// .on('mouseleave', function(){
	// 	$(this).animate({height: '-=15px'});
	// });

	// $('div:nth-child(1)').css({color:'#333', borderRadius:'1rem'});
	// $('div:odd').css({color:'#f0f', borderRadius:'50%'});
	// $('div:even').css({color:'#333', borderRadius:'1rem'});
	// // $('div').first().css({backgroundColor:'#fc0'});
	// $('div:first').css({backgroundColor:'#fc0'});
	// var badWord = ['yellow', 'blue'];
	// $('div:contains("yellow")').css({display:'none'});

	// // #ck 체크되면, (클릭했다는 조건)
	// // #blue 사라지기

	// // $('#ck:checked').on('click', function(){
	// // 	$('#blue').css({display:'none'})
	// // });


	// $('#ck').on('click', check);

	// function check(){
	// 	var blue = $('#blue');
	// 	if($('#ck:checked')){
	// 		blue.css({display:'none'});
	// 	}else{
	// 		blue.css({display:'block'});
	// 	}
	// }
	$('#red').on('click', function(){
		$(this).next().animate({width:'100px', padding:'1rem'});
	});// show , fadeIn, slideDown

	$('#yellow').on('click', function(){
		$(this).animate({width:0, padding:0, overflow:'hidden'});
	});// hide, fadeOut, slideUp

	$('#green').on('click', function(){
		var yellow = $(this).prev();
		var yWidth = yellow.width();
		if(yWidth === 0){
			yellow.animate({width:'100px', padding:'1rem'});
		} else{
			yellow.animate({width:0, padding:0, overflow:'hidden'});
		}
	});// toggle, fadeToggle, slideToggle
});
