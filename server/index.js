'use strict';

// Set default node environment to development
// APB
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//var env = process.env.NODE_ENV = process.env.NODE_ENV || 'production';

//if(env === 'development' || env === 'test') {
  // Register the Babel require hook
  require('babel-register');
//}

// Export the application
exports = module.exports = require('./app');
