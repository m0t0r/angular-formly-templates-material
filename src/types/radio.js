export default addRadioType;

// @ngInject
function addRadioType(formlyConfigProvider, formlyMaterialApiCheck) {
  const c = formlyMaterialApiCheck;
  formlyConfigProvider.setType({
    name: 'radio',
    template: require('./radio.html'),
    wrapper: ['materialLabel', 'bootstrapHasError'],
    defaultOptions: {
      noFormControl: false
    },
    apiCheck: {
      templateOptions: c.shape({
        options: c.arrayOf(c.object),
        labelProp: c.string.optional,
        valueProp: c.string.optional
      })
    },
    apiCheckInstance: c
  });
}
