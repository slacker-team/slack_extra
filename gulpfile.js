var gulp = require('gulp');
var electron = require('electron-connect').server.create();
var del = require('del')
var $ = require('gulp-load-plugins')();

var srcDir = 'src';
var libDir = 'app';

gulp.task('compile', [
    'clean',
    'compile-es6',
    'sass',
  ]
);

gulp.task('compile-es6', ['clean'], function(){
  gulp.src(srcDir + '/**/*.js')
    .pipe($.plumber({
      errorHandler: $.notify.onError("Error: <%= error.message %>")
    }))
    .pipe($.babel())
    .pipe(gulp.dest(libDir));
});

gulp.task('clean', function () {
  return del(libDir + '/**/*.{js,css}')
  }
);

gulp.task('sass', ['clean'], function() {
  gulp.src(srcDir + '/stylesheets/**/*.scss')
    .pipe($.plumber({
      errorHandler: $.notify.onError("Error: <%= error.message %>")
    }))
    .pipe($.sass())
    .pipe($.concat('stylesheets.css'))
    .pipe(gulp.dest(libDir + '/stylesheets'));
});

gulp.task('electron-start', function(){
  electron.start();
})

gulp.task('watch', ['compile'], function(){
  gulp.watch(srcDir + '/**/*.{js,scss}', ['compile']);
  gulp.watch(['main.js'], electron.restart);
  gulp.watch(['index.html', libDir + '/**/*.{html,js,css}'], electron.reload);
});
