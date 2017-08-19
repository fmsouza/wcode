import handleMessage from './listeners';
import * as Writer from './writers';
import { General } from 'common/constants';

const openConnection = () => {
    const websocket = new WebSocket(General.API_URL);
    Writer.registerSocket(websocket);
    websocket.onopen = (e) => Writer.keepAlive();
    websocket.onmessage = (event) => handleMessage(JSON.parse(event.data));
    websocket.onerror = console.error;
};

export { openConnection, Writer };