const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const plumber = require("gulp-plumber");

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

function sassBuild() {
  return gulp
    .src(`./scss/**/*.scss`)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      includePaths: ['node_modules/bootstrap-sass/assets/stylesheets'],
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css/'));
}

function sassWatch() {
  return gulp.watch('./scss/**/*.scss', sassBuild);
}

exports.build = sassBuild;
exports.default = gulp.series(sassBuild, sassWatch);
