// mob.js
$(function() {
 var unb = $('.unb');
 var menu_btn = unb.find('button');

 menu_btn.on('click', function(e) {
 	e.preventDefault();

 	unb.find('ul').toggle();
 });
});