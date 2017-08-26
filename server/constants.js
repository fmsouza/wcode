const yargs = require('yargs').argv;

const DEBUG_MODE  = process.env.NODE_ENV === 'development';
const SERVER_PATH = __dirname;
const PROJECT_DIR = yargs._[0] || '';
const SERVER_HOST = '0.0.0.0';
const SERVER_PORT = yargs.port || 9876;

const ActionTypes = {
    READ_PROJECT:     'action/project/read',

    CREATE_DIRECTORY: 'action/directory/create',
    UPDATE_DIRECTORY: 'action/directory/update',
    DELETE_DIRECTORY: 'action/directory/delete',

    CREATE_FILE:      'action/file/create',
    READ_FILE:        'action/file/read',
    UPDATE_FILE:      'action/file/update',
    DELETE_FILE:      'action/file/delete',

    EXIT_APP:         'action/control/exit',
    KEEP_ALIVE:       'action/control/keepalive',
    NOTIFICATION:     'action/control/notify'
};

const NotificationTypes = {
    INFO:    'notification/info',
    ERROR:   'notification/error',
    SUCCESS: 'notification/success',
    WARNING: 'notification/warning'
};

module.exports = {
    DEBUG_MODE,
    PROJECT_DIR,
    SERVER_PATH,
    SERVER_HOST,
    SERVER_PORT,
    ActionTypes,
    NotificationTypes,
};