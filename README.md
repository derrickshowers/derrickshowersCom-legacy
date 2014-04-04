# derrickshowersCom

Repo for [derrickshowers.com](http://derrickshowers.com).

## SASS

Using SASS to preprocess all CSS. Below is how things are setup:

```
├── scss
│   ├── main.scss - contains imports for everything below
│   ├── modules
│   │   └── _all.scss - SCSS variables
│   ├── partials
│   │   ├── _base.scss - all base styles
│   │   ├── _blog.scss - all blog styles
│   │   ├── _fonts.scss - any font related styles
│   │   ├── _headerfooter.scss - styles related to header and/or footer
│   │   ├── _ie.scss - ie specific styles
│   │   ├── _other.scss - misc styles
│   │   ├── _portfolio.scss - any portfolio page related styles
│   │   ├── _responsive.scss - media queries
│   │   └── _resume.scss - any resume page related styles
│   └── vendors - all vendor styleseheets
│       ├── _bootstrap.scss
│       ├── _bootstrap3-theme.scss
│       ├── _bootstrap3.scss
│       └── _dropdown.scss
└── style.css - contains compiled CSS
```

Instead of going with something like Grunt/Gulp, just using npm to watch/build SCSS files, using the following commands:

Watch main.scss (and anything included as an `@import` => compile it to style.css)

    npm run sass-watch

Compile SASS once and minify it

    npm run sass

## RequireJS

Uses [RequireJS](http://requirejs.org/) for all JS assets. Not necessarily to its fullest potential, but as a way to concatenate and minify all JS. 

To minify all JS:

    npm run requirejs

Switching the source in the head tag is a manual process. Go to views/layouts/main.handlebars to switch between main.js and ds.min.js.

## Build

Before pushing to production, run the following command in the site root:

    npm run build

This will take care of minifying all CSS and JS. Remember that changing the source in the head tag for the JS is a manual process. main.js needs to become ds.min.js if it isn't already.