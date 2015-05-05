export default ngModule => {
  ngModule.run(addAddonsManipulator);

  function addAddonsManipulator(formlyConfig, formlyMaterialApiCheck) {
    var addonTemplate = require('./addons.html');
    const addonChecker = formlyMaterialApiCheck.shape({
      class: formlyMaterialApiCheck.string.optional,
      text: formlyMaterialApiCheck.string.optional
    }).strict.optional;
    const api = formlyMaterialApiCheck.shape({
      templateOptions: formlyMaterialApiCheck.shape({
        addonLeft: addonChecker,
        addonRight: addonChecker
      })
    });
    formlyConfig.templateManipulators.preWrapper.push(function(template, options) {
      if (options.type !== 'input' || (!options.templateOptions.addonLeft && !options.templateOptions.addonRight)) {
        return template;
      }
      formlyMaterialApiCheck.warn([api], [options]);
      return addonTemplate.replace('<formly-transclude></formly-transclude>', template);
    });
  }
};
