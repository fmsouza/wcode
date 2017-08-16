const fs = require('fs');
const mime = require('mime');

const checkPath = (srcPath) => fs.lstatSync(srcPath);

const readDir = (srcPath) => {
    if (!checkPath(srcPath).isDirectory()) throw new Error('The given path is not a directory.');
    const directory = fs.readdirSync(srcPath);
    const folders = [], files = [];
    directory.forEach(name => {
        const path = `${srcPath}/${name}`;
        const stat = checkPath(path);
        if (stat.isFile()) files.push({ name, path, type: mime.lookup(path) });
        else if (stat.isDirectory()) folders.push({ name, path, children: readDir(path) });
    });
    return folders.concat(files);
}

const readFile = (srcPath) => {
    if (!checkPath(srcPath).isFile()) throw new Error('The given path is not a file.');
    return {
        content: fs.readFileSync(srcPath).toLocaleString(),
        type: mime.lookup(srcPath)
    }
}

module.exports = { readDir, readFile };