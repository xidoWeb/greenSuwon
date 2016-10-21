// audio.js
var index = 0;
var music =	$('audio').get(0);
var music_link = './multi/';
var music_list = [
									{file:'exam.mp3',  title:'1번째 효과음'},
                  {file:'exam2.mp3', title:'2번째 효과음'},
                  {file:'exam3.mp3', title:'3번째 효과음'},
                  {file:'exam4.mp3', title:'4번째 효과음'},
                  {file:'exam5.mp3', title:'5번째 효과음'},
                  {file:'exam6.mp3', title:'6번째 효과음'},
                  ];

$('audio').append('<source>');
// $('audio > source').attr({'src':music_link + music_list[index]});
var play = function() {	music.play(); };
var pause = function() {music.pause(); };
var index_play = function(index) {
	$('audio > source').attr({'src' : music_link + music_list[index].file});
	$('.music').find('span').text(music_list[index].title);
}

index_play(index);

$('.play').on('click', play);
$('.stop').on('click', pause);


// for(; index < music_list.length; index++){
// 	console.log(music_list[index]);
// }

$('.prev').on('click', function(){
	index--;
	if(index < 0){
		index = music_list.length - 1;
		index_play(index);
		music.load();
		music.play();
	}else{
		index_play(index);
		music.load();
		music.play();
	}
});

$('.next').on('click', function() {
	index++;
	if(index == music_list.length){
		index = 0;
		index_play(index);
		music.load().play();
	}else{
		index_play(index);
		music.load();
		music.play();
	}
});

// console.log(music_list[0]);
// console.log(music_list[1]);


// console.log(music_list.length);






/* 
// mp3 player만들때 필요한 메소드 및 기능
	.eq(): 순서를 할당(요소, jQuery)-태그의 성격으로 사용시에는 
	.get(): 순서를 할당(요소, DOM)-오디오,비디오
	.load(): multi 기능을 사용시 불러와서 준비(로딩)
	.play(): multi 기능을 재생
	.pause(): multi 기능을 일시정지


	//배열형식을 활용!!, 가사 or 제목등을표기시 객체형식(결론: json)
*/




