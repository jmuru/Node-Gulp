# Node-Gulp
Lightweight node js template with gulp integrated with browser-sync. Made to save time during dev process / setup

To run the template follow these steps:

Clone the repo in your terminal ```git clone https://github.com/jmuru/Node-Gulp.git```

Install dependencies by running in terminal ```npm install```

To run the task manager (gulp) as well as start your server just run ```gulp``` in the terminal and the template should begin to run in your browser

The template only reloads the page based on changes in the ```views``` directory but that can easily be changed by modifying the default task function in ```gulpfile.js``` :

```
gulp.task('default', ['browser-sync'], function () {
  gulp.watch(['./views/*.handlebars'], browserSync.reload);
});

```

Enjoy!
