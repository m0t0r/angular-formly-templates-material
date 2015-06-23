export default addCheckboxType;

// @ngInject
function addCheckboxType(formlyConfigProvider, formlyMaterialApiCheck) {
  const c = formlyMaterialApiCheck;
  formlyConfigProvider.setType({
    name: 'checkbox',
    template: require('./checkbox.html'),
    wrapper: ['bootstrapHasError'],
    apiCheck: {
      templateOptions: c.shape({
        label: c.string
      })
    },
    apiCheckInstance: c
  });
}
