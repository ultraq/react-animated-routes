'use strict';
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './scripts/Demo.js',
	output: {
		filename: 'demo.js',
		path: path.resolve(__dirname, 'dist/scripts')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'scripts'),
				use: 'babel-loader'
			}
		]
	},
	devtool: '#source-map'
};
