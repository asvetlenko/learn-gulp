'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const del = require('del');
const newer = require('gulp-newer');
const remember = require('gulp-remember');
const autoprefixer = require('gulp-autoprefixer');
const path = require('path');

gulp.task('styles', () => {
    return gulp.src('frontend/styles/**/*.styl', {base: 'frontend', since: gulp.lastRun('styles')})
        .pipe(stylus())
        .pipe(autoprefixer())
        .pipe(remember('styles'))
        .pipe(concat('all.css'))
        .pipe(gulp.dest('public'));
});

gulp.task('watch', function (callback) {
    gulp.watch('frontend/styles/**/*.styl', gulp.series('styles')).on('unlink', function (filepath) {
        remember.forget('styles', path.resolve(filepath));
    });

    callback();
});

gulp.task('dev', gulp.series('styles', 'watch'));