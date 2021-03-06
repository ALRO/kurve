var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat-util');


gulp.task('default', function() {
    gulp.src([
        './src/window.js',
        './src/Kurve.js',
        './src/KurveFactory.js',
        './src/KurveConfig.js',
        './src/KurveUtility.js',
        './src/KurveMenu.js',
        './src/KurveGame.js',
        './src/KurveField.js',
        './src/KurveSuperpowerconfig.js',
        './src/KurveSuperpower.js',
        './src/KurveCurve.js',
        './src/KurvePoint.js',
        './src/KurvePlayer.js',
        './src/KurveLightbox.js',
        './src/KurveLightbox.js',
    ])
        .pipe(uglify({
            preserveComments: 'some'
        }))
        .pipe(concat('kurve.min.js', {sep: ''}))
        .pipe(gulp.dest('./resources/js/'));
});