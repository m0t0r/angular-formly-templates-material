export default addMdInputContainerWrapper;

// @ngInject
function addMdInputContainerWrapper(formlyConfigProvider) {
  formlyConfigProvider.setWrapper({
    name: 'mdInputContainer',
    template: `<md-input-container><formly-transclude></formly-transclude></md-input-container>`
  });
}
