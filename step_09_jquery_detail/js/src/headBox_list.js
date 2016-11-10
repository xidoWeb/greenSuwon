// headBox_list.js

$(function() {
	var headLink =[
		{"link": "sub1.html",	         "name": "sub1"},
		{"link": "sub2.html",	         "name": "sub2"},
		{"link": "guest.html",	       "name": "guest"},
		{"link": "http://daum.net",	 "name": "다음"}
		];


// <header>
// 			<h1><a href="index.html">webpage_link</a></h1>
// 			<nav>
			
// 			</nav>
// </header>

// header 생성
		var wrap = $('#container');
		wrap.prepend('<header><h1><a>');
		wrap.find('h1>a').attr({href:'index.html'}).text('webpage');
		wrap.children( $('header').append('<nav>') );

// header>nav내용에 페이지 링크 생성
		var head_nav = $('nav');
		head_nav.append('<ul>');
		for(var i = 0; i < headLink.length; i++ ){
			// console.log(i + "번째 내용: " + headLink[i].link);
			head_nav.children('ul').append('<li><a>');
			head_nav.find('li')
			        .eq(i)
			        .find('a')
			        .attr({href:headLink[i].link})
			        .text(headLink[i].name);
		}
});