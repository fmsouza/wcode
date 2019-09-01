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
        server = https.createServer(keys, app);
    } catch (e) {
        console.error(e.message);
        process.exit(1);
    }

} else {
    const http = require('http');
    server = http.createServer(app);
}

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    ws.on('message', (event) => router(ws, event));
});

if (DEBUG_MODE) {
    const webpack = require('webpack');
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpackConfig = require('../webpack.config');
    app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
    app.use(express.static(path.resolve(SERVER_PATH, APPLICATION_PATH)));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(APPLICATION_PATH, './index.html'));
    });
}

server.listen(SERVER_PORT, SERVER_HOST, () => {
    const protocol = (SSL_KEYS) ? 'https' : 'http';
    const url = `${protocol}://${SERVER_HOST}:${SERVER_PORT}`
    console.log('Listening on %s', url);
    !NO_BROWSER && open(url, (error) => {
        console.log(`Error opening browser: ${error.message}`);
    });
});