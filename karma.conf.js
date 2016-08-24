// Karma configuration
// Generated on Wed Aug 24 2016 08:58:51 GMT+0200 (CEST)
var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};
module.exports = function(config) {
  config.set({

      browsers: ['PhantomJS'],
      frameworks: ['jasmine'],
      // this is the entry file for all our tests.
      files: ['test/runner.js'],
      // we will pass the entry file to webpack for bundling.
      preprocessors: {
          'test/runner.js': ['webpack']
      },
      // use the webpack config
      webpack: webpackConfig,
      // avoid walls of useless text
      webpackMiddleware: {
          noInfo: false
      },
      singleRun: true
  })
}
