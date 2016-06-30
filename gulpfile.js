'use strict';

const gulp = require('gulp');
const styles = require('gulp-stylus');

gulp.task('build:styles', () => {
    return gulp.src('frontend/styles/**/*.styl', {base: 'frontend'})
        .pipe(styles())
        .pipe(gulp.dest('public')); //7:05:
});

gulp.task('default', gulp.series('build:styles'));