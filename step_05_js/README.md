# javascript

- 인터프리터 언어/순서에 맞게 번역(javascript, swift)
- 컴파일언어(java, c, c#)

> web : html/css/javascript
		- html: 구조
		- css: 디자인
		- javascript: 제어

## MVC 모델
	- model: database(DB) , json
	- view: html/css
	- controller: javascript

## javascript 형
	* 기본형
		- 숫자(Number)
		- 문자(String)
		- 논리(Boolean) => true/false
		- 특수(null / undefined)
	* 자료형
		- 함수(Function)
		- 객체(Object)
		- 배열(Array)

## 기본 규칙
	1. 숫자일경우에는 ''를 붙이지 않는다.  
	2. 문자일경우에는 ''를 붙인다.(' ', " " 구분 없음)
	3. 내용이 끝나는 경우(수식이 끝나는 경우에는) ;을 붙임
	4. 띄어쓰기, 줄바꿈 기능이 거의 없음(시각적으로 정확하게 구분!!)
	5. 주석 정확하게 처리 //  , /* */
	6. js는 식별자(개발자가 직접 이름 명명)를 중요하게 생각
		- 영문
		- camelCase, Pascal, under_score (첫글자 _, $만 특수문자로 사용가능)
		- 이름사용시 띄어쓰기 사용하는것은 X

## 결과 도출 기초
	- document.writeln();   // 문서에 표현
	- alert();							// 메세지 창
	- console.log();				//개발자모드(console) / 중간 과정을 도출하거나, 값을 찾아낼때


## 변수/상수
	- 변수: 변하는 값(데이터를 담는곳, 상황에따라 데이터값은 변할 수 있다!)
		- 변수표기법: var
		- 변수 선언만 하는방법(하나씩만 설정, 여러개를 한꺼번에 처리)
		- 변수와 값을 같이 선언하는 방법(하나씩만 설정, 여러개를 한꺼번에 처리)
	- 상수: 변하지 않는 값(한번 지정하면 바꿀수 없다!!!)
