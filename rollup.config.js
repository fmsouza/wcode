import alias from 'rollup-plugin-alias';
import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import globals from 'rollup-plugin-node-globals';
import postcss from 'rollup-plugin-postcss';
import path from 'path';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

const isProduction = process.env.NODE_ENV === "production";

const variables = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
};

export default {
  input: 'src/index.js',
  output: {
    file: 'build/app/bundle.js',
    format: 'iife',
  },
  plugins: [
    copy({
        "node_modules/monaco-editor/min/vs": "build/vendor/vs",
        "public/favicon.ico": "build/favicon.ico",
        "public/manifest.json": "build/manifest.json",
        "public/index.html": "build/index.html"
    }),
    alias({ 'vs': path.resolve('node_modules/monaco-editor/min/vs') }),
    postcss({
      extensions: ['.css']
    }),
    babel({
      babelrc: true,
      exclude: 'node_modules/**',
    }),
    cjs({
      namedExports: {
        'node_modules/mobx-react/index.js': [ 'inject', 'observer', 'Provider' ]
      },
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/create-react-class/**',
        'node_modules/fbjs/**',
        'node_modules/keyboardjs/**',
        'node_modules/mobx-react/**',
        'node_modules/monaco-editor/**',
        'node_modules/object-assign/**',
        'node_modules/react/**',
        'node_modules/react-dom/**',
        'node_modules/react-monaco-editor/**',
        'node_modules/prop-types/**'
      ]
    }),
    globals(),
    replace(variables),
    resolve({
      browser: true,
      main: true
    }),
    isProduction && uglify()
  ],
  sourcemap: true
}
