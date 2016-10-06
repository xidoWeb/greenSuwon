## sass / scss => 전처리기
> 전처리기: less, sass/scss, stylus 의 종류..
css에서 구현하기 힘든 방법들을 좀더 쉽게 처리하기 위해 나온 언어

```css
#container{ color:#fff; background:#fa0;}
#container>#box{color:inherit;}
```

### sass방식
```sass
#container
	color:#fff
	background:#fa0

	>#box
		color:inherit
```

### scss방식
```scss
#container{ color:#fff; background:#fa0;
	>#box{color:inherit;}
}
```

sass/scss문제는: html에서는 인식X -> css로 변환처리
sublimetext: scss/sass가 설치가 되어있지 않다! package로 설치!















