const path = require('path')
const htmlWebpackPlugin = require("html-webpack-plugin")

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
			  {
				// For node binary relocations, include ".node" files as well here
				test: /\.(m?js|node)$/,
				// it is recommended for Node builds to turn off AMD support
				parser: { amd: false },
				use: {
				  loader: '@vercel/webpack-asset-relocator-loader',
				  options: {
					// optional, base folder for asset emission (eg assets/name.ext)
					outputAssetBase: 'assets',
					// optional, restrict asset emissions to only the given folder.
					filterAssetBase: process.cwd(),
					// optional, permit entire __dirname emission
					// eg `const nonAnalyzable = __dirname` can emit everything in the folder
					emitDirnameAll: false,
					// optional, permit entire filterAssetBase emission
					// eg `const nonAnalyzable = process.cwd()` can emit everything in the cwd()
					emitFilterAssetBaseAll: false,
					// optional, custom functional asset emitter
					// takes an asset path and returns the replacement
					// or returns false to skip emission
					customEmit: (path, { id, isRequire }) => false | '"./custom-replacement"',
					// optional, a list of asset names already emitted or
					// defined that should not be emitted
					existingAssetNames: [],
					wrapperCompatibility: false, // optional, default
					// build for process.env.NODE_ENV = 'production'
					production: true, // optional, default is undefined
					cwd: process.cwd(), // optional, default
					debugLog: false, // optional, default
				  }
				}
			  }
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			title: "Task",
			filename: "index.html",
			template: "src/index.html"
		})
	]
}





