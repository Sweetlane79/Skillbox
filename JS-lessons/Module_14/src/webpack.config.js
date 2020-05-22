const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'final_build'),
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'build.css'
    })
  ]
};
