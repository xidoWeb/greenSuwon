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
	}else{
		index_play(index);
		music.load();
	}
});

$('.next').on('click', function() {
	index++;
	if(index == music_list.length){
		index = 0;
		index_play(index);
		music.load();
	}else{
		index_play(index);
		music.load();
	}
});

// console.log(music_list[0]);
// console.log(music_list[1]);


// console.log(music_list.length);

