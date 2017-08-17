'use strict';
/* global __dirname; */
/**
 * Application configuration
 * You may use it to describe every global configuration data
 */
module.exports = {
    loadedDir: __dirname,
    server: {
        ip: '0.0.0.0',
        port: 8080
    },
    routes: [
        'files'
    ]
};