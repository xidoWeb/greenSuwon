// step2_02.js
$(function() {
	// $('body').animate({backgroundColor:'#faa'},1000);
	// $('body').css({backgroundColor:'#fa0'});
	$('h1>a').attr({'href':'http://naver.com',
	                'title':'네이버로 이동',
	                'target':'_blank'});
	$('#btn').attr({'value':'버튼입니다.'}); // 주어진 속성변경
	$('h1>a').html('<span>'); // html코드 삽입(기존의 내용은 사라짐)
	// 코드내의 텍스트 삽입
	$('h1 span').text('내용이 바뀌었습니다.'); 

	// body 뒤에 p 삽입
	$('body').append('<p>'); 

	// body 앞에 p삽입
	$('body').prepend('<p>앞에 추가되었습니다.</p>'); 

	// body자식중 p의 마지막 요소에 내용변경
	$('body>p:last').text('내용이 재변경되었습니다.'); 

	$('body').attr({'class':'test'});
	$('body').addClass('box');
	$('.box').css({backgroundColor:'#aaf', color:'#fff', margin:0});

	$('body').append('<div class="box">');
});