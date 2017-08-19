import handleMessage from './listeners';
import * as Writers from './writers';
import { General } from 'common/constants';

const openConnection = () => {
    const websocket = new WebSocket(General.API_URL);
    Writers.registerSocket(websocket);
    websocket.onopen = handleMessage;
    websocket.onmessage = handleMessage;
    websocket.onerror = console.error;
    setInterval(() => Writers.keepAlive(), 2000);
};

export { openConnection, Writers };