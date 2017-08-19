import { ActionTypes } from 'common/constants';
import * as Control from './control';
import * as Files from './files';

export default (message) => {
    switch(message.type) {
        case ActionTypes.CREATE_FILE: return Files.createFile(message.payload);
        case ActionTypes.DELETE_FILE: return Files.deleteFile(message.payload);
        case ActionTypes.KEEP_ALIVE: return Control.keepAlive(message.payload);
        case ActionTypes.READ_FILE: return Files.readFile(message.payload);
        case ActionTypes.READ_PROJECT: return Files.readProjectFiles(message.payload);
        case ActionTypes.UPDATE_FILE: return Files.updateFile(message.payload);
        case ActionTypes.NOTIFICATION: return Control.notification(message.payload);
        default: console.log("Unhandled incoming message type:", message);
    }
};