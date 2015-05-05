const ngModuleName = 'formlyMaterial';
const angular = require('./angular-fix');
const ngModule = angular.module(ngModuleName, [require('angular-formly')]);
ngModule.constant(
  'formlyMaterialApiCheck',
  require('api-check')({
    output: {
      prefix: 'angular-formly-material'
    }
  })
);
ngModule.constant('formlyMaterialVersion', VERSION);

require('./wrappers')(ngModule);
require('./types')(ngModule);
require('./run')(ngModule);

export default ngModuleName;
