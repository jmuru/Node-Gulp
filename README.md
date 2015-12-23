# Node-Gulp


Lightweight node js template with gulp integrated with browser-sync. Made to save time during dev process 
/ setup

To run the template follow these steps:

Clone the repo in your terminal ```git clone https://github.com/jmuru/Node-Gulp.git```

Install dependencies by running in terminal ```npm install```

To run the task manager (gulp) as well as start your server just run ```gulp``` in the terminal and the template should begin to run in your browser

This task handles live-reload for files specified by you!  
```
gulp.task('watch', function() {
  // watches for changes in es6 folder
  gulp.watch(['public/es6/*.js'], ['babel']); 

  // watches for changes to files in the views directory
  gulp.watch(['./views/*.handlebars'], browserSync.reload); 

});
```

This task transpiles es6 to es5 everytime the es6 file is changed
```
gulp.task('babel', function() {
  return gulp.src('public/es6/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.', 
          {sourceRoot: 'public/es6/'}))
    .pipe(gulp.dest('public/es5'));
});
```
This task handles the browser-sync / live-reload 
```
gulp.task('browser-sync', ['nodemon'], function() {
  browserSync({
    proxy: "localhost:3000",  // local node app address
    port: 5000,  // use different port than above
    notify: true
  });
});
```

The default task (called when you run `gulp`), which then uses all of the functions above
```
// default task
gulp.task('default', ['browser-sync', 'watch']);

```
### Info
for more information node, express, and gulp:
* <https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md>
* <http://expressjs.com/en/>
	
documentation for packages used:
* <https://babeljs.io/docs/>
* <https://www.browsersync.io/>
* 	<http://handlebarsjs.com/>


Enjoy!
