//  product.js

$(function() {
	var modal           = $('#modal');
	var modal_list      = $('.product').find('a');
	var close_btn       = $('.close');
	var timed           = 500;
	var baseUrl         = "./img/cars/";
	// var product_thum = [
	// 	{}
	// ];
	var product_nar     = [
			{"name":"product_name_1", "img":"car_01_thum.jpg", "alt":"img1", "nar":"어쩌고 내용1"},
			{"name":"product_name_2", "img":"car_02_thum.jpg", "alt":"img2", "nar":"어쩌고 내용2"},
			{"name":"product_name_3", "img":"car_03_thum.jpg", "alt":"img3", "nar":"어쩌고 내용3"},
			{"name":"product_name_4", "img":"car_04_thum.jpg", "alt":"img4", "nar":"어쩌고 내용4"},
			{"name":"product_name_5", "img":"car_05_thum.jpg", "alt":"img5", "nar":"어쩌고 내용5"},
	];


	// modal 숨김처리
	modal.hide();
	modal_list.on('click', function(event) {
		event.preventDefault();
		modal.fadeIn(timed);
	});

	close_btn.on('click', function() {
		modal.fadeOut(timed);
	});

	// .eq();
	// .index();

	var list_index = $('.product').find('ul').find('li');
	list_index.on('click', function(e) {
		e.preventDefault();
		var index_num = $(this).index();
		console.log( index_num );

		$('.modal_box').find('img').attr({
																			src:baseUrl+product_nar[index_num].img, 
																			alt:baseUrl+product_nar[index_num].alt 
																		});
		$('.modal_box').find('h3').text(product_nar[index_num].name);
		$('.modal_box').find('p').text(product_nar[index_num].nar);
	});


}); // jquery end