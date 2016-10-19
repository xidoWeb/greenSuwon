// keypress_01.js

(function($) {
	// mousedown / mouseup <-> keydown / keyup
	// click <-> keypress
	/*
	$('input').on('keydown', function() {
		$('body').css({backgroundColor:'#fac'});
	});
	$('input').on('keyup', function() {
		$('body').css({backgroundColor:'#0ac'});
	});
	*/

/*
	var count_up = 0, count_down = 0;
	$('input').on('keydown', function() {
		count_up++;
		count_down--;
		$('.result>p').text(count_up);
		$('.result>h2').text(count_down);
	});
*/
/*
// 키보드 넘버 이해하기
$('input').keydown(function(event){
  $('.result>p').text(event.which);
});
*/

/*

// 배열, 객체 이해	
// 배열은 몇번째인가를 확인하는 방법으로 []로 표기하고 순서에 맞는 번호를 입력(0번째부터)
var arr = ['box', 'pen','bottle'];
	console.log(arr[0]);
// 객체는 키와 값으로 구성되어있어 키이름을 입력하여 값을 도출(.으로 해당 키를 구분)
var obj = {'box':'green', 'pen':'red'};
	console.log(obj.box);


var result = [
	{name:'도형', kor:'100', eng:'80', com:'30'},
	{name:'지수', kor:'40', eng:'100', com:'100'},
];

	console.log('name: '+result[1].name, '영어: '+result[1].eng);

for(var i=0; i<result.length; i++ ){
	console.log(result[i].eng);
}

*/

function getKeyName(keyCode) {
	var keymap = [
		{code: 8, name:'←(백스페이스)'},
		{code: 9, name:'TAB'},
		{code: 13, name:'ENTER'},
		{code: 16, name:'SHIFT'},
		{code: 17, name:'CTRL'},
		{code: 18, name:'ALT'},
		{code: 19, name:'PAUSEBREAK'},
		{code: 20, name:'CAPSLOOK'},
		{code: 21, name:'한/영'},
		{code: 25, name:'한자'},
		{code: 27, name:'ESC'},
		{code: 32, name:'스페이스'},
		{code: 33, name:'PAGEUP'},
		{code: 34, name:'PAGEDN'},
		{code: 35, name:'END'},
		{code: 36, name:'HOME'},
		{code: 37, name:'←(중간)'},
		{code: 38, name:'↑(중간)'},
		{code: 39, name:'→(중간)'},
		{code: 40, name:'↓(중간)'},
		{code: 45, name:'INSERT'},
		{code: 46, name:'DELETE'},
		{code: 48, name:'0'},
		{code: 49, name:'1'},
		{code: 50, name:'2'},
		{code: 51, name:'3'},
		{code: 52, name:'4'},
		{code: 53, name:'5'},
		{code: 54, name:'6'},
		{code: 55, name:'7'},
		{code: 56, name:'8'},
		{code: 57, name:'9'},
		{code: 65, name:'A'},
		{code: 66, name:'B'},
		{code: 67, name:'C'},
		{code: 68, name:'D'},
		{code: 69, name:'E'},
		{code: 70, name:'F'},
		{code: 71, name:'G'},
		{code: 72, name:'H'},
		{code: 73, name:'I'},
		{code: 74, name:'J'},
		{code: 75, name:'K'},
		{code: 76, name:'L'},
		{code: 77, name:'M'},
		{code: 78, name:'N'},
		{code: 79, name:'O'},
		{code: 80, name:'P'},
		{code: 81, name:'Q'},
		{code: 82, name:'R'},
		{code: 83, name:'S'},
		{code: 84, name:'T'},
		{code: 85, name:'U'},
		{code: 86, name:'V'},
		{code: 87, name:'W'},
		{code: 88, name:'X'},
		{code: 89, name:'Y'},
		{code: 90, name:'Z'},
		{code: 91, name:'윈도우(왼쪽)'},
		{code: 92, name:'윈도우(오른쪽)'},
		{code: 93, name:'기능키'},
		{code: 96, name:'0(오른쪽)'},
		{code: 97, name:'1(오른쪽)'},
		{code: 98, name:'2(오른쪽)'},
		{code: 99, name:'3(오른쪽)'},
		{code: 100, name:'4(오른쪽)'},
		{code: 101, name:'5(오른쪽)'},
		{code: 102, name:'6(오른쪽)'},
		{code: 103, name:'7(오른쪽)'},
		{code: 104, name:'8(오른쪽)'},
		{code: 105, name:'9(오른쪽)'},
		{code: 110, name:'.(오른쪽)'},
		{code: 111, name:'/(오른쪽)'},
		{code: 106, name:'*(오른쪽)'},
		{code: 107, name:'+(오른쪽)'},
		{code: 109, name:'-(오른쪽)'},
		{code: 112, name:'F1'},
		{code: 113, name:'F2'},
		{code: 114, name:'F3'},
		{code: 115, name:'F4'},
		{code: 116, name:'F5'},
		{code: 117, name:'F6'},
		{code: 118, name:'F7'},
		{code: 119, name:'F8'},
		{code: 120, name:'F9'},
		{code: 121, name:'F10'},
		{code: 122, name:'F11'},
		{code: 123, name:'F12'},
		{code: 144, name:'NUMLOCK'},
		{code: 145, name:'SCROLLLOCK'},
		{code: 187, name:'=(중간)'},
		{code: 189, name:'-(중간)'},
		{code: 192, name:'`(왼쪽콤마)'},
		{code: 220 , name:'\(중간)'},
	];

	// console.log(keymap.[10].code);
	for(var i =0; i < keymap.length;  i++){
		if(keymap[i].code == keyCode){
			return keymap[i].name;
		}
	}
};

$('input').on('keydown', function(e) {
	$('.result>p').text( getKeyName(e.which) );
});







})(this.jQuery);
