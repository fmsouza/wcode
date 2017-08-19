import keepAliveHandler from './keepAlive';

let ws = null;

export const registerSocket = (socket) => ws = socket;

export const keepAlive = () => {
    keepAliveHandler(ws);
};
