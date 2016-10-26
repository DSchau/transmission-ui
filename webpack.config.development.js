const path = require('path');
const assign = require('object-assign');

const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = function(baseConfig, pkg) {
  const config = {
    devtool: 'eval',
    entry: {
      [pkg.name]: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
      ].concat(baseConfig.entry[pkg.name])
    },
    plugins: [
      new DashboardPlugin()
    ]
  };

  return assign(baseConfig, {
    devServer: require(path.resolve('./webpack-dev-server.config')),
    devtool: config.devtool,
    entry: assign(baseConfig.entry, config.entry),
    plugins: baseConfig.plugins.concat(config.plugins || [])
  });
};
