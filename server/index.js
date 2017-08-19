const open = require('opn');
const { routes, server: { ip, port } } = require('./config');
const Router = require('./router');

try {
    console.log('Starting the server...');
    const router = new Router();
    routes.map(route => router.registerRoute(route));
    router.start(ip, port);
    open('http://localhost:3000'); // TODO: load in the same url when the web app was build and loaded as static
} catch(error) {
    console.error(error);
    process.exit(1);
}