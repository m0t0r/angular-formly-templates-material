export default addMdLabelWrapper;

// @ngInject
function addMdLabelWrapper(formlyConfigProvider, formlyMaterialApiCheck) {
  const c = formlyMaterialApiCheck;
  formlyConfigProvider.setWrapper({
    name: 'mdLabel',
    template: require('./mdLabel.html'),
    apiCheck: {
      templateOptions: c.shape({
        label: c.string,
        required: c.bool.optional
      })
    },
    apiCheckInstance: c
  });
}
