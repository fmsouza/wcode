const { actionTypes } = require('../config');
const keepAlive = require('./keepAlive');

module.exports = (ws, message) => {
    const data = JSON.parse(message);
    switch (data.type) {
        case actionTypes.KEEP_ALIVE: keepAlive(ws, data);
        default: return null;
    }
};