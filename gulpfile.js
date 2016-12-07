
var gulp = require('gulp'),
		sass = require('gulp-sass');

gulp.task('default', ['watch']);

gulp.task('build-css', function(){
	return gulp.src('app/assets/sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/stylesheets'));
});

gulp.task('watch', function(){
	gulp.watch('app/assets/sass/**/*.scss', ['build-css']);
});
