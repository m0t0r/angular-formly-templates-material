import _ from 'lodash';

describe(`mdInputContainerFlexManipulator`, () => {
  beforeEach(window.module('formlyMaterial'));

  let manipulator;
  beforeEach(inject((formlyConfig) => {
    manipulator = _.find(formlyConfig.templateManipulators.postWrapper, {name: 'mdInputContainerFlex'});
  }));

  it(`should be a function`, () => {
    expect(manipulator).to.be.a('function');
  });

});
