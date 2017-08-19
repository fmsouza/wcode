const express = require('express');
const http = require('http');
const open = require('opn');
const WebSocket = require('ws');
const { actionTypes, server: { host, port } } = require('./config');
const listener = require('./listeners');

const app = express();
app.use(express.static('build'));
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    ws.on('open', () => console.log("Connection opened."));
    ws.on('message', (event) => console.log("Message received."));
    ws.send(JSON.stringify({ type: actionTypes.KEEP_ALIVE }));
});

server.listen(port, host, () => console.log('Listening on %d', server.address().port));
open(`http://${host}:${port}`);