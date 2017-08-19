module.exports = class MainResource {

    get path() {
        return '/control';
    }

	constructor(router) {
		router.get('/exit', this.closeApplication);
    }

	closeApplication(request, response) {
        response.status(200).send('ok');
        process.exit(0);
    }
}