const path = require('path');

module.exports = {
  mode: 'development', // Set to 'development' or 'production' based on your environment
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
