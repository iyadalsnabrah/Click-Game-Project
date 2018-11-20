const gulp=require('gulp');
const sass=require('gulp-sass');

gulp.task('sass',function(){
    return gulp.src('src/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("src/main.css"))
})
gulp.task('sass:watch', function () {
    gulp.watch('src/main.scss', ['sass']);
  });

  gulp.task('default', ['sass','sass:watch']);