var gulp = require('gulp'),
    sprite = require('gulp-svg-sprite'),
    config = {
        mode: {
            css: {
                render : {
                    css: {
                        template: './gulp/templates/sprite.css'
                    }
                }
            }
        }
    }

gulp.task('createSprite', function () {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(sprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'));
});
