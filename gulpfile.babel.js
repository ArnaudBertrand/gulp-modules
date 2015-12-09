import gulp from 'gulp';
import csdparser from 'csdparser';
import yargs from 'yargs';

gulp.task('csd-parse', () => {
  return gulp.src('csd.json')
      .pipe(csdparser('panel', 'PRICE'))
      .pipe(gulp.dest('./csdParsed.json'));
});
