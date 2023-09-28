const path = require('path')
const htmlWebpackPlugin = require("html-webpack-plugin")
const relocateLoader = require('webpack-asset-relocator-loader');

module.exports = {
	mode: 'production',
	entry: {
		filename: path.resolve(__dirname, 'src/index.js')
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		assetModuleFilename: "[name][ext]"
	},
	devServer: {
		port: 3000,
		open : true,
		hot: true,
		static: {
			directory: path.join(__dirname, "dist")
		}
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use:[
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
							  progressive: true,
							},
							optipng: {
							  enabled: false,
							},
							pngquant: {
							  quality: [0.65, 0.90],
							  speed: 4
							},
							gifsicle: {
							  interlaced: false,
							},
							webp: {
							  quality: 75
						  }
						},
					}
				],
				type: "asset/resource",
			},
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
				  loader: 'babel-loader',
				  options: {
					presets: [
					  ['@babel/preset-env', { targets: "defaults" }]
					]
				  }
				}
			  },		  
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			title: "Task",
			filename: "index.html",
			template: "src/index.html"
		}),
		{
			apply(compiler) {
			  compiler.hooks.compilation.tap("webpack-asset-relocator-loader", compilation => {
				relocateLoader.initAssetCache(compilation, outputAssetBase);
			  });
			}
		  }
	]
}





