/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: [
    "webpack-hot-middleware/client",
    "babel-polyfill",
    "react-hot-loader/patch",
    "./index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [{
        test: /\.md$/,
        loader: "html-loader!markdown-loader?gfm=false"
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        include: __dirname
      }, {
        test: /\.css$/,
        loaders: ["style-loader", "raw-loader"],
        include: __dirname
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: "file-loader?mimetype=image/svg+xml",
        include: path.join(__dirname, "assets")
      }, {
        test: /\.png$/,
        loader: "url-loader?mimetype=image/png",
        include: path.join(__dirname, "assets")
      }, {
        test: /\.gif$/,
        loader: "url-loader?mimetype=image/gif",
        include: path.join(__dirname, "assets")
      }, {
        test: /\.jpg$/,
        loader: "url-loader?mimetype=image/jpg",
        include: path.join(__dirname, "assets")
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['.js', '.jsx', '.json']
  }
};