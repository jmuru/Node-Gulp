# Node-Gulp


Node js template with gulp integrated with browser-sync. Made to save time during dev process
/ setup

To run the template follow these steps:

Clone the repo in your terminal ```git clone https://github.com/jmuru/Node-Gulp.git```

Install dependencies by running in terminal ```npm install```

To run the task manager (gulp) as well as start your server just run ```gulp``` in the terminal and the template should begin to run in your browser

The following code below describes what each gulp task is doing within th gulpfile.js.

The task below handles live-reload for files specified by you, in this example gulp is watching all pages in the views directory, all of the es6 code found in th public directory, as well as all of th sass files under the public directory.
```
gulp.task('watch', function() {
  gulp.watch(['./views/*.handlebars'], browserSync.reload);
  gulp.watch('./public/**/*.js', ['babel']);
  gulp.watch('./public/sass/*.scss', ['sass']);
});
```

This task transpiles es6 to es5 every time the es6 file is changed
```
gulp.task('babel', function () {
  return gulp.src("./public/es6/*.js")
    .pipe(babel({presets: 'es2015'}))
    .pipe(gulp.dest("dist/js"))
});
```

This task converts all of the sass file into css, and saves it within the dist directory
```
gulp.task('sass', function () {
  return gulp.src("./public/sass/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("dist/css"))
});
```
This task handles the browser-sync / live-reload features
```
gulp.task('browser-sync', ['nodemon'], function() {
  browserSync({
    proxy: "localhost:3000",  // local node app address
    port: 5000,  // use different port than above
    notify: true
  });
});
```

The default task (called when you run `gulp` in the terminal window), which then executes all of the specified tasks within gulpfile.js

```
// default task
gulp.task('default', ['browser-sync', 'watch', 'babel', 'sass']);

```
### Info
for more information node, express, and gulp:
* <https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md>
* <http://expressjs.com/en/>

documentation for packages used:
* <https://babeljs.io/docs/>
* <https://www.browsersync.io/>
* <http://handlebarsjs.com/>


Enjoy!
