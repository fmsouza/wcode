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
    
    respondSuccess(response, content) {
        response.status(200).jsonp(content);
    }
    
    respondError(response, message = 'error') {
        response.status(404).send(message);
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
}