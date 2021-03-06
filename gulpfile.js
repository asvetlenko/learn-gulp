'use strict';

const gulp = require('gulp');

gulp.task('default', function () {
    return gulp.src('./source/**/*.{css,log}') //minimatch
        .on('data', function (file) {
            var logObjBase = {
                contents: file.contents,
                path: file.path,
                cwd: file.cwd,
                base: file.base
            };
            console.log('----- base:', logObjBase);

            var logObj2 = {
                relative: file.relative,
                dirname: file.dirname, // ../source/client.js
                basename: file.basename, // client.js
                stem: file.stem, // client
                extname: file.extname // .js
            };

            console.log('-----path component helpers:', logObj2); // js/client.js
        })
        //.pipe(gulp.dest('result-folder'));
        .pipe(gulp.dest(function (file) {
            var resultPath = '';
            switch (file.extname){
                case '.js' :{
                    resultPath = 'appJS';
                    break;
                }
                case '.css' :{
                    resultPath = 'appStyle';
                    break;
                }
                default:{
                    resultPath = 'dest';
                    break;
                }
            }

            return resultPath;
        }));
});