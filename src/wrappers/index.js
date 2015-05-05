export default ngModule => {
  ngModule.config(addWrappers);

  function addWrappers(formlyConfigProvider, formlyMaterialApiCheck) {
    const c = formlyMaterialApiCheck;
    formlyConfigProvider.setWrapper([
      {
        name: 'materialLabel',
        template: require('./label.html'),
        apiCheck: {
          templateOptions: c.shape({
            label: c.string,
            required: c.bool.optional
          })
        },
        apiCheckInstance: c
      },
      {name: 'bootstrapHasError', template: require('./has-error.html')},
      {
        name: 'mdInputContainer',
        template: `
          <md-input-container><formly-transclude></formly-transclude></md-input-container>
        `
      }
    ]);
  }
};
