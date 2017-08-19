'use strict';
const fs = require('fs');
const resolve = require('path').resolve;

const loadedDir = (process.argv[2]) ? resolve(process.argv[2]) : '';
if (!loadedDir) {
    console.log("You must specify the project path.\n");
    process.exit(1);
} else if (!fs.lstatSync(loadedDir).isDirectory()) {
    console.log("The path must be a directory.\n");
    process.exit(1);
}

module.exports = {
    loadedDir: (process.argv[2]) ? resolve(process.argv[2]) : '',
    server: {
        ip: '0.0.0.0',
        port: 8080
    },
    routes: [
        'control',
        'files'
    ]
};