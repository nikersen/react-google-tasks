var webpack = require('webpack');

module.exports = {
	entry: "./src/main.jsx",
	output: {
		path: __dirname + "/public/build/",
		publicPath: "build",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: [/node_modules/, /public/]
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader!autoprefixer-loader",
				exclude: [/node_modules/, /public/]
			},
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!autoprefixer-loader!less-loader",
				exclude: [/node_modules/, /public/]
			},
			{
				test: /\.jpg$/,
				loader: "url-loader?limit=10000&mimetype=image/jpg",
			},
			{
				test: /\.png$/,
				loader: "url-loader?limit=10000&mimetype=image/png",
			},
			{
				test: /\.svg$/,
				loader: "url-loader?limit=10000&mimetype=image/svg+xml",
			},
			{
				test: /\.jsx$/,
				loader: "babel-loader",
				exclude: [/node_modules/, /public/]
			},
			{
				test: /\.json$/,
				loader: "json-loader",
			},
		]
	}
}