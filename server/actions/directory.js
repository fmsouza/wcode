const fs = require('fs');
const mime = require('mime');
const rimraf = require('rimraf');
const { ActionTypes, DEBUG_MODE, PROJECT_DIR } = require('../constants');
const { send } = require('./responses');
const { checkPath, onError } = require('./utils');

const readDir = (srcPath, folders = []) => {
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

const readProjectFiles = (ws, payload) => {
    try {
        const path = PROJECT_DIR;
        if (!checkPath(path).isDirectory()) throw new Error('The given path is not a directory.');
        const response = readDir(path);
        send(ws, ActionTypes.READ_PROJECT, response);
        DEBUG_MODE && console.log("readProjectFiles", path, response);
    } catch (e) {
        onError(ws, e.message);
    }
};

const createDirectory = (ws, payload) => {
    try {
        const { path } = payload.directory;
        if (fs.existsSync(path)) throw new Error('A directory with this name already exists.');
        fs.mkdirSync(path);
        const response = {
            name: path.split('/').pop(),
            path,
            files: [],
            folders: []
        };
        send(ws, ActionTypes.CREATE_DIRECTORY, response);
        DEBUG_MODE && console.log("createDirectory", path, response);
    } catch (e) {
        onError(ws, e.message);
    }
};

const updateDirectory = (ws, payload) => {
    try {
        const { content, path } = payload.directory;
        if (!checkPath(path).isDirectory()) throw new Error('The given path is not a directory.');
        throw new Error('Operation not implemented.');
        // fs.writeFileSync(path, content);
        // send(ws, ActionTypes.UPDATE_DIRECTORY, { path });
        // DEBUG_MODE && console.log("updateFile", content, path);
    } catch(e) {
        onError(ws, e.message);
    }
};

const deleteDirectory = (ws, payload) => {
    try {
        const { path } = payload.directory;
        if (!checkPath(path).isDirectory()) throw new Error('The given path does not exist or is not a directory.');
        rimraf(path, () => {
            send(ws, ActionTypes.DELETE_DIRECTORY, { path });
            DEBUG_MODE && console.log("deleteDirectory", path);
        });
    } catch (e) {
        onError(ws, e.message);
    }
};

module.exports = { readProjectFiles, createDirectory, updateDirectory, deleteDirectory };