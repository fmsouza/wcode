const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.plugins.push(new CopyWebpackPlugin([ { from: 'node_modules/monaco-editor/min/vs', to: 'vs' } ]))
  return config;
}