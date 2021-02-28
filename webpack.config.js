const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname, './src/index.js')
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: 'webpack Boilerplate Test 11111!!!',
			template: path.resolve(__dirname, './src/template.html'), // шаблон
			filename: 'index.html' // название выходного файла
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			// JavaScript
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			// изображения
			{
				test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
				type: 'asset/resource',
			},
			// шрифты и SVG
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},

			// CSS, PostCSS, Sass
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},

		],
	},
}
