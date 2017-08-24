const fs = require('fs');
const mime = require('mime');
const { ActionTypes, DEBUG_MODE } = require('../constants');
const { send } = require('./responses');
const { checkPath, onError } = require('./utils');

const createFile = (ws, payload) => {
    try {
        const { path } = payload.file;
        if (fs.existsSync(path)) throw new Error('A file with this name already exists.');
        const content = ' ';
        fs.appendFileSync(path, content);
        const response = {
            name: path.split('/').pop(),
            path,
            content,
            type: mime.lookup(path)
        };
        send(ws, ActionTypes.CREATE_FILE, response);
        DEBUG_MODE && console.log("createFile", path, response);
    } catch (e) {
        onError(ws, e.message);
    }
};

const readFile = (ws, payload) => {
    try {
        const { path } = payload.file;
        if (!checkPath(path).isFile()) throw new Error('The given path is not a file.');
        const response = {
            name: path.split('/').pop(),
            path,
            content: fs.readFileSync(path).toString('utf-8'),
            type: mime.lookup(path)
        };
        send(ws, ActionTypes.READ_FILE, response);
        DEBUG_MODE && console.log("readFile", path, response);
    } catch(e) {
        onError(ws, e.message);
    }
};

const updateFile = (ws, payload) => {
    try {
        const { content, path } = payload.file;
        if (!checkPath(path).isFile()) throw new Error('The given path is not a file.');
        fs.writeFileSync(path, content);
        send(ws, ActionTypes.UPDATE_FILE, { path });
        DEBUG_MODE && console.log("updateFile", content, path);
    } catch(e) {
        onError(ws, e.message);
    }
};

const deleteFile = (ws, payload) => {
    try {
        const { path } = payload.file;
        if (!checkPath(path).isFile()) throw new Error('The given path does not exist.');
        fs.unlinkSync(path);
        send(ws, ActionTypes.DELETE_FILE, { path });
        DEBUG_MODE && console.log("deleteFile", path);
    } catch (e) {
        onError(ws, e.message);
    }
};

module.exports = { createFile, readFile, updateFile, deleteFile };