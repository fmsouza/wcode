import { ActionTypes } from 'common/constants';
import keepAlive from './keepAlive';

export default (message) => {
    if (message.type === ActionTypes.CONNECTION_OPEN) return console.log("Connection opened.");
    const data = JSON.parse(message.data);
    switch(data.type) {
        case ActionTypes.KEEP_ALIVE: return keepAlive(message);
        default: console.log("Unhandled incoming message type:", message.type);
    }
};