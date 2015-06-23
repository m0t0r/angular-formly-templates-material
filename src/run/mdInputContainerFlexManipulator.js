export default addMdInputContainerFlexManipulator;

// @ngInject
function addMdInputContainerFlexManipulator(formlyConfig) {
  formlyConfig.templateManipulators.postWrapper.push(function mdInputContainerFlex(template, options, scope) {
    if (angular.isDefined(options.templateOptions.flex)) {
      const el = angular.element(`<div>${template}</div>`);
      const mdInputContainer = el[0].querySelector('md-input-container');
      if (mdInputContainer) {
        mdInputContainer.setAttribute('flex', options.templateOptions.flex);
        return el;
      } else {
        return template;
      }
    } else {
      return template;
    }
  });
}
