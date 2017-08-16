const fs = require('fs');
const mime = require('mime');

const checkPath = (srcPath) => fs.lstatSync(srcPath);

const readDir = (srcPath, folders = []) => {
    if (!checkPath(srcPath).isDirectory()) throw new Error('The given path is not a directory.');
    const dirName = srcPath.split('/').pop();
    const directory = fs.readdirSync(srcPath);
    const files = [];
    directory.forEach(name => {
        const path = `${srcPath}/${name}`;
        const stat = checkPath(path);
        if (stat.isFile()) files.push({ name, path, type: mime.lookup(path) });
        else if (stat.isDirectory()) folders.push(readDir(path));
    });
    return { name: dirName, path: srcPath, files, folders };
}

const readFile = (srcPath) => {
    if (!checkPath(srcPath).isFile()) throw new Error('The given path is not a file.');
    return {
        content: fs.readFileSync(srcPath).toLocaleString(),
        type: mime.lookup(srcPath)
    }
}

module.exports = { readDir, readFile };