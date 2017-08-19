const { ActionTypes } = require('../constants');
const Action = require('../actions');

module.exports = (ws, message) => {
    const data = JSON.parse(message);
    switch (data.type) {
        case ActionTypes.CREATE_FILE: return Action.createFile(ws, data.payload);
        case ActionTypes.DELETE_FILE: return Action.deleteFile(ws, data.payload);
        case ActionTypes.EXIT_APP: return Action.exit(ws, data.payload);
        case ActionTypes.KEEP_ALIVE: return Action.keepAlive(ws, data.payload);
        case ActionTypes.READ_FILE: return Action.readFile(ws, data.payload);
        case ActionTypes.READ_PROJECT: return Action.readProjectFiles(ws, data.payload);
        case ActionTypes.UPDATE_FILE: return Action.updateFile(ws, data.payload);
        default: return null;
    }
};