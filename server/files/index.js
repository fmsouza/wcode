const url = require('url');
const fs = require('fs');
const { loadedDir } = require('../config');
const { checkPath, readDir, readFile, saveFile } = require('./actions');

module.exports = class MainResource {

    get path() {
        return '/files';
    }

	constructor(router) {
		router.get('/', this.getFile.bind(this));
		router.put('/', this.updateFile.bind(this));
    }
    
    respondSuccess(response, content, status = 200) {
        response.status(status).jsonp(content);
    }
    
    respondError(response, message = 'error', status = 404) {
        response.status(status).send(message);
    }

	getFile(request, response) {
        try {
            const { query } = url.parse(request.url, true);
            const content = (!query.src) ? readDir(loadedDir) : readFile(query.src);
            return this.respondSuccess(response, content);
        } catch(e) {
            return this.respondError(response, e.messase);
        }
    }
    
    updateFile(request, response) {
        try {
            const { query } = url.parse(request.url, true);
            const { content } = request.body;
            saveFile(query.src, content);
            return this.respondSuccess(response, { status: 'ok' }, 201);
        } catch(e) {
            return this.respondError(response, e.messase);
        }

    }
}