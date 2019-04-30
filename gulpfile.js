var gulp          = require('gulp'),
	gutil         = require('gulp-util'),
	child         = require('child_process'),
	cached        = require('gulp-cached'),
	sass          = require('gulp-sass'),
	autoprefixer  = require('gulp-autoprefixer'),
	cssbeautify   = require('gulp-cssbeautify'),
	browserSync   = require('browser-sync'),
	imagemin      = require('gulp-imagemin'),
	jpegtran      = require('imagemin-jpegtran'),
	pngquant      = require('imagemin-pngquant'),
	gcmq          = require('gulp-group-css-media-queries'),
	runSequence   = require('run-sequence'),
	debug         = require('gulp-debug'),
	del           = require('del'),
	plumber       = require('gulp-plumber'),
	gulpIf        = require('gulp-if'),
	sourcemaps    = require('gulp-sourcemaps'),
	cache         = require('gulp-cache'),
	isDevelopment = true,
 	npm = (process.platform === "win32" ? "npm.cmd" : "npm");

var paths = {
	siteRoot: '_site',
	cssDir: 'css',
	scssDir: 'scss/',
	imgDir: 'images/',
	imgSourseDir: '_sourceimages/'
};

gulp.task('jekyll', function() {
	var jekyll = child.spawn(npm, ['serve','--watch','--incremental','--drafts']);

	var jekyllLogger = function(buffer){
		buffer.toString()
			.split(/\n/)
			.forEach(function(message){
				gutil.log('jekyll: ' + message)
			});
	};


	jekyll.stdout.on('data', jekyllLogger);
	jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('jekyll:build', function() {
	return child.spawn(npm, ['build']);
});

gulp.task('scss', function() {
	return gulp.src(paths.scssDir + '**/*.scss')
	.pipe(plumber(function(error) {
		gutil.log(gutil.colors.bold.red(error.message));
		gutil.beep();
		this.emit('end');
	}))
	.pipe(gulpIf(isDevelopment, sourcemaps.init()))
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer(
		[
			'last 15 versions',
			'> 1%',
			'ie 8',
			'ie 7'
		], {
			cascade: true 
		}))
	.pipe(gulpIf(isDevelopment, sourcemaps.write('./')))
	.pipe(plumber.stop())
	.pipe(gulp.dest(paths.cssDir));
	// .pipe(browserSync.reload({
	// 	stream: true
	// }));
});

gulp.task('css:beautify', function(){
	return gulp.src(paths.cssDir + '*.css')
	.pipe(cssbeautify())
	.pipe(gcmq())
	.pipe(debug({title: 'css:beautify:'}))
	.pipe(gulp.dest(paths.cssDir));
});

gulp.task('img:min', function(){
	return gulp.src(paths.imgSourseDir + '**/*')
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(debug({title: 'img:min:'}))
		.pipe(gulp.dest(paths.imgDir));
});

gulp.task('copy:img', function(){
	return gulp.src( paths.imgSourseDir + '**/*.{jpg,png,svg,gif}')
		.pipe(gulp.dest(paths.imgDir));
});

gulp.task('copy:theme', function(){
	return gulp.src(
		[
			'!node_modules',
			'!node_modules/**',
			'!_sourceimages',
			'!_sourceimages/**',
			'!package.json',
			'!gulpfile.js',
			'./**'
		])
	.pipe(debug({title: 'copy:theme'}))
	.pipe(gulp.dest('../codeandco-theme/dist/'));
});

gulp.task('clear', function(){
	return del(
		[
			'.gulp-scss-cache',
			'.sass-cache',
			'./**/*.map',
			'./css/vendors/'
		]
	);
});

gulp.task('serve', function(){
	browserSync.init({
		files: [paths.siteRoot + '/**/**/*'],
		port: 4000,
		server: {
			baseDir: paths.siteRoot
		}
	});
	gulp.watch(paths.scssDir + '**/*.scss', ['scss']);
	gulp.watch(paths.imgSourseDir + '**/*', ['copy:img']);
});

gulp.task('default', ['scss', 'jekyll', 'serve']);

gulp.task('build', function(callback){
	isDevelopment = false;
	runSequence(
		'css:beautify',
		'jekyll:build',
		'clear',
		callback
	);
});