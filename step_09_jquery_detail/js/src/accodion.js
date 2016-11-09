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

	var accoH = $('#accodionH');
	accoH.find('dd:first-of-type').css({width:72 + '%'});

	// 브라우저 화면에서 필요한 값을 가져와서 세팅할경우에 사용(.wrap내부의 h3가로값 고정)
	var acc_in_width = accoH.find('dd:first-of-type').css({width:72 + '%'});
	$('.wrap').find('h3').width(acc_in_width.width());

	accoH.find('dt').on('click', function() {
		accoH.find('dd').stop().animate({width:0},500);
		$(this).next('dd').stop().animate({width:72+'%'},500);
	});
});

/* 선택자
	1. css에서 선택하는 선택자와 동일하게 선택이 가능하다!!
	2. 자식선택자로 표기하고 싶을때에는!!
		ul>li  => $('ul>li') == $('ul').child('li')
	3. 자손 선택자로 표기할때에는 !!
		ul a  =>  $('ul a')  == $('ul').find('a')
	4. 실제로는 메모리효율을 위해서 변수를 사용하므로.
		var ul = $('ul');
		ul.child('li');
		ul.find('li');
	5. 형제 선택자에는 3가지만 우선 기억!
		ul>li:first-child+li =>  $('li:first-child').next();
														 $('li:last-child').prev();
														 $('dt:last').siblings('dd');
	6. 형제가아닌 부모를 선택해야 하는 경우!
														 $('li').parent();
*/