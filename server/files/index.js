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
        const res = response.status(200);
        if (typeof content === 'string') res.send(content);
        else res.jsonp(content);
    }
    
    respondError(response) {
        response.status(404).send('error');
    }

	getFile(request, response) {
        try {
            const { query } = url.parse(request.url, true);
            if (!query.src) {
                const stat = checkPath(loadedDir);
                if (stat.isDirectory()) {
                    const content = readDir(loadedDir);
                    return this.respondSuccess(response, content);
                }
                throw new Error('Error');
            } else {
                const stat = checkPath(loadedDir + '/' + query.src);
                if (stat.isDirectory()) {
                    const content = readDir(loadedDir + '/' + query.src);
                    return this.respondSuccess(response, content);
                } else if (stat.isFile()) {
                    const content = readFile(loadedDir + '/' + query.src);
                    return this.respondSuccess(response, content);
                }
                throw new Error('Error');
            }
        } catch(e) {
            return this.respondError(response);
        }
	}
}