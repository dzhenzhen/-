const gulp = require("gulp");
var sass = require('gulp-sass'); 
var connect = require('gulp-connect');

gulp.task('watch',done=>{
    gulp.watch('html/**', gulp.series("copyIndex")); 
    gulp.watch('img/**', gulp.series("copyImg")); 
    gulp.watch('js/**', gulp.series("copyJs")); 
    gulp.watch('css/**', gulp.series("copyCss"));  
    // gulp.watch('img/', gulp.series("copyImg")); 
    done()
 }) 
 gulp.task("server", done => {
    connect.server({
        root: "dist",
        livereload: true
    })
    done();
});
 //!json/b.json排除某个文件 
 gulp.task("default", gulp.series("watch", "server"));
 gulp.task('scripts',done=>{ 
      gulp.src(['js/jquery.js','js/homePage.js'])
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('dist/js'));
       done();
 })


gulp.task("copyImg",done=>{
    gulp.src("img/**").pipe(gulp.dest("dist/img"));
    done();
})
gulp.task("copyIndex", done => {
    gulp.src("html/**").pipe(gulp.dest("dist/html"));
    done();
})
gulp.task("copyJs", done => {
    gulp.src("js/**").pipe(gulp.dest("dist/js"));
    done();
})
gulp.task("copyCss", done => {
    gulp.src("css/**").pipe(gulp.dest("dist/css"));
    done();
})
