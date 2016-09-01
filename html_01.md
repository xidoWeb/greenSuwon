# html_base 익히기
> html에 대한 기초 개념을 이해할 수 있다.

## 기초 세팅

### 기본세팅폴더 생성
1. css : style코드
2. img : 이미지파일
3. js : 자바스크립트/ jQuery파일
4. work : 기타 작업관련 파일
5. html문서는 별도의 폴더에 담지 않는다.

### 파일/폴더 생성시 알아야하는 사항
1. 숫자가 처음에 오는 파일/폴더명 X
2. 영문 파일/폴더명
3. 띄어쓰기 X
4. 특수문자 X (일부예외: _, -)
5. 의미없는 네이밍기법은 X
6. 축약문자보다는 풀어서

### 경로
1. 절대경로: 고정된 경로값
  - 웹페이지 주소: http://naver.com/news/news.html
  - / : (최상위 루트경로 에서부터)
2. 상대경로: 작성되고있는 파일을 기준으로(예시에선 box폴더를 찾는것)
  - ./box : 현재위치에서 box폴더를 찾아라
  - ../box : 상위폴더에서 box폴더를 찾아라
  - box : 현재위치에서 box폴더를 찾아라(단, 조건이 발생시 기준위치가 변경됨)
3. 하나의 폴더에서 가장 먼저 인지하는 파일명은(최초페이지) : index.html

### 기본 태그

### 제목:

- 제목:  h1 ~ h6
		h1: 주로 로고, 단 한번만 사용가능
	
```html
<h1>가장 중요한 제목</h1>
<h2>두번째 중요한 제목</h2>
<h3>세번째 중요한 제목</h3>
<h4>네번째 중요한 제목</h4>
<h5>다섯번째 중요한 제목</h5>
<h6>가장 작은단위의 제목</h6>
```

- 내용:	p, pre
		p: 단락: 띄어쓰기 한번, 줄바꿈 X
		pre: 원하는 대로 다 되지만 실제 사용하기에는 불편하다.
		
```html
<p>lorem afkdjasdfsa asdefaqw dfasdfwe sadfqwef sd</p>
<pre>lorem afkdjasdfsa
	asdefaqw dfasdfwe 
	sadfqwef sd</pre>
```

- br: 줄바꿈을 처리하는 기능
- hr: 화제의 전환기능(기본형태는 가로선)

```html
<p>내용상 하나의 문맥이고, <br />
줄바꿈을 처리하고 싶을때 <br /> 
사용할 수 있다.</p>
<hr /> 
<p>
서로간의 내용의 전환이 될때에는 hr코드를 사용해서 구분한다.
</p>
```

- list: 여러개의 공통된 관계를 가지고 나열된 형태를 사용시에는 list를 사용한다.
	* ul: unorder 순서가 없는 형태의 리스트
		- li: ul에서 자식요소(코드 == 태그 == 요소)로 사용하는 코드
	* ol: order 순서가 존재하는 형태의 리스트
		- li: ol에서 자식요소(코드 == 태그 == 요소)로 사용하는 코드
	* dl: data 순서의 내용이 존재(제목, 내용)
		- dt: dl에서의 제목을 나타내는 요소
		- dd: dl에서의 내용을 나타내는 요소
		
```html
	<ul>
		<li>리스트 순서</li>
		<li>리스트 순서</li>
		<li>리스트 순서</li>
		<li>리스트 순서</li>
	</ul>
	<ol>
		<li>리스트 순서</li>
		<li>리스트 순서</li>
		<li>리스트 순서</li>
		<li>리스트 순서</li>
	</ol>
	<dl>
		<dt>리스트 제목</dt>
		<dd>리스트 내용을 담당</dd>
		<dd>리스트 내용을 담당</dd>
		<dd>리스트 내용을 담당</dd>
	</dl>
```

- 강조:
	* em: 기울기
	* strong: 굵기
	* ins: 밑줄
	* del: 취소선
	
