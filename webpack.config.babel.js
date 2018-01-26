/* eslint-disable no-console */
//──────────────────────────────────────────────────────────────────────────────
// Imports
//──────────────────────────────────────────────────────────────────────────────
import path from 'path';


//──────────────────────────────────────────────────────────────────────────────
// Constants
//──────────────────────────────────────────────────────────────────────────────
const DST_DIR_ABS = path.join(__dirname, 'build/resources/main/lib/es2015');


//──────────────────────────────────────────────────────────────────────────────
// Exports
//──────────────────────────────────────────────────────────────────────────────
const WEBPACK_CONFIG = {
  entry: {
    index: './index.js'
  },
  devtool: false, // Don't waste time generating sourceMaps
  module: {
    rules: [{
      test: /\.(es6?|js)$/, // Will need js for node module depenencies
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false, // The .babelrc file should only be used to transpile config files.
          comments: false,
          compact: false,
          minified: false,
          plugins: [
            'array-includes',
            'optimize-starts-with',
            'transform-object-assign',
            'transform-object-rest-spread'
          ],
          presets: ['es2015']
        } // options
      }] // use
    }] // rules
  }, // module
  output: {
    path: DST_DIR_ABS,
    filename: '[name].js',
    libraryTarget: 'commonjs'
  } // output
};
console.log(`WEBPACK_CONFIG:${JSON.stringify(WEBPACK_CONFIG, null, 4)}`);
//process.exit();

export { WEBPACK_CONFIG as default };
