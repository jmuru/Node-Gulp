var gulp = require("gulp");
var babel = require("gulp-babel");
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require("browser-sync");
var nodemon = require('gulp-nodemon');

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync({
    proxy: "localhost:3000",  // local node app address
    port: 5000,  // use *different* port than above
    notify: true
  });
});

gulp.task('nodemon', function (cb) {
  var called = false;
  nodemon({
    script: 'app.js',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
      browserSync.reload();
    }, 1000); 
  });
});

gulp.task('babel', function() {
  return gulp.src('public/es6/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.', 
          {sourceRoot: 'public/es6/'}))
    .pipe(gulp.dest('public/es5'));
});

gulp.task('watch', function() {
  gulp.watch(['public/es6/*.js'], ['babel']);
  gulp.watch(['./views/*.handlebars'], browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);