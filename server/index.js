const express = require('express');
const { open, security } = require('./utils');
const path = require('path');
const WebSocket = require('ws');
const router = require('./router');
const { ActionTypes, APPLICATION_PATH, DEBUG_MODE, NO_BROWSER, SERVER_HOST, SERVER_PATH, SERVER_PORT, SSL_KEYS } = require('./constants');

const app = express();
let server = null;
if (SSL_KEYS) {
    try {
        const keys = security.readSSLKeys(SSL_KEYS);
        const https = require('https');
        const fs = require('fs');
        server = https.createServer(keys);
    } catch (e) {
        console.error(e.message);
        process.exit(1);
    }

} else {
    const http = require('http');
    server = http.createServer(app);
}

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