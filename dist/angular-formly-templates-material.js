// angular-formly-templates-material version 1.0.0-beta.0 built with ♥ by Kent C. Dodds <kent@doddsfamily.us> (ó ì_í)=óò=(ì_í ò)

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular-formly"), require("api-check"), require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular-formly", "api-check", "angular"], factory);
	else if(typeof exports === 'object')
		exports["ngFormlyTemplatesMaterial"] = factory(require("angular-formly"), require("api-check"), require("angular"));
	else
		root["ngFormlyTemplatesMaterial"] = factory(root["ngFormly"], root["apiCheck"], root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var ngModuleName = 'formlyMaterial';
	var angular = __webpack_require__(3);
	var ngModule = angular.module(ngModuleName, [__webpack_require__(1)]);
	ngModule.constant('formlyMaterialApiCheck', __webpack_require__(2)({
	  output: {
	    prefix: 'angular-formly-material'
	  }
	}));
	ngModule.constant('formlyMaterialVersion', ("1.0.0-beta.0"));
	
	__webpack_require__(4)(ngModule);
	__webpack_require__(5)(ngModule);
	__webpack_require__(6)(ngModule);
	
	exports['default'] = ngModuleName;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// some versions of angular don't export the angular module properly,
	// so we get it from window in this case.
	'use strict';
	
	var angular = __webpack_require__(7);
	if (!angular.version) {
	  angular = window.angular;
	}
	module.exports = angular;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  ngModule.config(addWrappers);
	
	  function addWrappers(formlyConfigProvider, formlyMaterialApiCheck) {
	    var c = formlyMaterialApiCheck;
	    formlyConfigProvider.setWrapper([{
	      name: 'bootstrapLabel',
	      template: __webpack_require__(16),
	      apiCheck: {
	        templateOptions: c.shape({
	          label: c.string,
	          required: c.bool.optional
	        })
	      },
	      apiCheckInstance: c
	    }, { name: 'bootstrapHasError', template: __webpack_require__(17) }]);
	  }
	  addWrappers.$inject = ["formlyConfigProvider", "formlyMaterialApiCheck"];
	};

	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  __webpack_require__(8)(ngModule);
	  __webpack_require__(9)(ngModule);
	  __webpack_require__(10)(ngModule);
	  __webpack_require__(11)(ngModule);
	  __webpack_require__(12)(ngModule);
	  __webpack_require__(13)(ngModule);
	};
	
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _addons = __webpack_require__(14);
	
	var _addons2 = _interopRequireDefault(_addons);
	
	var _description = __webpack_require__(15);
	
	var _description2 = _interopRequireDefault(_description);
	
	exports['default'] = function (ngModule) {
	  _addons2['default'](ngModule);
	  _description2['default'](ngModule);
	};
	
	//export default ngModule => {
	//  require('./addons')(ngModule);
	//  require('./description')(ngModule);
	//};
	//
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  ngModule.config(addCheckboxType);
	
	  function addCheckboxType(formlyConfigProvider, formlyMaterialApiCheck) {
	    var c = formlyMaterialApiCheck;
	    formlyConfigProvider.setType({
	      name: 'checkbox',
	      template: __webpack_require__(18),
	      wrapper: ['bootstrapHasError'],
	      apiCheck: {
	        templateOptions: c.shape({
	          label: c.string
	        })
	      },
	      apiCheckInstance: c
	    });
	  }
	  addCheckboxType.$inject = ["formlyConfigProvider", "formlyMaterialApiCheck"];
	};

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  ngModule.config(addCheckboxType);
	
	  function addCheckboxType(formlyConfigProvider, formlyMaterialApiCheck) {
	    var c = formlyMaterialApiCheck;
	    formlyConfigProvider.setType({
	      name: 'multiCheckbox',
	      template: __webpack_require__(19),
	      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
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
	      apiCheckInstance: c,
	      controller: /* @ngInject */["$scope", function controller($scope) {
	        var to = $scope.to;
	        var opts = $scope.options;
	        $scope.multiCheckbox = {
	          checked: [],
	          change: setModel
	        };
	
	        // initialize the checkboxes check property
	        var modelValue = $scope.model[opts.key];
	        if (angular.isArray(modelValue)) {
	          (function () {
	            var valueProp = to.valueProp || 'value';
	            angular.forEach(to.options, function (v, index) {
	              $scope.multiCheckbox.checked[index] = modelValue.indexOf(v[valueProp]) !== -1;
	            });
	          })();
	        }
	
	        function setModel() {
	          $scope.model[opts.key] = [];
	          angular.forEach($scope.multiCheckbox.checked, function (checkbox, index) {
	            if (checkbox) {
	              $scope.model[opts.key].push(to.options[index][to.valueProp || 'value']);
	            }
	          });
	        }
	      }]
	    });
	  }
	  addCheckboxType.$inject = ["formlyConfigProvider", "formlyMaterialApiCheck"];
	};

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  ngModule.config(addInputType);
	
	  function addInputType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: 'input',
	      template: '<input class="form-control" ng-model="model[options.key]">',
	      wrapper: ['bootstrapLabel', 'bootstrapHasError']
	    });
	  }
	  addInputType.$inject = ["formlyConfigProvider"];
	};

	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  ngModule.config(addRadioType);
	
	  function addRadioType(formlyConfigProvider, formlyMaterialApiCheck) {
	    var c = formlyMaterialApiCheck;
	    formlyConfigProvider.setType({
	      name: 'radio',
	      template: __webpack_require__(20),
	      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
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
	  addRadioType.$inject = ["formlyConfigProvider", "formlyMaterialApiCheck"];
	};

	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  ngModule.config(addSelectType);
	
	  function addSelectType(formlyConfigProvider, formlyMaterialApiCheck) {
	    var c = formlyMaterialApiCheck;
	    formlyConfigProvider.setType({
	      name: 'select',
	      template: __webpack_require__(21),
	      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
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
	  addSelectType.$inject = ["formlyConfigProvider", "formlyMaterialApiCheck"];
	};

	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  ngModule.config(addTextareaType);
	
	  function addTextareaType(formlyConfigProvider, formlyMaterialApiCheck) {
	    var c = formlyMaterialApiCheck;
	    formlyConfigProvider.setType({
	      name: 'textarea',
	      template: '<textarea class="form-control" ng-model="model[options.key]"></textarea>',
	      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
	      defaultOptions: {
	        ngModelAttrs: {
	          rows: { attribute: 'rows' },
	          cols: { attribute: 'cols' }
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
	  addTextareaType.$inject = ["formlyConfigProvider", "formlyMaterialApiCheck"];
	};

	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  ngModule.run(addAddonsManipulator);
	
	  function addAddonsManipulator(formlyConfig, formlyMaterialApiCheck) {
	    var addonTemplate = __webpack_require__(22);
	    var addonChecker = formlyMaterialApiCheck.shape({
	      'class': formlyMaterialApiCheck.string.optional,
	      text: formlyMaterialApiCheck.string.optional
	    }).strict.optional;
	    var api = formlyMaterialApiCheck.shape({
	      templateOptions: formlyMaterialApiCheck.shape({
	        addonLeft: addonChecker,
	        addonRight: addonChecker
	      })
	    });
	    formlyConfig.templateManipulators.preWrapper.push(function (template, options) {
	      if (options.type !== 'input' || !options.templateOptions.addonLeft && !options.templateOptions.addonRight) {
	        return template;
	      }
	      formlyMaterialApiCheck.warn([api], [options]);
	      return addonTemplate.replace('<formly-transclude></formly-transclude>', template);
	    });
	  }
	  addAddonsManipulator.$inject = ["formlyConfig", "formlyMaterialApiCheck"];
	};

	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  ngModule.run(addDescriptionManipulator);
	
	  function addDescriptionManipulator(formlyConfig) {
	    formlyConfig.templateManipulators.preWrapper.push(function ariaDescribedBy(template, options, scope) {
	      if (angular.isDefined(options.templateOptions.description) && options.type !== 'radio' && options.type !== 'checkbox') {
	        var el = document.createElement('div');
	        el.appendChild(angular.element(template)[0]);
	        var modelEls = angular.element(el.querySelectorAll('[ng-model]'));
	        if (modelEls) {
	          el.appendChild(angular.element('<p id="' + scope.id + '_description"' + 'class="help-block"' + 'ng-if="to.description">' + '{{to.description}}' + '</p>')[0]);
	          modelEls.attr('aria-describedby', scope.id + '_description');
	          return el.innerHTML;
	        } else {
	          return template;
	        }
	      } else {
	        return template;
	      }
	    });
	  }
	  addDescriptionManipulator.$inject = ["formlyConfig"];
	};

	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div>\n  <label for=\"{{id}}\" class=\"control-label\">\n    {{to.label}}\n    {{to.required ? '*' : ''}}\n  </label>\n  <formly-transclude></formly-transclude>\n</div>\n"

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"form-group\" ng-class=\"{'has-error': showError}\">\n  <formly-transclude></formly-transclude>\n</div>\n"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"checkbox\">\n\t<label>\n\t\t<input type=\"checkbox\"\n           class=\"formly-field-checkbox\"\n\t\t       ng-model=\"model[options.key]\">\n\t\t{{to.label}}\n\t\t{{to.required ? '*' : ''}}\n\t</label>\n</div>\n"

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"radio-group\">\n  <div ng-repeat=\"(key, option) in to.options\" class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\"\n             id=\"{{id + '_'+ $index}}\"\n             ng-model=\"multiCheckbox.checked[$index]\"\n             ng-change=\"multiCheckbox.change()\">\n      {{option[to.labelProp || 'name']}}\n    </label>\n  </div>\n</div>\n"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"radio-group\">\n  <div ng-repeat=\"(key, option) in to.options\" class=\"radio\">\n    <label>\n      <input type=\"radio\"\n             id=\"{{id + '_'+ $index}}\"\n             tabindex=\"0\"\n             ng-value=\"option[to.valueProp || 'value']\"\n             ng-model=\"model[options.key]\">\n      {{option[to.labelProp || 'name']}}\n    </label>\n  </div>\n</div>\n"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<select class=\"form-control\"\n        ng-model=\"model[options.key]\"\n        ng-options=\"option[to.valueProp || 'value'] as option[to.labelProp || 'name'] group by option[to.groupProp || 'group'] for option in to.options\">\n</select>\n"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div ng-class=\"{'input-group': to.addonLeft || to.addonRight}\">\n    <div class=\"input-group-addon\" ng-if=\"to.addonLeft\">\n        <i class=\"{{to.addonLeft.class}}\" ng-if=\"to.addonLeft.class\"></i>\n        <span ng-if=\"to.addonLeft.text\">{{to.addonLeft.text}}</span>\n    </div>\n    <formly-transclude></formly-transclude>\n    <div class=\"input-group-addon\" ng-if=\"to.addonRight\">\n        <i class=\"{{to.addonRight.class}}\" ng-if=\"to.addonRight.class\"></i>\n        <span ng-if=\"to.addonRight.text\">{{to.addonRight.text}}</span>\n    </div>\n</div>"

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5OGMzMDRhNWM2ZDY0NDU1NGYyOSIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibmdGb3JtbHlcIixcImFtZFwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzMlwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzXCI6XCJhbmd1bGFyLWZvcm1seVwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiYXBpQ2hlY2tcIixcImFtZFwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qczJcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanNcIjpcImFwaS1jaGVja1wifSIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyLWZpeC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ydW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIiwid2VicGFjazovLy8uL3R5cGVzL2NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3R5cGVzL211bHRpQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3R5cGVzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3J1bi9hZGRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcnVuL2Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2xhYmVsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvaGFzLWVycm9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvY2hlY2tib3guaHRtbCIsIndlYnBhY2s6Ly8vLi90eXBlcy9tdWx0aUNoZWNrYm94Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcmFkaW8uaHRtbCIsIndlYnBhY2s6Ly8vLi90eXBlcy9zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly8vLi9ydW4vYWRkb25zLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RDQSxLQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztBQUN0QyxLQUFNLE9BQU8sR0FBRyxtQkFBTyxDQUFDLENBQWUsQ0FBQyxDQUFDO0FBQ3pDLEtBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsbUJBQU8sQ0FBQyxDQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNFLFNBQVEsQ0FBQyxRQUFRLENBQ2Ysd0JBQXdCLEVBQ3hCLG1CQUFPLENBQUMsQ0FBVyxDQUFDLENBQUM7QUFDbkIsU0FBTSxFQUFFO0FBQ04sV0FBTSxFQUFFLHlCQUF5QjtJQUNsQztFQUNGLENBQUMsQ0FDSCxDQUFDO0FBQ0YsU0FBUSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxnQkFBTyxDQUFDLENBQUM7O0FBRXBELG9CQUFPLENBQUMsQ0FBWSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEMsb0JBQU8sQ0FBQyxDQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM3QixvQkFBTyxDQUFDLENBQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztzQkFFWixZQUFZOzs7Ozs7O0FDakIzQixnRDs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7QUNFQSxLQUFJLE9BQU8sR0FBRyxtQkFBTyxDQUFDLENBQVMsQ0FBQyxDQUFDO0FBQ2pDLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQ3BCLFVBQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0VBQzFCO0FBQ0QsT0FBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLEM7Ozs7Ozs7Ozs7OztzQkNOVCxrQkFBUSxFQUFJO0FBQ3pCLFdBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBRTdCLFlBQVMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFO0FBQ2pFLFNBQU0sQ0FBQyxHQUFHLHNCQUFzQixDQUFDO0FBQ2pDLHlCQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUM5QjtBQUNFLFdBQUksRUFBRSxnQkFBZ0I7QUFDdEIsZUFBUSxFQUFFLG1CQUFPLENBQUMsRUFBYyxDQUFDO0FBQ2pDLGVBQVEsRUFBRTtBQUNSLHdCQUFlLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN2QixnQkFBSyxFQUFFLENBQUMsQ0FBQyxNQUFNO0FBQ2YsbUJBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVE7VUFDMUIsQ0FBQztRQUNIO0FBQ0QsdUJBQWdCLEVBQUUsQ0FBQztNQUNwQixFQUNELEVBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEVBQWtCLENBQUMsRUFBQyxDQUNuRSxDQUFDLENBQUM7SUFDSjtFQUNGOzs7Ozs7Ozs7Ozs7Ozs7c0JDcEJjLGtCQUFRLEVBQUk7QUFDekIsc0JBQU8sQ0FBQyxDQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoQyxzQkFBTyxDQUFDLENBQWlCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQyxzQkFBTyxDQUFDLEVBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdCLHNCQUFPLENBQUMsRUFBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDN0Isc0JBQU8sQ0FBQyxFQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5QixzQkFBTyxDQUFDLEVBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0VBQ2pDOzs7Ozs7Ozs7Ozs7Ozs7O21DQ1BrQixFQUFVOzs7O3dDQUNMLEVBQWU7Ozs7c0JBRXhCLGtCQUFRLEVBQUk7QUFDekIsdUJBQU8sUUFBUSxDQUFDLENBQUM7QUFDakIsNEJBQVksUUFBUSxDQUFDLENBQUM7RUFDdkI7Ozs7Ozs7Ozs7Ozs7QUNORCxnRDs7Ozs7Ozs7Ozs7O3NCQ0FlLGtCQUFRLEVBQUk7QUFDekIsV0FBUSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQzs7QUFFakMsWUFBUyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsc0JBQXNCLEVBQUU7QUFDckUsU0FBTSxDQUFDLEdBQUcsc0JBQXNCLENBQUM7QUFDakMseUJBQW9CLENBQUMsT0FBTyxDQUFDO0FBQzNCLFdBQUksRUFBRSxVQUFVO0FBQ2hCLGVBQVEsRUFBRSxtQkFBTyxDQUFDLEVBQWlCLENBQUM7QUFDcEMsY0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7QUFDOUIsZUFBUSxFQUFFO0FBQ1Isd0JBQWUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3ZCLGdCQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU07VUFDaEIsQ0FBQztRQUNIO0FBQ0QsdUJBQWdCLEVBQUUsQ0FBQztNQUNwQixDQUFDLENBQUM7SUFDSjtFQUNGOzs7Ozs7Ozs7Ozs7Ozs7c0JDakJjLGtCQUFRLEVBQUk7QUFDekIsV0FBUSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQzs7QUFFakMsWUFBUyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsc0JBQXNCLEVBQUU7QUFDckUsU0FBTSxDQUFDLEdBQUcsc0JBQXNCLENBQUM7QUFDakMseUJBQW9CLENBQUMsT0FBTyxDQUFDO0FBQzNCLFdBQUksRUFBRSxlQUFlO0FBQ3JCLGVBQVEsRUFBRSxtQkFBTyxDQUFDLEVBQXNCLENBQUM7QUFDekMsY0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUM7QUFDaEQscUJBQWMsRUFBRTtBQUNkLHNCQUFhLEVBQUUsS0FBSztRQUNyQjtBQUNELGVBQVEsRUFBRTtBQUNSLHdCQUFlLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN2QixrQkFBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUM1QixvQkFBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtBQUM1QixvQkFBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtVQUM3QixDQUFDO1FBQ0g7QUFDRCx1QkFBZ0IsRUFBRSxDQUFDO0FBQ25CLGlCQUFVLGlCQUFrQixvQkFBUyxNQUFNLEVBQUU7QUFDM0MsYUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztBQUNyQixhQUFNLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0FBQzVCLGVBQU0sQ0FBQyxhQUFhLEdBQUc7QUFDckIsa0JBQU8sRUFBRSxFQUFFO0FBQ1gsaUJBQU0sRUFBRSxRQUFRO1VBQ2pCLENBQUM7OztBQUdGLGFBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFDLGFBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTs7QUFDL0IsaUJBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDO0FBQzFDLG9CQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBUyxDQUFDLEVBQUUsS0FBSyxFQUFFO0FBQzdDLHFCQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2NBQy9FLENBQUMsQ0FBQzs7VUFDSjs7QUFFRCxrQkFBUyxRQUFRLEdBQUc7QUFDbEIsaUJBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUM1QixrQkFBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxVQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUs7QUFDakUsaUJBQUksUUFBUSxFQUFFO0FBQ1oscUJBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztjQUN6RTtZQUNGLENBQUMsQ0FBQztVQUNKO1FBQ0Y7TUFDRixDQUFDLENBQUM7SUFDSjtFQUNGOzs7Ozs7Ozs7Ozs7Ozs7c0JDaERjLGtCQUFRLEVBQUk7QUFDekIsV0FBUSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzs7QUFFOUIsWUFBUyxZQUFZLENBQUMsb0JBQW9CLEVBQUU7QUFDMUMseUJBQW9CLENBQUMsT0FBTyxDQUFDO0FBQzNCLFdBQUksRUFBRSxPQUFPO0FBQ2IsZUFBUSxFQUFFLDREQUE0RDtBQUN0RSxjQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQztNQUNqRCxDQUFDLENBQUM7SUFDSjtFQUNGOzs7Ozs7Ozs7Ozs7Ozs7c0JDVmMsa0JBQVEsRUFBSTtBQUN6QixXQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDOztBQUU5QixZQUFTLFlBQVksQ0FBQyxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRTtBQUNsRSxTQUFNLENBQUMsR0FBRyxzQkFBc0IsQ0FBQztBQUNqQyx5QkFBb0IsQ0FBQyxPQUFPLENBQUM7QUFDM0IsV0FBSSxFQUFFLE9BQU87QUFDYixlQUFRLEVBQUUsbUJBQU8sQ0FBQyxFQUFjLENBQUM7QUFDakMsY0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUM7QUFDaEQscUJBQWMsRUFBRTtBQUNkLHNCQUFhLEVBQUUsS0FBSztRQUNyQjtBQUNELGVBQVEsRUFBRTtBQUNSLHdCQUFlLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN2QixrQkFBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUM1QixvQkFBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtBQUM1QixvQkFBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtVQUM3QixDQUFDO1FBQ0g7QUFDRCx1QkFBZ0IsRUFBRSxDQUFDO01BQ3BCLENBQUMsQ0FBQztJQUNKO0VBQ0Y7Ozs7Ozs7Ozs7Ozs7OztzQkN0QmUsa0JBQVEsRUFBSTtBQUMxQixXQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDOztBQUUvQixZQUFTLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRTtBQUNuRSxTQUFNLENBQUMsR0FBRyxzQkFBc0IsQ0FBQztBQUNqQyx5QkFBb0IsQ0FBQyxPQUFPLENBQUM7QUFDM0IsV0FBSSxFQUFFLFFBQVE7QUFDZCxlQUFRLEVBQUUsbUJBQU8sQ0FBQyxFQUFlLENBQUM7QUFDbEMsY0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUM7QUFDaEQsZUFBUSxFQUFFO0FBQ1Isd0JBQWUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3ZCLGtCQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQzVCLG9CQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO0FBQzVCLG9CQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO0FBQzVCLG9CQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1VBQzdCLENBQUM7UUFDSDtBQUNELHVCQUFnQixFQUFFLENBQUM7TUFDcEIsQ0FBQyxDQUFDO0lBQ0o7RUFDRjs7Ozs7Ozs7Ozs7Ozs7O3NCQ3BCZSxrQkFBUSxFQUFJO0FBQzFCLFdBQVEsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7O0FBRWpDLFlBQVMsZUFBZSxDQUFDLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFO0FBQ3JFLFNBQU0sQ0FBQyxHQUFHLHNCQUFzQixDQUFDO0FBQ2pDLHlCQUFvQixDQUFDLE9BQU8sQ0FBQztBQUMzQixXQUFJLEVBQUUsVUFBVTtBQUNoQixlQUFRLEVBQUUsMEVBQTBFO0FBQ3BGLGNBQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDO0FBQ2hELHFCQUFjLEVBQUU7QUFDZCxxQkFBWSxFQUFFO0FBQ1osZUFBSSxFQUFFLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQztBQUN6QixlQUFJLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDO1VBQzFCO1FBQ0Y7QUFDRCxlQUFRLEVBQUU7QUFDUix3QkFBZSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDdkIsZUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtBQUN2QixlQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1VBQ3hCLENBQUM7UUFDSDtBQUNELHVCQUFnQixFQUFFLENBQUM7TUFDcEIsQ0FBQyxDQUFDO0lBQ0o7RUFDRjs7Ozs7Ozs7Ozs7Ozs7O3NCQ3hCYyxrQkFBUSxFQUFJO0FBQ3pCLFdBQVEsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7QUFFbkMsWUFBUyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsc0JBQXNCLEVBQUU7QUFDbEUsU0FBSSxhQUFhLEdBQUcsbUJBQU8sQ0FBQyxFQUFlLENBQUMsQ0FBQztBQUM3QyxTQUFNLFlBQVksR0FBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7QUFDaEQsZ0JBQU8sc0JBQXNCLENBQUMsTUFBTSxDQUFDLFFBQVE7QUFDN0MsV0FBSSxFQUFFLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxRQUFRO01BQzdDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQ25CLFNBQU0sR0FBRyxHQUFHLHNCQUFzQixDQUFDLEtBQUssQ0FBQztBQUN2QyxzQkFBZSxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQztBQUM1QyxrQkFBUyxFQUFFLFlBQVk7QUFDdkIsbUJBQVUsRUFBRSxZQUFZO1FBQ3pCLENBQUM7TUFDSCxDQUFDLENBQUM7QUFDSCxpQkFBWSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBUyxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBQzVFLFdBQUksT0FBTyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFNBQVMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsVUFBVyxFQUFFO0FBQzNHLGdCQUFPLFFBQVEsQ0FBQztRQUNqQjtBQUNELDZCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUM5QyxjQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMseUNBQXlDLEVBQUUsUUFBUSxDQUFDLENBQUM7TUFDbkYsQ0FBQyxDQUFDO0lBQ0o7RUFDRjs7Ozs7Ozs7Ozs7Ozs7O3NCQ3ZCYyxrQkFBUSxFQUFJO0FBQ3pCLFdBQVEsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQzs7QUFFeEMsWUFBUyx5QkFBeUIsQ0FBQyxZQUFZLEVBQUU7QUFDL0MsaUJBQVksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsZUFBZSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ25HLFdBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUN4RCxPQUFPLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtBQUN6RCxhQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLFdBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdDLGFBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDbEUsYUFBSSxRQUFRLEVBQUU7QUFDWixhQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQzVCLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBRSxHQUFHLGVBQWUsR0FDdEMsb0JBQW9CLEdBQ3BCLHlCQUF5QixHQUN6QixvQkFBb0IsR0FDcEIsTUFBTSxDQUNQLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNOLG1CQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUcsY0FBYyxDQUFDLENBQUM7QUFDN0Qsa0JBQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztVQUNyQixNQUFNO0FBQ0wsa0JBQU8sUUFBUSxDQUFDO1VBQ2pCO1FBQ0YsTUFBTTtBQUNMLGdCQUFPLFFBQVEsQ0FBQztRQUNqQjtNQUNGLENBQUMsQ0FBQztJQUNKO0VBQ0Y7Ozs7Ozs7OztBQzVCRCwyQ0FBMEMsSUFBSSxtQ0FBbUMsVUFBVSxRQUFRLHdCQUF3QixrRTs7Ozs7O0FDQTNILHlEQUF3RCx1QkFBdUIseUQ7Ozs7OztBQ0EvRSxxTEFBb0wsVUFBVSxRQUFRLHdCQUF3Qix1Qjs7Ozs7O0FDQTlOLHVMQUFzTCxrQkFBa0IseUhBQXlILGdDQUFnQyxtQzs7Ozs7O0FDQWpXLGlMQUFnTCxrQkFBa0IsbUpBQW1KLGdDQUFnQyxtQzs7Ozs7O0FDQXJYLHFROzs7Ozs7QUNBQSxvQ0FBbUMsNkNBQTZDLHdGQUF3RixvQkFBb0Isa0ZBQWtGLG1CQUFtQixzSkFBc0oscUJBQXFCLG9GQUFvRixvQkFBb0IsNEIiLCJmaWxlIjoiYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLW1hdGVyaWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYW5ndWxhci1mb3JtbHlcIiksIHJlcXVpcmUoXCJhcGktY2hlY2tcIiksIHJlcXVpcmUoXCJhbmd1bGFyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImFuZ3VsYXItZm9ybWx5XCIsIFwiYXBpLWNoZWNrXCIsIFwiYW5ndWxhclwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuZ0Zvcm1seVRlbXBsYXRlc01hdGVyaWFsXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYW5ndWxhci1mb3JtbHlcIiksIHJlcXVpcmUoXCJhcGktY2hlY2tcIiksIHJlcXVpcmUoXCJhbmd1bGFyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZ0Zvcm1seVRlbXBsYXRlc01hdGVyaWFsXCJdID0gZmFjdG9yeShyb290W1wibmdGb3JtbHlcIl0sIHJvb3RbXCJhcGlDaGVja1wiXSwgcm9vdFtcImFuZ3VsYXJcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgOThjMzA0YTVjNmQ2NDQ1NTRmMjlcbiAqKi8iLCJjb25zdCBuZ01vZHVsZU5hbWUgPSAnZm9ybWx5TWF0ZXJpYWwnO1xuY29uc3QgYW5ndWxhciA9IHJlcXVpcmUoJy4vYW5ndWxhci1maXgnKTtcbmNvbnN0IG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmdNb2R1bGVOYW1lLCBbcmVxdWlyZSgnYW5ndWxhci1mb3JtbHknKV0pO1xubmdNb2R1bGUuY29uc3RhbnQoXG4gICdmb3JtbHlNYXRlcmlhbEFwaUNoZWNrJyxcbiAgcmVxdWlyZSgnYXBpLWNoZWNrJykoe1xuICAgIG91dHB1dDoge1xuICAgICAgcHJlZml4OiAnYW5ndWxhci1mb3JtbHktbWF0ZXJpYWwnXG4gICAgfVxuICB9KVxuKTtcbm5nTW9kdWxlLmNvbnN0YW50KCdmb3JtbHlNYXRlcmlhbFZlcnNpb24nLCBWRVJTSU9OKTtcblxucmVxdWlyZSgnLi93cmFwcGVycycpKG5nTW9kdWxlKTtcbnJlcXVpcmUoJy4vdHlwZXMnKShuZ01vZHVsZSk7XG5yZXF1aXJlKCcuL3J1bicpKG5nTW9kdWxlKTtcblxuZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGVOYW1lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vaW5kZXguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwibmdGb3JtbHlcIixcImFtZFwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzMlwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzXCI6XCJhbmd1bGFyLWZvcm1seVwifVxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJhcGlDaGVja1wiLFwiYW1kXCI6XCJhcGktY2hlY2tcIixcImNvbW1vbmpzMlwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qc1wiOlwiYXBpLWNoZWNrXCJ9XG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc29tZSB2ZXJzaW9ucyBvZiBhbmd1bGFyIGRvbid0IGV4cG9ydCB0aGUgYW5ndWxhciBtb2R1bGUgcHJvcGVybHksXG4vLyBzbyB3ZSBnZXQgaXQgZnJvbSB3aW5kb3cgaW4gdGhpcyBjYXNlLlxudmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XG5pZiAoIWFuZ3VsYXIudmVyc2lvbikge1xuICBhbmd1bGFyID0gd2luZG93LmFuZ3VsYXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9hbmd1bGFyLWZpeC9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFdyYXBwZXJzKTtcblxuICBmdW5jdGlvbiBhZGRXcmFwcGVycyhmb3JtbHlDb25maWdQcm92aWRlciwgZm9ybWx5TWF0ZXJpYWxBcGlDaGVjaykge1xuICAgIGNvbnN0IGMgPSBmb3JtbHlNYXRlcmlhbEFwaUNoZWNrO1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFdyYXBwZXIoW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnYm9vdHN0cmFwTGFiZWwnLFxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9sYWJlbC5odG1sJyksXG4gICAgICAgIGFwaUNoZWNrOiB7XG4gICAgICAgICAgdGVtcGxhdGVPcHRpb25zOiBjLnNoYXBlKHtcbiAgICAgICAgICAgIGxhYmVsOiBjLnN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBjLmJvb2wub3B0aW9uYWxcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBhcGlDaGVja0luc3RhbmNlOiBjXG4gICAgICB9LFxuICAgICAge25hbWU6ICdib290c3RyYXBIYXNFcnJvcicsIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hhcy1lcnJvci5odG1sJyl9XG4gICAgXSk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi93cmFwcGVycy9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcbiAgcmVxdWlyZSgnLi9jaGVja2JveCcpKG5nTW9kdWxlKTtcbiAgcmVxdWlyZSgnLi9tdWx0aUNoZWNrYm94JykobmdNb2R1bGUpO1xuICByZXF1aXJlKCcuL2lucHV0JykobmdNb2R1bGUpO1xuICByZXF1aXJlKCcuL3JhZGlvJykobmdNb2R1bGUpO1xuICByZXF1aXJlKCcuL3NlbGVjdCcpKG5nTW9kdWxlKTtcbiAgcmVxdWlyZSgnLi90ZXh0YXJlYScpKG5nTW9kdWxlKTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy9pbmRleC5qc1xuICoqLyIsImltcG9ydCBhZGRvbnMgZnJvbSAnLi9hZGRvbnMnO1xuaW1wb3J0IGRlc2NyaXB0aW9uIGZyb20gJy4vZGVzY3JpcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XG4gIGFkZG9ucyhuZ01vZHVsZSk7XG4gIGRlc2NyaXB0aW9uKG5nTW9kdWxlKTtcbn07XG5cbi8vZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xuLy8gIHJlcXVpcmUoJy4vYWRkb25zJykobmdNb2R1bGUpO1xuLy8gIHJlcXVpcmUoJy4vZGVzY3JpcHRpb24nKShuZ01vZHVsZSk7XG4vL307XG4vL1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vcnVuL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYW5ndWxhclwiXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xuICBuZ01vZHVsZS5jb25maWcoYWRkQ2hlY2tib3hUeXBlKTtcblxuICBmdW5jdGlvbiBhZGRDaGVja2JveFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIsIGZvcm1seU1hdGVyaWFsQXBpQ2hlY2spIHtcbiAgICBjb25zdCBjID0gZm9ybWx5TWF0ZXJpYWxBcGlDaGVjaztcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcbiAgICAgIG5hbWU6ICdjaGVja2JveCcsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jaGVja2JveC5odG1sJyksXG4gICAgICB3cmFwcGVyOiBbJ2Jvb3RzdHJhcEhhc0Vycm9yJ10sXG4gICAgICBhcGlDaGVjazoge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGMuc2hhcGUoe1xuICAgICAgICAgIGxhYmVsOiBjLnN0cmluZ1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGFwaUNoZWNrSW5zdGFuY2U6IGNcbiAgICB9KTtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL2NoZWNrYm94LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xuICBuZ01vZHVsZS5jb25maWcoYWRkQ2hlY2tib3hUeXBlKTtcblxuICBmdW5jdGlvbiBhZGRDaGVja2JveFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIsIGZvcm1seU1hdGVyaWFsQXBpQ2hlY2spIHtcbiAgICBjb25zdCBjID0gZm9ybWx5TWF0ZXJpYWxBcGlDaGVjaztcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcbiAgICAgIG5hbWU6ICdtdWx0aUNoZWNrYm94JyxcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL211bHRpQ2hlY2tib3guaHRtbCcpLFxuICAgICAgd3JhcHBlcjogWydib290c3RyYXBMYWJlbCcsICdib290c3RyYXBIYXNFcnJvciddLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgbm9Gb3JtQ29udHJvbDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBhcGlDaGVjazoge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGMuc2hhcGUoe1xuICAgICAgICAgIG9wdGlvbnM6IGMuYXJyYXlPZihjLm9iamVjdCksXG4gICAgICAgICAgbGFiZWxQcm9wOiBjLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICB2YWx1ZVByb3A6IGMuc3RyaW5nLm9wdGlvbmFsXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2tJbnN0YW5jZTogYyxcbiAgICAgIGNvbnRyb2xsZXI6IC8qIEBuZ0luamVjdCAqLyBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgICAgY29uc3QgdG8gPSAkc2NvcGUudG87XG4gICAgICAgIGNvbnN0IG9wdHMgPSAkc2NvcGUub3B0aW9ucztcbiAgICAgICAgJHNjb3BlLm11bHRpQ2hlY2tib3ggPSB7XG4gICAgICAgICAgY2hlY2tlZDogW10sXG4gICAgICAgICAgY2hhbmdlOiBzZXRNb2RlbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGluaXRpYWxpemUgdGhlIGNoZWNrYm94ZXMgY2hlY2sgcHJvcGVydHlcbiAgICAgICAgY29uc3QgbW9kZWxWYWx1ZSA9ICRzY29wZS5tb2RlbFtvcHRzLmtleV07XG4gICAgICAgIGlmIChhbmd1bGFyLmlzQXJyYXkobW9kZWxWYWx1ZSkpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZVByb3AgPSB0by52YWx1ZVByb3AgfHwgJ3ZhbHVlJztcbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2godG8ub3B0aW9ucywgZnVuY3Rpb24odiwgaW5kZXgpIHtcbiAgICAgICAgICAgICRzY29wZS5tdWx0aUNoZWNrYm94LmNoZWNrZWRbaW5kZXhdID0gbW9kZWxWYWx1ZS5pbmRleE9mKHZbdmFsdWVQcm9wXSkgIT09IC0xO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0TW9kZWwoKSB7XG4gICAgICAgICAgJHNjb3BlLm1vZGVsW29wdHMua2V5XSA9IFtdO1xuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUubXVsdGlDaGVja2JveC5jaGVja2VkLCAoY2hlY2tib3gsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3gpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLm1vZGVsW29wdHMua2V5XS5wdXNoKHRvLm9wdGlvbnNbaW5kZXhdW3RvLnZhbHVlUHJvcCB8fCAndmFsdWUnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL211bHRpQ2hlY2tib3guanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRJbnB1dFR5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZElucHV0VHlwZShmb3JtbHlDb25maWdQcm92aWRlcikge1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogJ2lucHV0JyxcbiAgICAgIHRlbXBsYXRlOiAnPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmctbW9kZWw9XCJtb2RlbFtvcHRpb25zLmtleV1cIj4nLFxuICAgICAgd3JhcHBlcjogWydib290c3RyYXBMYWJlbCcsICdib290c3RyYXBIYXNFcnJvciddXG4gICAgfSk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy9pbnB1dC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IG5nTW9kdWxlID0+IHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFJhZGlvVHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkUmFkaW9UeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyLCBmb3JtbHlNYXRlcmlhbEFwaUNoZWNrKSB7XG4gICAgY29uc3QgYyA9IGZvcm1seU1hdGVyaWFsQXBpQ2hlY2s7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiAncmFkaW8nLFxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcmFkaW8uaHRtbCcpLFxuICAgICAgd3JhcHBlcjogWydib290c3RyYXBMYWJlbCcsICdib290c3RyYXBIYXNFcnJvciddLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgbm9Gb3JtQ29udHJvbDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBhcGlDaGVjazoge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGMuc2hhcGUoe1xuICAgICAgICAgIG9wdGlvbnM6IGMuYXJyYXlPZihjLm9iamVjdCksXG4gICAgICAgICAgbGFiZWxQcm9wOiBjLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICB2YWx1ZVByb3A6IGMuc3RyaW5nLm9wdGlvbmFsXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2tJbnN0YW5jZTogY1xuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvcmFkaW8uanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCAgbmdNb2R1bGUgPT4ge1xuICBuZ01vZHVsZS5jb25maWcoYWRkU2VsZWN0VHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkU2VsZWN0VHlwZShmb3JtbHlDb25maWdQcm92aWRlciwgZm9ybWx5TWF0ZXJpYWxBcGlDaGVjaykge1xuICAgIGNvbnN0IGMgPSBmb3JtbHlNYXRlcmlhbEFwaUNoZWNrO1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zZWxlY3QuaHRtbCcpLFxuICAgICAgd3JhcHBlcjogWydib290c3RyYXBMYWJlbCcsICdib290c3RyYXBIYXNFcnJvciddLFxuICAgICAgYXBpQ2hlY2s6IHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiBjLnNoYXBlKHtcbiAgICAgICAgICBvcHRpb25zOiBjLmFycmF5T2YoYy5vYmplY3QpLFxuICAgICAgICAgIGxhYmVsUHJvcDogYy5zdHJpbmcub3B0aW9uYWwsXG4gICAgICAgICAgdmFsdWVQcm9wOiBjLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICBncm91cFByb3A6IGMuc3RyaW5nLm9wdGlvbmFsXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2tJbnN0YW5jZTogY1xuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvc2VsZWN0LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgIG5nTW9kdWxlID0+IHtcbiAgbmdNb2R1bGUuY29uZmlnKGFkZFRleHRhcmVhVHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkVGV4dGFyZWFUeXBlKGZvcm1seUNvbmZpZ1Byb3ZpZGVyLCBmb3JtbHlNYXRlcmlhbEFwaUNoZWNrKSB7XG4gICAgY29uc3QgYyA9IGZvcm1seU1hdGVyaWFsQXBpQ2hlY2s7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0VHlwZSh7XG4gICAgICBuYW1lOiAndGV4dGFyZWEnLFxuICAgICAgdGVtcGxhdGU6ICc8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuZy1tb2RlbD1cIm1vZGVsW29wdGlvbnMua2V5XVwiPjwvdGV4dGFyZWE+JyxcbiAgICAgIHdyYXBwZXI6IFsnYm9vdHN0cmFwTGFiZWwnLCAnYm9vdHN0cmFwSGFzRXJyb3InXSxcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgIG5nTW9kZWxBdHRyczoge1xuICAgICAgICAgIHJvd3M6IHthdHRyaWJ1dGU6ICdyb3dzJ30sXG4gICAgICAgICAgY29sczoge2F0dHJpYnV0ZTogJ2NvbHMnfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2s6IHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiBjLnNoYXBlKHtcbiAgICAgICAgICByb3dzOiBjLm51bWJlci5vcHRpb25hbCxcbiAgICAgICAgICBjb2xzOiBjLm51bWJlci5vcHRpb25hbFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGFwaUNoZWNrSW5zdGFuY2U6IGNcbiAgICB9KTtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL3RleHRhcmVhLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xuICBuZ01vZHVsZS5ydW4oYWRkQWRkb25zTWFuaXB1bGF0b3IpO1xuXG4gIGZ1bmN0aW9uIGFkZEFkZG9uc01hbmlwdWxhdG9yKGZvcm1seUNvbmZpZywgZm9ybWx5TWF0ZXJpYWxBcGlDaGVjaykge1xuICAgIHZhciBhZGRvblRlbXBsYXRlID0gcmVxdWlyZSgnLi9hZGRvbnMuaHRtbCcpO1xuICAgIGNvbnN0IGFkZG9uQ2hlY2tlciA9IGZvcm1seU1hdGVyaWFsQXBpQ2hlY2suc2hhcGUoe1xuICAgICAgY2xhc3M6IGZvcm1seU1hdGVyaWFsQXBpQ2hlY2suc3RyaW5nLm9wdGlvbmFsLFxuICAgICAgdGV4dDogZm9ybWx5TWF0ZXJpYWxBcGlDaGVjay5zdHJpbmcub3B0aW9uYWxcbiAgICB9KS5zdHJpY3Qub3B0aW9uYWw7XG4gICAgY29uc3QgYXBpID0gZm9ybWx5TWF0ZXJpYWxBcGlDaGVjay5zaGFwZSh7XG4gICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGZvcm1seU1hdGVyaWFsQXBpQ2hlY2suc2hhcGUoe1xuICAgICAgICBhZGRvbkxlZnQ6IGFkZG9uQ2hlY2tlcixcbiAgICAgICAgYWRkb25SaWdodDogYWRkb25DaGVja2VyXG4gICAgICB9KVxuICAgIH0pO1xuICAgIGZvcm1seUNvbmZpZy50ZW1wbGF0ZU1hbmlwdWxhdG9ycy5wcmVXcmFwcGVyLnB1c2goZnVuY3Rpb24odGVtcGxhdGUsIG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLnR5cGUgIT09ICdpbnB1dCcgfHwgKCFvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5hZGRvbkxlZnQgJiYgIW9wdGlvbnMudGVtcGxhdGVPcHRpb25zLmFkZG9uUmlnaHQpKSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgIH1cbiAgICAgIGZvcm1seU1hdGVyaWFsQXBpQ2hlY2sud2FybihbYXBpXSwgW29wdGlvbnNdKTtcbiAgICAgIHJldHVybiBhZGRvblRlbXBsYXRlLnJlcGxhY2UoJzxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPicsIHRlbXBsYXRlKTtcbiAgICB9KTtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL3J1bi9hZGRvbnMuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XG4gIG5nTW9kdWxlLnJ1bihhZGREZXNjcmlwdGlvbk1hbmlwdWxhdG9yKTtcblxuICBmdW5jdGlvbiBhZGREZXNjcmlwdGlvbk1hbmlwdWxhdG9yKGZvcm1seUNvbmZpZykge1xuICAgIGZvcm1seUNvbmZpZy50ZW1wbGF0ZU1hbmlwdWxhdG9ycy5wcmVXcmFwcGVyLnB1c2goZnVuY3Rpb24gYXJpYURlc2NyaWJlZEJ5KHRlbXBsYXRlLCBvcHRpb25zLCBzY29wZSkge1xuICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKG9wdGlvbnMudGVtcGxhdGVPcHRpb25zLmRlc2NyaXB0aW9uKSAmJlxuICAgICAgICBvcHRpb25zLnR5cGUgIT09ICdyYWRpbycgJiYgb3B0aW9ucy50eXBlICE9PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChhbmd1bGFyLmVsZW1lbnQodGVtcGxhdGUpWzBdKTtcbiAgICAgICAgdmFyIG1vZGVsRWxzID0gYW5ndWxhci5lbGVtZW50KGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuZy1tb2RlbF0nKSk7XG4gICAgICAgIGlmIChtb2RlbEVscykge1xuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGFuZ3VsYXIuZWxlbWVudChcbiAgICAgICAgICAgICc8cCBpZD1cIicgKyBzY29wZS5pZCArICdfZGVzY3JpcHRpb25cIicgK1xuICAgICAgICAgICAgJ2NsYXNzPVwiaGVscC1ibG9ja1wiJyArXG4gICAgICAgICAgICAnbmctaWY9XCJ0by5kZXNjcmlwdGlvblwiPicgK1xuICAgICAgICAgICAgJ3t7dG8uZGVzY3JpcHRpb259fScgK1xuICAgICAgICAgICAgJzwvcD4nXG4gICAgICAgICAgKVswXSk7XG4gICAgICAgICAgbW9kZWxFbHMuYXR0cignYXJpYS1kZXNjcmliZWRieScsIHNjb3BlLmlkICsgJ19kZXNjcmlwdGlvbicpO1xuICAgICAgICAgIHJldHVybiBlbC5pbm5lckhUTUw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9ydW4vZGVzY3JpcHRpb24uanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXG4gIDxsYWJlbCBmb3I9XFxcInt7aWR9fVxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPlxcbiAgICB7e3RvLmxhYmVsfX1cXG4gICAge3t0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXG4gIDwvbGFiZWw+XFxuICA8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi93cmFwcGVycy9sYWJlbC5odG1sXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwieydoYXMtZXJyb3InOiBzaG93RXJyb3J9XFxcIj5cXG4gIDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3dyYXBwZXJzL2hhcy1lcnJvci5odG1sXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxuXFx0PGxhYmVsPlxcblxcdFxcdDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCJcXG4gICAgICAgICAgIGNsYXNzPVxcXCJmb3JtbHktZmllbGQtY2hlY2tib3hcXFwiXFxuXFx0XFx0ICAgICAgIG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiPlxcblxcdFxcdHt7dG8ubGFiZWx9fVxcblxcdFxcdHt7dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319XFxuXFx0PC9sYWJlbD5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi90eXBlcy9jaGVja2JveC5odG1sXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyYWRpby1ncm91cFxcXCI+XFxuICA8ZGl2IG5nLXJlcGVhdD1cXFwiKGtleSwgb3B0aW9uKSBpbiB0by5vcHRpb25zXFxcIiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcbiAgICA8bGFiZWw+XFxuICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIlxcbiAgICAgICAgICAgICBpZD1cXFwie3tpZCArICdfJysgJGluZGV4fX1cXFwiXFxuICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJtdWx0aUNoZWNrYm94LmNoZWNrZWRbJGluZGV4XVxcXCJcXG4gICAgICAgICAgICAgbmctY2hhbmdlPVxcXCJtdWx0aUNoZWNrYm94LmNoYW5nZSgpXFxcIj5cXG4gICAgICB7e29wdGlvblt0by5sYWJlbFByb3AgfHwgJ25hbWUnXX19XFxuICAgIDwvbGFiZWw+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi90eXBlcy9tdWx0aUNoZWNrYm94Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInJhZGlvLWdyb3VwXFxcIj5cXG4gIDxkaXYgbmctcmVwZWF0PVxcXCIoa2V5LCBvcHRpb24pIGluIHRvLm9wdGlvbnNcXFwiIGNsYXNzPVxcXCJyYWRpb1xcXCI+XFxuICAgIDxsYWJlbD5cXG4gICAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiXFxuICAgICAgICAgICAgIGlkPVxcXCJ7e2lkICsgJ18nKyAkaW5kZXh9fVxcXCJcXG4gICAgICAgICAgICAgdGFiaW5kZXg9XFxcIjBcXFwiXFxuICAgICAgICAgICAgIG5nLXZhbHVlPVxcXCJvcHRpb25bdG8udmFsdWVQcm9wIHx8ICd2YWx1ZSddXFxcIlxcbiAgICAgICAgICAgICBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIj5cXG4gICAgICB7e29wdGlvblt0by5sYWJlbFByb3AgfHwgJ25hbWUnXX19XFxuICAgIDwvbGFiZWw+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi90eXBlcy9yYWRpby5odG1sXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcbiAgICAgICAgbmctb3B0aW9ucz1cXFwib3B0aW9uW3RvLnZhbHVlUHJvcCB8fCAndmFsdWUnXSBhcyBvcHRpb25bdG8ubGFiZWxQcm9wIHx8ICduYW1lJ10gZ3JvdXAgYnkgb3B0aW9uW3RvLmdyb3VwUHJvcCB8fCAnZ3JvdXAnXSBmb3Igb3B0aW9uIGluIHRvLm9wdGlvbnNcXFwiPlxcbjwvc2VsZWN0PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3R5cGVzL3NlbGVjdC5odG1sXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IG5nLWNsYXNzPVxcXCJ7J2lucHV0LWdyb3VwJzogdG8uYWRkb25MZWZ0IHx8IHRvLmFkZG9uUmlnaHR9XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiIG5nLWlmPVxcXCJ0by5hZGRvbkxlZnRcXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcInt7dG8uYWRkb25MZWZ0LmNsYXNzfX1cXFwiIG5nLWlmPVxcXCJ0by5hZGRvbkxlZnQuY2xhc3NcXFwiPjwvaT5cXG4gICAgICAgIDxzcGFuIG5nLWlmPVxcXCJ0by5hZGRvbkxlZnQudGV4dFxcXCI+e3t0by5hZGRvbkxlZnQudGV4dH19PC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIiBuZy1pZj1cXFwidG8uYWRkb25SaWdodFxcXCI+XFxuICAgICAgICA8aSBjbGFzcz1cXFwie3t0by5hZGRvblJpZ2h0LmNsYXNzfX1cXFwiIG5nLWlmPVxcXCJ0by5hZGRvblJpZ2h0LmNsYXNzXFxcIj48L2k+XFxuICAgICAgICA8c3BhbiBuZy1pZj1cXFwidG8uYWRkb25SaWdodC50ZXh0XFxcIj57e3RvLmFkZG9uUmlnaHQudGV4dH19PC9zcGFuPlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9ydW4vYWRkb25zLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==