const path = require('path');
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

module.exports = assign(require(path.resolve('./webpack.config.base')), getConfig(process.env.NODE_ENV));
