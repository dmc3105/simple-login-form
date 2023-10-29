const { series, parallel } = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.cleaning = tasks.cleaning;
exports.html = tasks.html;
exports.scripts = tasks.scripts;
exports.serve = tasks.serve;
exports.styles = tasks.styles;
exports.watching = tasks.watching;
exports.assets = tasks.assets;

exports.default = series(
    exports.cleaning,
    parallel(
        exports.html,
        exports.scripts,
        exports.styles,
        exports.assets,
    ),
    parallel(
        exports.serve,
        exports.watching,
    )
);