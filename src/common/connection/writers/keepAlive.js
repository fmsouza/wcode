import { ActionTypes } from 'common/constants';

export default (ws) => {
    if (!ws) return console.log("Connection not open.");
    console.log("Sending keep alive...");
    ws.send(JSON.stringify({ type: ActionTypes.KEEP_ALIVE, payload: null }));
};