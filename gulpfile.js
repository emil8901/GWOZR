var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var webpack_stream = require('webpack-stream');
var webpack_config = require('./webpack/webpack.config.js');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var plugins = gulpLoadPlugins({
  pattern: '*',
  scope: ['dependencies', 'devDependencies']
});

var path = {
  src: './app/Resources/assets/',
  dev: './web/static/'
};

var config = {
    js: {
      src: path.src + 'js/main.js',
      webpack: webpack_config,
      dev: path.dev + 'js'
    },
    sass: {
      src: path.src + 'sass/main.scss',
      dev: path.dev + 'css'
    },
    img: {
      src: path.src + 'img/**/*.*',
      dev: path.dev + 'img'
    }
};

function allocationOfTasks(task, taskName) {
  switch (task) {
    case 'js':
      jsFunc(taskName['src'], taskName['webpack'], taskName['dev']);
      break;
    case 'sass':
      sassFunc(taskName['src'], taskName['dev']);
      break;
    case 'img':
      imgFunc(taskName['src'], taskName['dev']);
      break;
  }
}

function jsFunc(src, webpack, dev) {
  gulp.src(src)
    .pipe(webpack_stream(webpack))
    .pipe(gulp.dest(dev))
}

function sassFunc(src, dev) {
  gulp.src(src)
    .pipe(plugins.sass())
    .pipe(plugins.cssmin())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(plugins.rename('main_1.0.min.css'))
    .pipe(gulp.dest(dev))
}

function imgFunc(src, dev) {
  gulp.src(src)
    .pipe(gulp.dest(dev))
}

gulp.task('default', function () {
      for (var task in config) {
        var taskName = config[task];
        allocationOfTasks(task, taskName);
      }

      plugins.util.log(plugins.util.colors.blue('SCSS is watching...'));

      gulp.watch(path.src + 'sass/**/*.scss').on('change', function(){
        sassFunc('./app/Resources/assets/sass/main.scss', './web/static/css');
        plugins.util.log(plugins.util.colors.green('SCSS has changed...'));
      });
});
