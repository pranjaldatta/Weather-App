var path = require("path");
var webpack = require("webpack");

module.exports = {
    
    entry : "./client/index.js",

    output : {
        path : path.join(__dirname , "client"),
        filename : "bundle.js"
    },

    module : {

        rules : [
            
        {
            test : /.jsx?$/,
            exclude : /node_modules/,
            loader : 'babel-loader',
            query : {
                presets : ['@babel/preset-env' , "@babel/react"]
            }
        },

        {
            test : /\.css$/,
            loader : "style-loader!css-loader"
        },

        {
            test : /\.jpeg$/,
            loader : "url-loader",
            query : { mimetype : "image/jpeg" }
        },
        {
            test : /\.svg$/,
            loader : 'svg-inline-loader'

        }
    
    ]
    }


}