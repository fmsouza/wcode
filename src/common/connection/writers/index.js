import * as Control from './control';
import * as Files from './files';
import send from './send';

let ws = null;
const sendHandler = () => send(ws);

export const registerSocket = (socket) => ws = socket;

export const keepAlive = () => {
    if (!ws) return console.error("Connection not opened.");
    Control.keepAlive(sendHandler());
}

export const readProjectFiles = () => {
    if (!ws) return console.error("Connection not opened.");
    Files.readProjectFiles(sendHandler());
}