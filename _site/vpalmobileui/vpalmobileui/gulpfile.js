var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    sh = require('shelljs'),
    plumber = require( 'gulp-plumber'),
    gulpif = require('gulp-if'),
    argv = require('yargs').argv,
    lazypipe = require('lazypipe'),
    size = require('gulp-size'),

    //serve
    connect = require('gulp-connect'),

    //css
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css'),

    //img
    sprite = require('css-sprite').stream,


    //js
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),

    packageJson = require('./package.json'),

    del = require('del');
var exec = require('child_process').exec;
var version  = packageJson.version;

var path = {};
path.root="./";
path.assets = path.root + 'assets/';
path.build = path.root + 'build/';
path.fonts = path.assets + 'fonts/**/*.*';
path.images= path.assets + 'images/**/*.*';
path.js    = path.assets + 'javascripts/**/*.js';
path.scss  = path.assets + 'stylesheets/**/*.scss';


path.scssBuild  = path.root + 'build/assets/css';

path.html = path.root + '**/*.html';


path.copyFile = [
    path.root + 'assets/fonts/*.*'
];


var cors = function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
};
gulp.task('connect', function() {
    connect.server({
        root: '../vpalmobileui/',
        port: 3000,
        livereload: true,
        middleware: function () {
          return [cors];
        }
    });
});

// clean dist directory
gulp.task('clean', function (callback) {
    return del([path.build + '*'], callback);
});

// copy base files from src to dist
gulp.task('copy', function () {
    return gulp.src(path.copyFile, {base: path.root })
        .pipe(gulp.dest(path.build));
});


//sass build
gulp.task('style', function() {
    console.log(path.scss)
    gulp.src(path.scss)
        .pipe( plumber( {errorHandler : errrHandler} ) )
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest(path.scssBuild))
        .pipe(minifyCss())
        .pipe(rename({ extname: '-'+version+'.min.css' }))
        .pipe(gulp.dest(path.scssBuild));
        
});



function errrHandler( e ){
    gutil.beep();
    gutil.log('===================',gutil.colors.cyan(e));
}

gulp.task('script', function() {
     gulp.src(path.js,{base: path.root })
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(size())
        .pipe(gulp.dest(path.build))
        .pipe(uglify())
        .pipe(rename({ extname: '-'+version+'.min.js' }))
        .pipe(gulp.dest(path.build));
});

gulp.task('concat', function() {
    gulp.src([
            path.assets + 'javascripts/Vpal.ui.js',
            path.assets + 'javascripts/Vpal.util.js'
        ])
        .pipe(concat('vpal.all.js'))
        .pipe(gulp.dest(path.assets + 'javascripts'));
    gulp.start(['script']);
});    

gulp.task('reload',function() {
    gulp.src([path.html,path.scss,path.js])
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch([path.scss], ['style']);
    gulp.watch([path.js], ['script']);
    gulp.watch([path.html,path.scss,path.js],['reload']);
});

gulp.task('serve', function() {
    gulp.start(['connect', 'watch']);
});

gulp.task('build',function(){
    gulp.start(['concat', 'style']);
});


gulp.task('default', ['serve']);















