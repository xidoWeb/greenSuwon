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
	$('.gallery_box').find('a').on('click', function(e) {
			e.preventDefault();

			// return false;
	});
});