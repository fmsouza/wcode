const express = require('express');
const http = require('http');
const { open } = require('./utils');
const path = require('path');
const WebSocket = require('ws');
const router = require('./router');
const { ActionTypes, APPLICATION_PATH, DEBUG_MODE, NO_BROWSER, SERVER_HOST, SERVER_PATH, SERVER_PORT } = require('./constants');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static(path.resolve(SERVER_PATH, APPLICATION_PATH)));

wss.on('connection', (ws) => {
    ws.on('message', (event) => router(ws, event));
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
    const address = server.address();
    console.log('Listening on %d', address.port);

    !NO_BROWSER && open(`http://${SERVER_HOST}:${SERVER_PORT}`, (error) => {
        console.log(`Error opening browser: ${error.message}`);
    });
});