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
	- **변수**: 변하는 값(데이터를 담는곳, 상황에따라 데이터값은 변할 수 있다!)
		- 변수표기법: var
		- 변수 선언만 하는방법(하나씩만 설정, 여러개를 한꺼번에 처리)
		- 변수와 값을 같이 선언하는 방법(하나씩만 설정, 여러개를 한꺼번에 처리)
	- **상수**: 변하지 않는 값(한번 지정하면 바꿀수 없다!!!)
	- **호이스트**: 변수선언이 뒤에 나오더라도, 실제 변수명은 최상단(영역내에서)으로 끌어올려지는 현상, 변수가 선언되는 이름만 끌어올려진다.(값 자체는 올라가지 않는다!!!)
	- 변수사용시 예약어, 키워드(변수이름으로 사용금지)
		* 예약어 내용: break, case, catch, continue, default, delete, elsse, finally, for, function, if , in instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with
		* 주요 키워드: abstract, boolean, char, class, const, debugger, double, enum, export, extends, final, goto, importants, import, public, static, super, synchronized, throws, transient, volatile

## 연산자 
	- 산술연산자: + - * / %
		. `+`: 덧셈 
			(숫자+숫자 =>숫자의 더함), (문자+ 문자 =나열), (숫자+문자= 나열)
		. `-`: 뺄셈
		. `*`: 곱셈
		. `/`: 나눗셈
			(10 / 3 = 3... 1)
		. `%`: 나머지
			(10 % 3 = 1)

	- 대입연산자:
		. `=`: 기본형태
		. `+=`: 자기자신에게 더하다
		. `-=`: 자기자신에게 빼다
		. `*=, /=, %=`   

	- 증감연산자: 무조건 1을 더하거나, 빼는형태
		. `++`: 증가연산자( ++a, a++ )
			* ++a : 먼저 1을 더하고 값을 도출
			* a++ : 값을 도출시키고 1을 더하는것(노출 연산전, 실값은 연산후)
		. `--`: 감소 연산자(--a, a-- )
			* --a : 먼저 1을 빼고 값을 도출
			* a-- : 값을 도출시키고 1을 빼는것(노출 연산전, 실값은 연산후)  

	- 비교연산자:(<, >, <=, >=, ==, ===, !=, !==)   

	- 논리연산자:(&&, || , !)
		. a `&&` b: a값과, b라는 값을 비교했을때 양쪽 모두 참일경우 true
		. a `||` b: a값과, b라는 값을 비교했을때 둘중 하나이상 참일 경우 true
		. `!`a: a조건이 아닐때
		. `!!`a: a조건이 아닌게 아닐때


## javascript 용어
- var: 변수 선언
- 변수
- 리터럴(literal): 변수에 저장되는 값(데이터)/ 값의 표현 방법(value)
- 오퍼렌드: 연산자 이외의 것(변수, 리터럴)
- 오퍼레이트: 연산자
- argument, 인자값, 인수값, parameter, 매개변수: 함수(function)가 동작하기 위한 값
- key, attribute, property: 속성
- value: 속성의 값
- 함수: 미리 정해놓은 처리기능
- return: 반환 값
- instance: 정의된 기능(형태)을 복제

// .push() : 뒤 추가
// .unshift() : 앞에 추가
// .pop()  : 뒤에 빼기
// .shift() : 앞에 빼기
// 앞배열.concat(뒤배열) : 앞배열과, 뒤배열을 합치기
// .indexOf('항목이름') : 원하는 항목이름의 위치(순서)를 찾아가는 방법
// .join() : 배열화 되어있는 형태를 문자로 나열하는 기능
