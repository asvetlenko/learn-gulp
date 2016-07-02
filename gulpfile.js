'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

gulp.task('build:styles', () => {
    return gulp.src('frontend/styles/main.styl', {base: 'frontend'})
        .pipe(gulpIf(isDev, sourcemaps.init()))
        .pipe(stylus())
        .pipe(concat('all.css'))
        .pipe(gulpIf(isDev, sourcemaps.write('.')))
        .pipe(gulp.dest('public'));
});

gulp.task('default', gulp.series('build:styles'));