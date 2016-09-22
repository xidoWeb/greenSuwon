//  jquery_01.js

$(document).ready(function(){
	/**
	* 아래 css를 jQuery로 만들어보기!!!!	
	* .container{width:960px; height: 1200px;	margin: 0 auto; background-color:#cdcd7f;}
	*/

// step.01 하나씩 선택 -------------------------
// $('.container').css('width','960px');
// $('.container').css('height','1200px');
// $('.container').css('backgroundColor','#6dcd7f');
	
// step.02 중복선택 변수선언 -------------------------
	var con = $('.container');
	// con.css('width','960px');
	// con.css('height','1200px');
	// con.css('backgroundColor','#6dcd7f');

// step.03 메소드 체인  -------------------------
	// con.css('width','960px')
	//    .css('height','1200px')
	//    .css('backgroundColor','#6dcd7f');

// step.04 css객체화  -------------------------
	con.css({
					'width'          :'960px',
					'height'         :'1200px',
					'margin'         :'0 auto',
					'backgroundColor':'#6a5d7f'
					});
});