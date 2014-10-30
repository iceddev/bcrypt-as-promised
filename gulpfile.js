'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

function lint(){
  return gulp.src(['**/*.js', '!node_modules/**/*.js', '!coverage/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
}

gulp.task('lint', lint);

gulp.task('default', ['lint']);
