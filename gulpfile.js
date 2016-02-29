'use strict';

var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var csslint = require( 'gulp-csslint' );
var browserSync = require( 'browser-sync' ).create();

// Static Server + watching scss/html files
gulp.task('watch', ['sass'], function() {

	browserSync.init( {
		server: ".",
		startPath: "/tests/tests.html"
	} );

	gulp.watch( "sass/**/*.scss", [ 'sass' ] );
	gulp.watch( "tests/*.html" ).on( 'change', browserSync.reload );
} );

// Compile sass into CSS & auto-inject into browsers
gulp.task( 'sass', function() {
	return gulp.src( 'sass/content-styles.scss' )
		.pipe( sass( { outputStyle: 'expanded' } ).on( 'error', sass.logError ) )
		.pipe( gulp.dest( 'css' ) )
		.pipe( browserSync.stream() );
} );

gulp.task( 'serve', [ 'sass', 'watch' ] );
gulp.task( 'default', [ 'sass' ] );

gulp.task( 'lint', function() {
	gulp.src( 'css/*.css' )
		.pipe( csslint() )
		.pipe( csslint.reporter() );
} );

gulp.task( 'test', [ 'lint' ], function () {

} );
