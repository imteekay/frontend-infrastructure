const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js',
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  devServer: {
    contentBase: 'dist',
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].html',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name]-[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-proposal-pipeline-operator',
                { proposal: 'minimal' },
              ],
            ],
          },
        },
      },
    ],
  },
};
