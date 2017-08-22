import copy from 'rollup-plugin-copy';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

// Import the development configuration.
import config from './dev';

// Inject the production settings.
config.output.file = 'build/app/bundle.min.js';
config.plugins[6] = replace({ 'process.env.NODE_ENV': JSON.stringify('production') });
config.plugins.push(copy({
    "public/index.html": "build/index.html",
}));
config.plugins.push(uglify());

export default config;
