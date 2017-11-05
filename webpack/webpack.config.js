var path = require('path');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: {
    "main_1.0.min": "./app/Resources/assets/js/main.js"
  },
  output: {
    path: __dirname + '/src/public/js',
    filename: "[name].js",
    publicPath: '/'
  },
  watch: true,
  devtool: "source-map",

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        },
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery", jQuery: "jquery", "window.jQuery": "jquery"
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compress: {
         warnings: false
       }
    })
  ]

}
