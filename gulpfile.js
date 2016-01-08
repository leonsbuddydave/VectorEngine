var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({debug: true, lazy: false});
var rimraf = require('rimraf');
var NwBuilder = require('nw-builder');
var tsProject = plugins.typescript.createProject('tsconfig.json', { sortOutput: true });
var Config = require('./gulpfile.config');

var config = new Config();

gulp.task('distribute', ['clean', 'build'], function() {

	plugins.util.log(Object.keys(plugins));

	var nw = new NwBuilder({
		buildDir: 'dist',
		files: ['package.json', 'bin/**']
	});

	nw.on('log', plugins.util.log);

	return nw.build().catch(plugins.util.log);
});

gulp.task('clean', function(cb) {
	rimraf('{dist,bin}', cb);
});

gulp.task('scripts', ['clean'], function() {
	return gulp
		.src(config.allTypeScript)
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.typescript(tsProject))
		// .pipe(plugins.concat('application.js'))
		.pipe(plugins.sourcemaps.write())
		.pipe(gulp.dest('./bin'));
});

gulp.task('serve', ['clean', 'scripts', 'template'], plugins.shell.task([
	'nw . --debug'
]));

gulp.task('template', ['clean', 'scripts'], function() {
	return gulp
		.src('./src/index.html')
		.pipe(plugins.inject(
			gulp.src('./bin/application.js', {read: false}),
			{relative: true }
		))
		.pipe(gulp.dest('./bin'));
});

// gulp.task('typescript-definitions', function() {
// 	return true;
// });

// gulp.watch('./src/ts/**/*.ts', ['typescript-definitions']);

// gulp.task('default', ['clean'], function() {
// 	gulp.start('scripts', 'template', 'serve');
// });