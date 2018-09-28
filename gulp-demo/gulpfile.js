var gulp = require('gulp'),
    cssMin = require('gulp-clean-css'),
    jsMin = require('gulp-uglify'),
    htmlMin = require('gulp-htmlmin'),
    imageMin = require('gulp-imagemin');

const del = require("del");
gulp.task('jsMin', function () {
    gulp.src('src/js/*.js')
        .pipe(jsMin())
        .pipe(gulp.dest('dist/js'));
})
gulp.task('cssMin', function () {
    gulp.src('src/css/*.css')
        .pipe(cssMin())
        .pipe(gulp.dest('dist/css'));
});
gulp.task('htmlMin', function () {
    gulp.src('index.html')
        .pipe(image64())
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/html'));
});
gulp.task('imageMin', function () {
    gulp.src('src/img/*')
        .pipe(imageMin())
        .pipe(gulp.dest('dist/img'))
    // .pipe(del('img/*.jpg'));
});


gulp.task('watch', function () {
    gulp.watch('src/css/*.css', ['cssMin']);
    gulp.watch('src/js/*.js', ['jsMin']);
    gulp.watch('index.html', ['htmlMin']);
    gulp.watch('src/img/*', ['imageMin']);
});