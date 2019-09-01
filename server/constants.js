const yargs = require('yargs').argv;

const APPLICATION_PATH = '../build';
const DEBUG_MODE  = process.env.NODE_ENV === 'development';
const NO_BROWSER = yargs.headless;
const PROJECT_DIR = yargs._[0] || '.';
const SERVER_HOST = yargs.addr || '127.0.0.1';
const SERVER_PATH = __dirname;
const SERVER_PORT = yargs.port || (DEBUG_MODE && 8080) || 9876;
const SSL_KEYS    = yargs.ssl;

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
    APPLICATION_PATH,
    DEBUG_MODE,
    NO_BROWSER,
    PROJECT_DIR,
    SERVER_HOST,
    SERVER_PATH,
    SERVER_PORT,
    SSL_KEYS,
    ActionTypes,
    NotificationTypes,
};