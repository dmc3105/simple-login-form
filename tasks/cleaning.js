const {src} = require('gulp');
const clean = require('gulp-clean');

module.exports = function cleaning()
{
    return src('build/*', {read:false})
        .pipe(clean(['allowEmpty']))
}