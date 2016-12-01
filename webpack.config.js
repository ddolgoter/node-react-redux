var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.join(__dirname, 'client');
  
module.exports = {
  context: APP_DIR,
  entry: './js/index.js',
  module: {
	loaders : [
	  {
		test: /\.jsx?/,
		include: APP_DIR,
		loader: 'babel-loader',
		query: {
          presets: ['react', 'es2015']
        }
	  }
	]  
  },
  output: {
	path: APP_DIR + '/public/',
	filename: 'index.min.js'
  }
}