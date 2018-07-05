var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile individual SCSS files - will be used for individual modules of the website
gulp.task('styles', function() {
    gulp.src('styles/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('styles/css'));
});

// Compiles km-theme - will be used for style guide theme only
gulp.task('theme-styles', function() {
    gulp.src('style-guide-theme/static/styles/scss/km-theme.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('style-guide-theme/static/styles/css'));
});

// Compiles to main.css which will be our primary CSS file for the website
gulp.task('main-compile', function() {
    gulp.src('styles/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('styles/css'));
});

gulp.task('default', function() {
    gulp.watch(['styles/scss/**/*.scss','style-guide-theme/static/styles/scss/km-theme.scss', 'styles/sass/main.scss'],  ['styles', 'theme-styles', 'main-compile']);
});
