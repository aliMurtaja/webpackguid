const path = require('path');

module.exports = {
  
    entry: './src/index.js',
  
    output: {
    
        filename: 'mainee.js',
        // publicpath: '/dist',
        path: path.resolve(__dirname, 'dist'),
  
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                // this is for import any type of the pics
                test: /\.png$/,
                use: [
                    'file-loader'
                ]
            },

            {
                // Now you can import any one of those four types of data (JSON, CSV, TSV, XML) and the Data variable you import, will contain parsed JSON for easy consumption:
                test: /\.xml/,
                use:['xml-loader']
            },

                // So what about other assets like fonts? The file and url loaders will take any file you load through them and output it to your build directory. This means we can use them for any kind of file, including fonts. Let's update our webpack.config.js to handle font files:
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                  'file-loader',
                ],
            },

            // Another useful asset that can be loaded is data, like JSON files, CSVs, TSVs, and XML. Support for JSON is actually built-in, similar to NodeJS, meaning import Data from './data.json' will work by default. To import CSVs, TSVs, and XML you could use the csv-loader and xml-loader. Let's handle loading all three:
            // npm install --save-dev csv-loader xml-loader
            // but we saw above it our last in concpt section
        ]
    }



};