const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: false,
    port: 1234,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
};


// module.exports = {
//   mode: 'development',
//   entry: './src/main.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.join(__dirname, 'public'),
//   },
//   devtool: 'source-map',
//   devServer: {
//     contentBase: path.join(__dirname, 'public'),
//     watchContentBase: true,
//   },
//   plugins: [
//     new MomentLocalesPlugin({
//       localesToKeep: ['es-us'],
//     })
//   ]
// };
