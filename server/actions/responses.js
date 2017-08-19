const { ActionTypes, NotificationTypes } = require('../constants');

const notify = (ws, message, level = NotificationTypes.INFO) => {
    send(ws, ActionTypes.NOTIFICATION, { level, message });
};

const send = (ws, type, payload) => {
    const response = { type, payload };
    ws.send(JSON.stringify(response));
};

module.exports = { notify, send };