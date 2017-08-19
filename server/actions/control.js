const { DEBUG_MODE } = require('../constants');

const exit = (ws, message) => {
    DEBUG_MODE && console.log("Exiting application...");
    process.exit();
};

const keepAlive = (ws, message) => {
    DEBUG_MODE && console.log("Received a keep alive!");
};

module.exports = { exit, keepAlive };