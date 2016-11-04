// gulpfile.js 
// gulp_setting

var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('jade');

 // gulp.task  : 임무를 부여
 // gulp.src   : 소스 위치
 // gulp.dest  : 컴파일 위치
 // gulp.watch : 실시간 변환 확인
 // .pipe      : 관(파이프)

 // gulp.task('default', function() {
 // 	console.log('---------------------------------------------------------');
 // 	console.log(' -> gulp 작동상태 이상없음');
 // 	console.log('---------------------------------------------------------');
 // });

gulp.task('sass', function() {
	return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('jade', function() {
	return gulp.src('./src/jade/**/*.jade')
		.pipe(jade({client: true}))
		.pipe(gulp.dest('./dist'));
});

gulp.task('jade:watch', function() {
	gulp.watch('./src/jade/**/*.jade');
});

gulp.task('default', ['sass:watch', 'jade']);