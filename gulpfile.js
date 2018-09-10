var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile individual SCSS files - will be used for individual modules of the website
gulp.task('styles', function() {
    gulp.src('styles/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('styles/css'));
});

// Compiles to main.css which will be our primary CSS file for the website
gulp.task('main-compile', function() {
    gulp.src('styles/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('styles/css'));
});

// Compiles to main-blog.css which will be the CSS file for the primary blog
gulp.task('blog-compile', function() {
    gulp.src('styles/scss/main-blog.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('styles/css'));
});

// Compiles to  which will be the CSS file for the living style guide
gulp.task('bsg-compile', function() {
    gulp.src('styles/scss/main-bsg.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('styles/css'));
});


gulp.task('default', function() {
    gulp.watch(['styles/scss/**/*.scss', 'styles/scss/brand-style-guide/**/*.scss' ],  ['styles', 'main-compile']);
});
