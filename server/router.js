const { ActionTypes, DEBUG_MODE } = require('./constants');
const Action = require('./actions');

module.exports = (ws, message) => {
    DEBUG_MODE && console.log("Received message:", message);
    const data = JSON.parse(message);
    switch (data.type) {
        case ActionTypes.CREATE_DIRECTORY: return Action.createDirectory(ws, data.payload);
        case ActionTypes.CREATE_FILE: return Action.createFile(ws, data.payload);
        case ActionTypes.DELETE_DIRECTORY: return Action.deleteDirectory(ws, data.payload);
        case ActionTypes.DELETE_FILE: return Action.deleteFile(ws, data.payload);
        case ActionTypes.EXIT_APP: return Action.exit(ws, data.payload);
        case ActionTypes.KEEP_ALIVE: return Action.keepAlive(ws, data.payload);
        case ActionTypes.READ_FILE: return Action.readFile(ws, data.payload);
        case ActionTypes.READ_PROJECT: return Action.readProjectFiles(ws, data.payload);
        case ActionTypes.UPDATE_DIRECTORY: return Action.updateDirectory(ws, data.payload);
        case ActionTypes.UPDATE_FILE: return Action.updateFile(ws, data.payload);
        default: return null;
    }
};