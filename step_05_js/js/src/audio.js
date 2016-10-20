// audio.js
var index = 0;
var music =	$('audio').get(0);
var music_link = './multi/';
var music_list = [
									'exam.mp3',
                  'exam2.mp3',
                  ];

$('audio').append('<source>');
// $('audio > source').attr({'src':music_link + music_list[index]});
var play = function() {	music.play(); };
var pause = function() {music.pause(); };
var index_play = function(index) {
	$('audio > source').attr({'src':music_link + music_list[index]});
}

index_play(index);

$('.play').on('click', play);
$('.stop').on('click', pause);


// for(; index < music_list.length; index++){
// 	console.log(music_list[index]);
// }

$('.prev').on('click', function(){
	index--;
	index_play(index);
	music.load();

	if(index < 0){
		index = music_list.length - 1;
		index_play(index);
		music.load();
	}

});

$('.next').on('click', function() {
	index++;
	index_play(index);
	music.load();

	if(index == music_list.length){
		index = 0;
		index_play(index);
		music.load();
	}
});

// console.log(music_list[0]);
// console.log(music_list[1]);


// console.log(music_list.length);

