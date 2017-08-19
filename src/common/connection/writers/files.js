import { ActionTypes } from 'common/constants';

export const readProjectFiles = (send) => {
    send(ActionTypes.READ_PROJECT, null);
};