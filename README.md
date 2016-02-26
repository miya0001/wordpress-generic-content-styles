# Generic Content Styles

This is a Sass based project for the styles of WordPress content.

## How to use

Change directory into the your theme and then run following.

```
$ npm install generic-wordpress-content-styles
```

Or

```
$ bower install generic-wordpress-content-styles
```

Put the code like following into your theme's functions.php.

```
wp_enqueue_styles(
  'generic-wordpress-content-styles',
  'path/to/generic-wordpress-content-styles.css',
  array(),
  'v0.1.0'
);
```

## How to customize

* Please edit the `.scss` files.
* Then run `gulp` or `npm run build`.
