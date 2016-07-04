var gulp = require('gulp');

var argv = require('yargs').argv;
var gulpif = require('gulp-if');

var sourceMaps = require('gulp-sourcemaps');
var concatJs = require('gulp-concat');
var uglifyJs = require('gulp-uglify');

var babel = require("gulp-babel");



//
// Toggle production / debug builds (example gulp --prod)

var isProduction = (argv.prod) ? (true) : (false);

//
// Sources

var jsLibSrc = [
    './bower_components/jquery/dist/jquery.js',
    './bower_components/react/react.js',
    './bower_components/react/react-dom.js'
];

var jsAppSrc = './gulpworkflow/src/**/*.js';
var bldFolder = './gulpworkflow/bld';

//
// Tasks

gulp.task('js-lib', function () {
    return gulp
        .src(jsLibSrc)
        .pipe(gulpif(!isProduction, sourceMaps.init()))
        
        .pipe(concatJs('lib.js'))
        
        .pipe(gulpif(isProduction, uglifyJs()))
        
        .pipe(gulpif(!isProduction, sourceMaps.write()))
        .pipe(gulp.dest(bldFolder));
});

gulp.task('js-app', function () {
    return gulp
        .src(jsAppSrc)
        .pipe(gulpif(!isProduction, sourceMaps.init()))
        
        .pipe(babel())

        .pipe(concatJs('app.js'))
        
        .pipe(gulpif(isProduction, uglifyJs()))
        
        .pipe(gulpif(!isProduction, sourceMaps.write()))
        .pipe(gulp.dest(bldFolder));
});