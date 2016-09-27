// function_01.js

// 함수: 다시 사용할수 있도록 코드를 묶어두는 방법
// 여러 식을 모아서 쉽게 운용할 수 있도록 만들어놓은 형식
// 계산기 

// 기본 함수 
// function add(){};

// 익명 함수
// var sum = function(){};

// 생성자 함수(인스턴스화)
// var plus = new Function(){};

// var x = 5;
// var y = 7;
// var j = x + y ;
// console.log(j);

/* 함수 기초_01 =========================== */
// function add(x, y){
// 	console.log(x + y);
// };

// add(10, 100);

// console.log(box);
// var box;


// var sum = function(x,y){
// 	console.log(y+ 100)
// };
// sum(20,10);

// Function(){};

// var plus = new Function('x','y','console.log(x+y)');
// plus(4,5);
/* ----------------------------------------*/

/* 함수 기초_02 =========================== */

//  var fun = function(x){
//  var x1, x2 , x3;
 //  x1 = x * x ;
 //  x2 = x * x * x ;
 //  return x1, x2; // 343
 // // var x3 = {'x1':x1, 'x2':x2};
 // // var x3 =[x1, x2];
 // // return x3;
//  };
//  
//  console.log(fun(7), fun(3));


/* 함수 기초_03 =========================== */
// 즉시실행함수(IIFE): 별도의 함수를 호출하지 않고,
// 함수선언과 동시에 함수가 실행되도록 만드는 방법

// (function(x){
// 	console.log(x*x);
// })(4);


/* 함수 기초_04 =========================== */
// 변수 (지역변수, 전역변수)

function out(x){
 var y =	x + 4;
 console.log(y);
	 mid(y);
	function mid(y){
		var b = y + 6 + x;
		 console.log(b);
		 last();
		function last(){
			var k = b + x;
		 console.log(k);
		};
		 // console.log(k); // last()함수의 범위를 벗어나 실행x
	};
};

// console.log(out(1));

// out(1);
mid(3);