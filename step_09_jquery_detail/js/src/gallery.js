// gallery.js

	// var link_list = [
	// 	{link:'http://www.naver.com', name:'naver'},
	// 	{link:'http://www.daum.net', name:'daum'},
	// 	{link:'http://www.google.com', name:'google'},
	// 	{link:'http://www.greenart.co.kr', name:'green'},
	// 	];	

	// for(var i = 0; i < link_list.length; i++){
	// 	console.log('주소: '+link_list[i].link);
	// 	console.log('이름: '+link_list[i].name);
	// }

$(function() {
	$('#gallery').find('a').on('click', function(e) {
			e.preventDefault();
			// step_01
			// var data = $(this).children('img').attr('data-link');
			// console.log('버튼: ', data );
			var data_alt = $(this).children('img').attr('data-alt');
			// console.log('내용설명:', data_alt);


			//step_02
			var data = $(this).children('img').attr('src').slice(0,-9)+'.jpg';
			console.log(data);

			$('.gallery_box').find('img').attr({'src': data, 'alt':data_alt});



			// return false;
	});
});

// json
var img_list = [
    {img: 'car_01.jpg' , name: 'car_01'},
    {img: 'car_02.jpg' , name: 'car_02'},
    {img: 'car_03.jpg' , name: 'car_03'},
    {img: 'car_04.jpg' , name: 'car_04'},
    {img: 'car_05.jpg' , name: 'car_05'},
	];

	for(var i = 0;  i < img_list.length; i++){
		console.log(img_list[i].name);
	}