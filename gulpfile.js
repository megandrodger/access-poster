var gulp = require('gulp');
// requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass()) // Converts Sass to CSS with gulp-sass
	.pipe(gulp.dest('app/css'))
});

gulp.task('watch', function () {
	gulp.watch('app/scss/**/*.scss', ['sass']);
});
