const path = require('path');
const assign = require('object-assign');

const DashboardPlugin = require('webpack-dashboard/plugin');

const pkg = require(path.resolve('./package.json'));

module.exports = function(baseConfig) {
  return assign({
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
  }, {
    devServer: require(path.resolve('./webpack-dev-server.config'))
  });
};
