// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-clean-css');
var concat = require('gulp-concat');

gulp.task('sass', function() {
	return gulp
		.src('./assets/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(minify())
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('combine', function() {
	return gulp
		.src([
			'./assets/kube/_scss/_variables.scss',
			'./assets/kube/_scss/mixins/_breakpoints.scss',
			'./assets/kube/_scss/mixins/_fonts.scss',
			'./assets/kube/_scss/mixins/_flex.scss',
			'./assets/kube/_scss/mixins/_grid.scss',
			'./assets/kube/_scss/mixins/_utils.scss',
			'./assets/kube/_scss/mixins/_buttons.scss',
			'./assets/kube/_scss/mixins/_gradients.scss',
			'./assets/kube/_scss/mixins/_labels.scss'
		])
		.pipe(concat('kube.scss'))
		.pipe(gulp.dest('./assets/kube/scss'));
});

gulp.task('watch', function() {
	gulp.watch(
		[
			'./assets/kube/_scss/*.scss',
			'./assets/kube/_scss/components/*.scss',
			'./assets/kube/_scss/mixins/*.scss',
			'./assets/scss/**/*.scss'
		],
		['sass', 'combine']
	);
});

gulp.task('default', ['sass', 'combine', 'watch']);
