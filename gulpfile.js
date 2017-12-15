// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp
		.src('./assets/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('lint-css', function lintCssTask() {
	const gulpStylelint = require('gulp-stylelint');

	return gulp.src('src/**/*.css').pipe(
		gulpStylelint({
			reporters: [{ formatter: 'string', console: true }]
		})
	);
});

gulp.task('watch', function() {
	gulp.watch('./assets/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch', 'lint-css'], function() {
	gulp.start('sass');
	gulp.start('watch');
	gulp.start('lint-css');
});
