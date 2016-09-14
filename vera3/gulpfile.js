var gulp = require('gulp');
var iconfont = require('gulp-iconfont');

gulp.task('icon', function(){
  return gulp.src(['./assets/fonts/svg/*.svg'])
    .pipe(iconfont({
        normalize: true,
        fontHeight: 1001,
        prependUnicode:false,
      fontName: 'icomoon', // required 
      prependUnicode: true, // recommended option 
      formats: ['svg', 'ttf', 'eot', 'woff'], // default, 'woff2' and 'svg' are available 
      timestamp: Math.round(Date.now()/1000), // recommended to get consistent builds when watching files 
    }))
      .on('glyphs', function(glyphs, options) {
        // CSS templating, e.g. 
        console.log(glyphs, options);
      })
    .pipe(gulp.dest("./src/stylesheet/fonts"));
});




gulp.task('default', ['icon']);












