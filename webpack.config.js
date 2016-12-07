const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const assign = require('webpack-config-assign');

const pkg = require(path.resolve('./package.json'));

function getConfig(env) {
  let config;
  try {
    return require(path.resolve(`./webpack.config.${env}`));
  } catch (e) {
    return {};
  }
}

module.exports = assign({
  devtool: 'source-map',
  entry: {
    [pkg.name]: [
      './src/index'
    ],
    init: [
      './src/init'
    ],
    vendor: Object.keys(pkg.dependencies)
      .filter((dep) => {
        return ['normalize.css'].indexOf(dep) === -1;
      })
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist/')
  },
  module: {
    loaders: [
      {
        test: /\.js(x)?$/,
        include: [path.join(__dirname, 'src')],
        use: [
          'react-hot-loader/webpack',
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          'postcss-loader'
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
}, getConfig(process.env.NODE_ENV));
