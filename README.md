# WordPress Generic Content Styles

[![Build Status](https://travis-ci.org/miya0001/wordpress-generic-content-styles.svg?branch=master)](https://travis-ci.org/miya0001/wordpress-generic-content-styles)

This is a Sass based project for the styles of WordPress content.

## How to use

Change directory into the your theme and then run following.

```
$ npm init
$ npm install gulp gulp-sass
$ npm install https://github.com/miya0001/wapuu-gallery-vr.git --save
```

Place `gulpfile.js` like following.

```
'use strict';

var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );

gulp.task( 'sass', function () {
  return gulp.src( 'node_modules/wordpress-generic-content-styles/sass/content-styles.scss' )
    .pipe( sass().on( 'error', sass.logError ) )
    .pipe( gulp.dest( './css/' ) );
} );
```

Run `gulp`.

```
$ gulp sass
```

Put the code like following into your theme's `functions.php`.

```
wp_enqueue_styles(
  'wordpress-generic-content-styles',
  get_stylesheet_directory_uri() . '/css/content-styles.css',
  array(),
  'v0.1.0'
);
```

## How to contribute

```
$ git clone git@github.com:miya0001/wordpress-generic-content-styles.git
$ cd wordpress-generic-content-styles
$ atom .
$ npm run serve
```
