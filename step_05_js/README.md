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

## 문자열
	- 문자열의 내용에대한 길이, 자르기 등의 기능을 사용할때
	 '문자열'.length;       	// 해당문자열의 총 글자수를 파악
	 '문자열'[n];           	// 문자열의 n번째 해당하는 글자가 무엇인지 파악
	 '문자열'.slice(x, y);  	// 문자열의 앞에서 n번째,y번째이후를 잘라내어 필요한 문자열만 파악
	 '문자열'.toUpperCase(); 	// 문자열을 대문자로 바꾸기
	 '문자열'.toLowerCase(); 	// 문자열을 소문자로 바꾸기


## Array(배열)
	- [] 형태 내부에 여러항목을 나열하여 배치해놓은것

	````javascript
	var box = [apple, grape, orange];
	var box2 = [kiwi, strawberry];
	``` 
	*위항목의 배열에서 추가기능으로*
	>box.push();           		// 뒤 추가
	 box.unshift();        		// 앞에 추가
	 box.pop();            		// 뒤에 빼기
	 box.shift();          		// 앞에 빼기
	 box.concat(box2);     		// 앞배열과, 뒤배열을 합치기
	 box.indexOf('apple');  	// 배열내의 원하는 항목이름의 위치(순서) 를 찾아가는 방법
	 box.join();           		// 배열화 되어있는 형태를 문자로 나열하는 기능

## Object(객체)
	- 오브젝트: {`key`:`value`} 형태의 내부에 `속성`: `속성값` 형태로 묶어놓은것
	```javascript
		var arr = ['아메리카노', '라떼'];
		var obj = {'아메리카노':'쓰다', '라떼': '달다'};
	```
	`console.dir(document.body);` // body객체가 가지는 목록항목을 확인하는방법

## Function(함수)
	- 다시 사용할수 있도록 코드를 묶어두는 방법
	- 여러 식을 모아서 쉽게 운용할 수 있도록 만들어놓은 형식
	- 기본형: `function add(){};`
	- 익명함수: `var sum = function(){};`
	- 생성자함수: `var plus = new Function(){};`
	- 즉시실행함수: `(function (){})();`

### 전역변수, 지역변수
	- 변수가 작용할 수 있는 허용 범위를 판단하여 지역범위인지 전역인지 인지가능

## 조건문
### if문
	- 어떠한 조건을 주어 상황에 맞는것이 실행되도록 처리하는 것!
	if(조건1){
		조건1이 참이면 실행;
	} else if(조건2){
		조건2가 참이면 실행;
	} else if(조건3){
		조건3이 참이면 실행;
	} else if(조건4){
		조건4가 참이면 실행;
	} else{
		조건 1,2,3,4에 해당되지 않으면 실행;
	}

### 삼항 연산자
	- 조건을 주고 질문(?) 참이면 실행 그것의 거짓이면 다른형태를 취해서 실행
	(조건) ?  참이면 실행 : 거짓이면 실행;

### switch/case문
	- 하나의 조건을 주고 그조건과 일치할 경우에 실행되도록 처리
	- break;를 적용하지 않으면, 이후의 case형태도 실행된다.!

	switch(조건){
	case 조건결과1:
		조건결과1이 맞을경우 실행;
		break;
	case 조건결과2:
		조건결과2이 맞을경우 실행;
		break;
	case 조건결과3:
		조건결과3이 맞을경우 실행;
		break;
	case 조건결과4:
		조건결과4이 맞을경우 실행;
		break;
	default:
		조건이 부합되지 않는 경우 실행;
	}

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

