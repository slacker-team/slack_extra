var gulp = require('gulp');
var electron = require('electron-connect').server.create();
var del = require('del')
var $ = require('gulp-load-plugins')();

var srcDir = 'src';
var libDir = 'build';

gulp.task('compile', [
    'clean',
    'compile-es6',
  ]
);

gulp.task('compile-es6', function(){
  return gulp.src(srcDir + '/**/*.{js,jsx}')
    .pipe($.plumber({
      errorHandler: $.notify.onError("Error: <%= error.message %>")
    }))
    .pipe($.babel())
    .pipe(gulp.dest(libDir));
});

gulp.task('clean', function () {
    del(libDir + '/**/*.{html,js,css}')
  }
);

gulp.task('sass', function() {
  // ディレクトリ構造を変更次第passは変更する
  gulp.src('sass/**/*scss')
    .pipe($.plumber({
      errorHandler: $.notify.onError("Error: <%= error.message %>")
    }))
    .pipe($.sass())
    .pipe(gulp.dest("./css"));
});


gulp.task('electron-start', function(){
  electron.start();
})

gulp.task('watch', ['compile'], function(){
  gulp.watch(srcDir + '/**/*.{js,jsx}', ['compile']);
  gulp.watch(['main.js'], electron.restart);
  gulp.watch(['index.html', libDir + '/**/*.{html,js,css}'], electron.reload);
});
