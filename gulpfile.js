// requirements
var gulp = require('gulp');
var sass = require('gulp-sass');
var merge = require('merge-stream')

// define paths
var paths = {
    srcSCSS:     'styles/scss/**/*.scss',
    srcMainSCSS: 'styles/scss/main.scss',
    srcBlogSCSS: 'styles/scss/main-blog.scss',
    srcBsgSCSS:  'styles/scss/main-bsg.scss',

    distCSS:     'styles/css'
}

// compile all SCSS to CSS 
gulp.task('compile', function(done) {
    var hubspotModules = gulp.src(paths.srcSCSS);
    var mainCompile = gulp.src(paths.srcMainSCSS);
    var blogCompile = gulp.src(paths.srcBlogSCSS);
    var bsgCompile = gulp.src(paths.srcBsgSCSS);

    return merge(hubspotModules, mainCompile, blogCompile, bsgCompile)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.distCSS));
    done();
});

// default gulp task
gulp.task('default', (done) => {
    gulp.watch(paths.srcSCSS, gulp.parallel('compile'));
    done();
});

