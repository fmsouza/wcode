const express = require('express');
const http = require('http');
const open = require('opn');
const path = require('path');
const WebSocket = require('ws');
const { ActionTypes, DEBUG_MODE, SERVER_PATH, SERVER_HOST, SERVER_PORT } = require('./constants');
const router = require('./router');

const app = express();
app.use(express.static(path.resolve(SERVER_PATH, '../build')));
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    ws.on('message', (event) => router(ws, event));
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
    const address = server.address();
    console.log('Listening on %d', address.port);
    !DEBUG_MODE && open(`http://${SERVER_HOST}:${SERVER_PORT}`);
});