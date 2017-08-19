import * as Control from './control';
import * as Files from './files';
import send from './send';

let ws = null, writers = null;
const sendHandler = () => send(ws);

export const registerSocket = (wsocket) => ws = wsocket;

export const keepAlive = () => {
    if (!ws) return console.error("Connection not opened.");
    Control.keepAlive(sendHandler(), ...arguments);
};

export const readProjectFiles = () => {
    if (!ws) return console.error("Connection not opened.");
    Files.readProjectFiles(sendHandler(), ...arguments);
};