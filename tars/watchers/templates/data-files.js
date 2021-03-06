var gulp = require('gulp');
var chokidar = require('chokidar');
var tarsConfig = require('../../../tars-config');
var watcherLog = require('../../helpers/watcher-log');

/**
 * Watcher for data-files of modules
 * @param  {Object} watchOptions
 */
module.exports = function (watchOptions) {
    return chokidar.watch([
        'markup/modules/**/data/json.json',
        'markup/modules/**/**/data/json.json', 
        'markup/modules/**/**/**/data/json.json', 
        './markup/pages/**/json.json'
    ], {
        ignored: '',
        persistent: true,
        ignoreInitial: true
    }).on('all', function (event, path) {
        watcherLog(event, path);
        gulp.start('compile-templates-with-data-reloading');
    });
};