const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  mode: "production",
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'] //all the dependencies for babel-loader must be updated to @latest
      },
      {
        test: /\.css$/,
        //exclude: /node_modules/,  
        use: ['style-loader', 'css-loader'] //make sure the order of these loaders are maintained
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
