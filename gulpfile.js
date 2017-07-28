var gulp = require('gulp');
var browserSync = require('browser-sync')
var sass = require('gulp-sass');
var jade = require('gulp-jade');

gulp.task('sass',function(){
    return gulp.src('app/sass/style.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream:true}))
})
gulp.task('jade', function () {
    return gulp.src('app/jade/*.jade')
        .pipe(jade({
            pretty: '\t'
        }))
        .pipe(gulp.dest('app/'))
})
gulp.task('browser-sync',function(){
    browserSync({
        server:{
            baseDir:'app'
        },
        notify:false
    })
})
gulp.task('watch',['browser-sync','sass','jade'],function(){
    gulp.watch('app/sass/style.sass',['sass']);
    gulp.watch('app/jade/*.jade',['jade']);
    gulp.watch('app/*.html', browserSync.reload);
})