var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
    gulp.src('./css/*.css')
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('./dist/css/'));
});
