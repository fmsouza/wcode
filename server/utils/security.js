const fs = require('fs');
const resolve = require('path').resolve;

const readSSLKeys = (keysPath) => {
    const stat = fs.lstatSync(resolve(keysPath));
    if (!stat.isDirectory()) throw new Error('The SSL keys path provided is not a directory.');
    try {
        return {
            cert: fs.readFileSync(resolve(keysPath, 'certificate.pem')).toString('utf-8'),
            key: fs.readFileSync(resolve(keysPath, 'key.pem')).toString('utf-8'),
        };
    } catch (e) {
        throw new Error("Error: The SSL keys path must contain the 'certificate.pem' and the 'key.pem' files.");
    }
};

module.exports = { readSSLKeys };