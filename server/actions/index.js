const directory = require('./directory');
const files = require('./files');
const control = require('./control');

module.exports = {
    ...directory,
    ...files,
    ...control
};