import alias from 'rollup-plugin-alias';
import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import globals from 'rollup-plugin-node-globals';
import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import path from 'path';

export default {
  input: 'src/index.js',
  output: {
    file: 'build/app/bundle.js',
    format: 'iife',
  },
  plugins: [
    copy({
        "node_modules/monaco-editor/min/vs": "build/vendor/vs",
    }),
    postcss({
      extensions: [ '.css' ]
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ [ 'es2015', { modules: false } ], 'stage-0', 'react' ],
      plugins: [ 'external-helpers', 'transform-decorators-legacy' ]
    }),
    alias({
      'common/actions': path.resolve('src/common/actions/index.js'),
      'common/connection': path.resolve('src/common/connection/index.js'),
      'common/constants': path.resolve('src/common/constants/index.js'),
      'common/stores': path.resolve('src/common/stores/index.js'),
      'common/utils': path.resolve('src/common/utils/index.js'),
      'vs': path.resolve('node_modules/monaco-editor/min/vs'),
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
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    resolve({
      browser: true,
      main: true
    })
  ],
  sourcemap: true
}
