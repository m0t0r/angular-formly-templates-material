export default addTextareaType;

// @ngInject
function addTextareaType(formlyConfigProvider, formlyMaterialApiCheck) {
  const c = formlyMaterialApiCheck;
  formlyConfigProvider.setType({
    name: 'textarea',
    template: '<textarea class="form-control" ng-model="model[options.key]"></textarea>',
    wrapper: ['materialLabel', 'bootstrapHasError'],
    defaultOptions: {
      ngModelAttrs: {
        rows: {attribute: 'rows'},
        cols: {attribute: 'cols'}
      }
    },
    apiCheck: {
      templateOptions: c.shape({
        rows: c.number.optional,
        cols: c.number.optional
      })
    },
    apiCheckInstance: c
  });
}
