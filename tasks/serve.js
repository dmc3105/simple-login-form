const browserSync = require('browser-sync');

module.exports = function serve(){
    browserSync.init({
        server:
        {
            baseDir: './build/'
        },
        open: false,
        notify: false, 
    });
}