const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const pkg = require(path.resolve('./package.json'));

module.exports = {
  devtool: 'source-map',
  entry: {
    [pkg.name]: [
      './src/index'
    ],
    vendor: [
      'es6-promise',
      'whatwg-fetch',
      'lodash',
      'lodash.debounce',
      'react',
      'react-dom',
      'react-hot-loader',
      'react-addons-shallow-compare',
      'react-tap-event-plugin',
      'react-virtualized',
      'redux',
      'react-redux',
      'material-ui'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist/')
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        include: [path.join(__dirname, 'src')],
        use: [
          'react-hot/webpack',
          'babel'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style',
          {
            loader: 'css',
            options: { importLoaders: 1 }
          },
          'postcss'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'dist', 'index.html'),
      inject: 'body',
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          require('postcss-nested'),
          require('postcss-cssnext')({
            browsers: ['ie >= 9', 'last 2 versions']
          })
        ]
      }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': { 
         NODE_ENV: JSON.stringify(process.env.NODE_ENV) 
       }
    })
  ]
};
