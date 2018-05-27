var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var config = require('../config');
var { webpackTask } = require('./webpack');

gulp.task('build', webpackTask);


