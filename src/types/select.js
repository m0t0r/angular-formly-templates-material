export default addSelectType;
// @ngInject
function addSelectType(formlyConfigProvider, formlyMaterialApiCheck) {
  const c = formlyMaterialApiCheck;
  formlyConfigProvider.setType({
    name: 'select',
    template: require('./select.html'),
    wrapper: ['materialLabel', 'bootstrapHasError'],
    apiCheck: {
      templateOptions: c.shape({
        options: c.arrayOf(c.object),
        labelProp: c.string.optional,
        valueProp: c.string.optional,
        groupProp: c.string.optional
      })
    },
    apiCheckInstance: c
  });
}
