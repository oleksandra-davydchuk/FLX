const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },

  module: {
    rules: [{
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader", 
            "sass-loader"
        ]
    }
  ]
},
  
  devServer: {
    contentBase: './'
  },
   plugins: [
    new CopyPlugin([
        { from: 'src/index.html', to: 'index.html' },
        { from: 'src/img', to: 'img' },
    ]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
]
};