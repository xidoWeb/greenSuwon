// grammar_02.js

// 반복문: 하나가 아닌 여러반복작업시에 진행하는것을
// 간단하게 처리하는 방법
// for, for in, forEach, while, do while .....
// for


// step_01 -------------------------------

// for( 기준 ; 기준의 방향(목표) ; 목표까지의 설정){
// 	조건이 참이면 실행;
// }

// for (var i = 0; i <= 10; i+=2){
// 	console.log( 'i:', i );
// }

// step_02 -----------------------------
// for 작성시 var기준은 꼭 for안에 들어갈 이유는 없다!!!
// var i = 0, j = 20;
// for(; 목표 설정; 목표까지방향설정  ){
// 	조건이 참이면 실행;
// }

// var i = 0 , j = 20;
// for(; i < j ; i++){
// 	console.log('i값', i);
// }

// step_03 ---------------------------
// 배열 또는 객체형식을 나열해서 사용하는 방법
// var box = ['eunjin', 'jaeyoung', 'yein', 'yuna', 'eunyeong'];
// var i = 0;
// // console.log(box[3]);
// for(; i < box.length ; i++){
// 	console.log(box[i]);
// }


//step_04 -------------------------------------
// var site = [
// 'naver.com',
// 'daum.net',
// 'google.com',
// 'w3schools.com',
// 'mozilla.com',
// 'ui.daum.net',
// 'gdweb.co.kr',
// 'dbcut.com']; 

// var i = 0;
// for(; i < site.length; i++){
// 	// console.log(box[i]);
// 	document.write(
// 		'<a href="http://' +
// 		site[i] +
// 		'">' +
// 		site[i] +
// 		'</a><br>');
// 	// console.log(box[5]); // undefined
// }


// step_05 -----------------------------
var i =0, phone = [
	{'make': 'samsung', 'phone':'galaxy'},
	{'make': 'apple', 'phone':'iphone'},
	{'make': 'lg', 'phone':'V'},
	{'make': 'pentech', 'phone':'im100'}
];
var j = phone.length;
for(; i < j ; i++){
	console.log('제조회사:'+phone[i].make + ', 제품명:' + phone[i].phone);
}