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

