// mob.js
$(function() {

// resize 되었을 경우의 행동
 var winWidth = $(window).width();

 $(window).on('resize', function() {
 	var nowWidth = $(window).width();

 	if(winWidth !== nowWidth){	
	 	location.reload();
 	}

 });



// ------------------------------------------
// 브라우저 상태 확인
	var $width = $(window).width();

		if($width < 768){
		// mobile 에서의 작동 내용	
		 var unb = $('.unb');
		 var menu_btn = unb.find('button');

		 menu_btn.on('click', function(e) {
		 	e.preventDefault();
		 	unb.find('ul').toggle();
		 });

		}else if( (768 <= $width) && ($width < 1024) ){

		}else{

		}


});