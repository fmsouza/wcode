const express = require('express');
const bodyParser = require("body-parser");

/**
 * Class Router represents the RESTful router, which
 * handles all the HTTP routes configured in the application.
 * @class {Router}
 */
module.exports = class Router {

    constructor() {
        this.driver = express();
        this.driver.use(bodyParser.urlencoded({ extended: true }));
        this.driver.use(bodyParser.json());
        this.driver.use(function(req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            console.log(`Serving route ${req.url} (${req.method})`);
            next();
        });
    }

    /**
     * Registers a list of routes to handle routes
     * @param {Array} routes
     */
    registerRoute(route) {
        const Route = require('./' + route);
        const middleware = express();
        const tmp = new Route(middleware);
        this.driver.use(tmp.path, middleware);
        console.log('Route registered', '-', tmp.path);
    }

    /**
     * Starts the RESTful server
     * @param {string} host - Server bind host
     * @param {number} port - Server bind port
     * @param {Function} callback
     * @returns {void}
     */
    start(host, port, callback = null) {
        this.driver.listen(port, host, () => {
            callback && callback();
            console.log(`Server started in http://${host}:${port}`);
        });
    }
}