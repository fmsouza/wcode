import handleMessage from './listeners';
import * as Writer from './writers';
import { General } from 'common/constants';

const openConnection = () => {
    const websocket = new WebSocket(General.API_URL);
    Writer.registerSocket(websocket);
    websocket.onopen = (e) => console.log("Connection opened.");
    websocket.onmessage = (event) => handleMessage(JSON.parse(event.data));
    websocket.onerror = console.error;
    setInterval(() => Writers.keepAlive(), 2000);
};

export { openConnection, Writer };