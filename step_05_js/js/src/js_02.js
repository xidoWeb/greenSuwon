// js_02.js

// &&
// ||
// !

var thu, meeting, dinner, done_go;
// 토요일에 업체와 미팅, 저녁, 가야?

thu = true;
meeting = true;
dinner = false;
done_go = !thu || (meeting || !dinner) ;

console.log(done_go);