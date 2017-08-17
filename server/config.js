'use strict';
const resolve = require('path').resolve;
/* global __dirname; */
/**
 * Application configuration
 * You may use it to describe every global configuration data
 */
module.exports = {
    loadedDir: (process.argv[2]) ? resolve(process.argv[2]) : '',
    server: {
        ip: '0.0.0.0',
        port: 8080
    },
    routes: [
        'files'
    ]
};