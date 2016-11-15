// pagex_y.js
/* 
* 1. img 삽입
* 2. 마우스 위치 파악
* 3. 이미지 삭제 / 다른이미지 삽입 (변경)
* 4. 마우스 위치에 따라 이미지가 변경
*/

$(function() {
	var page_box = $('.pagex_box');
// 1. 이미지 삽입
	page_box.html('<img>');
	page_box.children('img').attr({
																 src:'./img/bents/car_1.png', 
																 alt:'벤츠 이미지'
															 });
// 2. 마우스 위치

	// var offset_left_img = page_box.children('img').offset().left;
	// page_box.on('mousemove',function(e) {
	// 	var pagex =  parseInt(e.pageX - offset_left_img);
	// 	console.log('마우스 가로위치: ', pagex );
	// });

// 3. 이미지 교체
	// page_box.children('img').attr({src:'./img/bents/car_11.png'});
	// page_box.html('<img src="./img/bents/car_21.png" alt="" >');

// 4. 마우스 위치에 따라 이미지의 변경
// 5. 이미지의 갯수만큼만 좌표 숫자 표기!!!!!!

	 var offset_left_img = page_box.children('img').offset().left;
	 var img_width = page_box.children('img').width();
	 // console.log(img_width/5);
	 page_box.on('mousemove',function(e) {
	 	var pagex =  parseInt((e.pageX - offset_left_img) / 5);
	 	console.log('마우스 가로위치: ', pagex);
	 	page_box.children('img').attr({src:'./img/bents/car_' + pagex + '.png'});
	 });

});