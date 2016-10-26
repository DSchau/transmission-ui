const path = require('path');

module.exports = {
  proxy: {
    '/transmission/rpc': {
      target: 'http://localhost:9000'
    }
  }
};
