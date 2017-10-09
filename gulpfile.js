const gulp = require('gulp');
const csss = require('gulp-clean-css');
const jss = require('gulp-uglify');
const concat = require('gulp-concat');
gulp.task('cons', () => {
	gulp.src(['./js.js','./js2.js']).pipe(concat('js3.js')).pipe(jss()).pipe(gulp.dest('./'));
})
gulp.task('default', ['cons']);