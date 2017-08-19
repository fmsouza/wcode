import { ActionTypes } from 'common/constants';

export const keepAlive = (send) => {
    console.log("Sending keep alive...");
    send(ActionTypes.KEEP_ALIVE, null);
};

export const exit = (send) => send(ActionTypes.EXIT_APP, null);