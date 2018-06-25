var gulp = require('gulp'),
    sprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del');

var config = {
    mode: { //Initializes the mode of gulp-sprite.
        css: {
            sprite: 'sprite.svg', //Changes file name of the sprite file.
            render: {
                css: {
                    template: './gulp/templates/sprite.css' //Creates a css file for the sprite, in which variables are used to automatically define the content of the file.
                }
            }
        }
    }
}

gulp.task('clean', function () {
    return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

//Function for sprite-SVG file
gulp.task('createSprite', ['clean'], function () {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(sprite(config)) //Run the config object above in the sprite.
        .pipe(gulp.dest('./app/temp/sprite/')); //Spits out the combined sprite file at this location.
});

gulp.task('copySpriteGraphic', ['createSprite'], function () {
    return gulp.src('./app/temp/sprite/css/**/*.svg')
        .pipe(gulp.dest('./app/assets/images/sprites'));
});

//Function for sprite-CSS file.
gulp.task('copySpriteCss', ['createSprite'], function () { //Has a dependency on 'createSprite' function.
    return gulp.src('./app/temp/sprite/css/*.css') //Picks of the css file created by the config object.
        .pipe(rename('_sprite.css')) //Renames the file for organizaitonal purposes.
        .pipe(gulp.dest('./app/assets/styles/modules')); //Dumps it at this location.
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCss'], function() {
   return del('./app/temp/sprite'); 
});

gulp.task('icons', ['clean', 'createSprite', 'copySpriteGraphic', 'copySpriteCss', 'endClean']); //Runs copySpriteCss which is dependent on createSprite hence, runinng both functions in the correct order.
