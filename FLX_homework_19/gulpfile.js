const {src, dest, task, series, watch} = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const less = require('gulp-less');
const path = require('path');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();

let serverTask = () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
};

let lessTask = () => {
  return src('./src/less/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write())
    .pipe(dest('./dist/css'));
};

let jsTask = () => {
  return src('./src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(dest('./dist/js'));
};

let minImages = () => {
  return src('./src/img/*')
    .pipe(imagemin())
    .pipe(dest('./dist/img'))
};
let minHtml = ('minify', () => {
  return src('./src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest('dist'));
});

task('default', series(lessTask, jsTask, minImages, minHtml));

exports.serve = () => {
  serverTask();
  watch('./src/less/*.less', lessTask);
  watch('./src/js/*.js', jsTask);
  watch('./src/*.html', minHtml);
}