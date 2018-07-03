var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('styles', function() {
    gulp.src('styles/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('styles/css'));
});

gulp.task('theme-styles', function() {
    gulp.src('style-guide-theme/static/styles/scss/km-theme.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('style-guide-theme/static/styles/css'));
});

gulp.task('main-compile', function() {
    gulp.src('styles/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('styles/css'));
});


gulp.task('default', function() {
    gulp.watch(['styles/sass/**/*.scss','style-guide-theme/static/styles/scss/km-theme.scss', 'styles/sass/main.scss'],  ['styles', 'theme-styles', 'main-compile']);
});