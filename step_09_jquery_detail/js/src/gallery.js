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
	// step_03 : gallery 코드 생성처리-------------------------------------
	// json
	var gallery_link = './img/cars/';
	var img_list = [
	    {thumImg:'car_01_thum.jpg', alt:'car_01', dataAlt:'big_img 설명_1'},
	    {thumImg:'car_02_thum.jpg', alt:'car_02', dataAlt:'big_img 설명_2'},
	    {thumImg:'car_03_thum.jpg', alt:'car_03', dataAlt:'big_img 설명_3'},
	    {thumImg:'car_04_thum.jpg', alt:'car_04', dataAlt:'big_img 설명_4'},
	    {thumImg:'car_05_thum.jpg', alt:'car_05', dataAlt:'big_img 설명_5'},
		];
		
			$('#gallery').append( '<ul>' );
			var $gal = $('#gallery>ul');
		  var gallery_list_tag = '<li><a href="#"><img>';
		  // $gal.append(gallery_list_tag);

		for(var i = 0;  i < img_list.length; i++){
		// 	console.log(gallery_link+img_list[i].thumImg);
			$gal.append( gallery_list_tag);
			$gal.find('li')
			    .eq(i)
			    .find('img')
			    .attr({
			    	'src':gallery_link + img_list[i].thumImg,
			    	'alt':gallery_link + img_list[i].alt,
			    	'data-alt':gallery_link + img_list[i].dataAlt
			    });
		// 	$gal.find('li')
		// 			.eq(i)
		// 			.find('img')
		// 			.attr({
		// 				'src':gallery_link+img_list[i].thumImg,
		// 				'alt':gallery_link+img_list[i].alt,
		// 				'data-alt':gallery_link+img_list[i].dataAlt,
		// 			});

		}




	// gallery_버튼 클릭시----------------------------	
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

	
	});
});

