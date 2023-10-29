const {
    src, 
    dest
} = require('gulp');
const browserSync = require('browser-sync');

module.exports = function html(){
    return src([
            'src/index.html', 
            'src/pages/*.html'
        ], {
            allowEmpty: true,
            base: 'src'
        })
        .pipe(dest('build/'));
}