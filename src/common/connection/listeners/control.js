import { Notification } from 'common/constants';

export const keepAlive = (payload) => {
    console.log("received keep alive", payload);
};

export const notification = ({ level, message }) => {
    switch (level) {
        case Notification.INFO: return console.info(message);
        case Notification.ERROR: return console.error(message);
        case Notification.SUCCESS: return console.log(message);
        case Notification.WARNING: return console.warn(message);
        default: return console.log(message);
    }
};