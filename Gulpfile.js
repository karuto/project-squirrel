var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('css/*.css')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/app.css'));
});

// TODO: I was in the middle of setting up Gulp and Sass, but my machine's NPM doesn't work.
http://ryanchristiani.com/getting-started-with-gulp-and-sass/
https://css-tricks.com/gulp-for-beginners/
