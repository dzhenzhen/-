const gulp = require("gulp");
var sass = require('gulp-sass'); 
var connect = require('gulp-connect');
gulp.task("copyIndex", done => {
    gulp.src("html/homePage.html").pipe(gulp.dest("dist"));
    console.log(123);
    done();
})
gulp.task('watch',done=>{
    gulp.watch('html/copyIndex.html', gulp.series("copyIndex")); 
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



