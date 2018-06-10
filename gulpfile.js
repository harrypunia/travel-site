var gulp = require('gulp'),
    watch = require('gulp-watch'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss');

//Gulp intro
//1. Gulp task executed when called.
//2. Has to parameters, a)Name, b)task/function.
gulp.task('default', function() {
    console.log('gulp is functional');
});
gulp.task('html', function() {
    console.log('Html is changes');
});

//1. This Gulp task uses pipes system.
//2. It also uses the postcss autoprefixer in the pipe system.
//3. pipe(gulp.dest()) defines the destination of the outcome(file).
//4. gulp.src defines the destination of the css file to be tampered with.
gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/style.css')
        .pipe(postcss([autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});
//2. This gulp task is called watch as it contains all the gulp-watch functions.
//3. It looks for any change made to the mentioned files and executes a anonymous function.
//4. In this case, executing  gulp-html and gulp-styles
//5. Watch contains similar two paraments as gulp itself.
//6. Gulp.start executes an existing gulp task.
gulp.task('watch', function() {
    watch('./app/index.html', function() {
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles'); 
    });
});