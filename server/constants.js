const { resolve } = require('path');
const fs = require('fs');

const loadedDir = (process.argv[2]) ? resolve(process.argv[2]) : '';
if (!loadedDir) {
    console.log("You must specify the project path.\n");
    process.exit(1);
} else if (!fs.lstatSync(loadedDir).isDirectory()) {
    console.log("The path must be a directory.\n");
    process.exit(1);
}

const PROJECT_DIR = (process.argv[2]) ? resolve(process.argv[2]) : '';
const SERVER_HOST = '0.0.0.0';
const SERVER_PORT = 8080;

const ActionTypes = {
    READ_PROJECT: 'action/project/read',
    CREATE_FILE: 'action/file/create',
    READ_FILE: 'action/file/read',
    UPDATE_FILE: 'action/file/update',
    DELETE_FILE: 'action/file/delete',
    EXIT_APP: 'action/control/exit',
    KEEP_ALIVE: 'action/control/keepalive'
};

const NotificationTypes = {
    INFO: 'notification/info',
    ERROR: 'notification/error',
    SUCCESS: 'notification/success',
    WARNING: 'notification/warning'
};

module.exports = {
    PROJECT_DIR,
    SERVER_HOST,
    SERVER_PORT,
    ActionTypes,
    NotificationTypes,
};