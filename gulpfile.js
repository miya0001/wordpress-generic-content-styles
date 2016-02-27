'use strict';

var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var csslint = require( 'gulp-csslint' );

gulp.task( 'sass', function () {
  return gulp.src( './sass/content-styles.scss' )
    .pipe( sass().on( 'error', sass.logError ) )
    .pipe( gulp.dest( './css/' ) );
} );

gulp.task( 'watch', function () {
    gulp.watch( 'sass/**/*.scss', ['sass'] );
});

gulp.task( 'default', [ 'sass' ], function () {

} );


gulp.task( 'lint', function() {
  gulp.src( 'css/*.css' )
    .pipe( csslint() )
    .pipe( csslint.reporter() );
} );

gulp.task( 'test', [ 'lint' ], function () {

} );
