const fs = require('fs');

module.exports = (argv) => {
    if (process.argv.length <= 2) {
        console.log("You must specify the project path.");
        process.exit(1);
    } else {
        const last = argv.length - 1;
        const projectDir = argv[last];
        if (!fs.lstatSync(projectDir).isDirectory()) {
            console.log("You must specify a directory as project path.\n");
            process.exit(1);
        }
        const portIndex = argv.indexOf('-p');
        let port = null;
        // TODO: Enable port change
        // if (portIndex > -1) {
        //     port = parseInte(argv[portIndex + 1], 10);
        //     if (port === NaN || port < 0) {
        //         console.log("The 'port' value must be a valid port number\n");
        //         console.log("The correct syntax is:\n\n");
        //         console.log("wcode -p <port> path/to/project\n\n");
        //         process.exit(1);
        //     }
        // }
        return { projectDir, port };
    }
};