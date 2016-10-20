// audio.js


var index = 0;
var music =	$('audio').get(0);
var music_list = ['./multi/exam.mp3',
                  './multi/exam2.mp3',
                  './multi/exam3.mp3',
                  './multi/exam4.mp3',
                  './multi/exam5.mp3',
                  './multi/exam6.mp3',
                  './multi/exam7.mp3',
                  ];


$('audio').append('<source>');
$('audio > source').attr({'src': music_list[index]});
var play = function() {	music.play(); };
var pause = function() {music.pause(); };
// var index_play = function(index) {
// 	$('audio > source').attr({'src': music_list[index]});
// }

$('.play').on('click', play);
$('.stop').on('click', pause);


// for(; index < music_list.length; index++){
// 	console.log(music_list[index]);
// }

$('.next').on('click', function() {
	index++;
	$('audio > source').attr({'src': music_list[index]});
	music.load();

	if(index == music_list.length){
		index = 0;
		$('audio > source').attr({'src': music_list[index]});
		 music.load();
	}
});

// console.log(music_list[0]);
// console.log(music_list[1]);


// console.log(music_list.length);

