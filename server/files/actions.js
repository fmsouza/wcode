const fs = require('fs');

module.exports = {

    checkPath: (path) => fs.lstatSync(path),

    readDir: (path) => fs.readdirSync(path),

    readFile: (path) => fs.readFileSync(path).toLocaleString(),
    
};