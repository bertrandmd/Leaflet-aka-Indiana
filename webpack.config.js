'use strict'

var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    srcPath = path.join(__dirname, 'src');

module.exports = {
    target: "web",
    cache: true,
    entry: {
        app: path.join(srcPath, "index.js")
    },
    resolve: {
        extensions: ['', '.html', '.js', '.json', '.scss', '.css'],
        alias: {
            leaflet_css: __dirname + "/node_modules/leaflet/dist/leaflet.css",
            leaflet_marker: __dirname + "/node_modules/leaflet/dist/images/marker-icon.png",
            leaflet_marker_2x: __dirname + "/node_modules/leaflet/dist/images/marker-icon-2x.png",
            leaflet_marker_shadow: __dirname + "/node_modules/leaflet/dist/images/marker-shadow.png",
            drmonty_leaflet_awesome_markers_matte: __dirname + "/node_modules/drmonty-leaflet-awesome-markers/css/images/markers-matte.png",
            drmonty_leaflet_awesome_markers_matte_2x: __dirname + "/node_modules/drmonty-leaflet-awesome-markers/css/images/markers-matte@2x.png",
            drmonty_leaflet_awesome_markers_plain: __dirname + "/node_modules/drmonty-leaflet-awesome-markers/css/images/markers-plain.png",
            drmonty_leaflet_awesome_markers_shadow: __dirname + "/node_modules/drmonty-leaflet-awesome-markers/css/images/markers-shadow.png",
            drmonty_leaflet_awesome_markers_shadow_2x: __dirname + "/node_modules/drmonty-leaflet-awesome-markers/css/images/markers-shadow@2x.png",
            drmonty_leaflet_awesome_markers_soft: __dirname + "/node_modules/drmonty-leaflet-awesome-markers/css/images/markers-soft.png",
            drmonty_leaflet_awesome_markers_soft_2x: __dirname + "/node_modules/drmonty-leaflet-awesome-markers/css/images/markers-soft@2x.png",
            drmonty_leaflet_awesome_markers_css: __dirname + "/node_modules/drmonty-leaflet-awesome-markers/css/leaflet.awesome-markers.css",
            font_awesome_css: __dirname + "/node_modules/font-awesome/css/font-awesome.css"
        }
    },
    module: {
        loaders: [
          {test: /\.js?$/, exclude: /node_modules/, loader: "babel-loader"},
          {test: /\.scss?$/, exclude: /node_modules/, loader: "style-loader!css-loader!sass-loader!"},
          {test: /\.css?$/, loader: "style-loader!css-loader!"},
          {test: /\.(png|jpg)$/, loader: "file-loader?name=images/[name].[ext]"},
          { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
          { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },

    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "[name].js",
        pathInfo: true
    }
}
