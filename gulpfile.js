let gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', function() {
 // place code for your default task here
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/assets/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/assets/css'));
});
// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('src/assets/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'));
});
//copy fonts into dist directory
gulp.task('copy-fonts', function() {
   gulp.src('src/assets/fonts/**/*.{ttf,woff,eof,svg}')
   .pipe(gulp.dest('./dist'));
});
//copy index.html into dist
gulp.task('copy-files', function() {
    gulp.src('src/index.html')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('./dist/'));
});
// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/assets/js/*.js', ['lint', 'scripts']);
    gulp.watch('src/assets/scss/*.scss', ['sass']);
    gulp.watch('src/*.html', ['copy-files']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'copy-fonts', 'copy-files', 'watch']);
