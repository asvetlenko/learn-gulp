'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const del = require('del');
const newer = require('gulp-newer');

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

gulp.task('build:styles', () => {
    return gulp.src('frontend/styles/main.styl', {base: 'frontend'})
        .pipe(gulpIf(isDev, sourcemaps.init()))
        .pipe(stylus())
        .pipe(concat('all.css'))
        .pipe(gulpIf(isDev, sourcemaps.write('.')))
        .pipe(gulp.dest('public'));
});

gulp.task('build:clean', function () {
    return del('public');
});
gulp.task('build:assets', function () {
    return gulp.src('frontend/assets/**', {base: 'frontend', since: gulp.lastRun('build:assets')})
        .pipe(newer('public'))
        .pipe(debug({title:'assets'}))
        .pipe(gulp.dest('public'));
});

gulp.task('default', gulp.series('build:clean',
    gulp.parallel('build:styles', 'build:assets')));


gulp.task('watch', function (callback) {
    gulp.watch('frontend/styles/**/*.*', gulp.series('build:styles'));
    gulp.watch('frontend/assets/**/*.*', gulp.series('build:assets'));

    callback();
});

gulp.task('dev', gulp.series('default', 'watch'));