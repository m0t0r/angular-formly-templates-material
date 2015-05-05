export default ngModule => {
  ngModule.config(addInputType);

  function addInputType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'input',
      template: '<input ng-model="model[options.key]">',
      wrapper: ['materialLabel', 'mdInputContainer'],
      defaultOptions: {
        ngModelAttrs: {
          mdMaxlength: {
            bound: 'md-maxlength'
          }
        }
      }
    });
  }
};
