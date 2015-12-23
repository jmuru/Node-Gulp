# Node-Gulp
/ Info

for more information node, express, and gulp:
	<https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md>
	<http://expressjs.com/en/>

documentation for packages used:
	<https://babeljs.io/docs/>
	<https://www.browsersync.io/>
	<http://handlebarsjs.com/>


Lightweight node js template with gulp integrated with browser-sync. Made to save time during dev process 
/ setup

To run the template follow these steps:

Clone the repo in your terminal ```git clone https://github.com/jmuru/Node-Gulp.git```

Install dependencies by running in terminal ```npm install```

To run the task manager (gulp) as well as start your server just run ```gulp``` in the terminal and the template should begin to run in your browser

The template only reloads the page based on changes in the ```views``` and ```public/es6``` directory but that can be changed by modifying the  ```gulpfile.js``` :

```
gulp.task('browser-sync', ['nodemon'], function() {
  browserSync({
    proxy: "localhost:3000",  // local node app address
    port: 5000,  // use different port than above
    notify: true
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

// default ta
gulp.task('default', ['browser-sync', 'watch']);

```

Enjoy!
