var gulp = require('gulp');
var ts = require("gulp-typescript");


gulp.task('build', function() {
    const merge = require('merge2');
    const tsProject = ts.createProject('tsconfig.json');

	var tsResult = tsProject.src().pipe(tsProject());

	return merge([
        tsResult.dts.pipe(gulp.dest('./definitions')),
        tsResult.js.pipe(
          gulp.dest(tsProject.config.compilerOptions.outDir)
        )
    ]);
});
