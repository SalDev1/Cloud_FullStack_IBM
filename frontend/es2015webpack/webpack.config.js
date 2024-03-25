// import path from 'path';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    target:'web',
    entry:{
        /*
          It will resolve the entire path directory.

          __dirname --> search for the src and then searches for main.js file and then
          bundles everything into one single file.
        */
        main:path.resolve(__dirname,"src/main.js")
    },
    output : {
        /*
          Create a dist folder and in that bundle file will
          be named as bundle.js.
        */
        path : path.resolve(__dirname,'dist'),
        filename : 'bundle.js',
    },
    plugins : [
        new HtmlWebpackPlugin({
            filename:'index.html',
            title:'My Webpage',
            inject:'body',
        })
    ],
    devServer:{
        static:{
            directory: path.join(__dirname,'dist'),
        },
        compress:true,
        port:9000,
    }
}