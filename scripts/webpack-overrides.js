var _ = require('lodash');
module.exports = getConfig;

function getConfig(defaultConfig) {
  return _.merge(defaultConfig, {
    output: {
      library: 'ngFormlyTemplatesMaterial',
      libraryTarget: 'umd'
    },
    externals: {
      angular: 'angular',
      'angular-formly': {
        root: 'ngFormly',
        amd: 'angular-formly',
        commonjs: 'angular-formly',
        commonjs2: 'angular-formly'
      },
      'api-check': {
        root: 'apiCheck',
        amd: 'api-check',
        commonjs: 'api-check',
        commonjs2: 'api-check'
      }
    }
  });
}
