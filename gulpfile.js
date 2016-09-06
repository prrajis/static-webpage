var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require("gulp-concat");
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src(['./assets/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat("style.css"))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('connect', function() {
  root: 'static-web',
  connect.server({
    livereload: true
  });
});

gulp.task('live-reload', function () {
  gulp.src(['./*.html', './assets/**/*.css', './assets/**/*.js'])
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./*.html', './assets/**/*.css', './assets/**/*.js', './assets/**/*.scss'], ['sass', 'live-reload']);
});

gulp.task('default', ['connect', 'sass', 'watch']);
