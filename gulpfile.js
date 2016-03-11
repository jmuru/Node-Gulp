var gulp = require("gulp");
var sass = require("gulp-sass")
var babel = require("gulp-babel");
var browserSync = require("browser-sync");
var nodemon = require("gulp-nodemon");

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

gulp.task('babel', function () {
  return gulp.src("./public/es6/*.js")
    .pipe(babel({presets: 'es2015'}))
    .pipe(gulp.dest("dist/js"))
})

gulp.task('sass', function () {
  return gulp.src("./public/sass/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("dist/css"))
})

gulp.task('watch', function() {
  gulp.watch(['./views/*.handlebars'], browserSync.reload);
  gulp.watch('./public/**/*.js', ['babel']);
  gulp.watch('./public/sass/*.scss', ['sass']);
});

gulp.task('default', ['browser-sync', 'watch', 'babel', 'sass']);
