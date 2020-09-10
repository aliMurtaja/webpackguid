const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'mainss.js',
    path: path.resolve(__dirname, 'dist'),
  },
};