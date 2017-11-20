var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', function() {
  gulp.src('./css/*.css')
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('./dist/css/'));
});
