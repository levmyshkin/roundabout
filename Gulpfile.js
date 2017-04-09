var gulp = require('gulp'),
  gp_concat = require('gulp-concat'),
  gp_rename = require('gulp-rename'),
  gp_uglify = require('gulp-uglify');

gulp.task('compress', function(){
  return gulp.src(['jquery.roundabout.js'])
    .pipe(gp_rename('jquery.roundabout.min.js'))
    .pipe(gp_uglify({ preserveComments: 'license' }))
    .pipe(gulp.dest(''));
});

gulp.task('default', ['compress'], function(){});