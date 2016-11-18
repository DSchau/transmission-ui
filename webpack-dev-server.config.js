const path = require('path');

module.exports = {
  clientLogLevel: 'warning',
  proxy: {
    '/transmission/rpc': {
      target: 'http://localhost:9000'
    }
  }
};
