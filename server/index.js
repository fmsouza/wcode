'use strict';
const { routes, server: { ip, port } } = require('./config');
const Router = require('./router');

try {
    console.log('Starting the server...');
    const router = new Router();
    routes.map(route => router.registerRoute(route));
    router.start(ip, port);
} catch(error) {
    console.error(error);
    process.exit(1);
}