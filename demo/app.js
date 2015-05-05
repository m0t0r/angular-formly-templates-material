(function() {
  'use strict';
  var app = angular.module('app', ['formly', 'formlyMaterial']);


  app.controller('MainCtrl', function MainCtrl() {
    var vm = this;

    vm.fields = [
      {
        type: 'input',
        key: 'firstName',
        templateOptions: {
          label: 'First Name',
          placeholder: 'John Doe',
          required: true
        }
      }
    ];
  });

})();