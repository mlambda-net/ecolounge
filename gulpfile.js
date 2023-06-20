

import pkg from 'gulp';
import  concat from 'gulp-concat'
import babel from 'gulp-babel';
import browserify from 'gulp-browserify';
import * as modernizr from 'gulp-modernizr'



const { task,src,dest, watch } = pkg;


let build = function () {
    return src("_lib/*.js")
        .pipe(browserify({ transform: ['babelify'] }))
        //  .pipe(modernizr())
        .pipe(babel())
        .pipe(concat('main.js'))
        .pipe(dest('./assets/js'))
};

watch('./_lib/*.js', build);
task('concat-task', build);