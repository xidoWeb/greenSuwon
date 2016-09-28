// eventHandler.js

// event : .addEventListener()
var body = document.body;
var logo = document.getElementsByTagName('h1')[0];
// var logo = document.querySelector('body');
var pa = document.getElementsByTagName('p')[0];
	console.dir(pa);

// step_01-------------------------------
// logo.addEventListener('click', function(){
// 	body.style.backgroundColor = '#0af';
// });


// step_02-------------------------------
	logo.addEventListener( 'click', bodyStyle );
	function bodyStyle(){
		body.style.backgroundColor = '#00f';
		pa.style.color= "#fff";
	};


