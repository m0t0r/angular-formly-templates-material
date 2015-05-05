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
	var ngModule = angular.module(ngModuleName, [__webpack_require__(1), 'ngMaterial']);
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
	      name: 'materialLabel',
	      template: __webpack_require__(16),
	      apiCheck: {
	        templateOptions: c.shape({
	          label: c.string,
	          required: c.bool.optional
	        })
	      },
	      apiCheckInstance: c
	    }, { name: 'bootstrapHasError', template: __webpack_require__(17) }, {
	      name: 'mdInputContainer',
	      template: '\n          <md-input-container><formly-transclude></formly-transclude></md-input-container>\n        '
	    }]);
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
	
	var _mdInputContainerFlex = __webpack_require__(25);
	
	var _mdInputContainerFlex2 = _interopRequireDefault(_mdInputContainerFlex);
	
	exports['default'] = function (ngModule) {
	  _mdInputContainerFlex2['default'](ngModule);
	};
	
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
	      template: '<input ng-model="model[options.key]">',
	      wrapper: ['materialLabel', 'mdInputContainer'],
	      defaultOptions: {
	        ngModelAttrs: {
	          mdMaxlength: {
	            bound: 'md-maxlength'
	          }
	        }
	      }
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
	      wrapper: ['materialLabel', 'bootstrapHasError'],
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
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<label for=\"{{id}}\" class=\"control-label\">\n  {{to.label}}\n  {{to.required ? '*' : ''}}\n</label>\n<formly-transclude></formly-transclude>\n"

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
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (ngModule) {
	  ngModule.run(addMdInputContainerFlexManipulator);
	
	  function addMdInputContainerFlexManipulator(formlyConfig) {
	    formlyConfig.templateManipulators.postWrapper.push(function mdInputContainerFlex(template, options, scope) {
	      if (angular.isDefined(options.templateOptions.flex)) {
	        var el = angular.element('<div>' + template + '</div>');
	        var mdInputContainer = el[0].querySelector('md-input-container');
	        console.log(mdInputContainer);
	        if (mdInputContainer) {
	          mdInputContainer.setAttribute('flex', options.templateOptions.flex);
	          return el;
	        } else {
	          return template;
	        }
	      } else {
	        return template;
	      }
	    });
	  }
	  addMdInputContainerFlexManipulator.$inject = ["formlyConfig"];
	};

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlZjk0ZDVmMWFiNWE5YTlmZmVjYyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwibmdGb3JtbHlcIixcImFtZFwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzMlwiOlwiYW5ndWxhci1mb3JtbHlcIixcImNvbW1vbmpzXCI6XCJhbmd1bGFyLWZvcm1seVwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiYXBpQ2hlY2tcIixcImFtZFwiOlwiYXBpLWNoZWNrXCIsXCJjb21tb25qczJcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanNcIjpcImFwaS1jaGVja1wifSIsIndlYnBhY2s6Ly8vLi9hbmd1bGFyLWZpeC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ydW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIiwid2VicGFjazovLy8uL3R5cGVzL2NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3R5cGVzL211bHRpQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3R5cGVzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2xhYmVsLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvaGFzLWVycm9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvY2hlY2tib3guaHRtbCIsIndlYnBhY2s6Ly8vLi90eXBlcy9tdWx0aUNoZWNrYm94Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdHlwZXMvcmFkaW8uaHRtbCIsIndlYnBhY2s6Ly8vLi90eXBlcy9zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly8vLi9ydW4vbWRJbnB1dENvbnRhaW5lckZsZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RDQSxLQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztBQUN0QyxLQUFNLE9BQU8sR0FBRyxtQkFBTyxDQUFDLENBQWUsQ0FBQyxDQUFDO0FBQ3pDLEtBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsbUJBQU8sQ0FBQyxDQUFnQixDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUN6RixTQUFRLENBQUMsUUFBUSxDQUNmLHdCQUF3QixFQUN4QixtQkFBTyxDQUFDLENBQVcsQ0FBQyxDQUFDO0FBQ25CLFNBQU0sRUFBRTtBQUNOLFdBQU0sRUFBRSx5QkFBeUI7SUFDbEM7RUFDRixDQUFDLENBQ0gsQ0FBQztBQUNGLFNBQVEsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsZ0JBQU8sQ0FBQyxDQUFDOztBQUVwRCxvQkFBTyxDQUFDLENBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hDLG9CQUFPLENBQUMsQ0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDN0Isb0JBQU8sQ0FBQyxDQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7c0JBRVosWUFBWTs7Ozs7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c0JDQWUsa0JBQVEsRUFBSTtBQUN6QixXQUFRLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7O0FBRWpELFlBQVMsa0NBQWtDLENBQUMsWUFBWSxFQUFFO0FBQ3hELGlCQUFZLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ3pHLFdBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ25ELGFBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLFdBQVMsUUFBUSxZQUFTLENBQUM7QUFDckQsYUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDbkUsZ0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM5QixhQUFJLGdCQUFnQixFQUFFO0FBQ3BCLDJCQUFnQixDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwRSxrQkFBTyxFQUFFLENBQUM7VUFDWCxNQUFNO0FBQ0wsa0JBQU8sUUFBUSxDQUFDO1VBQ2pCO1FBQ0YsTUFBTTtBQUNMLGdCQUFPLFFBQVEsQ0FBQztRQUNqQjtNQUNGLENBQUMsQ0FBQztJQUNKO0VBQ0YiLCJmaWxlIjoiYW5ndWxhci1mb3JtbHktdGVtcGxhdGVzLW1hdGVyaWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYW5ndWxhci1mb3JtbHlcIiksIHJlcXVpcmUoXCJhcGktY2hlY2tcIiksIHJlcXVpcmUoXCJhbmd1bGFyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImFuZ3VsYXItZm9ybWx5XCIsIFwiYXBpLWNoZWNrXCIsIFwiYW5ndWxhclwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJuZ0Zvcm1seVRlbXBsYXRlc01hdGVyaWFsXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYW5ndWxhci1mb3JtbHlcIiksIHJlcXVpcmUoXCJhcGktY2hlY2tcIiksIHJlcXVpcmUoXCJhbmd1bGFyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZ0Zvcm1seVRlbXBsYXRlc01hdGVyaWFsXCJdID0gZmFjdG9yeShyb290W1wibmdGb3JtbHlcIl0sIHJvb3RbXCJhcGlDaGVja1wiXSwgcm9vdFtcImFuZ3VsYXJcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZWY5NGQ1ZjFhYjVhOWE5ZmZlY2NcbiAqKi8iLCJjb25zdCBuZ01vZHVsZU5hbWUgPSAnZm9ybWx5TWF0ZXJpYWwnO1xuY29uc3QgYW5ndWxhciA9IHJlcXVpcmUoJy4vYW5ndWxhci1maXgnKTtcbmNvbnN0IG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmdNb2R1bGVOYW1lLCBbcmVxdWlyZSgnYW5ndWxhci1mb3JtbHknKSwgJ25nTWF0ZXJpYWwnXSk7XG5uZ01vZHVsZS5jb25zdGFudChcbiAgJ2Zvcm1seU1hdGVyaWFsQXBpQ2hlY2snLFxuICByZXF1aXJlKCdhcGktY2hlY2snKSh7XG4gICAgb3V0cHV0OiB7XG4gICAgICBwcmVmaXg6ICdhbmd1bGFyLWZvcm1seS1tYXRlcmlhbCdcbiAgICB9XG4gIH0pXG4pO1xubmdNb2R1bGUuY29uc3RhbnQoJ2Zvcm1seU1hdGVyaWFsVmVyc2lvbicsIFZFUlNJT04pO1xuXG5yZXF1aXJlKCcuL3dyYXBwZXJzJykobmdNb2R1bGUpO1xucmVxdWlyZSgnLi90eXBlcycpKG5nTW9kdWxlKTtcbnJlcXVpcmUoJy4vcnVuJykobmdNb2R1bGUpO1xuXG5leHBvcnQgZGVmYXVsdCBuZ01vZHVsZU5hbWU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9pbmRleC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJuZ0Zvcm1seVwiLFwiYW1kXCI6XCJhbmd1bGFyLWZvcm1seVwiLFwiY29tbW9uanMyXCI6XCJhbmd1bGFyLWZvcm1seVwiLFwiY29tbW9uanNcIjpcImFuZ3VsYXItZm9ybWx5XCJ9XG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcImFwaUNoZWNrXCIsXCJhbWRcIjpcImFwaS1jaGVja1wiLFwiY29tbW9uanMyXCI6XCJhcGktY2hlY2tcIixcImNvbW1vbmpzXCI6XCJhcGktY2hlY2tcIn1cbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzb21lIHZlcnNpb25zIG9mIGFuZ3VsYXIgZG9uJ3QgZXhwb3J0IHRoZSBhbmd1bGFyIG1vZHVsZSBwcm9wZXJseSxcbi8vIHNvIHdlIGdldCBpdCBmcm9tIHdpbmRvdyBpbiB0aGlzIGNhc2UuXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcbmlmICghYW5ndWxhci52ZXJzaW9uKSB7XG4gIGFuZ3VsYXIgPSB3aW5kb3cuYW5ndWxhcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL2FuZ3VsYXItZml4L2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xuICBuZ01vZHVsZS5jb25maWcoYWRkV3JhcHBlcnMpO1xuXG4gIGZ1bmN0aW9uIGFkZFdyYXBwZXJzKGZvcm1seUNvbmZpZ1Byb3ZpZGVyLCBmb3JtbHlNYXRlcmlhbEFwaUNoZWNrKSB7XG4gICAgY29uc3QgYyA9IGZvcm1seU1hdGVyaWFsQXBpQ2hlY2s7XG4gICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0V3JhcHBlcihbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdtYXRlcmlhbExhYmVsJyxcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbGFiZWwuaHRtbCcpLFxuICAgICAgICBhcGlDaGVjazoge1xuICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczogYy5zaGFwZSh7XG4gICAgICAgICAgICBsYWJlbDogYy5zdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogYy5ib29sLm9wdGlvbmFsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgYXBpQ2hlY2tJbnN0YW5jZTogY1xuICAgICAgfSxcbiAgICAgIHtuYW1lOiAnYm9vdHN0cmFwSGFzRXJyb3InLCB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9oYXMtZXJyb3IuaHRtbCcpfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ21kSW5wdXRDb250YWluZXInLFxuICAgICAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+PGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+PC9tZC1pbnB1dC1jb250YWluZXI+XG4gICAgICAgIGBcbiAgICAgIH1cbiAgICBdKTtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL3dyYXBwZXJzL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xuICByZXF1aXJlKCcuL2NoZWNrYm94JykobmdNb2R1bGUpO1xuICByZXF1aXJlKCcuL211bHRpQ2hlY2tib3gnKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoJy4vaW5wdXQnKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoJy4vcmFkaW8nKShuZ01vZHVsZSk7XG4gIHJlcXVpcmUoJy4vc2VsZWN0JykobmdNb2R1bGUpO1xuICByZXF1aXJlKCcuL3RleHRhcmVhJykobmdNb2R1bGUpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL3R5cGVzL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IG1kSW5wdXRDb250YWluZXJGbGV4IGZyb20gJy4vbWRJbnB1dENvbnRhaW5lckZsZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XG4gIG1kSW5wdXRDb250YWluZXJGbGV4KG5nTW9kdWxlKTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9ydW4vaW5kZXguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJhbmd1bGFyXCJcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRDaGVja2JveFR5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZENoZWNrYm94VHlwZShmb3JtbHlDb25maWdQcm92aWRlciwgZm9ybWx5TWF0ZXJpYWxBcGlDaGVjaykge1xuICAgIGNvbnN0IGMgPSBmb3JtbHlNYXRlcmlhbEFwaUNoZWNrO1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NoZWNrYm94Lmh0bWwnKSxcbiAgICAgIHdyYXBwZXI6IFsnYm9vdHN0cmFwSGFzRXJyb3InXSxcbiAgICAgIGFwaUNoZWNrOiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczogYy5zaGFwZSh7XG4gICAgICAgICAgbGFiZWw6IGMuc3RyaW5nXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2tJbnN0YW5jZTogY1xuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvY2hlY2tib3guanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRDaGVja2JveFR5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZENoZWNrYm94VHlwZShmb3JtbHlDb25maWdQcm92aWRlciwgZm9ybWx5TWF0ZXJpYWxBcGlDaGVjaykge1xuICAgIGNvbnN0IGMgPSBmb3JtbHlNYXRlcmlhbEFwaUNoZWNrO1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogJ211bHRpQ2hlY2tib3gnLFxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbXVsdGlDaGVja2JveC5odG1sJyksXG4gICAgICB3cmFwcGVyOiBbJ21hdGVyaWFsTGFiZWwnLCAnYm9vdHN0cmFwSGFzRXJyb3InXSxcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgIG5vRm9ybUNvbnRyb2w6IGZhbHNlXG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2s6IHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiBjLnNoYXBlKHtcbiAgICAgICAgICBvcHRpb25zOiBjLmFycmF5T2YoYy5vYmplY3QpLFxuICAgICAgICAgIGxhYmVsUHJvcDogYy5zdHJpbmcub3B0aW9uYWwsXG4gICAgICAgICAgdmFsdWVQcm9wOiBjLnN0cmluZy5vcHRpb25hbFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGFwaUNoZWNrSW5zdGFuY2U6IGMsXG4gICAgICBjb250cm9sbGVyOiAvKiBAbmdJbmplY3QgKi8gZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgICAgIGNvbnN0IHRvID0gJHNjb3BlLnRvO1xuICAgICAgICBjb25zdCBvcHRzID0gJHNjb3BlLm9wdGlvbnM7XG4gICAgICAgICRzY29wZS5tdWx0aUNoZWNrYm94ID0ge1xuICAgICAgICAgIGNoZWNrZWQ6IFtdLFxuICAgICAgICAgIGNoYW5nZTogc2V0TW9kZWxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBpbml0aWFsaXplIHRoZSBjaGVja2JveGVzIGNoZWNrIHByb3BlcnR5XG4gICAgICAgIGNvbnN0IG1vZGVsVmFsdWUgPSAkc2NvcGUubW9kZWxbb3B0cy5rZXldO1xuICAgICAgICBpZiAoYW5ndWxhci5pc0FycmF5KG1vZGVsVmFsdWUpKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWVQcm9wID0gdG8udmFsdWVQcm9wIHx8ICd2YWx1ZSc7XG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHRvLm9wdGlvbnMsIGZ1bmN0aW9uKHYsIGluZGV4KSB7XG4gICAgICAgICAgICAkc2NvcGUubXVsdGlDaGVja2JveC5jaGVja2VkW2luZGV4XSA9IG1vZGVsVmFsdWUuaW5kZXhPZih2W3ZhbHVlUHJvcF0pICE9PSAtMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldE1vZGVsKCkge1xuICAgICAgICAgICRzY29wZS5tb2RlbFtvcHRzLmtleV0gPSBbXTtcbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2goJHNjb3BlLm11bHRpQ2hlY2tib3guY2hlY2tlZCwgKGNoZWNrYm94LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoZWNrYm94KSB7XG4gICAgICAgICAgICAgICRzY29wZS5tb2RlbFtvcHRzLmtleV0ucHVzaCh0by5vcHRpb25zW2luZGV4XVt0by52YWx1ZVByb3AgfHwgJ3ZhbHVlJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy9tdWx0aUNoZWNrYm94LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xuICBuZ01vZHVsZS5jb25maWcoYWRkSW5wdXRUeXBlKTtcblxuICBmdW5jdGlvbiBhZGRJbnB1dFR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcbiAgICAgIG5hbWU6ICdpbnB1dCcsXG4gICAgICB0ZW1wbGF0ZTogJzxpbnB1dCBuZy1tb2RlbD1cIm1vZGVsW29wdGlvbnMua2V5XVwiPicsXG4gICAgICB3cmFwcGVyOiBbJ21hdGVyaWFsTGFiZWwnLCAnbWRJbnB1dENvbnRhaW5lciddLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgbmdNb2RlbEF0dHJzOiB7XG4gICAgICAgICAgbWRNYXhsZW5ndGg6IHtcbiAgICAgICAgICAgIGJvdW5kOiAnbWQtbWF4bGVuZ3RoJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvaW5wdXQuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBuZ01vZHVsZSA9PiB7XG4gIG5nTW9kdWxlLmNvbmZpZyhhZGRSYWRpb1R5cGUpO1xuXG4gIGZ1bmN0aW9uIGFkZFJhZGlvVHlwZShmb3JtbHlDb25maWdQcm92aWRlciwgZm9ybWx5TWF0ZXJpYWxBcGlDaGVjaykge1xuICAgIGNvbnN0IGMgPSBmb3JtbHlNYXRlcmlhbEFwaUNoZWNrO1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogJ3JhZGlvJyxcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3JhZGlvLmh0bWwnKSxcbiAgICAgIHdyYXBwZXI6IFsnbWF0ZXJpYWxMYWJlbCcsICdib290c3RyYXBIYXNFcnJvciddLFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgbm9Gb3JtQ29udHJvbDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBhcGlDaGVjazoge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGMuc2hhcGUoe1xuICAgICAgICAgIG9wdGlvbnM6IGMuYXJyYXlPZihjLm9iamVjdCksXG4gICAgICAgICAgbGFiZWxQcm9wOiBjLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICB2YWx1ZVByb3A6IGMuc3RyaW5nLm9wdGlvbmFsXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgYXBpQ2hlY2tJbnN0YW5jZTogY1xuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vdHlwZXMvcmFkaW8uanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCAgbmdNb2R1bGUgPT4ge1xuICBuZ01vZHVsZS5jb25maWcoYWRkU2VsZWN0VHlwZSk7XG5cbiAgZnVuY3Rpb24gYWRkU2VsZWN0VHlwZShmb3JtbHlDb25maWdQcm92aWRlciwgZm9ybWx5TWF0ZXJpYWxBcGlDaGVjaykge1xuICAgIGNvbnN0IGMgPSBmb3JtbHlNYXRlcmlhbEFwaUNoZWNrO1xuICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFR5cGUoe1xuICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zZWxlY3QuaHRtbCcpLFxuICAgICAgd3JhcHBlcjogWydtYXRlcmlhbExhYmVsJywgJ2Jvb3RzdHJhcEhhc0Vycm9yJ10sXG4gICAgICBhcGlDaGVjazoge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IGMuc2hhcGUoe1xuICAgICAgICAgIG9wdGlvbnM6IGMuYXJyYXlPZihjLm9iamVjdCksXG4gICAgICAgICAgbGFiZWxQcm9wOiBjLnN0cmluZy5vcHRpb25hbCxcbiAgICAgICAgICB2YWx1ZVByb3A6IGMuc3RyaW5nLm9wdGlvbmFsLFxuICAgICAgICAgIGdyb3VwUHJvcDogYy5zdHJpbmcub3B0aW9uYWxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBhcGlDaGVja0luc3RhbmNlOiBjXG4gICAgfSk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy9zZWxlY3QuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCAgbmdNb2R1bGUgPT4ge1xuICBuZ01vZHVsZS5jb25maWcoYWRkVGV4dGFyZWFUeXBlKTtcblxuICBmdW5jdGlvbiBhZGRUZXh0YXJlYVR5cGUoZm9ybWx5Q29uZmlnUHJvdmlkZXIsIGZvcm1seU1hdGVyaWFsQXBpQ2hlY2spIHtcbiAgICBjb25zdCBjID0gZm9ybWx5TWF0ZXJpYWxBcGlDaGVjaztcbiAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRUeXBlKHtcbiAgICAgIG5hbWU6ICd0ZXh0YXJlYScsXG4gICAgICB0ZW1wbGF0ZTogJzx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5nLW1vZGVsPVwibW9kZWxbb3B0aW9ucy5rZXldXCI+PC90ZXh0YXJlYT4nLFxuICAgICAgd3JhcHBlcjogWydtYXRlcmlhbExhYmVsJywgJ2Jvb3RzdHJhcEhhc0Vycm9yJ10sXG4gICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICBuZ01vZGVsQXR0cnM6IHtcbiAgICAgICAgICByb3dzOiB7YXR0cmlidXRlOiAncm93cyd9LFxuICAgICAgICAgIGNvbHM6IHthdHRyaWJ1dGU6ICdjb2xzJ31cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFwaUNoZWNrOiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczogYy5zaGFwZSh7XG4gICAgICAgICAgcm93czogYy5udW1iZXIub3B0aW9uYWwsXG4gICAgICAgICAgY29sczogYy5udW1iZXIub3B0aW9uYWxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBhcGlDaGVja0luc3RhbmNlOiBjXG4gICAgfSk7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi90eXBlcy90ZXh0YXJlYS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bGFiZWwgZm9yPVxcXCJ7e2lkfX1cXFwiIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5cXG4gIHt7dG8ubGFiZWx9fVxcbiAge3t0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXG48L2xhYmVsPlxcbjxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3dyYXBwZXJzL2xhYmVsLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIG5nLWNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IHNob3dFcnJvcn1cXFwiPlxcbiAgPGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vd3JhcHBlcnMvaGFzLWVycm9yLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXG5cXHQ8bGFiZWw+XFxuXFx0XFx0PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIlxcbiAgICAgICAgICAgY2xhc3M9XFxcImZvcm1seS1maWVsZC1jaGVja2JveFxcXCJcXG5cXHRcXHQgICAgICAgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCI+XFxuXFx0XFx0e3t0by5sYWJlbH19XFxuXFx0XFx0e3t0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXG5cXHQ8L2xhYmVsPlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3R5cGVzL2NoZWNrYm94Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInJhZGlvLWdyb3VwXFxcIj5cXG4gIDxkaXYgbmctcmVwZWF0PVxcXCIoa2V5LCBvcHRpb24pIGluIHRvLm9wdGlvbnNcXFwiIGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxuICAgIDxsYWJlbD5cXG4gICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxuICAgICAgICAgICAgIGlkPVxcXCJ7e2lkICsgJ18nKyAkaW5kZXh9fVxcXCJcXG4gICAgICAgICAgICAgbmctbW9kZWw9XFxcIm11bHRpQ2hlY2tib3guY2hlY2tlZFskaW5kZXhdXFxcIlxcbiAgICAgICAgICAgICBuZy1jaGFuZ2U9XFxcIm11bHRpQ2hlY2tib3guY2hhbmdlKClcXFwiPlxcbiAgICAgIHt7b3B0aW9uW3RvLmxhYmVsUHJvcCB8fCAnbmFtZSddfX1cXG4gICAgPC9sYWJlbD5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3R5cGVzL211bHRpQ2hlY2tib3guaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicmFkaW8tZ3JvdXBcXFwiPlxcbiAgPGRpdiBuZy1yZXBlYXQ9XFxcIihrZXksIG9wdGlvbikgaW4gdG8ub3B0aW9uc1xcXCIgY2xhc3M9XFxcInJhZGlvXFxcIj5cXG4gICAgPGxhYmVsPlxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCJcXG4gICAgICAgICAgICAgaWQ9XFxcInt7aWQgKyAnXycrICRpbmRleH19XFxcIlxcbiAgICAgICAgICAgICB0YWJpbmRleD1cXFwiMFxcXCJcXG4gICAgICAgICAgICAgbmctdmFsdWU9XFxcIm9wdGlvblt0by52YWx1ZVByb3AgfHwgJ3ZhbHVlJ11cXFwiXFxuICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiPlxcbiAgICAgIHt7b3B0aW9uW3RvLmxhYmVsUHJvcCB8fCAnbmFtZSddfX1cXG4gICAgPC9sYWJlbD5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3R5cGVzL3JhZGlvLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgIG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxuICAgICAgICBuZy1vcHRpb25zPVxcXCJvcHRpb25bdG8udmFsdWVQcm9wIHx8ICd2YWx1ZSddIGFzIG9wdGlvblt0by5sYWJlbFByb3AgfHwgJ25hbWUnXSBncm91cCBieSBvcHRpb25bdG8uZ3JvdXBQcm9wIHx8ICdncm91cCddIGZvciBvcHRpb24gaW4gdG8ub3B0aW9uc1xcXCI+XFxuPC9zZWxlY3Q+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdHlwZXMvc2VsZWN0Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgbmdNb2R1bGUgPT4ge1xuICBuZ01vZHVsZS5ydW4oYWRkTWRJbnB1dENvbnRhaW5lckZsZXhNYW5pcHVsYXRvcik7XG5cbiAgZnVuY3Rpb24gYWRkTWRJbnB1dENvbnRhaW5lckZsZXhNYW5pcHVsYXRvcihmb3JtbHlDb25maWcpIHtcbiAgICBmb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucG9zdFdyYXBwZXIucHVzaChmdW5jdGlvbiBtZElucHV0Q29udGFpbmVyRmxleCh0ZW1wbGF0ZSwgb3B0aW9ucywgc2NvcGUpIHtcbiAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChvcHRpb25zLnRlbXBsYXRlT3B0aW9ucy5mbGV4KSkge1xuICAgICAgICBjb25zdCBlbCA9IGFuZ3VsYXIuZWxlbWVudChgPGRpdj4ke3RlbXBsYXRlfTwvZGl2PmApO1xuICAgICAgICBjb25zdCBtZElucHV0Q29udGFpbmVyID0gZWxbMF0ucXVlcnlTZWxlY3RvcignbWQtaW5wdXQtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1kSW5wdXRDb250YWluZXIpO1xuICAgICAgICBpZiAobWRJbnB1dENvbnRhaW5lcikge1xuICAgICAgICAgIG1kSW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdmbGV4Jywgb3B0aW9ucy50ZW1wbGF0ZU9wdGlvbnMuZmxleCk7XG4gICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vcnVuL21kSW5wdXRDb250YWluZXJGbGV4LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==