//  product.js

$(function() {
	var modal           = $('#modal');
	var close_btn       = $('.close');
	var timed           = 500;
	var baseUrl         = "./img/cars/";
	// var product_thum = [
	// 	{}
	// ];
	var product_nar     = [
			{"name":"product_name_1", "img":"car_01_thum.jpg", "alt":"img1", 
			 "nar":"am aliquid non vero nam. Laudantium numquam, nihil eos ullam voluptatum iusto doloremque distinctio perspiciatis minima quasi, nisi natus soluta deserunt officia aspernatur odit id saepe provident dolorem laborum quae magnam. Autem praesentium veniam voluptatem explicabo ipsam ipsum, rerum nulla natus quas molestias nihil officiis pariatur harum eos minima!"},
			{"name":"product_name_2", "img":"car_02_thum.jpg", "alt":"img2", 
			 "nar":"a quasi, nisi natus soluta deserunt officia aspernatur odit id saepe provident dolorem laborum quae magnam. Autem praesentium veniam voluptatem explicabo ipsam ipsum, rerum nulla natus quas molestias nihil officiis pariatur harum eos minima!"},
			{"name":"product_name_3", "img":"car_03_thum.jpg", "alt":"img3", 
			 "nar":"loram Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fugiat natus atque tempora modi asperiores nisi ipsa quaerat nemo veniam omnis officia rem provident magnam quae repellat quisquam, cum animi totam corporis, sunt minima quibusdam. Libero quia iusto saepe architecto blanditiis odio atque tempore enim, mollitia ratione, eveniet pariatur ducimus sit, quibusdam aliquid non vero nam. Laudantium numquam, nihil eos ullam voluptatum iusto doloremque distinctio perspiciatis minima quasi, nisi natus soluta deserunt officia aspernatur odit id saepe provident dolorem laborum quae magnam. Autem praesentium veniam voluptatem explicabo ipsam ipsum, rerum nulla natus quas molestias nihil officiis pariatur harum eos minima!"},
			{"name":"product_name_4", "img":"car_04_thum.jpg", "alt":"img4", 
			 "nar":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fugiat natus atque tempora modi asperiores nisi ipsa quaerat nemo veniam omnis officia rem provident magnam quae repellat quisquam, cum animi totam corporis, sunt minima quibusdam. Libero quia iusto saepe architecto blanditiis odio atque tempore enim, mollitia ratione, eveniet pariatur ducimus sit, quibusdam aliquid non vero nam. Laudantium numquam, nihil eos ullam voluptatum iusto doloremque distinctio perspiciatis minima quasi, nisi natus soluta deserunt officia aspernatur odit id saepe provident dolorem laborum quae magnam. Autem praesentium veniam voluptatem explicabo ipsam ipsum, rerum nulla natus quas molestias nihil officiis pariatur harum eos minima!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fugiat natus atque tempora modi asperiores nisi ipsa quaerat nemo veniam omnis officia rem provident magnam quae repellat quisquam, cum animi totam corporis, sunt minima quibusdam. Libero quia iusto saepe architecto blanditiis odio atque tempore enim, mollitia ratione, eveniet pariatur ducimus sit, quibusdam aliquid non vero nam. Laudantium numquam, nihil eos ullam voluptatum iusto doloremque distinctio perspiciatis minima quasi, nisi natus soluta deserunt officia aspernatur odit id saepe provident dolorem laborum quae magnam. Autem praesentium veniam voluptatem explicabo ipsam ipsum, rerum nulla natus quas molestias nihil officiis pariatur harum eos minima!"},
			{"name":"product_name_5", "img":"car_05_thum.jpg", "alt":"img5", 
			 "nar":"loram Lorem ipsum dolor sit amet, "},
	];
	var product_list 		= [
			{"img":"car_01_thum.jpg", "alt": "img_nar_1"},
			{"img":"car_02_thum.jpg", "alt": "img_nar_2"},
			{"img":"car_03_thum.jpg", "alt": "img_nar_3"},
			{"img":"car_04_thum.jpg", "alt": "img_nar_4"},
			{"img":"car_05_thum.jpg", "alt": "img_nar_5"},
	];

	// baseUrl+product_list[?].img
	// baseUrl+product_list[?].alt
	for(var i = 0; i < product_list.length; i++){
		var pr_li = $('.product').find('ul');
		pr_li.append('<li><a href="#"><img>');
		pr_li.find('li').eq(i).find('img').attr({src:baseUrl+product_list[i].img});
	}
		pr_li.find('img').css({height:'100%', marginLeft:"-20%"});
		pr_li.find('li').css({overflow:'hidden'});


	var modal_list      = $('.product').find('a');
	
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