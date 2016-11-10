//  product.js

$(function() {
	var modal      = $('#modal');
	var modal_list = $('.product').find('a');
	var timed      = 500;
	var baseUrl = "../../img/cars/";
	// var product_thum = [
	// 	{}
	// ];
	var product_nar = [
			{"name":"product_name_1", "img":"car_01_thum.jpg", "nar":"어쩌고 내용1"},
			{"name":"product_name_2", "img":"car_02_thum.jpg", "nar":"어쩌고 내용2"},
			{"name":"product_name_3", "img":"car_03_thum.jpg", "nar":"어쩌고 내용3"},
			{"name":"product_name_4", "img":"car_04_thum.jpg", "nar":"어쩌고 내용4"},
			{"name":"product_name_5", "img":"car_05_thum.jpg", "nar":"어쩌고 내용5"},
	];


	// modal 숨김처리
	modal.hide();


	modal_list.on('click', function(event) {
		event.preventDefault();
		modal.fadeIn(timed);
	});

	modal.on('click', function() {
		modal.fadeOut(timed);
	});

	// .eq();
	// .index();

});