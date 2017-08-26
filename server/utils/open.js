const spawn = require('child_process').spawn;

const getCommand = (platform) => {
    switch (platform) {
        case 'darwin': return 'open';
        case 'win32': return 'explorer.exe';
        default:
        case 'linux': return 'xdg-open';
    }
};

module.exports = function (url, callback) {
    const command = getCommand(process.platform);
    const child = spawn(command, [url]);
    let errorText = '';
    child.stderr.setEncoding('utf8');
    child.stderr.on('data', (data) => errorText += data);
    child.stderr.on('end', () => {
        if (errorText.length > 0) {
            const error = new Error(errorText);
            if (callback) callback(error);
            else throw error;
        }
    });
}