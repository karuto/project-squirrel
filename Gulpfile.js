var gulp = require('gulp');

gulp.task('default', function() {
    gulp.src('./css/*.css')
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('./dist/css/'));
});

// TODO: I was in the middle of setting up Gulp and Sass, but my machine's NPM doesn't work.
// http://ryanchristiani.com/getting-started-with-gulp-and-sass/
// https://css-tricks.com/gulp-for-beginners/
