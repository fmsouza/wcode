import { ActionTypes } from 'common/constants';

export const keepAlive = (send) => {
    console.log("Sending keep alive...");
    send(ActionTypes.KEEP_ALIVE, null);
};