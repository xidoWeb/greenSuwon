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

	$('#tab_menu').tabs();

/* #adBanner height 설정 */
	var h1_h = $('h1').height(),
			h1_padding_t = $('h1').css('paddingTop');
			h1_padding_b = $('h1').css('paddingBottom');
			win_h = $(window).height();
	// console.log(win_h);
	// console.log( h1_h );
	// console.log(parseInt(h1_padding_t) );
	// console.log(parseInt(h1_padding_b) );
	// console.log(win_h -( h1_h + parseInt(h1_padding_t) + parseInt(h1_padding_b) ));
	var section_h = (win_h -( h1_h + parseInt(h1_padding_t) + parseInt(h1_padding_b) ));

	$('#adBanner').height(section_h);

// 
	$('#adBanner').find('li').last().prependTo('#adBanner>ul');
});