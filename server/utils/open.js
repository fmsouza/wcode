const spawn = require('child_process').spawn;

module.exports = function (url, callback) {
    let command;
    
    switch(process.platform) {
        case 'darwin':
            command = 'open';
            break;

        case 'win32':
            command = 'explorer.exe';
            break;

        default:
        case 'linux':
            command = 'xdg-open';
            break;
    }

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