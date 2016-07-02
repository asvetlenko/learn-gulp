'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const debug = require('gulp-debug');

gulp.task('build:styles', () => {
    return gulp.src('frontend/styles/**/*.styl', {base: 'frontend'})
        .pipe(debug({title: 'src'}))
        .pipe(stylus())
        .pipe(debug({title: 'stylus'}))
        .pipe(concat('all.css'))
        .pipe(debug({title: 'concat'}))
        .pipe(gulp.dest('public')); //7:05:
});

gulp.task('default', gulp.series('build:styles'));