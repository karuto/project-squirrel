var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-clean-css');

gulp.task('default', function() {
  gulp.src('./css/*.css')
    .pipe(concat('app.min.css'))
    .pipe(minifyCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css/'));
});
