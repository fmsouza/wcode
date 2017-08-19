import { ActionTypes } from 'common/constants';

export const keepAlive = (send) => send(ActionTypes.KEEP_ALIVE, null);

export const exit = (send) => {
    send(ActionTypes.EXIT_APP, null);
    window.open('', '_self', '');
    window.close();
}