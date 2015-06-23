import angular from './angular-fix';
import formly from 'angular-formly';
import ngMaterial from 'angular-material';

// manipulators
import mdInputContainerFlexManipulator from './run/mdInputContainerFlexManipulator';

// types
import checkbox from './types/checkbox';
import input from './types/input';
import multiCheckbox from './types/multiCheckbox';
import radio from './types/radio';
import select from './types/select';
import textarea from './types/textarea';

// wrappers
import mdLabel from './wrappers/mdLabel';
import mdInputContainer from './wrappers/mdInputContainer';

const ngModuleName = 'formlyMaterial';
const ngModule = angular.module(ngModuleName, [formly, ngMaterial]);
ngModule.constant(
  'formlyMaterialApiCheck',
  require('api-check')({
    output: {
      prefix: 'angular-formly-material'
    }
  })
);
ngModule.constant('formlyMaterialVersion', VERSION);

export default ngModuleName;

const configFns = [
  checkbox, input, multiCheckbox, radio,
  select, textarea, mdLabel, mdInputContainer
];

angular.forEach(configFns, configFn => angular.config(configFn));

const runFns = [
  mdInputContainerFlexManipulator
];

angular.forEach(runFns, runFn => angular.run(runFn));
