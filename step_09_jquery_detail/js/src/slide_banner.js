//  slide_banner.js
$(function() {
/* //기초 내용 1------------------
	var pHide = $('#addBanner').hide();
	var timeOut = $('#addBanner');
	var timeUp = function() {
		timeOut.fadeIn();
	};
	// timeUp();
	// setTimeOut(일정시간 뒤 실행할 기능, 일정시간);
	// setTimeout(timeUp, 3000); 

	// setInterval(실행할 함수 , 일정 시간간격); 
	// var log = function() {
	// 	console.log('test');
	// };
	// setInterval(log, 2000);
*/

// ---------------------------------
	var lbtn = $('.lbtn');
	var rbtn = $('.rbtn');
	var box = $('.banner_box');
	var ol = $('ol');

	// 오른쪽 버튼 클릭시 !!
	rbtn.on('click',function() {
		box.stop().animate({marginLeft:'-200%'},500
			,function() {
				box.find('li:first').appendTo(box);
				box.css({marginLeft:'-100%'});
		});
		
		ol.find('li:last').prependTo(ol);

	});
	// 왼쪽 버튼 클릭시 !!
	lbtn.on('click',function() {
		box.stop().animate({marginLeft:0},500
			,function() {
				box.find('li:last').prependTo(box);
				box.css({marginLeft:'-100%'});
		});
		ol.find('li:first').appendTo(ol);
	});
	var intval;
	// setInterval 일정시간마다 움직임 처리
	function Interval() { 
		 intervalGo = setInterval( "$('.rbtn').click()" , 1500 );
		return intervalGo;
	};
	// setInterval 의 기능을 초기화(삭제)
	function ClearI() {clearInterval( intervalGo );};

// 일정시간마다 움직이도록 처리
	// $('.banner_box').on('mouseenter', ClearI)
	//                 .on('mouseleave', Interval);
	box.on({'mouseenter':ClearI, 'mouseleave': Interval});
	Interval();


});