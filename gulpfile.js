var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', function(done) {
    browserify('./src/Bitcoin/wlt.js', {standalone: 'bitcoin', debug: true})
    .transform(babelify, {presets: ['es2015']})
    .bundle()
    .pipe(source('bundle_btc.js'))
    .pipe(gulp.dest('static/scripts'))
    done();

    browserify('./src/Ethereum/wlt.js', {standalone: 'ethereum', debug: true})
    .transform(babelify, {presets: ['es2015']})
    .bundle()
    .pipe(source('bundle_eth.js'))
    .pipe(gulp.dest('static/scripts'))
    done();
});
