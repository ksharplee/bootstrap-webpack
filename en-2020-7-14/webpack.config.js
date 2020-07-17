const path = require('path');

module.exports = {
  entry: './en-2020-7-14/index.js',
  // mode: 'development',
  output: {
    path: path.resolve(__dirname),
    filename: './js/bundle.min.js',
  },
};
