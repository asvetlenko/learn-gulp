'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('build:styles', () => {
    return gulp.src('frontend/styles/main.styl', {base: 'frontend'})
        .pipe(debug({title: 'sourcemaps.init'}))
        .pipe(sourcemaps.init())
        .pipe(debug({title: 'src'}))
        .pipe(stylus())
        .pipe(debug({title: 'stylus'}))
        .pipe(concat('all.css'))
        .pipe(debug({title: 'concat'}))
        .pipe(sourcemaps.write('.'))
        .pipe(debug({title: 'sourcemaps.write'}))
        .pipe(gulp.dest('public'));
});

gulp.task('default', gulp.series('build:styles'));