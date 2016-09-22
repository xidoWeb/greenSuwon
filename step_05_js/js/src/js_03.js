// js_03.js   : array

var coffee = ['스타벅스', '커피빈', '커반', '이디아', '할리스', '투썸'];
// .push() : 뒤 추가
// .unshift() : 앞에 추가
// .pop()  : 뒤에 빼기
// .shift() : 앞에 빼기
// 앞배열.concat(뒤배열) : 앞배열과, 뒤배열을 합치기
// .indexOf('항목이름') : 원하는 항목이름의 위치(순서)를 찾아가는 방법
// .join() : 배열화 되어있는 형태를 문자로 나열하는 기능


// console.log(coffee.length);
// console.log(coffee[1]);
// console.log(coffee.push('이자카야'), coffee);
// console.log(coffee.unshift('coffee'), coffee);
// console.log(coffee.pop(), coffee);
var drink = ['블랙티', '공차', '밀크티', '태티차', '보이차'];
var brand = coffee.concat( drink );
// console.log(brand);
console.log(brand.slice(2, -4));
// console.log(brand[3]);
// document.write(brand.indexOf('커반') + 1);
console.log(brand.join('★'));
