const url = require('url');
const fs = require('fs');
const { loadedDir } = require('../config');
const { checkPath, readDir, readFile } = require('./actions');

module.exports = class MainResource {

    get path() {
        return '/files';
    }

	constructor(router) {
		router.get('/', this.getFile.bind(this));
    }
    
    respondSuccess(response, content, type = 'text/plain') {
        response.setHeader('Content-Type', type);
        response.status(200).send(content);
    }
    
    respondError(response, message = 'error') {
        response.status(404).send(message);
    }

	getFile(request, response) {
        try {
            const { query } = url.parse(request.url, true);
            if (!query.src) {
                const content = readDir(loadedDir);
                return this.respondSuccess(response, content, 'application/json');
            } else {
                const path = loadedDir + '/' + query.src;
                const { content, type } = readFile(path);
                return this.respondSuccess(response, content, type);
            }
        } catch(e) {
            return this.respondError(response, e.messase);
        }
	}
}