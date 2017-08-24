const fs = require('fs');
const { DEBUG_MODE, NotificationTypes } = require('../constants');
const { notify } = require('./responses');

const checkPath = (srcPath) => fs.lstatSync(srcPath);

const onError = (ws, message) => {
    DEBUG_MODE && console.log("Error:", message);
    notify(ws, message, NotificationTypes.ERROR);
}

module.exports = { checkPath, onError };