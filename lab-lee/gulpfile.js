'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

//lint task
gulp.task('lint', function() {
  return gulp.src(['**/*.js', '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

//test task
gulp.task('test', function() {
  gulp.src('./test/*-test.js', {read:false})
  .pipe(mocha({reporter:'nyan'}));
});

//default task
gulp.task('default', ['test']);

//dev task
gulp.task('devtask', function() {
  gulp.watch(['**/*.js', '!node_modules/**'], ['lint', 'test']);
});
