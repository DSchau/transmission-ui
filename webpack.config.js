const path = require('path');

const pkg = require(path.resolve('./package.json'));

module.exports = function() {
  let configFn;
  try {
    configFn = require(path.resolve(`./webpack.config.${process.env.NODE_ENV}`));
  } catch (e) {
    configFn = (config) => config;
  }
  return configFn(require(path.resolve('./webpack.config.base')), pkg);
};
