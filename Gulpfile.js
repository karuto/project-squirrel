var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-clean-css');

gulp.task('default', function() {
  gulp.src('./css/*.css')
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('./dist/css/'));
});

/*
Note: `.pipe(minifyCSS())` was removed from the stylesheet processing because
I suspect there is a bug where it does not compile for certain classes.
Such as a `.header {}` declaration in `site-global.css` that never made it.
*/
