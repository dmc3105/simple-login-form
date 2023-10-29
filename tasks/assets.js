const {src, dest} = require('gulp');

module.exports = function assets (){
    return src('src/assets/**/*', {nodir: true})
        .pipe(dest('build/'));
}