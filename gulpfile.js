'use strict';

const gulp = require('gulp');

gulp.task('example:hello', (callback) => {
    console.log('----Hello');
    callback();
});

gulp.task('example:promise', function () {
    return new Promise((resolve, reject) => {
            console.log('----Promise');
            resolve();
        });
});
/*
gulp.task('example:stream' () => {
    // reads all from stream (and throws the data away) and then done
    console.log('----Stream');
    return require('fs').createReadStream(_filename);
});

gulp.task('example:process' () =>{
    console.log('----Process');
     return('child_roccess').spawn('ls', ['.'], {stdio: 'inherit'});
})
 */

//gulp.task('example', gulp.series('example:hello', 'example:promise'));
gulp.task('example', gulp.parallel('example:hello', 'example:promise'));