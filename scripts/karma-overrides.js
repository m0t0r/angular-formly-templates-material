var _ = require('lodash');
var here = require('kcd-common-tools/utils/here');
module.exports = getConfig;

function getConfig(defaultConfig) {
  defaultConfig.files = _.union([
    here('./node_modules/lodash/index.js'),
    here('./node_modules/api-check/dist/api-check.js'),
    here('./node_modules/angular/angular.js'),
    here('./node_modules/angular-mocks/angular-mocks.js')
  ], defaultConfig.files);
  const nonTestMockLoader = defaultConfig.webpack.module.loaders[2];
  nonTestMockLoader.test = /^((?!\.(test|mock)\.).)js$/i;
  return defaultConfig;
}
