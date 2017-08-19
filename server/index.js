const express = require('express');
const http = require('http');
const open = require('opn');
const WebSocket = require('ws');
const { ActionTypes, SERVER_HOST, SERVER_PORT } = require('./constants');
const listener = require('./listeners');

const app = express();
app.use(express.static('build'));
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    ws.on('message', (event) => listener(ws, event));
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
    const address = server.address();
    console.log('Listening on %d', address.port);
    // open(`http://${address.host}:${address.port}`);
    open(`http://${address.host}:3000`); // Hardcoding web development server address
});