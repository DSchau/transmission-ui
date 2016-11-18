const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const assign = require('object-assign');

module.exports = function(baseConfig, pkg) {
  const baseEntry = baseConfig.entry[pkg.name];
  const config = {
    output: {
      filename: '[name].[hash].js',
      chunkFilename: '[chunkhash].[id].chunk.js'
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: [
              'css-loader?modules&sourceMap&importLoaders=1',
              'postcss-loader'
            ]
          })
        }
      ]
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new ExtractTextPlugin({
        allChunks: true,
        filename: 'style-[contenthash].css'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        mangle: true
      })
    ]
  };

  return assign(baseConfig, {
    output: assign(baseConfig.output, config.output || {}),
    module: assign(baseConfig.module, {
      rules: baseConfig.module.rules
        .map((rule) => {
          return config.module.loaders
            .find((prodRule) => prodRule.test.toString() === rule.test.toString())|| rule;
        })
    }),
    plugins: baseConfig.plugins.concat(config.plugins || [])
  });
};
