const fs = require('fs');
const mime = require('mime');
const { ActionTypes, NotificationTypes } = require('../constants');
const { notify, send } = require('./responses');

const checkPath = (srcPath) => fs.lstatSync(srcPath);

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
    return { files, folders };
}

const readProjectFiles = (ws, payload) => {
    try {
        const { content, path } = payload.file;
        if (!checkPath(path).isDirectory()) throw new Error('The given path is not a directory.');
        const name = path.split('/').pop();
        const response = { name, path, ...readDir(path) };
        send(ws, ActionTypes.READ_PROJECT, response);
    } catch (e) {
        notify(ws, e.message, NotificationTypes.ERROR);
    }
};

// appendFile

const createFile = (ws, payload) => {
    try {
        const { path } = payload.file;
        const state = checkPath(path);
        if (checkPath(path).isFile()) throw new Error('A file with this name already exists.');
        else if (checkPath(path).isDirectory()) throw new Error('The given path is a directory.');
        const content = '';
        fs.appendFileSync(path, content);
        const response = {
            name: path.split('/').pop(),
            path,
            content,
            type: mime.lookup(path)
        };
        send(ws, ActionTypes.CREATE_FILE, response);
    } catch (e) {
        notify(ws, e.message, NotificationTypes.ERROR);
    }
};

const readFile = (ws, payload) => {
    try {
        const { content, path } = payload.file;
        if (!checkPath(path).isFile()) throw new Error('The given path is not a file.');
        const response = {
            name: path.split('/').pop(),
            path,
            content: fs.readFileSync(path).toString('utf-8'),
            type: mime.lookup(path)
        };
        send(ws, ActionTypes.READ_FILE, response);
    } catch(e) {
        notify(ws, e.message, NotificationTypes.ERROR);
    }
};

const updateFile = (ws, payload) => {
    try {
        const { content, path } = payload.file;
        if (!checkPath(path).isFile()) throw new Error('The given path is not a file.');
        fs.writeFileSync(path, content);
        send(ws, ActionTypes.UPDATE_FILE, { path });
    } catch(e) {
        notify(ws, e.message, NotificationTypes.ERROR);
    }

};

const deleteFile = (ws, payload) => {
    try {
        const { content, path } = payload.file;
        if (!checkPath(path).isFile()) throw new Error('The given path is not a file.');
        fs.unlinkSync(path);
        send(ws, ActionTypes.DELETE_FILE, { path });
    } catch (e) {
        notify(ws, e.message, NotificationTypes.ERROR);
    }

};

module.exports = { readProjectFiles, createFile, readFile, updateFile, deleteFile };