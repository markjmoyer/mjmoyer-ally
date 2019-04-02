var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var uglifycss = require('uglifycss');

gulp.task('default', function() {
 //place code for default task here
});
// run lint task
gulp.task('lint', function() {
  return gulp.src('src/assets/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
// run sass task
gulp.task('sass', function() {
  return gulp.src('src/assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/assets/css'));
});
// run scripts task and concatenate
gulp.task('scripts', function() {
  return gulp.src('src/assets/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'));
});
// run copy-files task
gulp.task('copy-files', function() {
  gulp.src('src/index.html')
  .pipe(gulp.dest('./dist/'));
  gulp.src('src/favicon.ico')
  .pipe(gulp.dest('./dist/'));
  gulp.src('src/assets/images/*')
  .pipe(gulp.dest('./dist/assets/images'));
  gulp.src('src/assets/css/*.css')
  .pipe(gulp.dest('./dist/assets/css'));
  gulp.src('src/assets/js/*.js')
  .pipe(gulp.dest('./dist/assets/js'));
  gulp.src('src/assets/fonts/**/*.{ttf,woff,woff2,eot,otf,svg}')
   .pipe(gulp.dest('./dist/assets/fonts'));
});

// run watch task - listen for changes
gulp.task('watch', function() {
  gulp.watch('src/assets/js/*.js', ['lint', 'scripts']);
  gulp.watch('src/assets/scss/*.scss', ['sass']);
  gulp.watch('src/*.html', ['copy-files']);
  gulp.watch('src/assets/images/**', ['copy-files']);
  gulp.watch('src/assets/css/*.css', ['copy-files']);
});

gulp.task('default', ['lint', 'sass', 'scripts', 'copy-files', 'watch']);
