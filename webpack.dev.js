/**
 * Webpack config for development
 */
module.exports = require('./webpack.make')({
//APB
  //    BUILD: true,
    BUILD: false,
    TEST: false,
    DEV: true
});
