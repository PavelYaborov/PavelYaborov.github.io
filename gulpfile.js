import gulp from 'gulp';
import clean from 'gulp-clean';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
import cssnano from 'gulp-cssnano';
import browserSync from 'browser-sync';

const bs = browserSync.create();
const { src, dest, series, parallel, watch } = gulp;

const paths = {
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js'
  },
  html: {
    src: 'src/*.html',
    dest: 'dist'
  }
};

const sassCompiler = gulpSass(sass);

async function styles() {
  const autoprefixer = (await import('gulp-autoprefixer')).default;

  return src(paths.styles.src)
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(dest(paths.styles.dest))
    .pipe(bs.stream());
}

function cleanDist() {
  return src('dist', { read: false, allowEmpty: true })
    .pipe(clean());
}

function scripts() {
  return src(paths.scripts.src)
    .pipe(dest(paths.scripts.dest))
    .pipe(bs.stream());
}

function html() {
  return src(paths.html.src)
    .pipe(dest(paths.html.dest))
    .pipe(bs.stream());
}

function serve() {
  bs.init({
    server: {
      baseDir: './dist'
    }
  });
  watch(paths.styles.src, styles);
  watch(paths.scripts.src, scripts);
  watch(paths.html.src, html).on('change', bs.reload);
}

const build = series(cleanDist, parallel(styles, scripts, html));

export {
  cleanDist as clean,
  styles,
  scripts,
  html,
  serve as watch,
  build,
  build as default
};
