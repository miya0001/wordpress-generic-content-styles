'use strict';

var gulp = require( 'gulp' ),
	sass = require( 'gulp-sass' ),
	scsslint = require('gulp-scss-lint'),
	browserSync = require( 'browser-sync' ).create();

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
	return gulp.src('sass/**/*.scss')
		.pipe( scsslint( {
			'reporterOutputFormat': 'Checkstyle',
			'bundleExec': true,
			'config': 'scss-lint.yml'
		} ) )
		.pipe( scsslint.failReporter() );
} );

gulp.task( 'test', [ 'lint' ], function () {

} );
