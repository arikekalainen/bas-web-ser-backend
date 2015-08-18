/**
  Gulpfile for Basic Web Service : backend
  Author : Ari Kekalainen <ari.kekalainen@gmail.com>
*/
var gulp = require('gulp');
var ts = require('gulp-typescript');
var run = require('gulp-run');
var tsConfig = require('./tsconfig.json');
var sequence = require("run-sequence");

// Source files
var sources = {
  backend_ts_files: ['./node_modules/type-definitions/serverside.d.ts','./backend/**/*.ts'],
};

var tsProject = ts.createProject(tsConfig.compilerOptions);

// TS compilation
var compileBackend = 'compile-backend';
gulp.task(compileBackend, function() {
  return gulp.src(sources.backend_ts_files)
      .pipe(ts(tsProject))
      .pipe(gulp.dest('release/'));
});

// Copy node_modules to release folder
var copyNodeModulesToRelease = 'copy-node-modules-to-release';
gulp.task(copyNodeModulesToRelease, function() {
    return gulp.src("./node_modules/**/*.*")
        .pipe(gulp.dest('release/node_modules'));
});

// Default task : do everything
gulp.task('default', function() {
  console.log("Gulp : Running default task : do everything !");

  sequence(
    // complile Ts file
    compileBackend,
    copyNodeModulesToRelease
  );
});
