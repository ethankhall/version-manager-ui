"use strict";

const tsc = require("gulp-typescript");
const gulp = require("gulp");
const del = require("del");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");
const reporter = tsc.reporter;
var concat = require('gulp-concat');
var minify = require('gulp-minify');

/**
 * Remove build directory.
 */
gulp.task('clean', function (cb) {
    return del(["build"], cb);
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", function () {
    var tsResult = gulp.src("app/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsProject(reporter));
    return tsResult.js
        .pipe(sourcemaps.write(".", {sourceRoot: '/app'}))
        .pipe(gulp.dest("build"));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", function () {
    return gulp.src(["app/**/*", "!**/*.ts", "index.html", "systemjs.config.js", "styles.css"])
        .pipe(gulp.dest("build"));
});

gulp.task('scripts', ["libs"], function() {
    return gulp.src('build/lib/*/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('compress', ["libs"], function() {
    gulp.src('build/lib/*/*.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('build/js'))
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", function () {
    return gulp.src([
        'core-js/client/shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'systemjs/dist/system.src.js',
        'reflect-metadata/Reflect.js',
        'angular2-cookie/**',
        'bootstrap/dist/css/bootstrap.min.css',
        'rxjs/**/*.js',
        'zone.js/dist/**',
        '@angular/**/bundles/**'
    ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("build/lib"));
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(["./app/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(
        ["./app/**/*.html", "./app/**/*.css", "index.html", "systemjs.config.js", "styles.css"],
        ['resources']
    ).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});

/**
 * Build the project.
 */
gulp.task("build", ['compile', 'resources', 'libs', "compress"], function () {
    console.log("Building the project ...");
});