var gulp = require('gulp');
var electron = require('electron-connect').server.create();
var glob = require('glob')
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
    .pipe($.babel({
      presets: ['react', 'es2015']
    }))
    .pipe(gulp.dest(libDir));
});

gulp.task('clean', function () {
    del(libDir + '/**/*.{html,js,css}')
  }
);

gulp.task('watch', function() {
  gulp.watch(srcDir + '/**/*.{js,jsx}', ['compile']);
});

gulp.task('sass', function() {
  // ディレクトリ構造を変更次第passは変更する
  gulp.src('sass/**/*scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./css"));
});


gulp.task('start', ['compile'], function(){
  electron.start();
  gulp.watch(srcDir + '/**/*.{js,jsx}', ['compile', 'sass']);
  gulp.watch(['main.js'], electron.restart);
  gulp.watch(['index.html', libDir + '/**/*.{html,js,css}'], electron.reload);
});
