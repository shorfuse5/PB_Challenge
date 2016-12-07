var webpack = require('webpack');
var path = require('path');

var ENV = JSON.parse(process.env.PROD_ENV || "0");

var appModulesPath = __dirname + '/app';
var nodeModulesPath = __dirname + '/node_modules';
var bowerComponentsPath = __dirname + '/bower_components';

module.exports = {
    entry  : [
        './app/app.js'
    ],
    output : {
        path     : __dirname + '/public',
        filename : 'bundle.js'
    },
    resolve: {
        modulesDirectories: [appModulesPath, nodeModulesPath, bowerComponentsPath],
    },
    plugins: ENV ? [
      new webpack.optimize.UglifyJsPlugin({
          minimize: true,
          sourceMap: false,
          mangle: false
      })
    ] : [],
    module : {
        loaders: [
            {
              test: /\.js$/,
              loader: 'babel',
              exclude: /node_modules/,
              query: {
                  presets: ['es2015']
              }
            },
            {
              test: /\.(css|scss)$/,
              loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
            },
            {
              test: /\.less$/,
              loaders: ["style-loader", "css-loader?sourceMap", "less-loader"]
            },
            {
              test: /\.(png|jpg|gif|svg)$/,
              loader: 'url?limit=100000'
            },
            {
              test: /\.html$/,
              exclude: /node_modules/,
              loader: 'raw'
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./assets/sass")]
    },
    devtool: 'source-map'
};
