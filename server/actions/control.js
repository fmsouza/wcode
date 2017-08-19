const exit = (ws, message) => {
    process.exit();
};

const keepAlive = (ws, message) => {
    console.log("Received a keep alive!");
};

module.exports = { exit, keepAlive };