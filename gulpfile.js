'use strict';

var gulp = require('gulp'),
	// browserify = require('browserify'),
	// source = require('vinyl'),
	// coffeescript = require('coffeescript'),
	stylus = require('gulp-stylus');

gulp.task('stylus', function () {
	return gulp.src('./views/stylesheets/**/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('default', ['stylus'], function() {
	gulp.watch(['./views/stylesheets/**/*.styl'], ['stylus']);
});



// gulp.task('squish:js', function() {
// 	var bundle = browserify().bundle();

// 	return bundle
// 		.pipe(source(''))
// 		.pipe(gulp.dest('./public/scripts'));
// });