- 앵커(링크): 
	* a: 링크를 나타내는 요소 ( href, title, target)/ 반드시 블록요소로 감싸야 함
		- href: 원하는 위치로 이동하는 기능을 담당하는 속성(임시링크는 #)
		- title: 마우스 hover시에 나타나는 말풍선 체크 속성
		- target: _self:자신의 페이지에서 화면전환(기본형태), _blank:새창에서의 열기
			
```html
	<div><a href="#">link_01</a></div>
	<div><a href="index.html" title="index 페이지로 이동" target="_self">link_02</a></div>
	<div><a href="http://google.com" target="_blank">link_03</a></div>
```

- 이미지
	* img: 이미지를 담아서 표현하는 요소( src, alt , title)
		- src : 주소값(파일의 확장자가 올바르게 보이지 않는다면, 구성>폴더 및 검색옵션 > 보기탭, 알려진암호형식... 체크해제)
		- alt : 해당하는 이미지의 설명
		- title : link기능과 같음

### style_기본형태(간단한 내용)
#### 선택자
 - type 선택자: 태그(요소, element)명을 직접 선택해서 사용하는 방법 `h1{}`, `ul{}`
 - id 선택자: 속성중에 id이름값을 선택해서 사용하는 방법 `#box{}`
 	* id이름값은 body내에서 여러번 사용할 수가 없다~~~~!!!
	* 이름사용시 첫글자 숫자 X,영문, 첫글자 소문자, 단어와 단어사이는 띄워쓰기 X(_ or 첫글자 대문자)
	* 특수문자 사용X (_, $)
 ```html
	<style>
		#box{}
	</style>
 	<body>
		<div id="box"></div>
	</body>
 ```
 
 - class선택자: 속성중에 class 이름값을 선택해서 사용하는 방법 `.test{}`
 	* id와 동일한 네이밍기법을 사용( 전통방식은 단어와 단어사이 - 표기 )
	
```html
<style>
	.test{}
</style>
<body>
	<div class="test"></div>
</body>
```
 - 가상 선택자: 실제 존재하는 형태가아닌, 별도의 기능을 활요한 선택자 
 	* :hover  		- 마우스 올려놓은 상태
	* :active 		- 마우스 왼버튼을 누르고 있는 상태
	* :visited		- 웹페이지 방문한 흔적을 남길 때
	* :linked			- 링크속성을 가진 형태(기본형태이므로 잘 사용X)
	* :before			- 가상 클래스라고도 하며, 객체(요소)의 앞부분에 존재하게하는 기능(content:;속성필수)
	* :after			- 가상 클래스라고도 하며, 객체(요소)의 뒷부분에 존재하게하는 기능(content:;속성필수)
	
 - 자손 선택자: 모든 태그들은 부모/자식/형제 등의 형태를 가지게 되는데 이때, 자식의 자식요소로 처리되는것들을 일컬어 자손 선택자라고 한다.(자식의 자식이..... 아~~~주 하위레벨이어도 통용)
 	* 요소와 그후손 요소 사이에 아무기호도 없이 띄어쓰기 사용
	
```html
<style>
	ul li{background-color:#f07;} // ul내부의 li모든것
	ol a{background-color:#fac;} // ol 내부의 a모든것
</style>
<body>
	<div>
		<ul>
			<li>
				<ol>
					<li>
						<a href="">test</a>
					</li>
				</ol>
			</li>
		</ul>
		<ol>
				<li>
					<a href="">test</a>
				</li>
		</ol>
	</div>
</body>
```

 - 자식 선택자: 반드시 부모/자식간의 상황이 만들어져야만 활성화되는 형태
 	* `ul > li{}` -> ul 자식(>) li를 선택하겠다!!
	
```html
<style>
	ul > li{background-color:#f07;} // ul내부의 li모든것
div	ol>li>a {background-color:#fac;} // ol 내부의 a모든것
</style>
<body>
	<div>
		<ul>
			<li>
				<ol>
					<li>
						<a href="">test</a>
					</li>
				</ol>
			</li>
			<li><a href=""></a></li>
			<li></li>
		</ul>
	</div>
		<ol>
				<li>
					<a href="">test</a>
				</li>
		</ol>
</body>	
```

 - 속성 선택자: 각 요소(태그)의 속성을 선택하게 하는 기능
	* [attribute]   						속성(attribute)을 선택
	* [attribute="value"]   		속성값이 value인것을 선택
	* [attribute~="value"]   		속성값이 value를 포함하는 것(단어)
	* [attribute|="value"]   		속성값이 value로 시작하거나 포함하는것(단어)
	* [attribute^="value"]   		속성값이 value로 시작하는것
	* [attribute$="value"]   		속성값이 value로 끝나는 것
	* [attribute*="value"]   		속성값이 value라는 내용을 담고있는것
	
```html
<style>
.container{}
a[href="#"]{color:#f00;}
a[href!="#"]{color:#00f;}
a[href^="http"]{}
</style>
<body>
	<div class="container">
		<ul id="box">
			<li><a href="#">link</a></li>
			<li><a href="https://naver.com">link</a></li>
			<li><a href="http://ui.daum.net">link</a></li>
			<li><img src="test.jpg" alt="테스트 이미지"></li>
		</ul>
	</div>
</body>
```
 

























