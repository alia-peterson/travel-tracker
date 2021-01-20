/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n", "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAAA;AAEA;+EAA+E;AAG/E;;;EACE;AAIF;EACE,iBAAiB;EAAE,MAAA;EACnB,8BAA8B;EAAE,MAAA,EAAO;;AAGzC;+EAD+E;AAI/E;;EADE;AAKF;EACE,SAAS,EAAA;;AAGX;;EAHE;AAOF;EACE,cAAc,EAAA;;AAGhB;;;EAJE;AASF;EACE,cAAc;EACd,gBAAgB,EAAA;;AAGlB;+EAR+E;AAW/E;;;EAPE;AAYF;EACE,uBAAuB;EAAE,MAAA;EACzB,SAAS;EAAE,MAAA;EACX,iBAAiB;EAAE,MAAA,EAAO;;AAG5B;;;EANE;AAWF;EACE,iCAAiC;EAAE,MAAA;EACnC,cAAc;EAAE,MAAA,EAAO;;AAGzB;+EAR+E;AAW/E;;EARE;AAYF;EACE,6BAA6B,EAAA;;AAG/B;;;EATE;AAcF;EACE,mBAAmB;EAAE,MAAA;EACrB,0BAA0B;EAAE,MAAA;EAC5B,iCAAiC;EAAE,MAAA,EAAO;;AAG5C;;EATE;AAaF;;EAEE,mBAAmB,EAAA;;AAGrB;;;EAVE;AAeF;;;EAGE,iCAAiC;EAAE,MAAA;EACnC,cAAc;EAAE,MAAA,EAAO;;AAGzB;;EAXE;AAeF;EACE,cAAc,EAAA;;AAGhB;;;EAZE;AAiBF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB,EAAA;;AAG1B;EACE,eAAe,EAAA;;AAGjB;EACE,WAAW,EAAA;;AAGb;+EAlB+E;AAqB/E;;EAlBE;AAsBF;EACE,kBAAkB,EAAA;;AAGpB;+EArB+E;AAwB/E;;;EApBE;AAyBF;;;;;EAKE,oBAAoB;EAAE,MAAA;EACtB,eAAe;EAAE,MAAA;EACjB,iBAAiB;EAAE,MAAA;EACnB,SAAS;EAAE,MAAA,EAAO;;AAGpB;;;EAlBE;AAuBF;;EACQ,MAAA;EACN,iBAAiB,EAAA;;AAGnB;;;EAnBE;AAwBF;;EACS,MAAA;EACP,oBAAoB,EAAA;;AAGtB;;EArBE;AAyBF;;;;EAIE,0BAA0B,EAAA;;AAG5B;;EAvBE;AA2BF;;;;EAIE,kBAAkB;EAClB,UAAU,EAAA;;AAGZ;;EAzBE;AA6BF;;;;EAIE,8BAA8B,EAAA;;AAGhC;;EA3BE;AA+BF;EACE,8BAA8B,EAAA;;AAGhC;;;;;EA1BE;AAiCF;EACE,sBAAsB;EAAE,MAAA;EACxB,cAAc;EAAE,MAAA;EAChB,cAAc;EAAE,MAAA;EAChB,eAAe;EAAE,MAAA;EACjB,UAAU;EAAE,MAAA;EACZ,mBAAmB;EAAE,MAAA,EAAO;;AAG9B;;EAzBE;AA6BF;EACE,wBAAwB,EAAA;;AAG1B;;EA3BE;AA+BF;EACE,cAAc,EAAA;;AAGhB;;;EA5BE;AACF;;EAkCE,sBAAsB;EAAE,MAAA;EACxB,UAAU;EAAE,MAAA,EAAO;;AAGrB;;EA7BE;AACF;;EAkCE,YAAY,EAAA;;AAGd;;;EA9BE;AACF;EAmCE,6BAA6B;EAAE,MAAA;EAC/B,oBAAoB;EAAE,MAAA,EAAO;;AAG/B;;EA/BE;AACF;EAmCE,wBAAwB,EAAA;;AAG1B;;;EAhCE;AAqCF;EACE,0BAA0B;EAAE,MAAA;EAC5B,aAAa;EAAE,MAAA,EAAO;;AAGxB;+EAlC+E;AAqC/E;;EAlCE;AAsCF;EACE,cAAc,EAAA;;AAGhB;;EApCE;AAwCF;EACE,kBAAkB,EAAA;;AAGpB;+EAvC+E;AA0C/E;;EAvCE;AA2CF;EACE,aAAa,EAAA;;AAGf;;EAzCE;AACF;EA6CE,aAAa,EAAA","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body, html {\n  background-color: #3D767B;\n  font-family: \"Yusei Magic\", sans-serif;\n  height: 100vh;\n  margin: 0 1rem 0 1rem;\n  padding: 0; }\n\nh2, h3, p {\n  margin: 0;\n  padding: 0; }\n\n.button-primary {\n  background-color: #FFB100;\n  border: none;\n  box-shadow: none;\n  border-radius: 0.2rem;\n  cursor: pointer;\n  font-family: \"Yusei Magic\", sans-serif;\n  padding: 0.5rem;\n  width: 150px; }\n  .button-primary:disabled {\n    background-color: #FFCE63;\n    cursor: default; }\n\n.button-secondary {\n  background-color: #FFB100;\n  border: none;\n  box-shadow: none;\n  border-radius: 0.2rem;\n  cursor: pointer;\n  font-family: \"Yusei Magic\", sans-serif;\n  padding: 0.5rem;\n  width: 150px;\n  background-color: #005256;\n  color: #FFCE63; }\n  .button-secondary:disabled {\n    background-color: #FFCE63;\n    cursor: default; }\n\n.hidden {\n  display: none !important; }\n\n.header {\n  align-items: center;\n  display: flex;\n  height: 10%;\n  justify-content: space-between;\n  padding: 0 1rem 0 1rem; }\n  .header .logo {\n    align-items: center;\n    display: flex; }\n  .header .slogan {\n    align-items: flex-end;\n    display: flex;\n    flex-direction: column;\n    justify-content: center; }\n  .header img {\n    height: 40px; }\n\n.list-unordered {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n  .list-unordered li {\n    font-size: 14px; }\n\n.welcome {\n  background-color: #FFB100;\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 1.5rem; }\n\n.container {\n  height: 88%; }\n\n.dashboard-user {\n  display: grid;\n  grid-gap: 0.5rem;\n  grid-template-areas: \"welcomeUser planningUser planningUser planningUser\" \"tripsUser tripsUser tripsUser tripsUser\";\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 2fr;\n  height: 100%; }\n\n#welcome-user {\n  grid-area: welcomeUser; }\n\n#planning-user {\n  grid-area: planningUser; }\n\n#trip-user {\n  grid-area: tripsUser; }\n\n@media screen and (max-width: 900px) {\n  .dashboard-user {\n    display: block; }\n  .header {\n    height: auto;\n    margin-bottom: 1rem; }\n  .welcome--spending {\n    align-items: flex-end;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap; }\n    .welcome--spending div {\n      align-items: flex-end;\n      display: flex; } }\n\n@media screen and (max-width: 650px) {\n  .header {\n    flex-direction: column;\n    justify-content: center;\n    text-align: center; }\n    .header .slogan {\n      align-items: center;\n      justify-content: center; }\n  .welcome {\n    align-items: center;\n    text-align: center;\n    padding: 0.5rem; }\n    .welcome--spending {\n      justify-content: center; } }\n\n@media screen and (max-width: 550px) {\n  .container {\n    height: 80%; } }\n\n@media screen and (max-width: 390px) {\n  .header {\n    margin-bottom: 1rem; }\n  .welcome--spending div {\n    align-items: center;\n    flex-direction: column; } }\n\n.planning-user,\n.planning-agent {\n  background-color: #005256;\n  border-radius: 0.5rem;\n  color: #FFEBC6;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding: 1rem; }\n  .planning-user .button,\n  .planning-agent .button {\n    background-color: #FFB100;\n    border: none;\n    box-shadow: none;\n    border-radius: 0.2rem;\n    cursor: pointer;\n    font-family: \"Yusei Magic\", sans-serif;\n    padding: 0.5rem;\n    width: 150px; }\n    .planning-user .button:disabled,\n    .planning-agent .button:disabled {\n      background-color: #FFCE63;\n      cursor: default; }\n\n.planning--bottom {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  width: 100%; }\n\n.planning--cost {\n  margin-bottom: 0.4rem; }\n\n.planning--date {\n  font-size: 14px;\n  height: 1.7rem; }\n\n.planning--dropdown {\n  font-size: 14px;\n  height: 2rem;\n  min-width: 3rem; }\n\n.planning--inputs {\n  display: grid;\n  grid-gap: 0.5rem;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n  grid-gap: 1rem;\n  grid-template-areas: \"date destination duration travelers\";\n  width: 100%; }\n\n.planning--text {\n  font-size: 14px;\n  margin: 0.5rem 0 0.5 0; }\n\n.planning--title {\n  margin: 0; }\n\n.form--section {\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end; }\n\n#input-date {\n  grid-area: date; }\n\n#input-destination {\n  grid-area: destination; }\n\n#input-duration {\n  grid-area: duration; }\n\n#input-travelers {\n  grid-area: travelers; }\n\n@media screen and (max-width: 1000px) {\n  .planning--inputs {\n    display: grid;\n    grid-gap: 0.5rem;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \"date destination\" \"duration travelers\"; }\n  .planning--text {\n    margin: 0.5rem 0 0.5rem 0; } }\n\n@media screen and (max-width: 550px) {\n  .planning--inputs {\n    display: block; }\n  .planning--dropdown {\n    max-width: 14rem; } }\n\n@media screen and (max-width: 390px) {\n  .planning--dropdown {\n    max-width: 12rem; } }\n\n.card--header {\n  position: relative;\n  width: 100%; }\n\n.card--body {\n  padding: 0.4rem; }\n\n.card--image {\n  top: 0;\n  right: 0;\n  height: 100px;\n  position: absolute;\n  object-fit: cover;\n  opacity: 0;\n  width: 100%; }\n\n.trip-user {\n  display: grid;\n  grid-gap: 0.5rem;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n  grid-template-areas: \"previous present upcoming pending\";\n  overflow: hidden; }\n\n.trip--article {\n  align-items: center;\n  background-color: #003844;\n  border-radius: 0.5rem;\n  color: #FFEBC6;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  padding: 1rem; }\n\n.trip--form {\n  display: none; }\n\n.trip--card {\n  align-items: center;\n  background-color: #FFEBC6;\n  border-radius: 0.5rem;\n  box-shadow: 5px 5px 5px #00262E;\n  color: #003844;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: 0.5rem 0;\n  text-align: center;\n  width: 90%; }\n  .trip--card h3 {\n    font-size: 18px;\n    margin: 2rem 0.5rem;\n    position: relative;\n    z-index: 1; }\n  .trip--card h4 {\n    font-size: 16px;\n    margin: 0.5rem 0;\n    text-decoration: underline; }\n  .trip--card p {\n    font-size: 14px;\n    margin: 0.5rem 0; }\n\n.trip--card:hover {\n  cursor: default; }\n  .trip--card:hover .card--image {\n    border-radius: 0.5rem 0.5rem 0 0;\n    opacity: 0.5;\n    transition: .8s ease;\n    z-index: 0; }\n  .trip--card:hover h3 {\n    background-color: white;\n    opacity: 0.8; }\n\n.user--card h3 {\n  margin-top: 1rem; }\n\n#trip--dropdown-message {\n  display: none;\n  margin-top: 1rem; }\n\n#trip--present {\n  grid-area: present; }\n\n#trip--upcoming {\n  grid-area: upcoming; }\n\n#trip--pending {\n  grid-area: pending; }\n\n#trip--previous {\n  grid-area: previous; }\n\n@media screen and (max-width: 900px) {\n  .display-previous .trip--article:not(.previous) {\n    display: none !important; }\n  .display-present .trip--article:not(.present) {\n    display: none !important; }\n  .display-upcoming .trip--article:not(.upcoming) {\n    display: none !important; }\n  .display-pending .trip--article:not(.pending) {\n    display: none !important; }\n  .card--image {\n    opacity: 0.5; }\n  .trip--article {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    overflow: auto;\n    padding-top: 4rem;\n    min-height: 4rem; }\n    .trip--article h2 {\n      display: none !important; }\n  .trip--card {\n    margin: 1rem;\n    width: auto; }\n  .trip--form {\n    align-items: center;\n    color: #FFCE63;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    position: absolute;\n    transform: translate(-50%, 0);\n    top: 1rem;\n    left: 50%;\n    justify-content: flex-start;\n    min-height: 70px;\n    width: 100%; }\n  .trip-user {\n    display: block;\n    overflow: auto;\n    position: relative; } }\n\n@media screen and (max-width: 550px) {\n  .trip--card {\n    width: 90%; } }\n\n.login {\n  align-items: center;\n  display: flex;\n  justify-content: center; }\n  .login h2 {\n    text-shadow: 3px 3px 3px black; }\n\n.login--main {\n  align-items: center;\n  background-color: #003844;\n  border-radius: 1rem;\n  box-shadow: 4px 4px 6px 1px #00262E;\n  color: #FFCE63;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 80vh;\n  width: 80vw; }\n\n.login--body {\n  align-items: center;\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%; }\n  .login--body button {\n    background-color: #FFB100;\n    border: none;\n    box-shadow: none;\n    border-radius: 0.2rem;\n    cursor: pointer;\n    font-family: \"Yusei Magic\", sans-serif;\n    padding: 0.5rem;\n    width: 150px;\n    background-color: #005256;\n    color: #FFCE63; }\n    .login--body button:disabled {\n      background-color: #FFCE63;\n      cursor: default; }\n    .login--body button:disabled {\n      background-color: #3D767B; }\n\n.login--form {\n  align-items: center;\n  background-color: #FFB100;\n  border-radius: 0.5rem;\n  box-shadow: 4px 4px 6px 1px #00262E;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 25rem;\n  margin: 2rem;\n  width: 15rem; }\n  .login--form input {\n    font-size: 18px;\n    height: 25px; }\n\n.line {\n  background-color: #FFCE63;\n  height: 90%;\n  width: 1px; }\n\n@media screen and (max-width: 768px) {\n  .login--main {\n    margin-top: 1rem;\n    height: auto;\n    width: auto; }\n  .line {\n    height: 1px;\n    width: 90%; }\n  .login--body {\n    flex-direction: column;\n    justify-content: center; }\n  .login--form {\n    height: 12rem;\n    width: 20rem; } }\n\n@media screen and (max-width: 445px) {\n  .login--form {\n    height: 13rem;\n    width: 15rem; } }\n\n@media screen and (max-width: 375px) {\n  .container {\n    height: 85%; }\n  .login {\n    height: 100%; }\n  .login--body {\n    padding: 0 0.5rem 0 0.5rem; }\n  .login--form {\n    margin: 1rem; }\n  input {\n    max-width: 10rem; } }\n\n.traveler--header {\n  text-align: center;\n  padding-bottom: 1rem; }\n\n.traveler--cards,\n.pending--cards {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  overflow-y: auto; }\n\n.button-approve {\n  margin-top: 0.6rem; }\n\n.button-delete {\n  margin: 0.2rem 0; }\n\n.dashboard-agent {\n  display: grid;\n  grid-gap: 0.5rem;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n  grid-template-areas: \"welcomeAgent planningAgent planningAgent planningAgent\" \"tripsAgent planningAgent planningAgent planningAgent\" \"tripsAgent planningAgent planningAgent planningAgent\";\n  height: 100%; }\n\n.pending--article {\n  align-items: center;\n  background-color: #003844;\n  border-radius: 0.5rem;\n  color: #FFEBC6;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  padding: 1rem; }\n\n.planning-agent {\n  align-items: center;\n  justify-content: flex-start;\n  max-height: none;\n  width: 90%; }\n  .planning-agent .trip--card {\n    margin: 1rem;\n    width: 300px; }\n    .planning-agent .trip--card table {\n      border-spacing: 0.5rem 0;\n      text-align: left; }\n      .planning-agent .trip--card table thead {\n        text-decoration: underline; }\n    .planning-agent .trip--card h3 {\n      margin: 1rem 0 0 0; }\n\n.traveler--form {\n  display: none; }\n\n.traveler--search {\n  margin-top: 0.5rem;\n  text-align: center;\n  height: 20px;\n  width: 200px; }\n\n.user--card {\n  align-items: center;\n  background-color: #FFEBC6;\n  border-radius: 0.5rem;\n  box-shadow: 5px 5px 5px #00262E;\n  color: #003844;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: 0.5rem 0;\n  text-align: center;\n  width: 90%; }\n\n.welcome h3 {\n  text-decoration: underline; }\n\n#pending--message {\n  display: none; }\n\n#welcome-agent {\n  grid-area: welcomeAgent; }\n\n#planning-agent {\n  grid-area: planningAgent; }\n\n#pending--article {\n  grid-area: tripsAgent; }\n\n@media screen and (max-width: 910px) {\n  .dashboard-agent {\n    grid-template-areas: \"welcomeAgent welcomeAgent welcomeAgent\" \"tripsAgent planningAgent planningAgent\" \"tripsAgent planningAgent planningAgent\";\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 0.6fr 1fr 1fr; } }\n\n@media screen and (max-width: 710px) {\n  .dashboard-agent {\n    grid-template-areas: \"welcomeAgent welcomeAgent\" \"tripsAgent planningAgent\" \"tripsAgent planningAgent\";\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 0.6fr 1fr; } }\n\n@media screen and (max-width: 650px) {\n  h1 {\n    margin: 0.4rem; }\n  .agent--body h2 {\n    display: none; }\n  .dashboard-agent {\n    align-items: center;\n    display: flex;\n    flex-direction: column; }\n  .display-trips .agent--body:not(.trips) {\n    display: none !important; }\n  .display-travelers .agent--body:not(.travelers) {\n    display: none !important; }\n  .pending--article,\n  .planning-agent {\n    background-color: #003844;\n    padding-top: 4rem;\n    overflow-y: auto; }\n  .trip--card {\n    max-width: 270px; }\n  .traveler--form-container {\n    position: relative;\n    text-align: center;\n    width: 100%; }\n  .traveler--form {\n    align-items: center;\n    color: #FFCE63;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    position: absolute;\n    transform: translate(-50%, 0);\n    top: 1rem;\n    left: 50%;\n    top: 1rem;\n    width: 100%; }\n  .welcome {\n    margin: 0 auto;\n    width: 90%; } }\n", "",{"version":3,"sources":["webpack://./src/css/_base.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_plans.scss","webpack://./src/css/_trips.scss","webpack://./src/css/_login.scss","webpack://./src/css/_agent.scss"],"names":[],"mappings":"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","sourcesContent":["* {\n  // border: 1px solid black;\n}\n\nbody, html {\n  background-color: $color-ming;\n  font-family: $font-primary;\n  height: 100vh;\n  margin: 0 1rem 0 1rem;\n  padding: 0;\n}\n\nh2, h3, p {\n  margin: 0;\n  padding: 0;\n}\n\n.button-primary {\n  @include button-primary;\n}\n\n.button-secondary {\n  @include button-secondary;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.header {\n  align-items: center;\n  display: flex;\n  height: 10%;\n  justify-content: space-between;\n  padding: 0 1rem 0 1rem;\n\n  .logo {\n    align-items: center;\n    display: flex;\n  }\n\n  .slogan {\n    align-items: flex-end;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  img {\n    height: 40px;\n  }\n}\n\n.list-unordered {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n\n  li {\n    font-size: 14px;\n  }\n}\n\n.welcome {\n  background-color: $color-honey;\n  border-radius: 0.5rem;\n  // box-shadow: 3px 3px 4px $color-deep-jungle;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 1.5rem;\n}\n\n.container {\n  height: 88%;\n}\n\n.dashboard-user {\n  display: grid;\n  grid-gap: 0.5rem;\n  grid-template-areas:\n  \"welcomeUser planningUser planningUser planningUser\"\n  \"tripsUser tripsUser tripsUser tripsUser\";\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 2fr;\n  height: 100%;\n}\n\n#welcome-user {\n  grid-area: welcomeUser;\n}\n\n#planning-user {\n  grid-area: planningUser;\n}\n\n#trip-user {\n  grid-area: tripsUser;\n}\n\n\n// MEDIA SCREENS\n@media screen and (max-width: 900px) {\n  .dashboard-user {\n    display: block;\n  }\n\n  .header {\n    height: auto;\n    margin-bottom: 1rem;\n  }\n\n  .welcome--spending {\n    align-items: flex-end;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n\n    div {\n      align-items: flex-end;\n      display: flex;\n    }\n  }\n}\n\n@media screen and (max-width: 650px) {\n  .header {\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n\n    .slogan {\n      align-items: center;\n      justify-content: center;\n    }\n  }\n\n  .welcome {\n    align-items: center;\n    text-align: center;\n    padding: 0.5rem;\n\n    &--spending {\n      justify-content: center;\n    }\n  }\n}\n\n@media screen and (max-width: 550px) {\n  .container {\n    height: 80%;\n  }\n}\n\n@media screen and (max-width: 390px) {\n  .header {\n    margin-bottom: 1rem;\n  }\n\n  .welcome--spending div {\n    align-items: center;\n    flex-direction: column;\n  }\n}\n","@mixin button-primary {\n  background-color: $color-honey;\n  border: none;\n  box-shadow: none;\n  border-radius: 0.2rem;\n  cursor: pointer;\n  font-family: $font-primary;\n  padding: 0.5rem;\n  width: 150px;\n\n  &:disabled {\n    background-color: $color-maize;\n    cursor: default;\n  }\n}\n\n@mixin button-secondary {\n  @include button-primary\n  background-color: $color-jungle-green;\n  color: $color-maize;\n}\n\n@mixin grid-presets-4x1 {\n  display: grid;\n  grid-gap: 0.5rem;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n}\n\n@mixin grid-presets-2x2 {\n  display: grid;\n  grid-gap: 0.5rem;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n@mixin mobile-dropdown {\n  align-items: center;\n  color: $color-maize;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: absolute;\n  transform: translate(-50%, 0);\n  top: 1rem;\n  left: 50%;\n}\n\n@mixin card-preset {\n  align-items: center;\n  background-color: $color-almond;\n  border-radius: 0.5rem;\n  box-shadow: 5px 5px 5px $color-deep-jungle;\n  color: $color-eagle-green;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: 0.5rem 0;\n  text-align: center;\n  width: 90%;\n}\n\n@mixin article-preset {\n  align-items: center;\n  background-color: $color-eagle-green;\n  border-radius: 0.5rem;\n  color: $color-almond;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  padding: 1rem;\n}\n\n$color-deep-jungle: #00262E; // shadow color\n$color-eagle-green: #003844; // darkest green\n$color-jungle-green: #005256; // mid green\n$color-ming: #3D767B; // light green\n$color-honey: #FFB100; // bright yellow\n$color-maize: #FFCE63; // light yellow\n$color-almond: #FFEBC6; // light tan\n\n$font-primary: 'Yusei Magic', sans-serif;\n",".planning-user,\n.planning-agent {\n  background-color: $color-jungle-green;\n  border-radius: 0.5rem;\n  // box-shadow: 3px 3px 4px $color-deep-jungle;\n  color: $color-almond;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding: 1rem;\n\n  .button {\n    @include button-primary;\n  }\n}\n\n.planning {\n  &--bottom {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n  }\n\n  &--cost {\n    margin-bottom: 0.4rem;\n  }\n\n  &--date {\n    font-size: 14px;\n    height: 1.7rem;\n  }\n\n  &--dropdown {\n    font-size: 14px;\n    height: 2rem;\n    min-width: 3rem;\n  }\n\n  &--inputs {\n    @include grid-presets-4x1;\n    grid-gap: 1rem;\n    grid-template-areas:\n      \"date destination duration travelers\";\n    width: 100%;\n  }\n\n  &--text {\n    font-size: 14px;\n    margin: 0.5rem 0 0.5 0;\n    // margin: 0.2rem 0 0 0;\n  }\n\n  &--title {\n    margin: 0;\n  }\n}\n\n.form--section {\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n#planning--warning {\n  // margin: 0.5rem 0 0 0;\n}\n\n#input-date {\n  grid-area: date;\n}\n\n#input-destination {\n  grid-area: destination;\n}\n\n#input-duration {\n  grid-area: duration;\n}\n\n#input-travelers {\n  grid-area: travelers;\n}\n\n// MEDIA SCREEN SIZES\n@media screen and (max-width: 1000px) {\n  .planning {\n    &--inputs {\n      @include grid-presets-2x2;\n      grid-template-areas:\n        \"date destination\"\n        \"duration travelers\";\n    }\n\n    &--text {\n      margin: 0.5rem 0 0.5rem 0;\n    }\n  }\n}\n\n@media screen and (max-width: 550px) {\n  .planning {\n    &--inputs {\n      display: block;\n    }\n\n    &--dropdown {\n      max-width: 14rem;\n    }\n  }\n}\n\n@media screen and (max-width: 390px) {\n  .planning--dropdown {\n    max-width: 12rem;\n  }\n}\n",".card {\n  &--header {\n    position: relative;\n    width: 100%;\n  }\n\n  &--body {\n    padding: 0.4rem;\n  }\n\n  &--image {\n    top: 0;\n    right: 0;\n    height: 100px;\n    position: absolute;\n    object-fit: cover;\n    opacity: 0;\n    width: 100%;\n  }\n}\n\n.trip-user {\n  @include grid-presets-4x1\n  grid-template-areas:\n    \"previous present upcoming pending\";\n  overflow: hidden;\n}\n\n.trip {\n  &--article {\n    @include article-preset;\n  }\n\n  &--form {\n    display: none;\n  }\n}\n\n.trip--card {\n  @include card-preset;\n\n  h3 {\n    font-size: 18px;\n    margin: 2rem 0.5rem;\n    position: relative;\n    z-index: 1;\n  }\n\n  h4 {\n    font-size: 16px;\n    margin: 0.5rem 0;\n    text-decoration: underline;\n  }\n\n  p {\n    font-size: 14px;\n    margin: 0.5rem 0;\n  }\n}\n\n.trip--card:hover {\n  cursor: default;\n\n  .card--image {\n    border-radius: 0.5rem 0.5rem 0 0;\n    opacity: 0.5;\n    transition: .8s ease;\n    z-index: 0;\n  }\n\n  h3 {\n    background-color: white;\n    opacity: 0.8;\n  }\n}\n\n.user--card h3 {\n  margin-top: 1rem;\n}\n\n#trip--dropdown-message {\n  display: none;\n  margin-top: 1rem;\n}\n\n#trip--present {\n  grid-area: present;\n}\n\n#trip--upcoming {\n  grid-area: upcoming;\n}\n\n#trip--pending {\n  grid-area: pending;\n}\n\n#trip--previous {\n  grid-area: previous;\n}\n\n// MEDIA SCREENS\n@media screen and (max-width: 900px) {\n  .display-previous .trip--article:not(.previous) {\n    display: none !important;\n  }\n\n  .display-present .trip--article:not(.present) {\n    display: none !important;\n  }\n\n  .display-upcoming .trip--article:not(.upcoming) {\n    display: none !important;\n  }\n\n  .display-pending .trip--article:not(.pending) {\n    display: none !important;\n  }\n\n  .card--image {\n    opacity: 0.5;\n  }\n\n  .trip--article {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    overflow: auto;\n    padding-top: 4rem;\n    min-height: 4rem;\n\n    h2 {\n      display: none !important;\n    }\n  }\n\n  .trip--card {\n    margin: 1rem;\n    width: auto;\n  }\n\n  .trip--form {\n    @include mobile-dropdown;\n    justify-content: flex-start;\n    min-height: 70px;\n    width: 100%;\n  }\n\n  .trip-user {\n    display: block;\n    overflow: auto;\n    position: relative;\n  }\n}\n\n@media screen and (max-width: 550px) {\n  .trip--card {\n    width: 90%;\n  }\n}\n",".login {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n\n  h2 {\n    text-shadow: 3px 3px 3px black;\n  }\n}\n\n.login--main {\n  align-items: center;\n  background-color: $color-eagle-green;\n  border-radius: 1rem;\n  box-shadow: 4px 4px 6px 1px $color-deep-jungle;\n  color: $color-maize;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 80vh;\n  width: 80vw;\n}\n\n.login--body {\n  align-items: center;\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n\n  button {\n    @include button-secondary;\n\n    &:disabled {\n      background-color: $color-ming;\n    }\n  }\n}\n\n.login--form {\n  align-items: center;\n  background-color: $color-honey;\n  border-radius: 0.5rem;\n  box-shadow: 4px 4px 6px 1px $color-deep-jungle;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 25rem;\n  margin: 2rem;\n  width: 15rem;\n\n  input {\n    font-size: 18px;\n    height: 25px;\n  }\n}\n\n.line {\n  background-color: $color-maize;\n  height: 90%;\n  width: 1px;\n}\n\n@media screen and (max-width: 768px) {\n  .login--main {\n    margin-top: 1rem;\n    height: auto;\n    width: auto;\n  }\n\n  .line {\n    height: 1px;\n    width: 90%;\n  }\n\n  .login--body {\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  .login--form {\n    height: 12rem;\n    width: 20rem;\n  }\n}\n\n@media screen and (max-width: 445px) {\n  .login--form {\n    height: 13rem;\n    width: 15rem;\n  }\n}\n\n@media screen and (max-width: 375px) {\n  .container {\n    height: 85%;\n  }\n\n  .login {\n    height: 100%;\n  }\n\n  .login--body {\n    padding: 0 0.5rem 0 0.5rem;\n  }\n\n  .login--form {\n    margin: 1rem;\n  }\n\n  input {\n    max-width: 10rem;\n  }\n}\n",".traveler--header {\n  text-align: center;\n  padding-bottom: 1rem;\n}\n\n.traveler--cards,\n.pending--cards {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  overflow-y: auto;\n}\n\n.button-approve {\n  margin-top: 0.6rem;\n}\n\n.button-delete {\n  margin: 0.2rem 0;\n}\n\n.dashboard-agent {\n  @include grid-presets-4x1\n  grid-template-areas:\n    \"welcomeAgent planningAgent planningAgent planningAgent\"\n    \"tripsAgent planningAgent planningAgent planningAgent\"\n    \"tripsAgent planningAgent planningAgent planningAgent\";\n  height: 100%;\n}\n\n.pending--article {\n  @include article-preset;\n}\n\n.planning-agent {\n  align-items: center;\n  justify-content: flex-start;\n  max-height: none;\n  width: 90%;\n\n  .trip--card {\n    margin: 1rem;\n    width: 300px;\n\n    table {\n      border-spacing: 0.5rem 0;\n      text-align: left;\n\n      thead {\n        text-decoration: underline;\n      }\n    }\n\n    h3 {\n      margin: 1rem 0 0 0;\n    }\n  }\n}\n\n.traveler--form {\n  display: none;\n}\n\n.traveler--search {\n  margin-top: 0.5rem;\n  text-align: center;\n  height: 20px;\n  width: 200px;\n}\n\n.user--card {\n  @include card-preset;\n}\n\n.welcome h3 {\n  text-decoration: underline;\n}\n\n#pending--message {\n  display: none;\n}\n\n#welcome-agent {\n  grid-area: welcomeAgent;\n}\n\n#planning-agent {\n  grid-area: planningAgent;\n}\n\n#pending--article {\n  grid-area: tripsAgent;\n}\n\n\n// MEDIA SCREENS\n@media screen and (max-width: 910px) {\n  .dashboard-agent {\n    grid-template-areas:\n      \"welcomeAgent welcomeAgent welcomeAgent\"\n      \"tripsAgent planningAgent planningAgent\"\n      \"tripsAgent planningAgent planningAgent\";\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 0.6fr 1fr 1fr;\n  }\n}\n\n@media screen and (max-width: 710px) {\n  .dashboard-agent {\n    grid-template-areas:\n      \"welcomeAgent welcomeAgent\"\n      \"tripsAgent planningAgent\"\n      \"tripsAgent planningAgent\";\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 0.6fr 1fr;\n  }\n}\n\n@media screen and (max-width: 650px) {\n  h1 {\n    margin: 0.4rem;\n  }\n\n  .agent--body h2 {\n    display: none;\n  }\n\n  .dashboard-agent {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .display-trips .agent--body:not(.trips) {\n    display: none !important;\n  }\n\n  .display-travelers .agent--body:not(.travelers) {\n    display: none !important;\n  }\n\n  .pending--article,\n  .planning-agent {\n    background-color: $color-eagle-green;\n    padding-top: 4rem;\n    overflow-y: auto;\n  }\n\n  .trip--card {\n    max-width: 270px;\n  }\n\n  .traveler--form-container {\n    position: relative;\n    text-align: center;\n    width: 100%;\n  }\n\n  .traveler--form {\n    @include mobile-dropdown;\n    top: 1rem;\n    width: 100%;\n  }\n\n  .welcome {\n    margin: 0 auto;\n    width: 90%;\n  }\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../css-loader/dist/cjs.js!../sass-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/agent.js":
/*!**********************!*\
  !*** ./src/agent.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Agent {
  constructor() {
    this.travelers = []
    this.trips = []
    this.destinations = []
  }

  calculateTotalIncome(year) {
    let totalIncome = 0
    const yearTrips = this.findYearTrips(year)

    yearTrips.forEach(trip => {
      const location = this.destinations.find(place => place.id === trip.destinationID)

      const lodgingIncome = trip.travelers * trip.duration * location.lodgingCostPerDay
      const flightIncome = trip.travelers * location.flightCostPerPerson
      totalIncome += (lodgingIncome + flightIncome)
    })

    return (totalIncome * 0.1).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  findYearTrips(year) {
    let yearTrips = []

    this.travelers.forEach(traveler => {
      traveler.trips.forEach(trip => {
        if (trip.date.includes(`${year}`) && trip.status !== 'pending') {
          yearTrips.push(trip)
        }
      })
    })

    return yearTrips
  }

  findTodaysTravelers(todaysTrips) {
    const todaysTravelers = todaysTrips.reduce((acc, curr) => {
      const currentTraveler = this.travelers.find(traveler => {
        return traveler.id === curr.userID
      })

      acc.push( {[currentTraveler.name]: currentTraveler.id} )
      return acc
    }, [])

    return todaysTravelers
  }
}

module.exports = Agent


/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/destination.js":
/*!****************************!*\
  !*** ./src/destination.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Destination {
  constructor(destination) {
    this.id = destination.id
    this.destination = destination.destination
    this.lodgingCostPerDay = destination.estimatedLodgingCostPerDay
    this.flightCostPerPerson = destination.estimatedFlightCostPerPerson
    this.image = destination.image
    this.alt = destination.alt
  }
}

module.exports = Destination


/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _traveler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traveler */ "./src/traveler.js");
/* harmony import */ var _traveler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_traveler__WEBPACK_IMPORTED_MODULE_0__);


const travelerCards = document.querySelector('#traveler--cards')
const pendingCards = document.querySelector('#pending--cards')
const todaysTrips = document.querySelector('#welcome--trips')
const trips = {
  Template: document.querySelector('#trip--template'),
  Previous: document.querySelector('#trip--previous'),
  Present: document.querySelector('#trip--present'),
  Upcoming: document.querySelector('#trip--upcoming'),
  Pending: document.querySelector('#trip--pending')
}

const domUpdates = {

  // USER DASHBOARD
  populateTravelerGreeting(currentTraveler) {
    const welcomeMessage = document.querySelector('#welcome--message')

    const travelerNames = currentTraveler.name.split(' ')
    const travelerFirstName = travelerNames[0]

    welcomeMessage.innerText = `Welcome ${travelerFirstName}!`
  },

  displayDestinationInformation(trip, place, daysPassed) {
    const tripCard = trips.Template.content.cloneNode(true)
    tripCard.querySelector('.card--destination').innerText = place.destination
    tripCard.querySelector('.card--image').src = place.image
    tripCard.querySelector('.card--image').alt = place.alt
    tripCard.querySelector('.card--date').innerText = `Start Date: ${trip.date}`
    tripCard.querySelector('.card--duration').innerText = `Duration: ${trip.duration} Days`
    tripCard.querySelector('.card--travelers').innerText = `Travelers: ${trip.travelers} Adults`
    tripCard.querySelector('.card--lodging').innerText = `Lodging Cost Per Day: $${place.lodgingCostPerDay}`
    tripCard.querySelector('.card--flight').innerText = `Flight Cost: $${place.flightCostPerPerson}`

    const status = trip.determineTripStatus(daysPassed)
    trips[status].appendChild(tripCard)
  },

  addCostToProfile(yearSpent, totalCost) {
    yearSpent.innerText = `$${totalCost}`
  },

  addDestinationsToDropdown(destinations, dropdown) {
    destinations.forEach(location => {
      const newOption = document.createElement('option')
      newOption.value = location.id
      newOption.innerText = location.destination
      dropdown.appendChild(newOption)
    })
  },

  addNumbersToDropdowns(dropdown) {
    const possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    possibleNumbers.forEach(number => {
      const newOption = document.createElement('option')
      newOption.value = number
      newOption.innerText = number
      dropdown.appendChild(newOption)
    })
  },

  // AGENT DASHBOARD
  displayAgentAnnualIncome(presentSpent) {
    const presentIncome = document.querySelector('#welcome--income')
    presentIncome.innerText = `$${presentSpent}`
  },

  displayTodaysTravelers(todaysTravelers) {
    this.clearTripList()
    todaysTravelers.forEach(traveler => {
      const newTraveler = document.createElement('li')
      newTraveler.innerText = `${Object.keys(traveler)} (#${Object.values(traveler)})`

      todaysTrips.appendChild(newTraveler)
    })
  },

  displayTravelerInformation(traveler, destinations) {
    const travelerTemplate = document.querySelector('#traveler--template')

    const newTravelerCard = travelerTemplate.content.cloneNode(true)
    const travelerName = `${traveler.name} (#${traveler.id})`
    const travelerSpending = traveler.calculateSpending(destinations)

    newTravelerCard.querySelector('article').id = traveler.id
    newTravelerCard.querySelector('#traveler--name').innerText = travelerName
    newTravelerCard.querySelector('#traveler--spent').innerText = travelerSpending

    traveler.trips.forEach(trip => {
      const location = this.findDestination(destinations, trip)
      this.buildTableElements(trip, location, newTravelerCard)
    })

    travelerCards.appendChild(newTravelerCard)
  },

  displayPendingTrips(traveler, destinations) {
    const pendingTrips = traveler.trips.filter(trip => trip.status === 'pending')

    pendingTrips.forEach(trip => {
      const pendingTemplate = document.querySelector('#pending--template')

      const location = this.findDestination(destinations, trip)
      const newCard = pendingTemplate.content.cloneNode(true)
      const travelerName = `${traveler.name} (#${traveler.id})`
      const tripInfo = `${trip.date} (${trip.duration} days)`

      newCard.querySelector('.pending--name').innerText = travelerName
      newCard.querySelector('.pending--location').innerText = location.destination
      newCard.querySelector('.pending--date').innerText = tripInfo
      newCard.querySelector('.button-approve').setAttribute('tripID', trip.id)
      newCard.querySelector('.button-delete').setAttribute('tripID', trip.id)

      pendingCards.appendChild(newCard)
    })
  },

  buildTableElements(trip, location, card) {
    const travelerLocations = card.querySelector('#traveler--locations')
    const newRow = document.createElement('tr')
    const locationCell = document.createElement('td')
    const statusCell = document.createElement('td')

    locationCell.innerText = location.destination
    statusCell.innerText = trip.status

    travelerLocations.appendChild(newRow)
    newRow.appendChild(locationCell)
    newRow.appendChild(statusCell)
  },

  // HELPER FUNCTIONS
  findDestination(destinations, trip) {
    return destinations.find(place => place.id === trip.destinationID)
  },

  clearTripDisplays(status) {
    trips[status].querySelectorAll('article').forEach(item => item.remove())
  },

  clearTripList() {
    todaysTrips.querySelectorAll('li').forEach(li => li.remove())
  },

  clearTravelerCardDisplays() {
    travelerCards.querySelectorAll('article').forEach(item => item.remove())
    pendingCards.querySelectorAll('article').forEach(item => item.remove())
  }

}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/fetchApi.js":
/*!*************************!*\
  !*** ./src/fetchApi.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fetchApi = {
  getTravelers() {
    return fetch('http://localhost:3001/api/v1/travelers')
      .then(response => response.json())
  },

  getSpecificTraveler(travelerID) {
    return fetch(`http://localhost:3001/api/v1/travelers/${travelerID}`)
      .then(response => response.json())
  },

  getAllTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
      .then(response => response.json())
  },

  getAllDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
      .then(response => response.json())
  },

  postNewTrip(newTrip) {
    const postFormat = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newTrip)
    }

    return fetch('http://localhost:3001/api/v1/trips', postFormat)
      .then(response => response.json())
  },

  postModifyTrip(revisedTrip) {
    const postFormat = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(revisedTrip)
    }

    return fetch('http://localhost:3001/api/v1/updateTrip', postFormat)
      .then(response => response.json())
  },

  deleteTrip(tripID) {
    const postFormat = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    }

    return fetch(`http://localhost:3001/api/v1/trips/${tripID}`, postFormat)
      .then(response => response.json())
  }
}

/* harmony default export */ __webpack_exports__["default"] = (fetchApi);


/***/ }),

/***/ "./src/images/logo-plane.svg":
/*!***********************************!*\
  !*** ./src/images/logo-plane.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/logo-plane.svg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _scripts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts.js */ "./src/scripts.js");
/* harmony import */ var _images_logo_plane_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/logo-plane.svg */ "./src/images/logo-plane.svg");







/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");
/* harmony import */ var _fetchApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchApi */ "./src/fetchApi.js");
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _traveler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./traveler */ "./src/traveler.js");
/* harmony import */ var _traveler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_traveler__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _agent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agent */ "./src/agent.js");
/* harmony import */ var _agent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_agent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _trip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trip */ "./src/trip.js");
/* harmony import */ var _trip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_trip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _destination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./destination */ "./src/destination.js");
/* harmony import */ var _destination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_destination__WEBPACK_IMPORTED_MODULE_6__);
// FILE IMPORTS











// QUERY SELECTORS AND GLOBAL VARIABLES
const travelerLoginButton = document.querySelector('#button-traveler')
const agentLoginButton = document.querySelector('#button-agent')
const logoffButton = document.querySelector('#button-logoff')
const addToTripsButton = document.querySelector('#button-add-trip')
const travelerDashboard = document.querySelector('.dashboard-user')
const agentDashboard = document.querySelector('.dashboard-agent')
const loginView = document.querySelector('.login')
const travelerUsername = document.querySelector('#name-traveler')
const destinationDropdown = document.querySelector('#planning--destination')
const dateInput = document.querySelector('#planning--date')
const estimatedCostOfTrip = document.querySelector('#planning--cost')
const durationDropdown = document.querySelector('#planning--duration')
const travelersDropdown = document.querySelector('#planning--travelers')
const tripMobileDropdown = document.querySelector('#trip--dropdown')
const agentMobileDropdown = document.querySelector('#traveler--dropdown')
const travelerSearchBar = document.querySelector('#traveler--search')

const currentAgent = new _agent__WEBPACK_IMPORTED_MODULE_4___default.a()
let currentTraveler


// EVENT LISTENERS
travelerLoginButton.addEventListener('click', authenticateUser)
agentLoginButton.addEventListener('click', authenticateUser)
logoffButton.addEventListener('click', logOffWebsite)
addToTripsButton.addEventListener('click', addToPendingTrips)
destinationDropdown.addEventListener('change', updateEstimatedCost)
durationDropdown.addEventListener('change', updateEstimatedCost)
travelersDropdown.addEventListener('change', updateEstimatedCost)
dateInput.addEventListener('change', validateForm)
tripMobileDropdown.addEventListener('change', changeTripView)
agentMobileDropdown.addEventListener('change', toggleTripAndTravelerView)
travelerSearchBar.addEventListener('keyup', searchForUser)


// FETCH SERVER DATA
let travelersResponse = _fetchApi__WEBPACK_IMPORTED_MODULE_1__["default"].getTravelers()
let tripsResponse = _fetchApi__WEBPACK_IMPORTED_MODULE_1__["default"].getAllTrips()
let destinationsResponse = _fetchApi__WEBPACK_IMPORTED_MODULE_1__["default"].getAllDestinations()

function reloadServerInformation() {
  travelersResponse = _fetchApi__WEBPACK_IMPORTED_MODULE_1__["default"].getTravelers()
  tripsResponse = _fetchApi__WEBPACK_IMPORTED_MODULE_1__["default"].getAllTrips()

  return Promise.all([travelersResponse, tripsResponse])
    .then(responses => {
      const allTravelers = responses[0].travelers
      const allTrips = responses[1].trips

      currentAgent.travelers = []
      currentAgent.trips = []

      populateAgentTravelers(allTravelers, allTrips)
      populateAgentTrips(allTrips)
      alphabetizeDataset(currentAgent.travelers, 'name')
    })
}

Promise.all([travelersResponse, tripsResponse, destinationsResponse])
  .then(responses => {
    const allTravelers = responses[0].travelers
    const allTrips = responses[1].trips
    const allDestinations= responses[2].destinations

    populateAgentTravelers(allTravelers, allTrips)
    populateAgentTrips(allTrips)
    populateAgentDestinations(allDestinations)
  })
  .then(populateDropdowns)


function populateAgentTravelers(allTravelers, allTrips) {
  allTravelers.forEach(traveler => {
    const newTraveler = new _traveler__WEBPACK_IMPORTED_MODULE_3___default.a(traveler)
    findTravelerTrips(allTrips, newTraveler)
    currentAgent.travelers.push(newTraveler)
  })
}

function populateAgentTrips(allTrips) {
  allTrips.forEach(trip => {
    const newTrip = new _trip__WEBPACK_IMPORTED_MODULE_5___default.a(trip)
    newTrip.formatDate()
    currentAgent.trips.push(newTrip)
  })
}

function populateAgentDestinations(allDestinations) {
  allDestinations.forEach(place => {
    const newDestination = new _destination__WEBPACK_IMPORTED_MODULE_6___default.a(place)
    currentAgent.destinations.push(newDestination)
  })
}


// USER INFORMATION POPULATION
function authenticateUser(event) {
  const travelerPassword = document.querySelector('#pass-traveler')
  const agentUsername = document.querySelector('#name-agent')
  const agentPassword = document.querySelector('#pass-agent')

  if (event.target.id === 'button-traveler' &&
      travelerUsername.value.includes('traveler') &&
      travelerPassword.value === 'travel2020') {

    loadTravelerDashboard()

  } else if (event.target.id === 'button-agent' &&
      agentUsername.value === 'agency' &&
      agentPassword.value === 'travel2020') {

    loadAgentDashboard()
  }
}

function loadTravelerDashboard() {
  logOnWebsite(travelerDashboard)
  clearAllTripDisplays()
  resetPlanningForm()
  const travelerID = travelerUsername.value.slice(8)

  _fetchApi__WEBPACK_IMPORTED_MODULE_1__["default"].getSpecificTraveler(travelerID)
    .then(traveler => createTravelerProfile(traveler))
}

function createTravelerProfile(traveler) {
  currentTraveler = currentAgent.travelers.find(user => user.id === traveler.id)
  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].populateTravelerGreeting(currentTraveler)

  findDestinationInformation()
  displayAmoutSpent()
}

function findTravelerTrips(allTrips, selectedTraveler = currentTraveler) {
  const travelerTrips = allTrips.filter(trip => {
    return trip.userID === selectedTraveler.id
  })

  travelerTrips.forEach(trip => {
    const newTrip = new _trip__WEBPACK_IMPORTED_MODULE_5___default.a(trip)
    newTrip.formatDate()
    selectedTraveler.trips.push(newTrip)
  })

  selectedTraveler.sortTripsByDate()
}

function clearAllTripDisplays() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].clearTripDisplays('Previous')
  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].clearTripDisplays('Present')
  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].clearTripDisplays('Upcoming')
  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].clearTripDisplays('Pending')
}

function displayAmoutSpent() {
  const totalSpentPrevious = document.querySelector('#spending--previous-amount')
  const totalSpentPresent = document.querySelector('#spending--present-amount')

  const previous = currentTraveler.calculateSpending(currentAgent.destinations, 2020)
  const present = currentTraveler.calculateSpending(currentAgent.destinations, 2021)

  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].addCostToProfile(totalSpentPrevious, previous)
  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].addCostToProfile(totalSpentPresent, present)
}

function addToPendingTrips() {
  createNewTrip()
  resetPlanningForm()
}

function createNewTrip() {
  const tripInformation = {
    id: 0,
    userID: Number(currentTraveler.id),
    destinationID: Number(destinationDropdown.value),
    travelers: Number(travelersDropdown.value),
    date: formatDateForPost(dateInput.value),
    duration: Number(durationDropdown.value),
    status: 'pending',
    suggestedActivities: []
  }

  const totalTrips = currentAgent.trips.length - 1
  tripInformation.id = currentAgent.trips[totalTrips].id + 1

  const newTrip = new _trip__WEBPACK_IMPORTED_MODULE_5___default.a(tripInformation)
  newTrip.formatDate()
  currentTraveler.trips.push(newTrip)

  _fetchApi__WEBPACK_IMPORTED_MODULE_1__["default"].postNewTrip(tripInformation)
  reloadServerInformation()
    .then(clearAllTripDisplays)
    .then(findDestinationInformation)
}

function changeTripView(event) {
  const tripSection = document.querySelector('#trip-user')
  tripSection.classList.remove('display-previous')
  tripSection.classList.remove('display-present')
  tripSection.classList.remove('display-upcoming')
  tripSection.classList.remove('display-pending')

  const dropdownValue = event.target.value
  tripSection.classList.add(`display-${dropdownValue}`)

  const tripDropdownMessage = document.querySelector('#trip--dropdown-message')
  if (!checkForTripType(dropdownValue)) {
    const message = `You do not have any ${dropdownValue} trips at this time`
    tripDropdownMessage.innerText = message
    tripDropdownMessage.style.display = 'inline-block'
  } else {
    tripDropdownMessage.style.display = 'none'
  }
}

function checkForTripType(dropdownValue) {
  const thisTripType = document.querySelector(`#trip--${dropdownValue}`)
  const tripList = thisTripType.querySelectorAll('article')

  if (tripList.length > 0) {
    return true
  }

  return false
}


// PLANNING FORM INFORMATION
function resetPlanningForm() {
  dateInput.value = ''
  destinationDropdown.value = 0
  durationDropdown.value = 1
  travelersDropdown.value = 1

  estimatedCostOfTrip.innerText = `Estimated Cost: $0.00`
}

function alphabetizeDataset(dataType, property) {
  dataType.sort((a, b) => {
    if (a[property] > b[property]) {
      return 1

    } else if (a[property] < b[property]) {
      return -1
    }
  })
}

function populateDropdowns() {
  alphabetizeDataset(currentAgent.destinations, 'destination')

  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].addDestinationsToDropdown(currentAgent.destinations, destinationDropdown)
  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].addNumbersToDropdowns(durationDropdown)
  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].addNumbersToDropdowns(travelersDropdown)
}

function updateEstimatedCost(event) {
  if (destinationDropdown.value) {
    const destination = findDestination(Number(destinationDropdown.value))
    const numDays = durationDropdown.value
    const numPeople = travelersDropdown.value

    const lodgingCost = destination.lodgingCostPerDay * numDays * numPeople
    const flightCost = destination.flightCostPerPerson * numPeople

    const price = ((lodgingCost + flightCost) * 1.1).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

    estimatedCostOfTrip.innerText = `Estimated Cost: $${price}`
  }

  validateForm()
}

function validateForm() {
  const selectedDate = new Date(dateInput.value)
  const dateDifference = determineDateDifference(selectedDate)

  if (destinationDropdown.value > 0 && dateDifference > 0) {
    addToTripsButton.disabled = false

  } else {
    addToTripsButton.disabled = true
  }
}


// AGENT FUNCTIONS
function loadAgentDashboard() {
  logOnWebsite(agentDashboard)
  alphabetizeDataset(currentAgent.travelers, 'name')

  loadTravelerInformation()
  populateAnnualIncome()
  populateTodaysTravelers()
}

function searchForUser(event) {
  const searchValue = event.target.value.toLowerCase()

  const travelerIDs = currentAgent.travelers.reduce((acc, curr) => {
    if (!curr.name.toLowerCase().includes(searchValue)) {
      acc.push(curr.id)
    }
    return acc
  }, [])

  unhideAllTravelers()
  hideUnsearchedTravelers(travelerIDs)
}

function unhideAllTravelers() {
  const allTravelers = document.querySelectorAll('.trip--card')
  allTravelers.forEach(traveler => traveler.classList.remove('hidden'))
}

function hideUnsearchedTravelers(travelerIDs) {
  travelerIDs.forEach(id => {
    document.getElementById(`${id}`).classList.add('hidden')
  })
}

function populateAnnualIncome() {
  const presentIncome = currentAgent.calculateTotalIncome(2021)
  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayAgentAnnualIncome(presentIncome)
}

function populateTodaysTravelers() {
  const todaysTrips = currentAgent.trips.filter(trip => {
    const daysPassed = determineDateDifference(trip.date)
    if (daysPassed < 0 && Math.abs(daysPassed) < trip.duration &&
        trip.status === 'approved') {
      return true
    }
    return false
  })
  const todaysTravelers = currentAgent.findTodaysTravelers(todaysTrips)
  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayTodaysTravelers(todaysTravelers)
}

function approvePendingTrip(event) {
  const tripID = event.target.getAttribute('tripID')
  const revisedTrip = {
    id: Number(tripID),
    status: 'approved'
  }

  _fetchApi__WEBPACK_IMPORTED_MODULE_1__["default"].postModifyTrip(revisedTrip)

  reloadServerInformation()
    .then(loadTravelerInformation)
}

function deletePendingTrip() {
  const tripID = event.target.getAttribute('tripID')
  _fetchApi__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTrip(Number(tripID))

  reloadServerInformation()
    .then(loadTravelerInformation)
}

function loadTravelerInformation() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].clearTravelerCardDisplays()

  currentAgent.travelers.forEach(traveler => {
    _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayTravelerInformation(traveler, currentAgent.destinations)
    _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayPendingTrips(traveler, currentAgent.destinations)
  })

  addPendingButtonEventListeners()
}

function toggleTripAndTravelerView(event) {
  const dropdownValue = event.target.value

  if (dropdownValue === 'trips') {
    checkForPendingTrips()
    agentDashboard.classList.add('display-trips')
    agentDashboard.classList.remove('display-travelers')

  } else {
    agentDashboard.classList.remove('display-trips')
    agentDashboard.classList.add('display-travelers')
  }
}

function checkForPendingTrips() {
  const pendingTrips = document.querySelector('#pending--article')
  const tripList = pendingTrips.querySelector('article')
  const pendingMessage = document.querySelector('#pending--message')

  if (!tripList) {
    pendingMessage.style.display = 'inline-block'
  } else {
    pendingMessage.style.display = 'none'
  }
}


// GENERAL FUNCTIONALITY
function findDestinationInformation() {
  currentTraveler.trips.forEach(trip => {
    const place = findDestination(trip.destinationID)
    const daysPassed = determineDateDifference(trip.date)

    _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"].displayDestinationInformation(trip, place, daysPassed)
  })
}

function findDestination(destinationID) {
  return currentAgent.destinations.find(dest => dest.id === destinationID)
}

function determineDateDifference(dateInput) {
  const today = new Date()
  const timeDifference = Date.parse(dateInput) - today
  return Math.ceil(timeDifference / (1000 * 60 * 60 * 24))
}

function formatDateForPost(dateInput) {
  const dateParts = dateInput.split('-')
  return dateParts.join('/')
}

function addPendingButtonEventListeners() {
  const approveButtons = document.querySelectorAll('.button-approve')
  const deleteButtons = document.querySelectorAll('.button-delete')

  approveButtons.forEach(button => {
    button.addEventListener('click', approvePendingTrip)
  })

  deleteButtons.forEach(button => {
    button.addEventListener('click', deletePendingTrip)
  })
}


// TOGGLE BETWEEN LOGIN AND DASHBOARD
function logOnWebsite(selectedDashboard) {
  selectedDashboard.classList.remove('hidden')
  loginView.classList.add('hidden')
  logoffButton.classList.remove('hidden')
}

function logOffWebsite() {
  loginView.classList.remove('hidden')
  travelerDashboard.classList.add('hidden')
  agentDashboard.classList.add('hidden')
  logoffButton.classList.add('hidden')
}


/***/ }),

/***/ "./src/traveler.js":
/*!*************************!*\
  !*** ./src/traveler.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Traveler {
  constructor(traveler) {
    this.id = traveler.id
    this.name = traveler.name
    this.type = traveler.travelerType
    this.trips = []
  }

  sortTripsByDate() {
    this.trips.sort((a, b) => {
      if (Date.parse(a.date) < Date.parse(b.date)) {
        return 1
      } else if (Date.parse(a.date) > Date.parse(b.date)) {
        return -1
      }
    })
  }

  calculateSpending(destinations, year) {
    let totalCost = 0

    this.trips.forEach(trip => {
      const tripDate = new Date(trip.date)
      const tripYear = tripDate.getFullYear()

      if (tripYear === year && trip.status !== 'pending') {
        const totalPerTrip = this.calculateCostPerTrip(trip, destinations)
        totalCost += totalPerTrip

      } else if (!year && trip.status !== 'pending') {
        const totalPerTrip = this.calculateCostPerTrip(trip, destinations)
        totalCost += totalPerTrip
      }
    })

    return (totalCost * 1.1).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  calculateCostPerTrip(trip, destinations) {
    const place = destinations.find(dest => dest.id === trip.destinationID)

    const totalLodging = place.lodgingCostPerDay * trip.duration
    const totalFlight = place.flightCostPerPerson
    return totalLodging + totalFlight
  }
}

module.exports = Traveler


/***/ }),

/***/ "./src/trip.js":
/*!*********************!*\
  !*** ./src/trip.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Trip {
  constructor(trip) {
    this.id = trip.id
    this.userID = trip.userID
    this.destinationID = trip.destinationID
    this.travelers = trip.travelers
    this.date = trip.date
    this.duration = trip.duration
    this.status = trip.status
    this.suggestedActivities = trip.suggestedActivities
  }

  determineTripStatus(daysPassed) {
    if (this.status === 'pending') {
      return 'Pending'

    } else if (Math.abs(daysPassed) <= this.duration) {
      return 'Present'

    } else if (daysPassed > 0 && daysPassed <= 30) {
      return 'Upcoming'
    }

    return 'Previous'
  }

  formatDate() {
    let dateParts

    if (this.date.includes('/')) {
      dateParts = this.date.split('/')

    } else if (this.date.includes('-')) {
      dateParts = this.date.split('-')
    }

    const newDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
    this.date = newDate.toDateString()
  }
}

module.exports = Trip


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzP2U5MDEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LnNjc3M/N2FiMSIsIndlYnBhY2s6Ly8vLi9zcmMvZGVzdGluYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZldGNoQXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbG9nby1wbGFuZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy90cmF2ZWxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJpcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7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REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqLyB9XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7IH1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLyogMSAqL1xcbiAgaGVpZ2h0OiAwO1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovIH1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlOyB9XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07IH1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07IH1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7IH1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIG1hcmdpbjogMDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAvKiAxICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvOyB9XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAvKiAxICovXFxuICBmb250OiBpbmhlcml0O1xcbiAgLyogMiAqLyB9XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07IH1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUFBO0FBRUE7K0VBQStFO0FBRy9FOzs7RUFDRTtBQUlGO0VBQ0UsaUJBQWlCO0VBQUUsTUFBQTtFQUNuQiw4QkFBOEI7RUFBRSxNQUFBLEVBQU87O0FBR3pDOytFQUQrRTtBQUkvRTs7RUFERTtBQUtGO0VBQ0UsU0FBUyxFQUFBOztBQUdYOztFQUhFO0FBT0Y7RUFDRSxjQUFjLEVBQUE7O0FBR2hCOzs7RUFKRTtBQVNGO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUdsQjsrRUFSK0U7QUFXL0U7OztFQVBFO0FBWUY7RUFDRSx1QkFBdUI7RUFBRSxNQUFBO0VBQ3pCLFNBQVM7RUFBRSxNQUFBO0VBQ1gsaUJBQWlCO0VBQUUsTUFBQSxFQUFPOztBQUc1Qjs7O0VBTkU7QUFXRjtFQUNFLGlDQUFpQztFQUFFLE1BQUE7RUFDbkMsY0FBYztFQUFFLE1BQUEsRUFBTzs7QUFHekI7K0VBUitFO0FBVy9FOztFQVJFO0FBWUY7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7OztFQVRFO0FBY0Y7RUFDRSxtQkFBbUI7RUFBRSxNQUFBO0VBQ3JCLDBCQUEwQjtFQUFFLE1BQUE7RUFDNUIsaUNBQWlDO0VBQUUsTUFBQSxFQUFPOztBQUc1Qzs7RUFURTtBQWFGOztFQUVFLG1CQUFtQixFQUFBOztBQUdyQjs7O0VBVkU7QUFlRjs7O0VBR0UsaUNBQWlDO0VBQUUsTUFBQTtFQUNuQyxjQUFjO0VBQUUsTUFBQSxFQUFPOztBQUd6Qjs7RUFYRTtBQWVGO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjs7O0VBWkU7QUFpQkY7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjsrRUFsQitFO0FBcUIvRTs7RUFsQkU7QUFzQkY7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7K0VBckIrRTtBQXdCL0U7OztFQXBCRTtBQXlCRjs7Ozs7RUFLRSxvQkFBb0I7RUFBRSxNQUFBO0VBQ3RCLGVBQWU7RUFBRSxNQUFBO0VBQ2pCLGlCQUFpQjtFQUFFLE1BQUE7RUFDbkIsU0FBUztFQUFFLE1BQUEsRUFBTzs7QUFHcEI7OztFQWxCRTtBQXVCRjs7RUFDUSxNQUFBO0VBQ04saUJBQWlCLEVBQUE7O0FBR25COzs7RUFuQkU7QUF3QkY7O0VBQ1MsTUFBQTtFQUNQLG9CQUFvQixFQUFBOztBQUd0Qjs7RUFyQkU7QUF5QkY7Ozs7RUFJRSwwQkFBMEIsRUFBQTs7QUFHNUI7O0VBdkJFO0FBMkJGOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjs7RUF6QkU7QUE2QkY7Ozs7RUFJRSw4QkFBOEIsRUFBQTs7QUFHaEM7O0VBM0JFO0FBK0JGO0VBQ0UsOEJBQThCLEVBQUE7O0FBR2hDOzs7OztFQTFCRTtBQWlDRjtFQUNFLHNCQUFzQjtFQUFFLE1BQUE7RUFDeEIsY0FBYztFQUFFLE1BQUE7RUFDaEIsY0FBYztFQUFFLE1BQUE7RUFDaEIsZUFBZTtFQUFFLE1BQUE7RUFDakIsVUFBVTtFQUFFLE1BQUE7RUFDWixtQkFBbUI7RUFBRSxNQUFBLEVBQU87O0FBRzlCOztFQXpCRTtBQTZCRjtFQUNFLHdCQUF3QixFQUFBOztBQUcxQjs7RUEzQkU7QUErQkY7RUFDRSxjQUFjLEVBQUE7O0FBR2hCOzs7RUE1QkU7QUFDRjs7RUFrQ0Usc0JBQXNCO0VBQUUsTUFBQTtFQUN4QixVQUFVO0VBQUUsTUFBQSxFQUFPOztBQUdyQjs7RUE3QkU7QUFDRjs7RUFrQ0UsWUFBWSxFQUFBOztBQUdkOzs7RUE5QkU7QUFDRjtFQW1DRSw2QkFBNkI7RUFBRSxNQUFBO0VBQy9CLG9CQUFvQjtFQUFFLE1BQUEsRUFBTzs7QUFHL0I7O0VBL0JFO0FBQ0Y7RUFtQ0Usd0JBQXdCLEVBQUE7O0FBRzFCOzs7RUFoQ0U7QUFxQ0Y7RUFDRSwwQkFBMEI7RUFBRSxNQUFBO0VBQzVCLGFBQWE7RUFBRSxNQUFBLEVBQU87O0FBR3hCOytFQWxDK0U7QUFxQy9FOztFQWxDRTtBQXNDRjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7O0VBcENFO0FBd0NGO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCOytFQXZDK0U7QUEwQy9FOztFQXZDRTtBQTJDRjtFQUNFLGFBQWEsRUFBQTs7QUFHZjs7RUF6Q0U7QUFDRjtFQTZDRSxhQUFhLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5LCBodG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzRDc2N0I7XFxuICBmb250LWZhbWlseTogXFxcIll1c2VpIE1hZ2ljXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDAgMXJlbSAwIDFyZW07XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuaDIsIGgzLCBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uYnV0dG9uLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQjEwMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIll1c2VpIE1hZ2ljXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHdpZHRoOiAxNTBweDsgfVxcbiAgLmJ1dHRvbi1wcmltYXJ5OmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0U2MztcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXFxuLmJ1dHRvbi1zZWNvbmRhcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQjEwMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIll1c2VpIE1hZ2ljXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUyNTY7XFxuICBjb2xvcjogI0ZGQ0U2MzsgfVxcbiAgLmJ1dHRvbi1zZWNvbmRhcnk6ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDRTYzO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi5oZWFkZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgMXJlbSAwIDFyZW07IH1cXG4gIC5oZWFkZXIgLmxvZ28ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAuaGVhZGVyIC5zbG9nYW4ge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAuaGVhZGVyIGltZyB7XFxuICAgIGhlaWdodDogNDBweDsgfVxcblxcbi5saXN0LXVub3JkZXJlZCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuICAubGlzdC11bm9yZGVyZWQgbGkge1xcbiAgICBmb250LXNpemU6IDE0cHg7IH1cXG5cXG4ud2VsY29tZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCMTAwO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmc6IDEuNXJlbTsgfVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiA4OCU7IH1cXG5cXG4uZGFzaGJvYXJkLXVzZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAwLjVyZW07XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwid2VsY29tZVVzZXIgcGxhbm5pbmdVc2VyIHBsYW5uaW5nVXNlciBwbGFubmluZ1VzZXJcXFwiIFxcXCJ0cmlwc1VzZXIgdHJpcHNVc2VyIHRyaXBzVXNlciB0cmlwc1VzZXJcXFwiO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4jd2VsY29tZS11c2VyIHtcXG4gIGdyaWQtYXJlYTogd2VsY29tZVVzZXI7IH1cXG5cXG4jcGxhbm5pbmctdXNlciB7XFxuICBncmlkLWFyZWE6IHBsYW5uaW5nVXNlcjsgfVxcblxcbiN0cmlwLXVzZXIge1xcbiAgZ3JpZC1hcmVhOiB0cmlwc1VzZXI7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmRhc2hib2FyZC11c2VyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG4gIC53ZWxjb21lLS1zcGVuZGluZyB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7IH1cXG4gICAgLndlbGNvbWUtLXNwZW5kaW5nIGRpdiB7XFxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAuaGVhZGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAuaGVhZGVyIC5zbG9nYW4ge1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC53ZWxjb21lIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07IH1cXG4gICAgLndlbGNvbWUtLXNwZW5kaW5nIHtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDgwJTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkwcHgpIHtcXG4gIC5oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxuICAud2VsY29tZS0tc3BlbmRpbmcgZGl2IHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfSB9XFxuXFxuLnBsYW5uaW5nLXVzZXIsXFxuLnBsYW5uaW5nLWFnZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUyNTY7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogI0ZGRUJDNjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nOiAxcmVtOyB9XFxuICAucGxhbm5pbmctdXNlciAuYnV0dG9uLFxcbiAgLnBsYW5uaW5nLWFnZW50IC5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCMTAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LWZhbWlseTogXFxcIll1c2VpIE1hZ2ljXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICB3aWR0aDogMTUwcHg7IH1cXG4gICAgLnBsYW5uaW5nLXVzZXIgLmJ1dHRvbjpkaXNhYmxlZCxcXG4gICAgLnBsYW5uaW5nLWFnZW50IC5idXR0b246ZGlzYWJsZWQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkNFNjM7XFxuICAgICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXFxuLnBsYW5uaW5nLS1ib3R0b20ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnBsYW5uaW5nLS1jb3N0IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTsgfVxcblxcbi5wbGFubmluZy0tZGF0ZSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBoZWlnaHQ6IDEuN3JlbTsgfVxcblxcbi5wbGFubmluZy0tZHJvcGRvd24ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgbWluLXdpZHRoOiAzcmVtOyB9XFxuXFxuLnBsYW5uaW5nLS1pbnB1dHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAwLjVyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgZ3JpZC1nYXA6IDFyZW07XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiZGF0ZSBkZXN0aW5hdGlvbiBkdXJhdGlvbiB0cmF2ZWxlcnNcXFwiO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ucGxhbm5pbmctLXRleHQge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWFyZ2luOiAwLjVyZW0gMCAwLjUgMDsgfVxcblxcbi5wbGFubmluZy0tdGl0bGUge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLmZvcm0tLXNlY3Rpb24ge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cXG5cXG4jaW5wdXQtZGF0ZSB7XFxuICBncmlkLWFyZWE6IGRhdGU7IH1cXG5cXG4jaW5wdXQtZGVzdGluYXRpb24ge1xcbiAgZ3JpZC1hcmVhOiBkZXN0aW5hdGlvbjsgfVxcblxcbiNpbnB1dC1kdXJhdGlvbiB7XFxuICBncmlkLWFyZWE6IGR1cmF0aW9uOyB9XFxuXFxuI2lucHV0LXRyYXZlbGVycyB7XFxuICBncmlkLWFyZWE6IHRyYXZlbGVyczsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLnBsYW5uaW5nLS1pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWdhcDogMC41cmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImRhdGUgZGVzdGluYXRpb25cXFwiIFxcXCJkdXJhdGlvbiB0cmF2ZWxlcnNcXFwiOyB9XFxuICAucGxhbm5pbmctLXRleHQge1xcbiAgICBtYXJnaW46IDAuNXJlbSAwIDAuNXJlbSAwOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLnBsYW5uaW5nLS1pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLnBsYW5uaW5nLS1kcm9wZG93biB7XFxuICAgIG1heC13aWR0aDogMTRyZW07IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5MHB4KSB7XFxuICAucGxhbm5pbmctLWRyb3Bkb3duIHtcXG4gICAgbWF4LXdpZHRoOiAxMnJlbTsgfSB9XFxuXFxuLmNhcmQtLWhlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5jYXJkLS1ib2R5IHtcXG4gIHBhZGRpbmc6IDAuNHJlbTsgfVxcblxcbi5jYXJkLS1pbWFnZSB7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi50cmlwLXVzZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAwLjVyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInByZXZpb3VzIHByZXNlbnQgdXBjb21pbmcgcGVuZGluZ1xcXCI7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLnRyaXAtLWFydGljbGUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDM4NDQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogI0ZGRUJDNjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHBhZGRpbmc6IDFyZW07IH1cXG5cXG4udHJpcC0tZm9ybSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLnRyaXAtLWNhcmQge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkVCQzY7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAjMDAyNjJFO1xcbiAgY29sb3I6ICMwMDM4NDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlOyB9XFxuICAudHJpcC0tY2FyZCBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luOiAycmVtIDAuNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxOyB9XFxuICAudHJpcC0tY2FyZCBoNCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG4gIC50cmlwLS1jYXJkIHAge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbjogMC41cmVtIDA7IH1cXG5cXG4udHJpcC0tY2FyZDpob3ZlciB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG4gIC50cmlwLS1jYXJkOmhvdmVyIC5jYXJkLS1pbWFnZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbSAwLjVyZW0gMCAwO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgICB6LWluZGV4OiAwOyB9XFxuICAudHJpcC0tY2FyZDpob3ZlciBoMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBvcGFjaXR5OiAwLjg7IH1cXG5cXG4udXNlci0tY2FyZCBoMyB7XFxuICBtYXJnaW4tdG9wOiAxcmVtOyB9XFxuXFxuI3RyaXAtLWRyb3Bkb3duLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDFyZW07IH1cXG5cXG4jdHJpcC0tcHJlc2VudCB7XFxuICBncmlkLWFyZWE6IHByZXNlbnQ7IH1cXG5cXG4jdHJpcC0tdXBjb21pbmcge1xcbiAgZ3JpZC1hcmVhOiB1cGNvbWluZzsgfVxcblxcbiN0cmlwLS1wZW5kaW5nIHtcXG4gIGdyaWQtYXJlYTogcGVuZGluZzsgfVxcblxcbiN0cmlwLS1wcmV2aW91cyB7XFxuICBncmlkLWFyZWE6IHByZXZpb3VzOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5kaXNwbGF5LXByZXZpb3VzIC50cmlwLS1hcnRpY2xlOm5vdCgucHJldmlvdXMpIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuICAuZGlzcGxheS1wcmVzZW50IC50cmlwLS1hcnRpY2xlOm5vdCgucHJlc2VudCkge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG4gIC5kaXNwbGF5LXVwY29taW5nIC50cmlwLS1hcnRpY2xlOm5vdCgudXBjb21pbmcpIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuICAuZGlzcGxheS1wZW5kaW5nIC50cmlwLS1hcnRpY2xlOm5vdCgucGVuZGluZykge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG4gIC5jYXJkLS1pbWFnZSB7XFxuICAgIG9wYWNpdHk6IDAuNTsgfVxcbiAgLnRyaXAtLWFydGljbGUge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcGFkZGluZy10b3A6IDRyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDRyZW07IH1cXG4gICAgLnRyaXAtLWFydGljbGUgaDIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcbiAgLnRyaXAtLWNhcmQge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHdpZHRoOiBhdXRvOyB9XFxuICAudHJpcC0tZm9ybSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjRkZDRTYzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgbWluLWhlaWdodDogNzBweDtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC50cmlwLXVzZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC50cmlwLS1jYXJkIHtcXG4gICAgd2lkdGg6IDkwJTsgfSB9XFxuXFxuLmxvZ2luIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC5sb2dpbiBoMiB7XFxuICAgIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCBibGFjazsgfVxcblxcbi5sb2dpbi0tbWFpbiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzg0NDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3gtc2hhZG93OiA0cHggNHB4IDZweCAxcHggIzAwMjYyRTtcXG4gIGNvbG9yOiAjRkZDRTYzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogODB2aDtcXG4gIHdpZHRoOiA4MHZ3OyB9XFxuXFxuLmxvZ2luLS1ib2R5IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLmxvZ2luLS1ib2R5IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkIxMDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiWXVzZWkgTWFnaWNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTI1NjtcXG4gICAgY29sb3I6ICNGRkNFNjM7IH1cXG4gICAgLmxvZ2luLS1ib2R5IGJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0U2MztcXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG4gICAgLmxvZ2luLS1ib2R5IGJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNENzY3QjsgfVxcblxcbi5sb2dpbi0tZm9ybSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQjEwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggNnB4IDFweCAjMDAyNjJFO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGhlaWdodDogMjVyZW07XFxuICBtYXJnaW46IDJyZW07XFxuICB3aWR0aDogMTVyZW07IH1cXG4gIC5sb2dpbi0tZm9ybSBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgaGVpZ2h0OiAyNXB4OyB9XFxuXFxuLmxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0U2MztcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDFweDsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAubG9naW4tLW1haW4ge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiBhdXRvOyB9XFxuICAubGluZSB7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICB3aWR0aDogOTAlOyB9XFxuICAubG9naW4tLWJvZHkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgLmxvZ2luLS1mb3JtIHtcXG4gICAgaGVpZ2h0OiAxMnJlbTtcXG4gICAgd2lkdGg6IDIwcmVtOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDVweCkge1xcbiAgLmxvZ2luLS1mb3JtIHtcXG4gICAgaGVpZ2h0OiAxM3JlbTtcXG4gICAgd2lkdGg6IDE1cmVtOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogODUlOyB9XFxuICAubG9naW4ge1xcbiAgICBoZWlnaHQ6IDEwMCU7IH1cXG4gIC5sb2dpbi0tYm9keSB7XFxuICAgIHBhZGRpbmc6IDAgMC41cmVtIDAgMC41cmVtOyB9XFxuICAubG9naW4tLWZvcm0ge1xcbiAgICBtYXJnaW46IDFyZW07IH1cXG4gIGlucHV0IHtcXG4gICAgbWF4LXdpZHRoOiAxMHJlbTsgfSB9XFxuXFxuLnRyYXZlbGVyLS1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07IH1cXG5cXG4udHJhdmVsZXItLWNhcmRzLFxcbi5wZW5kaW5nLS1jYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBhdXRvOyB9XFxuXFxuLmJ1dHRvbi1hcHByb3ZlIHtcXG4gIG1hcmdpbi10b3A6IDAuNnJlbTsgfVxcblxcbi5idXR0b24tZGVsZXRlIHtcXG4gIG1hcmdpbjogMC4ycmVtIDA7IH1cXG5cXG4uZGFzaGJvYXJkLWFnZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMC41cmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJ3ZWxjb21lQWdlbnQgcGxhbm5pbmdBZ2VudCBwbGFubmluZ0FnZW50IHBsYW5uaW5nQWdlbnRcXFwiIFxcXCJ0cmlwc0FnZW50IHBsYW5uaW5nQWdlbnQgcGxhbm5pbmdBZ2VudCBwbGFubmluZ0FnZW50XFxcIiBcXFwidHJpcHNBZ2VudCBwbGFubmluZ0FnZW50IHBsYW5uaW5nQWdlbnQgcGxhbm5pbmdBZ2VudFxcXCI7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4ucGVuZGluZy0tYXJ0aWNsZSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzg0NDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGNvbG9yOiAjRkZFQkM2O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcGFkZGluZzogMXJlbTsgfVxcblxcbi5wbGFubmluZy1hZ2VudCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgbWF4LWhlaWdodDogbm9uZTtcXG4gIHdpZHRoOiA5MCU7IH1cXG4gIC5wbGFubmluZy1hZ2VudCAudHJpcC0tY2FyZCB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgd2lkdGg6IDMwMHB4OyB9XFxuICAgIC5wbGFubmluZy1hZ2VudCAudHJpcC0tY2FyZCB0YWJsZSB7XFxuICAgICAgYm9yZGVyLXNwYWNpbmc6IDAuNXJlbSAwO1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gICAgICAucGxhbm5pbmctYWdlbnQgLnRyaXAtLWNhcmQgdGFibGUgdGhlYWQge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG4gICAgLnBsYW5uaW5nLWFnZW50IC50cmlwLS1jYXJkIGgzIHtcXG4gICAgICBtYXJnaW46IDFyZW0gMCAwIDA7IH1cXG5cXG4udHJhdmVsZXItLWZvcm0ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi50cmF2ZWxlci0tc2VhcmNoIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMDBweDsgfVxcblxcbi51c2VyLS1jYXJkIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFQkM2O1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggIzAwMjYyRTtcXG4gIGNvbG9yOiAjMDAzODQ0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTsgfVxcblxcbi53ZWxjb21lIGgzIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuI3BlbmRpbmctLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbiN3ZWxjb21lLWFnZW50IHtcXG4gIGdyaWQtYXJlYTogd2VsY29tZUFnZW50OyB9XFxuXFxuI3BsYW5uaW5nLWFnZW50IHtcXG4gIGdyaWQtYXJlYTogcGxhbm5pbmdBZ2VudDsgfVxcblxcbiNwZW5kaW5nLS1hcnRpY2xlIHtcXG4gIGdyaWQtYXJlYTogdHJpcHNBZ2VudDsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkxMHB4KSB7XFxuICAuZGFzaGJvYXJkLWFnZW50IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIndlbGNvbWVBZ2VudCB3ZWxjb21lQWdlbnQgd2VsY29tZUFnZW50XFxcIiBcXFwidHJpcHNBZ2VudCBwbGFubmluZ0FnZW50IHBsYW5uaW5nQWdlbnRcXFwiIFxcXCJ0cmlwc0FnZW50IHBsYW5uaW5nQWdlbnQgcGxhbm5pbmdBZ2VudFxcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC42ZnIgMWZyIDFmcjsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzEwcHgpIHtcXG4gIC5kYXNoYm9hcmQtYWdlbnQge1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwid2VsY29tZUFnZW50IHdlbGNvbWVBZ2VudFxcXCIgXFxcInRyaXBzQWdlbnQgcGxhbm5pbmdBZ2VudFxcXCIgXFxcInRyaXBzQWdlbnQgcGxhbm5pbmdBZ2VudFxcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjZmciAxZnI7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICBoMSB7XFxuICAgIG1hcmdpbjogMC40cmVtOyB9XFxuICAuYWdlbnQtLWJvZHkgaDIge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAuZGFzaGJvYXJkLWFnZW50IHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmRpc3BsYXktdHJpcHMgLmFnZW50LS1ib2R5Om5vdCgudHJpcHMpIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuICAuZGlzcGxheS10cmF2ZWxlcnMgLmFnZW50LS1ib2R5Om5vdCgudHJhdmVsZXJzKSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcbiAgLnBlbmRpbmctLWFydGljbGUsXFxuICAucGxhbm5pbmctYWdlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzODQ0O1xcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgfVxcbiAgLnRyaXAtLWNhcmQge1xcbiAgICBtYXgtd2lkdGg6IDI3MHB4OyB9XFxuICAudHJhdmVsZXItLWZvcm0tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAudHJhdmVsZXItLWZvcm0ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogI0ZGQ0U2MztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAud2VsY29tZSB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogOTAlOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19wbGFucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL190cmlwcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19sb2dpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19hZ2VudC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UseUJDdUVrQjtFRHRFbEIsc0NDMkVzQztFRDFFdEMsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdaO0VDaEJFLHlCQTRFbUI7RUEzRW5CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixzQ0EyRXNDO0VBMUV0QyxlQUFlO0VBQ2YsWUFBWSxFQUFBO0VBRVo7SUFDRSx5QkFtRWlCO0lBbEVqQixlQUFlLEVBQUE7O0FEU25CO0VDcEJFLHlCQTRFbUI7RUEzRW5CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixzQ0EyRXNDO0VBMUV0QyxlQUFlO0VBQ2YsWUFBWTtFQVVaLHlCQXlEMEI7RUF4RDFCLGNBMkRtQixFQUFBO0VBcEVuQjtJQUNFLHlCQW1FaUI7SUFsRWpCLGVBQWUsRUFBQTs7QURhbkI7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsc0JBQXNCLEVBQUE7RUFMeEI7SUFRSSxtQkFB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QjtJQUNuQixjQXdDbUI7SUF2Q25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULFNBQVM7SUltSFAsU0FBUztJQUNULFdBQVcsRUFBQTtFQUdiO0lBQ0UsY0FBYztJQUNkLFVBQVUsRUFBQSxFQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJvZHksIGh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW1pbmc7XFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDAgMXJlbSAwIDFyZW07XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5oMiwgaDMsIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmJ1dHRvbi1wcmltYXJ5IHtcXG4gIEBpbmNsdWRlIGJ1dHRvbi1wcmltYXJ5O1xcbn1cXG5cXG4uYnV0dG9uLXNlY29uZGFyeSB7XFxuICBAaW5jbHVkZSBidXR0b24tc2Vjb25kYXJ5O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAxcmVtIDAgMXJlbTtcXG5cXG4gIC5sb2dvIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC5zbG9nYW4ge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgfVxcbn1cXG5cXG4ubGlzdC11bm9yZGVyZWQge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIGxpIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcbn1cXG5cXG4ud2VsY29tZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItaG9uZXk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAvLyBib3gtc2hhZG93OiAzcHggM3B4IDRweCAkY29sb3ItZGVlcC1qdW5nbGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogODglO1xcbn1cXG5cXG4uZGFzaGJvYXJkLXVzZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAwLjVyZW07XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgXFxcIndlbGNvbWVVc2VyIHBsYW5uaW5nVXNlciBwbGFubmluZ1VzZXIgcGxhbm5pbmdVc2VyXFxcIlxcbiAgXFxcInRyaXBzVXNlciB0cmlwc1VzZXIgdHJpcHNVc2VyIHRyaXBzVXNlclxcXCI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3dlbGNvbWUtdXNlciB7XFxuICBncmlkLWFyZWE6IHdlbGNvbWVVc2VyO1xcbn1cXG5cXG4jcGxhbm5pbmctdXNlciB7XFxuICBncmlkLWFyZWE6IHBsYW5uaW5nVXNlcjtcXG59XFxuXFxuI3RyaXAtdXNlciB7XFxuICBncmlkLWFyZWE6IHRyaXBzVXNlcjtcXG59XFxuXFxuXFxuLy8gTUVESUEgU0NSRUVOU1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuZGFzaGJvYXJkLXVzZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB9XFxuXFxuICAud2VsY29tZS0tc3BlbmRpbmcge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcblxcbiAgICBkaXYge1xcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAuaGVhZGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgLnNsb2dhbiB7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgfVxcblxcbiAgLndlbGNvbWUge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG5cXG4gICAgJi0tc3BlbmRpbmcge1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5MHB4KSB7XFxuICAuaGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIH1cXG5cXG4gIC53ZWxjb21lLS1zcGVuZGluZyBkaXYge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cIixcIkBtaXhpbiBidXR0b24tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItaG9uZXk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICB3aWR0aDogMTUwcHg7XFxuXFxuICAmOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW1haXplO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBidXR0b24tc2Vjb25kYXJ5IHtcXG4gIEBpbmNsdWRlIGJ1dHRvbi1wcmltYXJ5XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItanVuZ2xlLWdyZWVuO1xcbiAgY29sb3I6ICRjb2xvci1tYWl6ZTtcXG59XFxuXFxuQG1peGluIGdyaWQtcHJlc2V0cy00eDEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAwLjVyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG5AbWl4aW4gZ3JpZC1wcmVzZXRzLTJ4MiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDAuNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuQG1peGluIG1vYmlsZS1kcm9wZG93biB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICRjb2xvci1tYWl6ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIHRvcDogMXJlbTtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuQG1peGluIGNhcmQtcHJlc2V0IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYWxtb25kO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggJGNvbG9yLWRlZXAtanVuZ2xlO1xcbiAgY29sb3I6ICRjb2xvci1lYWdsZS1ncmVlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbkBtaXhpbiBhcnRpY2xlLXByZXNldCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWVhZ2xlLWdyZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY29sb3I6ICRjb2xvci1hbG1vbmQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4kY29sb3ItZGVlcC1qdW5nbGU6ICMwMDI2MkU7IC8vIHNoYWRvdyBjb2xvclxcbiRjb2xvci1lYWdsZS1ncmVlbjogIzAwMzg0NDsgLy8gZGFya2VzdCBncmVlblxcbiRjb2xvci1qdW5nbGUtZ3JlZW46ICMwMDUyNTY7IC8vIG1pZCBncmVlblxcbiRjb2xvci1taW5nOiAjM0Q3NjdCOyAvLyBsaWdodCBncmVlblxcbiRjb2xvci1ob25leTogI0ZGQjEwMDsgLy8gYnJpZ2h0IHllbGxvd1xcbiRjb2xvci1tYWl6ZTogI0ZGQ0U2MzsgLy8gbGlnaHQgeWVsbG93XFxuJGNvbG9yLWFsbW9uZDogI0ZGRUJDNjsgLy8gbGlnaHQgdGFuXFxuXFxuJGZvbnQtcHJpbWFyeTogJ1l1c2VpIE1hZ2ljJywgc2Fucy1zZXJpZjtcXG5cIixcIi5wbGFubmluZy11c2VyLFxcbi5wbGFubmluZy1hZ2VudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItanVuZ2xlLWdyZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgLy8gYm94LXNoYWRvdzogM3B4IDNweCA0cHggJGNvbG9yLWRlZXAtanVuZ2xlO1xcbiAgY29sb3I6ICRjb2xvci1hbG1vbmQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZzogMXJlbTtcXG5cXG4gIC5idXR0b24ge1xcbiAgICBAaW5jbHVkZSBidXR0b24tcHJpbWFyeTtcXG4gIH1cXG59XFxuXFxuLnBsYW5uaW5nIHtcXG4gICYtLWJvdHRvbSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gICYtLWNvc3Qge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxuICB9XFxuXFxuICAmLS1kYXRlIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBoZWlnaHQ6IDEuN3JlbTtcXG4gIH1cXG5cXG4gICYtLWRyb3Bkb3duIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIG1pbi13aWR0aDogM3JlbTtcXG4gIH1cXG5cXG4gICYtLWlucHV0cyB7XFxuICAgIEBpbmNsdWRlIGdyaWQtcHJlc2V0cy00eDE7XFxuICAgIGdyaWQtZ2FwOiAxcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgIFxcXCJkYXRlIGRlc3RpbmF0aW9uIGR1cmF0aW9uIHRyYXZlbGVyc1xcXCI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgJi0tdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMCAwLjUgMDtcXG4gICAgLy8gbWFyZ2luOiAwLjJyZW0gMCAwIDA7XFxuICB9XFxuXFxuICAmLS10aXRsZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG59XFxuXFxuLmZvcm0tLXNlY3Rpb24ge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbiNwbGFubmluZy0td2FybmluZyB7XFxuICAvLyBtYXJnaW46IDAuNXJlbSAwIDAgMDtcXG59XFxuXFxuI2lucHV0LWRhdGUge1xcbiAgZ3JpZC1hcmVhOiBkYXRlO1xcbn1cXG5cXG4jaW5wdXQtZGVzdGluYXRpb24ge1xcbiAgZ3JpZC1hcmVhOiBkZXN0aW5hdGlvbjtcXG59XFxuXFxuI2lucHV0LWR1cmF0aW9uIHtcXG4gIGdyaWQtYXJlYTogZHVyYXRpb247XFxufVxcblxcbiNpbnB1dC10cmF2ZWxlcnMge1xcbiAgZ3JpZC1hcmVhOiB0cmF2ZWxlcnM7XFxufVxcblxcbi8vIE1FRElBIFNDUkVFTiBTSVpFU1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLnBsYW5uaW5nIHtcXG4gICAgJi0taW5wdXRzIHtcXG4gICAgICBAaW5jbHVkZSBncmlkLXByZXNldHMtMngyO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiZGF0ZSBkZXN0aW5hdGlvblxcXCJcXG4gICAgICAgIFxcXCJkdXJhdGlvbiB0cmF2ZWxlcnNcXFwiO1xcbiAgICB9XFxuXFxuICAgICYtLXRleHQge1xcbiAgICAgIG1hcmdpbjogMC41cmVtIDAgMC41cmVtIDA7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC5wbGFubmluZyB7XFxuICAgICYtLWlucHV0cyB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgJi0tZHJvcGRvd24ge1xcbiAgICAgIG1heC13aWR0aDogMTRyZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkwcHgpIHtcXG4gIC5wbGFubmluZy0tZHJvcGRvd24ge1xcbiAgICBtYXgtd2lkdGg6IDEycmVtO1xcbiAgfVxcbn1cXG5cIixcIi5jYXJkIHtcXG4gICYtLWhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAmLS1ib2R5IHtcXG4gICAgcGFkZGluZzogMC40cmVtO1xcbiAgfVxcblxcbiAgJi0taW1hZ2Uge1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLnRyaXAtdXNlciB7XFxuICBAaW5jbHVkZSBncmlkLXByZXNldHMtNHgxXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwicHJldmlvdXMgcHJlc2VudCB1cGNvbWluZyBwZW5kaW5nXFxcIjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50cmlwIHtcXG4gICYtLWFydGljbGUge1xcbiAgICBAaW5jbHVkZSBhcnRpY2xlLXByZXNldDtcXG4gIH1cXG5cXG4gICYtLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4udHJpcC0tY2FyZCB7XFxuICBAaW5jbHVkZSBjYXJkLXByZXNldDtcXG5cXG4gIGgzIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW46IDJyZW0gMC41cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuICBoNCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB9XFxuXFxuICBwIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xcbiAgfVxcbn1cXG5cXG4udHJpcC0tY2FyZDpob3ZlciB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuXFxuICAuY2FyZC0taW1hZ2Uge1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW0gMC41cmVtIDAgMDtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG4gICAgei1pbmRleDogMDtcXG4gIH1cXG5cXG4gIGgzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gIH1cXG59XFxuXFxuLnVzZXItLWNhcmQgaDMge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuI3RyaXAtLWRyb3Bkb3duLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbiN0cmlwLS1wcmVzZW50IHtcXG4gIGdyaWQtYXJlYTogcHJlc2VudDtcXG59XFxuXFxuI3RyaXAtLXVwY29taW5nIHtcXG4gIGdyaWQtYXJlYTogdXBjb21pbmc7XFxufVxcblxcbiN0cmlwLS1wZW5kaW5nIHtcXG4gIGdyaWQtYXJlYTogcGVuZGluZztcXG59XFxuXFxuI3RyaXAtLXByZXZpb3VzIHtcXG4gIGdyaWQtYXJlYTogcHJldmlvdXM7XFxufVxcblxcbi8vIE1FRElBIFNDUkVFTlNcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmRpc3BsYXktcHJldmlvdXMgLnRyaXAtLWFydGljbGU6bm90KC5wcmV2aW91cykge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuZGlzcGxheS1wcmVzZW50IC50cmlwLS1hcnRpY2xlOm5vdCgucHJlc2VudCkge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuZGlzcGxheS11cGNvbWluZyAudHJpcC0tYXJ0aWNsZTpub3QoLnVwY29taW5nKSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5kaXNwbGF5LXBlbmRpbmcgLnRyaXAtLWFydGljbGU6bm90KC5wZW5kaW5nKSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5jYXJkLS1pbWFnZSB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gIH1cXG5cXG4gIC50cmlwLS1hcnRpY2xlIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xcbiAgICBtaW4taGVpZ2h0OiA0cmVtO1xcblxcbiAgICBoMiB7XFxuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB9XFxuICB9XFxuXFxuICAudHJpcC0tY2FyZCB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuXFxuICAudHJpcC0tZm9ybSB7XFxuICAgIEBpbmNsdWRlIG1vYmlsZS1kcm9wZG93bjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC50cmlwLXVzZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC50cmlwLS1jYXJkIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG59XFxuXCIsXCIubG9naW4ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGgyIHtcXG4gICAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4IGJsYWNrO1xcbiAgfVxcbn1cXG5cXG4ubG9naW4tLW1haW4ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1lYWdsZS1ncmVlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3gtc2hhZG93OiA0cHggNHB4IDZweCAxcHggJGNvbG9yLWRlZXAtanVuZ2xlO1xcbiAgY29sb3I6ICRjb2xvci1tYWl6ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICB3aWR0aDogODB2dztcXG59XFxuXFxuLmxvZ2luLS1ib2R5IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGJ1dHRvbiB7XFxuICAgIEBpbmNsdWRlIGJ1dHRvbi1zZWNvbmRhcnk7XFxuXFxuICAgICY6ZGlzYWJsZWQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1taW5nO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5sb2dpbi0tZm9ybSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWhvbmV5O1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCA2cHggMXB4ICRjb2xvci1kZWVwLWp1bmdsZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBoZWlnaHQ6IDI1cmVtO1xcbiAgbWFyZ2luOiAycmVtO1xcbiAgd2lkdGg6IDE1cmVtO1xcblxcbiAgaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gIH1cXG59XFxuXFxuLmxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW1haXplO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogMXB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmxvZ2luLS1tYWluIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG5cXG4gIC5saW5lIHtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuXFxuICAubG9naW4tLWJvZHkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5sb2dpbi0tZm9ybSB7XFxuICAgIGhlaWdodDogMTJyZW07XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQ1cHgpIHtcXG4gIC5sb2dpbi0tZm9ybSB7XFxuICAgIGhlaWdodDogMTNyZW07XFxuICAgIHdpZHRoOiAxNXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDg1JTtcXG4gIH1cXG5cXG4gIC5sb2dpbiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gIC5sb2dpbi0tYm9keSB7XFxuICAgIHBhZGRpbmc6IDAgMC41cmVtIDAgMC41cmVtO1xcbiAgfVxcblxcbiAgLmxvZ2luLS1mb3JtIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgfVxcblxcbiAgaW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDEwcmVtO1xcbiAgfVxcbn1cXG5cIixcIi50cmF2ZWxlci0taGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4udHJhdmVsZXItLWNhcmRzLFxcbi5wZW5kaW5nLS1jYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uYnV0dG9uLWFwcHJvdmUge1xcbiAgbWFyZ2luLXRvcDogMC42cmVtO1xcbn1cXG5cXG4uYnV0dG9uLWRlbGV0ZSB7XFxuICBtYXJnaW46IDAuMnJlbSAwO1xcbn1cXG5cXG4uZGFzaGJvYXJkLWFnZW50IHtcXG4gIEBpbmNsdWRlIGdyaWQtcHJlc2V0cy00eDFcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ3ZWxjb21lQWdlbnQgcGxhbm5pbmdBZ2VudCBwbGFubmluZ0FnZW50IHBsYW5uaW5nQWdlbnRcXFwiXFxuICAgIFxcXCJ0cmlwc0FnZW50IHBsYW5uaW5nQWdlbnQgcGxhbm5pbmdBZ2VudCBwbGFubmluZ0FnZW50XFxcIlxcbiAgICBcXFwidHJpcHNBZ2VudCBwbGFubmluZ0FnZW50IHBsYW5uaW5nQWdlbnQgcGxhbm5pbmdBZ2VudFxcXCI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wZW5kaW5nLS1hcnRpY2xlIHtcXG4gIEBpbmNsdWRlIGFydGljbGUtcHJlc2V0O1xcbn1cXG5cXG4ucGxhbm5pbmctYWdlbnQge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIG1heC1oZWlnaHQ6IG5vbmU7XFxuICB3aWR0aDogOTAlO1xcblxcbiAgLnRyaXAtLWNhcmQge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHdpZHRoOiAzMDBweDtcXG5cXG4gICAgdGFibGUge1xcbiAgICAgIGJvcmRlci1zcGFjaW5nOiAwLjVyZW0gMDtcXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcbiAgICAgIHRoZWFkIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBoMyB7XFxuICAgICAgbWFyZ2luOiAxcmVtIDAgMCAwO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi50cmF2ZWxlci0tZm9ybSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udHJhdmVsZXItLXNlYXJjaCB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi51c2VyLS1jYXJkIHtcXG4gIEBpbmNsdWRlIGNhcmQtcHJlc2V0O1xcbn1cXG5cXG4ud2VsY29tZSBoMyB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI3BlbmRpbmctLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3dlbGNvbWUtYWdlbnQge1xcbiAgZ3JpZC1hcmVhOiB3ZWxjb21lQWdlbnQ7XFxufVxcblxcbiNwbGFubmluZy1hZ2VudCB7XFxuICBncmlkLWFyZWE6IHBsYW5uaW5nQWdlbnQ7XFxufVxcblxcbiNwZW5kaW5nLS1hcnRpY2xlIHtcXG4gIGdyaWQtYXJlYTogdHJpcHNBZ2VudDtcXG59XFxuXFxuXFxuLy8gTUVESUEgU0NSRUVOU1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkxMHB4KSB7XFxuICAuZGFzaGJvYXJkLWFnZW50IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICBcXFwid2VsY29tZUFnZW50IHdlbGNvbWVBZ2VudCB3ZWxjb21lQWdlbnRcXFwiXFxuICAgICAgXFxcInRyaXBzQWdlbnQgcGxhbm5pbmdBZ2VudCBwbGFubmluZ0FnZW50XFxcIlxcbiAgICAgIFxcXCJ0cmlwc0FnZW50IHBsYW5uaW5nQWdlbnQgcGxhbm5pbmdBZ2VudFxcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC42ZnIgMWZyIDFmcjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzEwcHgpIHtcXG4gIC5kYXNoYm9hcmQtYWdlbnQge1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgIFxcXCJ3ZWxjb21lQWdlbnQgd2VsY29tZUFnZW50XFxcIlxcbiAgICAgIFxcXCJ0cmlwc0FnZW50IHBsYW5uaW5nQWdlbnRcXFwiXFxuICAgICAgXFxcInRyaXBzQWdlbnQgcGxhbm5pbmdBZ2VudFxcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjZmciAxZnI7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICBoMSB7XFxuICAgIG1hcmdpbjogMC40cmVtO1xcbiAgfVxcblxcbiAgLmFnZW50LS1ib2R5IGgyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5kYXNoYm9hcmQtYWdlbnQge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmRpc3BsYXktdHJpcHMgLmFnZW50LS1ib2R5Om5vdCgudHJpcHMpIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmRpc3BsYXktdHJhdmVsZXJzIC5hZ2VudC0tYm9keTpub3QoLnRyYXZlbGVycykge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAucGVuZGluZy0tYXJ0aWNsZSxcXG4gIC5wbGFubmluZy1hZ2VudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1lYWdsZS1ncmVlbjtcXG4gICAgcGFkZGluZy10b3A6IDRyZW07XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICB9XFxuXFxuICAudHJpcC0tY2FyZCB7XFxuICAgIG1heC13aWR0aDogMjcwcHg7XFxuICB9XFxuXFxuICAudHJhdmVsZXItLWZvcm0tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnRyYXZlbGVyLS1mb3JtIHtcXG4gICAgQGluY2x1ZGUgbW9iaWxlLWRyb3Bkb3duO1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLndlbGNvbWUge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjbGFzcyBBZ2VudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudHJhdmVsZXJzID0gW11cbiAgICB0aGlzLnRyaXBzID0gW11cbiAgICB0aGlzLmRlc3RpbmF0aW9ucyA9IFtdXG4gIH1cblxuICBjYWxjdWxhdGVUb3RhbEluY29tZSh5ZWFyKSB7XG4gICAgbGV0IHRvdGFsSW5jb21lID0gMFxuICAgIGNvbnN0IHllYXJUcmlwcyA9IHRoaXMuZmluZFllYXJUcmlwcyh5ZWFyKVxuXG4gICAgeWVhclRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBjb25zdCBsb2NhdGlvbiA9IHRoaXMuZGVzdGluYXRpb25zLmZpbmQocGxhY2UgPT4gcGxhY2UuaWQgPT09IHRyaXAuZGVzdGluYXRpb25JRClcblxuICAgICAgY29uc3QgbG9kZ2luZ0luY29tZSA9IHRyaXAudHJhdmVsZXJzICogdHJpcC5kdXJhdGlvbiAqIGxvY2F0aW9uLmxvZGdpbmdDb3N0UGVyRGF5XG4gICAgICBjb25zdCBmbGlnaHRJbmNvbWUgPSB0cmlwLnRyYXZlbGVycyAqIGxvY2F0aW9uLmZsaWdodENvc3RQZXJQZXJzb25cbiAgICAgIHRvdGFsSW5jb21lICs9IChsb2RnaW5nSW5jb21lICsgZmxpZ2h0SW5jb21lKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKHRvdGFsSW5jb21lICogMC4xKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJcbiAgICB9KVxuICB9XG5cbiAgZmluZFllYXJUcmlwcyh5ZWFyKSB7XG4gICAgbGV0IHllYXJUcmlwcyA9IFtdXG5cbiAgICB0aGlzLnRyYXZlbGVycy5mb3JFYWNoKHRyYXZlbGVyID0+IHtcbiAgICAgIHRyYXZlbGVyLnRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICAgIGlmICh0cmlwLmRhdGUuaW5jbHVkZXMoYCR7eWVhcn1gKSAmJiB0cmlwLnN0YXR1cyAhPT0gJ3BlbmRpbmcnKSB7XG4gICAgICAgICAgeWVhclRyaXBzLnB1c2godHJpcClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHllYXJUcmlwc1xuICB9XG5cbiAgZmluZFRvZGF5c1RyYXZlbGVycyh0b2RheXNUcmlwcykge1xuICAgIGNvbnN0IHRvZGF5c1RyYXZlbGVycyA9IHRvZGF5c1RyaXBzLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50VHJhdmVsZXIgPSB0aGlzLnRyYXZlbGVycy5maW5kKHRyYXZlbGVyID0+IHtcbiAgICAgICAgcmV0dXJuIHRyYXZlbGVyLmlkID09PSBjdXJyLnVzZXJJRFxuICAgICAgfSlcblxuICAgICAgYWNjLnB1c2goIHtbY3VycmVudFRyYXZlbGVyLm5hbWVdOiBjdXJyZW50VHJhdmVsZXIuaWR9IClcbiAgICAgIHJldHVybiBhY2NcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiB0b2RheXNUcmF2ZWxlcnNcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFnZW50XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiY2xhc3MgRGVzdGluYXRpb24ge1xuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbikge1xuICAgIHRoaXMuaWQgPSBkZXN0aW5hdGlvbi5pZFxuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbi5kZXN0aW5hdGlvblxuICAgIHRoaXMubG9kZ2luZ0Nvc3RQZXJEYXkgPSBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheVxuICAgIHRoaXMuZmxpZ2h0Q29zdFBlclBlcnNvbiA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb25cbiAgICB0aGlzLmltYWdlID0gZGVzdGluYXRpb24uaW1hZ2VcbiAgICB0aGlzLmFsdCA9IGRlc3RpbmF0aW9uLmFsdFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVzdGluYXRpb25cbiIsImltcG9ydCBUcmF2ZWxlciBmcm9tICcuL3RyYXZlbGVyJ1xuXG5jb25zdCB0cmF2ZWxlckNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyYXZlbGVyLS1jYXJkcycpXG5jb25zdCBwZW5kaW5nQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVuZGluZy0tY2FyZHMnKVxuY29uc3QgdG9kYXlzVHJpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VsY29tZS0tdHJpcHMnKVxuY29uc3QgdHJpcHMgPSB7XG4gIFRlbXBsYXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpcC0tdGVtcGxhdGUnKSxcbiAgUHJldmlvdXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlwLS1wcmV2aW91cycpLFxuICBQcmVzZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpcC0tcHJlc2VudCcpLFxuICBVcGNvbWluZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaXAtLXVwY29taW5nJyksXG4gIFBlbmRpbmc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlwLS1wZW5kaW5nJylcbn1cblxuY29uc3QgZG9tVXBkYXRlcyA9IHtcblxuICAvLyBVU0VSIERBU0hCT0FSRFxuICBwb3B1bGF0ZVRyYXZlbGVyR3JlZXRpbmcoY3VycmVudFRyYXZlbGVyKSB7XG4gICAgY29uc3Qgd2VsY29tZU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VsY29tZS0tbWVzc2FnZScpXG5cbiAgICBjb25zdCB0cmF2ZWxlck5hbWVzID0gY3VycmVudFRyYXZlbGVyLm5hbWUuc3BsaXQoJyAnKVxuICAgIGNvbnN0IHRyYXZlbGVyRmlyc3ROYW1lID0gdHJhdmVsZXJOYW1lc1swXVxuXG4gICAgd2VsY29tZU1lc3NhZ2UuaW5uZXJUZXh0ID0gYFdlbGNvbWUgJHt0cmF2ZWxlckZpcnN0TmFtZX0hYFxuICB9LFxuXG4gIGRpc3BsYXlEZXN0aW5hdGlvbkluZm9ybWF0aW9uKHRyaXAsIHBsYWNlLCBkYXlzUGFzc2VkKSB7XG4gICAgY29uc3QgdHJpcENhcmQgPSB0cmlwcy5UZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKVxuICAgIHRyaXBDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLS1kZXN0aW5hdGlvbicpLmlubmVyVGV4dCA9IHBsYWNlLmRlc3RpbmF0aW9uXG4gICAgdHJpcENhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtLWltYWdlJykuc3JjID0gcGxhY2UuaW1hZ2VcbiAgICB0cmlwQ2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZC0taW1hZ2UnKS5hbHQgPSBwbGFjZS5hbHRcbiAgICB0cmlwQ2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZC0tZGF0ZScpLmlubmVyVGV4dCA9IGBTdGFydCBEYXRlOiAke3RyaXAuZGF0ZX1gXG4gICAgdHJpcENhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtLWR1cmF0aW9uJykuaW5uZXJUZXh0ID0gYER1cmF0aW9uOiAke3RyaXAuZHVyYXRpb259IERheXNgXG4gICAgdHJpcENhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtLXRyYXZlbGVycycpLmlubmVyVGV4dCA9IGBUcmF2ZWxlcnM6ICR7dHJpcC50cmF2ZWxlcnN9IEFkdWx0c2BcbiAgICB0cmlwQ2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZC0tbG9kZ2luZycpLmlubmVyVGV4dCA9IGBMb2RnaW5nIENvc3QgUGVyIERheTogJCR7cGxhY2UubG9kZ2luZ0Nvc3RQZXJEYXl9YFxuICAgIHRyaXBDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLS1mbGlnaHQnKS5pbm5lclRleHQgPSBgRmxpZ2h0IENvc3Q6ICQke3BsYWNlLmZsaWdodENvc3RQZXJQZXJzb259YFxuXG4gICAgY29uc3Qgc3RhdHVzID0gdHJpcC5kZXRlcm1pbmVUcmlwU3RhdHVzKGRheXNQYXNzZWQpXG4gICAgdHJpcHNbc3RhdHVzXS5hcHBlbmRDaGlsZCh0cmlwQ2FyZClcbiAgfSxcblxuICBhZGRDb3N0VG9Qcm9maWxlKHllYXJTcGVudCwgdG90YWxDb3N0KSB7XG4gICAgeWVhclNwZW50LmlubmVyVGV4dCA9IGAkJHt0b3RhbENvc3R9YFxuICB9LFxuXG4gIGFkZERlc3RpbmF0aW9uc1RvRHJvcGRvd24oZGVzdGluYXRpb25zLCBkcm9wZG93bikge1xuICAgIGRlc3RpbmF0aW9ucy5mb3JFYWNoKGxvY2F0aW9uID0+IHtcbiAgICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBuZXdPcHRpb24udmFsdWUgPSBsb2NhdGlvbi5pZFxuICAgICAgbmV3T3B0aW9uLmlubmVyVGV4dCA9IGxvY2F0aW9uLmRlc3RpbmF0aW9uXG4gICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChuZXdPcHRpb24pXG4gICAgfSlcbiAgfSxcblxuICBhZGROdW1iZXJzVG9Ecm9wZG93bnMoZHJvcGRvd24pIHtcbiAgICBjb25zdCBwb3NzaWJsZU51bWJlcnMgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwXVxuXG4gICAgcG9zc2libGVOdW1iZXJzLmZvckVhY2gobnVtYmVyID0+IHtcbiAgICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBuZXdPcHRpb24udmFsdWUgPSBudW1iZXJcbiAgICAgIG5ld09wdGlvbi5pbm5lclRleHQgPSBudW1iZXJcbiAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKG5ld09wdGlvbilcbiAgICB9KVxuICB9LFxuXG4gIC8vIEFHRU5UIERBU0hCT0FSRFxuICBkaXNwbGF5QWdlbnRBbm51YWxJbmNvbWUocHJlc2VudFNwZW50KSB7XG4gICAgY29uc3QgcHJlc2VudEluY29tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWxjb21lLS1pbmNvbWUnKVxuICAgIHByZXNlbnRJbmNvbWUuaW5uZXJUZXh0ID0gYCQke3ByZXNlbnRTcGVudH1gXG4gIH0sXG5cbiAgZGlzcGxheVRvZGF5c1RyYXZlbGVycyh0b2RheXNUcmF2ZWxlcnMpIHtcbiAgICB0aGlzLmNsZWFyVHJpcExpc3QoKVxuICAgIHRvZGF5c1RyYXZlbGVycy5mb3JFYWNoKHRyYXZlbGVyID0+IHtcbiAgICAgIGNvbnN0IG5ld1RyYXZlbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgbmV3VHJhdmVsZXIuaW5uZXJUZXh0ID0gYCR7T2JqZWN0LmtleXModHJhdmVsZXIpfSAoIyR7T2JqZWN0LnZhbHVlcyh0cmF2ZWxlcil9KWBcblxuICAgICAgdG9kYXlzVHJpcHMuYXBwZW5kQ2hpbGQobmV3VHJhdmVsZXIpXG4gICAgfSlcbiAgfSxcblxuICBkaXNwbGF5VHJhdmVsZXJJbmZvcm1hdGlvbih0cmF2ZWxlciwgZGVzdGluYXRpb25zKSB7XG4gICAgY29uc3QgdHJhdmVsZXJUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmF2ZWxlci0tdGVtcGxhdGUnKVxuXG4gICAgY29uc3QgbmV3VHJhdmVsZXJDYXJkID0gdHJhdmVsZXJUZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKVxuICAgIGNvbnN0IHRyYXZlbGVyTmFtZSA9IGAke3RyYXZlbGVyLm5hbWV9ICgjJHt0cmF2ZWxlci5pZH0pYFxuICAgIGNvbnN0IHRyYXZlbGVyU3BlbmRpbmcgPSB0cmF2ZWxlci5jYWxjdWxhdGVTcGVuZGluZyhkZXN0aW5hdGlvbnMpXG5cbiAgICBuZXdUcmF2ZWxlckNhcmQucXVlcnlTZWxlY3RvcignYXJ0aWNsZScpLmlkID0gdHJhdmVsZXIuaWRcbiAgICBuZXdUcmF2ZWxlckNhcmQucXVlcnlTZWxlY3RvcignI3RyYXZlbGVyLS1uYW1lJykuaW5uZXJUZXh0ID0gdHJhdmVsZXJOYW1lXG4gICAgbmV3VHJhdmVsZXJDYXJkLnF1ZXJ5U2VsZWN0b3IoJyN0cmF2ZWxlci0tc3BlbnQnKS5pbm5lclRleHQgPSB0cmF2ZWxlclNwZW5kaW5nXG5cbiAgICB0cmF2ZWxlci50cmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLmZpbmREZXN0aW5hdGlvbihkZXN0aW5hdGlvbnMsIHRyaXApXG4gICAgICB0aGlzLmJ1aWxkVGFibGVFbGVtZW50cyh0cmlwLCBsb2NhdGlvbiwgbmV3VHJhdmVsZXJDYXJkKVxuICAgIH0pXG5cbiAgICB0cmF2ZWxlckNhcmRzLmFwcGVuZENoaWxkKG5ld1RyYXZlbGVyQ2FyZClcbiAgfSxcblxuICBkaXNwbGF5UGVuZGluZ1RyaXBzKHRyYXZlbGVyLCBkZXN0aW5hdGlvbnMpIHtcbiAgICBjb25zdCBwZW5kaW5nVHJpcHMgPSB0cmF2ZWxlci50cmlwcy5maWx0ZXIodHJpcCA9PiB0cmlwLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKVxuXG4gICAgcGVuZGluZ1RyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBjb25zdCBwZW5kaW5nVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVuZGluZy0tdGVtcGxhdGUnKVxuXG4gICAgICBjb25zdCBsb2NhdGlvbiA9IHRoaXMuZmluZERlc3RpbmF0aW9uKGRlc3RpbmF0aW9ucywgdHJpcClcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBwZW5kaW5nVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgIGNvbnN0IHRyYXZlbGVyTmFtZSA9IGAke3RyYXZlbGVyLm5hbWV9ICgjJHt0cmF2ZWxlci5pZH0pYFxuICAgICAgY29uc3QgdHJpcEluZm8gPSBgJHt0cmlwLmRhdGV9ICgke3RyaXAuZHVyYXRpb259IGRheXMpYFxuXG4gICAgICBuZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wZW5kaW5nLS1uYW1lJykuaW5uZXJUZXh0ID0gdHJhdmVsZXJOYW1lXG4gICAgICBuZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wZW5kaW5nLS1sb2NhdGlvbicpLmlubmVyVGV4dCA9IGxvY2F0aW9uLmRlc3RpbmF0aW9uXG4gICAgICBuZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wZW5kaW5nLS1kYXRlJykuaW5uZXJUZXh0ID0gdHJpcEluZm9cbiAgICAgIG5ld0NhcmQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1hcHByb3ZlJykuc2V0QXR0cmlidXRlKCd0cmlwSUQnLCB0cmlwLmlkKVxuICAgICAgbmV3Q2FyZC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWRlbGV0ZScpLnNldEF0dHJpYnV0ZSgndHJpcElEJywgdHJpcC5pZClcblxuICAgICAgcGVuZGluZ0NhcmRzLmFwcGVuZENoaWxkKG5ld0NhcmQpXG4gICAgfSlcbiAgfSxcblxuICBidWlsZFRhYmxlRWxlbWVudHModHJpcCwgbG9jYXRpb24sIGNhcmQpIHtcbiAgICBjb25zdCB0cmF2ZWxlckxvY2F0aW9ucyA9IGNhcmQucXVlcnlTZWxlY3RvcignI3RyYXZlbGVyLS1sb2NhdGlvbnMnKVxuICAgIGNvbnN0IG5ld1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcbiAgICBjb25zdCBsb2NhdGlvbkNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpXG4gICAgY29uc3Qgc3RhdHVzQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJylcblxuICAgIGxvY2F0aW9uQ2VsbC5pbm5lclRleHQgPSBsb2NhdGlvbi5kZXN0aW5hdGlvblxuICAgIHN0YXR1c0NlbGwuaW5uZXJUZXh0ID0gdHJpcC5zdGF0dXNcblxuICAgIHRyYXZlbGVyTG9jYXRpb25zLmFwcGVuZENoaWxkKG5ld1JvdylcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQobG9jYXRpb25DZWxsKVxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChzdGF0dXNDZWxsKVxuICB9LFxuXG4gIC8vIEhFTFBFUiBGVU5DVElPTlNcbiAgZmluZERlc3RpbmF0aW9uKGRlc3RpbmF0aW9ucywgdHJpcCkge1xuICAgIHJldHVybiBkZXN0aW5hdGlvbnMuZmluZChwbGFjZSA9PiBwbGFjZS5pZCA9PT0gdHJpcC5kZXN0aW5hdGlvbklEKVxuICB9LFxuXG4gIGNsZWFyVHJpcERpc3BsYXlzKHN0YXR1cykge1xuICAgIHRyaXBzW3N0YXR1c10ucXVlcnlTZWxlY3RvckFsbCgnYXJ0aWNsZScpLmZvckVhY2goaXRlbSA9PiBpdGVtLnJlbW92ZSgpKVxuICB9LFxuXG4gIGNsZWFyVHJpcExpc3QoKSB7XG4gICAgdG9kYXlzVHJpcHMucXVlcnlTZWxlY3RvckFsbCgnbGknKS5mb3JFYWNoKGxpID0+IGxpLnJlbW92ZSgpKVxuICB9LFxuXG4gIGNsZWFyVHJhdmVsZXJDYXJkRGlzcGxheXMoKSB7XG4gICAgdHJhdmVsZXJDYXJkcy5xdWVyeVNlbGVjdG9yQWxsKCdhcnRpY2xlJykuZm9yRWFjaChpdGVtID0+IGl0ZW0ucmVtb3ZlKCkpXG4gICAgcGVuZGluZ0NhcmRzLnF1ZXJ5U2VsZWN0b3JBbGwoJ2FydGljbGUnKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5yZW1vdmUoKSlcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXNcbiIsImNvbnN0IGZldGNoQXBpID0ge1xuICBnZXRUcmF2ZWxlcnMoKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyYXZlbGVycycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIH0sXG5cbiAgZ2V0U3BlY2lmaWNUcmF2ZWxlcih0cmF2ZWxlcklEKSB7XG4gICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyYXZlbGVycy8ke3RyYXZlbGVySUR9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfSxcblxuICBnZXRBbGxUcmlwcygpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHMnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICB9LFxuXG4gIGdldEFsbERlc3RpbmF0aW9ucygpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvZGVzdGluYXRpb25zJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfSxcblxuICBwb3N0TmV3VHJpcChuZXdUcmlwKSB7XG4gICAgY29uc3QgcG9zdEZvcm1hdCA9IHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3VHJpcClcbiAgICB9XG5cbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHMnLCBwb3N0Rm9ybWF0KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICB9LFxuXG4gIHBvc3RNb2RpZnlUcmlwKHJldmlzZWRUcmlwKSB7XG4gICAgY29uc3QgcG9zdEZvcm1hdCA9IHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmV2aXNlZFRyaXApXG4gICAgfVxuXG4gICAgcmV0dXJuIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3VwZGF0ZVRyaXAnLCBwb3N0Rm9ybWF0KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICB9LFxuXG4gIGRlbGV0ZVRyaXAodHJpcElEKSB7XG4gICAgY29uc3QgcG9zdEZvcm1hdCA9IHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgfVxuXG4gICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzLyR7dHJpcElEfWAsIHBvc3RGb3JtYXQpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hBcGlcbiIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2xvZ28tcGxhbmUuc3ZnXCI7IiwiaW1wb3J0ICdub3JtYWxpemUuY3NzJ1xuaW1wb3J0ICcuL2Nzcy9pbmRleC5zY3NzJ1xuaW1wb3J0ICcuL3NjcmlwdHMuanMnXG5cbmltcG9ydCAnLi9pbWFnZXMvbG9nby1wbGFuZS5zdmcnXG4iLCIvLyBGSUxFIElNUE9SVFNcbmltcG9ydCBkb21VcGRhdGVzIGZyb20gJy4vZG9tVXBkYXRlcydcbmltcG9ydCBmZXRjaEFwaSBmcm9tICcuL2ZldGNoQXBpJ1xuXG5pbXBvcnQgJy4vY3NzL2luZGV4LnNjc3MnXG5cbmltcG9ydCBUcmF2ZWxlciBmcm9tICcuL3RyYXZlbGVyJ1xuaW1wb3J0IEFnZW50IGZyb20gJy4vYWdlbnQnXG5pbXBvcnQgVHJpcCBmcm9tICcuL3RyaXAnXG5pbXBvcnQgRGVzdGluYXRpb24gZnJvbSAnLi9kZXN0aW5hdGlvbidcblxuXG4vLyBRVUVSWSBTRUxFQ1RPUlMgQU5EIEdMT0JBTCBWQVJJQUJMRVNcbmNvbnN0IHRyYXZlbGVyTG9naW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLXRyYXZlbGVyJylcbmNvbnN0IGFnZW50TG9naW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLWFnZW50JylcbmNvbnN0IGxvZ29mZkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tbG9nb2ZmJylcbmNvbnN0IGFkZFRvVHJpcHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLWFkZC10cmlwJylcbmNvbnN0IHRyYXZlbGVyRGFzaGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhc2hib2FyZC11c2VyJylcbmNvbnN0IGFnZW50RGFzaGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhc2hib2FyZC1hZ2VudCcpXG5jb25zdCBsb2dpblZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4nKVxuY29uc3QgdHJhdmVsZXJVc2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lLXRyYXZlbGVyJylcbmNvbnN0IGRlc3RpbmF0aW9uRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxhbm5pbmctLWRlc3RpbmF0aW9uJylcbmNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFubmluZy0tZGF0ZScpXG5jb25zdCBlc3RpbWF0ZWRDb3N0T2ZUcmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYW5uaW5nLS1jb3N0JylcbmNvbnN0IGR1cmF0aW9uRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxhbm5pbmctLWR1cmF0aW9uJylcbmNvbnN0IHRyYXZlbGVyc0Ryb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYW5uaW5nLS10cmF2ZWxlcnMnKVxuY29uc3QgdHJpcE1vYmlsZURyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaXAtLWRyb3Bkb3duJylcbmNvbnN0IGFnZW50TW9iaWxlRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJhdmVsZXItLWRyb3Bkb3duJylcbmNvbnN0IHRyYXZlbGVyU2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyYXZlbGVyLS1zZWFyY2gnKVxuXG5jb25zdCBjdXJyZW50QWdlbnQgPSBuZXcgQWdlbnQoKVxubGV0IGN1cnJlbnRUcmF2ZWxlclxuXG5cbi8vIEVWRU5UIExJU1RFTkVSU1xudHJhdmVsZXJMb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGF1dGhlbnRpY2F0ZVVzZXIpXG5hZ2VudExvZ2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXV0aGVudGljYXRlVXNlcilcbmxvZ29mZkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ09mZldlYnNpdGUpXG5hZGRUb1RyaXBzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVG9QZW5kaW5nVHJpcHMpXG5kZXN0aW5hdGlvbkRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZUVzdGltYXRlZENvc3QpXG5kdXJhdGlvbkRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZUVzdGltYXRlZENvc3QpXG50cmF2ZWxlcnNEcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVFc3RpbWF0ZWRDb3N0KVxuZGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHZhbGlkYXRlRm9ybSlcbnRyaXBNb2JpbGVEcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VUcmlwVmlldylcbmFnZW50TW9iaWxlRHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdG9nZ2xlVHJpcEFuZFRyYXZlbGVyVmlldylcbnRyYXZlbGVyU2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgc2VhcmNoRm9yVXNlcilcblxuXG4vLyBGRVRDSCBTRVJWRVIgREFUQVxubGV0IHRyYXZlbGVyc1Jlc3BvbnNlID0gZmV0Y2hBcGkuZ2V0VHJhdmVsZXJzKClcbmxldCB0cmlwc1Jlc3BvbnNlID0gZmV0Y2hBcGkuZ2V0QWxsVHJpcHMoKVxubGV0IGRlc3RpbmF0aW9uc1Jlc3BvbnNlID0gZmV0Y2hBcGkuZ2V0QWxsRGVzdGluYXRpb25zKClcblxuZnVuY3Rpb24gcmVsb2FkU2VydmVySW5mb3JtYXRpb24oKSB7XG4gIHRyYXZlbGVyc1Jlc3BvbnNlID0gZmV0Y2hBcGkuZ2V0VHJhdmVsZXJzKClcbiAgdHJpcHNSZXNwb25zZSA9IGZldGNoQXBpLmdldEFsbFRyaXBzKClcblxuICByZXR1cm4gUHJvbWlzZS5hbGwoW3RyYXZlbGVyc1Jlc3BvbnNlLCB0cmlwc1Jlc3BvbnNlXSlcbiAgICAudGhlbihyZXNwb25zZXMgPT4ge1xuICAgICAgY29uc3QgYWxsVHJhdmVsZXJzID0gcmVzcG9uc2VzWzBdLnRyYXZlbGVyc1xuICAgICAgY29uc3QgYWxsVHJpcHMgPSByZXNwb25zZXNbMV0udHJpcHNcblxuICAgICAgY3VycmVudEFnZW50LnRyYXZlbGVycyA9IFtdXG4gICAgICBjdXJyZW50QWdlbnQudHJpcHMgPSBbXVxuXG4gICAgICBwb3B1bGF0ZUFnZW50VHJhdmVsZXJzKGFsbFRyYXZlbGVycywgYWxsVHJpcHMpXG4gICAgICBwb3B1bGF0ZUFnZW50VHJpcHMoYWxsVHJpcHMpXG4gICAgICBhbHBoYWJldGl6ZURhdGFzZXQoY3VycmVudEFnZW50LnRyYXZlbGVycywgJ25hbWUnKVxuICAgIH0pXG59XG5cblByb21pc2UuYWxsKFt0cmF2ZWxlcnNSZXNwb25zZSwgdHJpcHNSZXNwb25zZSwgZGVzdGluYXRpb25zUmVzcG9uc2VdKVxuICAudGhlbihyZXNwb25zZXMgPT4ge1xuICAgIGNvbnN0IGFsbFRyYXZlbGVycyA9IHJlc3BvbnNlc1swXS50cmF2ZWxlcnNcbiAgICBjb25zdCBhbGxUcmlwcyA9IHJlc3BvbnNlc1sxXS50cmlwc1xuICAgIGNvbnN0IGFsbERlc3RpbmF0aW9ucz0gcmVzcG9uc2VzWzJdLmRlc3RpbmF0aW9uc1xuXG4gICAgcG9wdWxhdGVBZ2VudFRyYXZlbGVycyhhbGxUcmF2ZWxlcnMsIGFsbFRyaXBzKVxuICAgIHBvcHVsYXRlQWdlbnRUcmlwcyhhbGxUcmlwcylcbiAgICBwb3B1bGF0ZUFnZW50RGVzdGluYXRpb25zKGFsbERlc3RpbmF0aW9ucylcbiAgfSlcbiAgLnRoZW4ocG9wdWxhdGVEcm9wZG93bnMpXG5cblxuZnVuY3Rpb24gcG9wdWxhdGVBZ2VudFRyYXZlbGVycyhhbGxUcmF2ZWxlcnMsIGFsbFRyaXBzKSB7XG4gIGFsbFRyYXZlbGVycy5mb3JFYWNoKHRyYXZlbGVyID0+IHtcbiAgICBjb25zdCBuZXdUcmF2ZWxlciA9IG5ldyBUcmF2ZWxlcih0cmF2ZWxlcilcbiAgICBmaW5kVHJhdmVsZXJUcmlwcyhhbGxUcmlwcywgbmV3VHJhdmVsZXIpXG4gICAgY3VycmVudEFnZW50LnRyYXZlbGVycy5wdXNoKG5ld1RyYXZlbGVyKVxuICB9KVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUFnZW50VHJpcHMoYWxsVHJpcHMpIHtcbiAgYWxsVHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICBjb25zdCBuZXdUcmlwID0gbmV3IFRyaXAodHJpcClcbiAgICBuZXdUcmlwLmZvcm1hdERhdGUoKVxuICAgIGN1cnJlbnRBZ2VudC50cmlwcy5wdXNoKG5ld1RyaXApXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlQWdlbnREZXN0aW5hdGlvbnMoYWxsRGVzdGluYXRpb25zKSB7XG4gIGFsbERlc3RpbmF0aW9ucy5mb3JFYWNoKHBsYWNlID0+IHtcbiAgICBjb25zdCBuZXdEZXN0aW5hdGlvbiA9IG5ldyBEZXN0aW5hdGlvbihwbGFjZSlcbiAgICBjdXJyZW50QWdlbnQuZGVzdGluYXRpb25zLnB1c2gobmV3RGVzdGluYXRpb24pXG4gIH0pXG59XG5cblxuLy8gVVNFUiBJTkZPUk1BVElPTiBQT1BVTEFUSU9OXG5mdW5jdGlvbiBhdXRoZW50aWNhdGVVc2VyKGV2ZW50KSB7XG4gIGNvbnN0IHRyYXZlbGVyUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzcy10cmF2ZWxlcicpXG4gIGNvbnN0IGFnZW50VXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZS1hZ2VudCcpXG4gIGNvbnN0IGFnZW50UGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzcy1hZ2VudCcpXG5cbiAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2J1dHRvbi10cmF2ZWxlcicgJiZcbiAgICAgIHRyYXZlbGVyVXNlcm5hbWUudmFsdWUuaW5jbHVkZXMoJ3RyYXZlbGVyJykgJiZcbiAgICAgIHRyYXZlbGVyUGFzc3dvcmQudmFsdWUgPT09ICd0cmF2ZWwyMDIwJykge1xuXG4gICAgbG9hZFRyYXZlbGVyRGFzaGJvYXJkKClcblxuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2J1dHRvbi1hZ2VudCcgJiZcbiAgICAgIGFnZW50VXNlcm5hbWUudmFsdWUgPT09ICdhZ2VuY3knICYmXG4gICAgICBhZ2VudFBhc3N3b3JkLnZhbHVlID09PSAndHJhdmVsMjAyMCcpIHtcblxuICAgIGxvYWRBZ2VudERhc2hib2FyZCgpXG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFRyYXZlbGVyRGFzaGJvYXJkKCkge1xuICBsb2dPbldlYnNpdGUodHJhdmVsZXJEYXNoYm9hcmQpXG4gIGNsZWFyQWxsVHJpcERpc3BsYXlzKClcbiAgcmVzZXRQbGFubmluZ0Zvcm0oKVxuICBjb25zdCB0cmF2ZWxlcklEID0gdHJhdmVsZXJVc2VybmFtZS52YWx1ZS5zbGljZSg4KVxuXG4gIGZldGNoQXBpLmdldFNwZWNpZmljVHJhdmVsZXIodHJhdmVsZXJJRClcbiAgICAudGhlbih0cmF2ZWxlciA9PiBjcmVhdGVUcmF2ZWxlclByb2ZpbGUodHJhdmVsZXIpKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUcmF2ZWxlclByb2ZpbGUodHJhdmVsZXIpIHtcbiAgY3VycmVudFRyYXZlbGVyID0gY3VycmVudEFnZW50LnRyYXZlbGVycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PT0gdHJhdmVsZXIuaWQpXG4gIGRvbVVwZGF0ZXMucG9wdWxhdGVUcmF2ZWxlckdyZWV0aW5nKGN1cnJlbnRUcmF2ZWxlcilcblxuICBmaW5kRGVzdGluYXRpb25JbmZvcm1hdGlvbigpXG4gIGRpc3BsYXlBbW91dFNwZW50KClcbn1cblxuZnVuY3Rpb24gZmluZFRyYXZlbGVyVHJpcHMoYWxsVHJpcHMsIHNlbGVjdGVkVHJhdmVsZXIgPSBjdXJyZW50VHJhdmVsZXIpIHtcbiAgY29uc3QgdHJhdmVsZXJUcmlwcyA9IGFsbFRyaXBzLmZpbHRlcih0cmlwID0+IHtcbiAgICByZXR1cm4gdHJpcC51c2VySUQgPT09IHNlbGVjdGVkVHJhdmVsZXIuaWRcbiAgfSlcblxuICB0cmF2ZWxlclRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgY29uc3QgbmV3VHJpcCA9IG5ldyBUcmlwKHRyaXApXG4gICAgbmV3VHJpcC5mb3JtYXREYXRlKClcbiAgICBzZWxlY3RlZFRyYXZlbGVyLnRyaXBzLnB1c2gobmV3VHJpcClcbiAgfSlcblxuICBzZWxlY3RlZFRyYXZlbGVyLnNvcnRUcmlwc0J5RGF0ZSgpXG59XG5cbmZ1bmN0aW9uIGNsZWFyQWxsVHJpcERpc3BsYXlzKCkge1xuICBkb21VcGRhdGVzLmNsZWFyVHJpcERpc3BsYXlzKCdQcmV2aW91cycpXG4gIGRvbVVwZGF0ZXMuY2xlYXJUcmlwRGlzcGxheXMoJ1ByZXNlbnQnKVxuICBkb21VcGRhdGVzLmNsZWFyVHJpcERpc3BsYXlzKCdVcGNvbWluZycpXG4gIGRvbVVwZGF0ZXMuY2xlYXJUcmlwRGlzcGxheXMoJ1BlbmRpbmcnKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5QW1vdXRTcGVudCgpIHtcbiAgY29uc3QgdG90YWxTcGVudFByZXZpb3VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NwZW5kaW5nLS1wcmV2aW91cy1hbW91bnQnKVxuICBjb25zdCB0b3RhbFNwZW50UHJlc2VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcGVuZGluZy0tcHJlc2VudC1hbW91bnQnKVxuXG4gIGNvbnN0IHByZXZpb3VzID0gY3VycmVudFRyYXZlbGVyLmNhbGN1bGF0ZVNwZW5kaW5nKGN1cnJlbnRBZ2VudC5kZXN0aW5hdGlvbnMsIDIwMjApXG4gIGNvbnN0IHByZXNlbnQgPSBjdXJyZW50VHJhdmVsZXIuY2FsY3VsYXRlU3BlbmRpbmcoY3VycmVudEFnZW50LmRlc3RpbmF0aW9ucywgMjAyMSlcblxuICBkb21VcGRhdGVzLmFkZENvc3RUb1Byb2ZpbGUodG90YWxTcGVudFByZXZpb3VzLCBwcmV2aW91cylcbiAgZG9tVXBkYXRlcy5hZGRDb3N0VG9Qcm9maWxlKHRvdGFsU3BlbnRQcmVzZW50LCBwcmVzZW50KVxufVxuXG5mdW5jdGlvbiBhZGRUb1BlbmRpbmdUcmlwcygpIHtcbiAgY3JlYXRlTmV3VHJpcCgpXG4gIHJlc2V0UGxhbm5pbmdGb3JtKClcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3VHJpcCgpIHtcbiAgY29uc3QgdHJpcEluZm9ybWF0aW9uID0ge1xuICAgIGlkOiAwLFxuICAgIHVzZXJJRDogTnVtYmVyKGN1cnJlbnRUcmF2ZWxlci5pZCksXG4gICAgZGVzdGluYXRpb25JRDogTnVtYmVyKGRlc3RpbmF0aW9uRHJvcGRvd24udmFsdWUpLFxuICAgIHRyYXZlbGVyczogTnVtYmVyKHRyYXZlbGVyc0Ryb3Bkb3duLnZhbHVlKSxcbiAgICBkYXRlOiBmb3JtYXREYXRlRm9yUG9zdChkYXRlSW5wdXQudmFsdWUpLFxuICAgIGR1cmF0aW9uOiBOdW1iZXIoZHVyYXRpb25Ecm9wZG93bi52YWx1ZSksXG4gICAgc3RhdHVzOiAncGVuZGluZycsXG4gICAgc3VnZ2VzdGVkQWN0aXZpdGllczogW11cbiAgfVxuXG4gIGNvbnN0IHRvdGFsVHJpcHMgPSBjdXJyZW50QWdlbnQudHJpcHMubGVuZ3RoIC0gMVxuICB0cmlwSW5mb3JtYXRpb24uaWQgPSBjdXJyZW50QWdlbnQudHJpcHNbdG90YWxUcmlwc10uaWQgKyAxXG5cbiAgY29uc3QgbmV3VHJpcCA9IG5ldyBUcmlwKHRyaXBJbmZvcm1hdGlvbilcbiAgbmV3VHJpcC5mb3JtYXREYXRlKClcbiAgY3VycmVudFRyYXZlbGVyLnRyaXBzLnB1c2gobmV3VHJpcClcblxuICBmZXRjaEFwaS5wb3N0TmV3VHJpcCh0cmlwSW5mb3JtYXRpb24pXG4gIHJlbG9hZFNlcnZlckluZm9ybWF0aW9uKClcbiAgICAudGhlbihjbGVhckFsbFRyaXBEaXNwbGF5cylcbiAgICAudGhlbihmaW5kRGVzdGluYXRpb25JbmZvcm1hdGlvbilcbn1cblxuZnVuY3Rpb24gY2hhbmdlVHJpcFZpZXcoZXZlbnQpIHtcbiAgY29uc3QgdHJpcFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpcC11c2VyJylcbiAgdHJpcFNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1wcmV2aW91cycpXG4gIHRyaXBTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktcHJlc2VudCcpXG4gIHRyaXBTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktdXBjb21pbmcnKVxuICB0cmlwU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LXBlbmRpbmcnKVxuXG4gIGNvbnN0IGRyb3Bkb3duVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWVcbiAgdHJpcFNlY3Rpb24uY2xhc3NMaXN0LmFkZChgZGlzcGxheS0ke2Ryb3Bkb3duVmFsdWV9YClcblxuICBjb25zdCB0cmlwRHJvcGRvd25NZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaXAtLWRyb3Bkb3duLW1lc3NhZ2UnKVxuICBpZiAoIWNoZWNrRm9yVHJpcFR5cGUoZHJvcGRvd25WYWx1ZSkpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFlvdSBkbyBub3QgaGF2ZSBhbnkgJHtkcm9wZG93blZhbHVlfSB0cmlwcyBhdCB0aGlzIHRpbWVgXG4gICAgdHJpcERyb3Bkb3duTWVzc2FnZS5pbm5lclRleHQgPSBtZXNzYWdlXG4gICAgdHJpcERyb3Bkb3duTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcbiAgfSBlbHNlIHtcbiAgICB0cmlwRHJvcGRvd25NZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0ZvclRyaXBUeXBlKGRyb3Bkb3duVmFsdWUpIHtcbiAgY29uc3QgdGhpc1RyaXBUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RyaXAtLSR7ZHJvcGRvd25WYWx1ZX1gKVxuICBjb25zdCB0cmlwTGlzdCA9IHRoaXNUcmlwVHlwZS5xdWVyeVNlbGVjdG9yQWxsKCdhcnRpY2xlJylcblxuICBpZiAodHJpcExpc3QubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuXG4vLyBQTEFOTklORyBGT1JNIElORk9STUFUSU9OXG5mdW5jdGlvbiByZXNldFBsYW5uaW5nRm9ybSgpIHtcbiAgZGF0ZUlucHV0LnZhbHVlID0gJydcbiAgZGVzdGluYXRpb25Ecm9wZG93bi52YWx1ZSA9IDBcbiAgZHVyYXRpb25Ecm9wZG93bi52YWx1ZSA9IDFcbiAgdHJhdmVsZXJzRHJvcGRvd24udmFsdWUgPSAxXG5cbiAgZXN0aW1hdGVkQ29zdE9mVHJpcC5pbm5lclRleHQgPSBgRXN0aW1hdGVkIENvc3Q6ICQwLjAwYFxufVxuXG5mdW5jdGlvbiBhbHBoYWJldGl6ZURhdGFzZXQoZGF0YVR5cGUsIHByb3BlcnR5KSB7XG4gIGRhdGFUeXBlLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoYVtwcm9wZXJ0eV0gPiBiW3Byb3BlcnR5XSkge1xuICAgICAgcmV0dXJuIDFcblxuICAgIH0gZWxzZSBpZiAoYVtwcm9wZXJ0eV0gPCBiW3Byb3BlcnR5XSkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZURyb3Bkb3ducygpIHtcbiAgYWxwaGFiZXRpemVEYXRhc2V0KGN1cnJlbnRBZ2VudC5kZXN0aW5hdGlvbnMsICdkZXN0aW5hdGlvbicpXG5cbiAgZG9tVXBkYXRlcy5hZGREZXN0aW5hdGlvbnNUb0Ryb3Bkb3duKGN1cnJlbnRBZ2VudC5kZXN0aW5hdGlvbnMsIGRlc3RpbmF0aW9uRHJvcGRvd24pXG4gIGRvbVVwZGF0ZXMuYWRkTnVtYmVyc1RvRHJvcGRvd25zKGR1cmF0aW9uRHJvcGRvd24pXG4gIGRvbVVwZGF0ZXMuYWRkTnVtYmVyc1RvRHJvcGRvd25zKHRyYXZlbGVyc0Ryb3Bkb3duKVxufVxuXG5mdW5jdGlvbiB1cGRhdGVFc3RpbWF0ZWRDb3N0KGV2ZW50KSB7XG4gIGlmIChkZXN0aW5hdGlvbkRyb3Bkb3duLnZhbHVlKSB7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSBmaW5kRGVzdGluYXRpb24oTnVtYmVyKGRlc3RpbmF0aW9uRHJvcGRvd24udmFsdWUpKVxuICAgIGNvbnN0IG51bURheXMgPSBkdXJhdGlvbkRyb3Bkb3duLnZhbHVlXG4gICAgY29uc3QgbnVtUGVvcGxlID0gdHJhdmVsZXJzRHJvcGRvd24udmFsdWVcblxuICAgIGNvbnN0IGxvZGdpbmdDb3N0ID0gZGVzdGluYXRpb24ubG9kZ2luZ0Nvc3RQZXJEYXkgKiBudW1EYXlzICogbnVtUGVvcGxlXG4gICAgY29uc3QgZmxpZ2h0Q29zdCA9IGRlc3RpbmF0aW9uLmZsaWdodENvc3RQZXJQZXJzb24gKiBudW1QZW9wbGVcblxuICAgIGNvbnN0IHByaWNlID0gKChsb2RnaW5nQ29zdCArIGZsaWdodENvc3QpICogMS4xKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgfSlcblxuICAgIGVzdGltYXRlZENvc3RPZlRyaXAuaW5uZXJUZXh0ID0gYEVzdGltYXRlZCBDb3N0OiAkJHtwcmljZX1gXG4gIH1cblxuICB2YWxpZGF0ZUZvcm0oKVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XG4gIGNvbnN0IHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKGRhdGVJbnB1dC52YWx1ZSlcbiAgY29uc3QgZGF0ZURpZmZlcmVuY2UgPSBkZXRlcm1pbmVEYXRlRGlmZmVyZW5jZShzZWxlY3RlZERhdGUpXG5cbiAgaWYgKGRlc3RpbmF0aW9uRHJvcGRvd24udmFsdWUgPiAwICYmIGRhdGVEaWZmZXJlbmNlID4gMCkge1xuICAgIGFkZFRvVHJpcHNCdXR0b24uZGlzYWJsZWQgPSBmYWxzZVxuXG4gIH0gZWxzZSB7XG4gICAgYWRkVG9Ucmlwc0J1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgfVxufVxuXG5cbi8vIEFHRU5UIEZVTkNUSU9OU1xuZnVuY3Rpb24gbG9hZEFnZW50RGFzaGJvYXJkKCkge1xuICBsb2dPbldlYnNpdGUoYWdlbnREYXNoYm9hcmQpXG4gIGFscGhhYmV0aXplRGF0YXNldChjdXJyZW50QWdlbnQudHJhdmVsZXJzLCAnbmFtZScpXG5cbiAgbG9hZFRyYXZlbGVySW5mb3JtYXRpb24oKVxuICBwb3B1bGF0ZUFubnVhbEluY29tZSgpXG4gIHBvcHVsYXRlVG9kYXlzVHJhdmVsZXJzKClcbn1cblxuZnVuY3Rpb24gc2VhcmNoRm9yVXNlcihldmVudCkge1xuICBjb25zdCBzZWFyY2hWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpXG5cbiAgY29uc3QgdHJhdmVsZXJJRHMgPSBjdXJyZW50QWdlbnQudHJhdmVsZXJzLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgaWYgKCFjdXJyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZSkpIHtcbiAgICAgIGFjYy5wdXNoKGN1cnIuaWQpXG4gICAgfVxuICAgIHJldHVybiBhY2NcbiAgfSwgW10pXG5cbiAgdW5oaWRlQWxsVHJhdmVsZXJzKClcbiAgaGlkZVVuc2VhcmNoZWRUcmF2ZWxlcnModHJhdmVsZXJJRHMpXG59XG5cbmZ1bmN0aW9uIHVuaGlkZUFsbFRyYXZlbGVycygpIHtcbiAgY29uc3QgYWxsVHJhdmVsZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyaXAtLWNhcmQnKVxuICBhbGxUcmF2ZWxlcnMuZm9yRWFjaCh0cmF2ZWxlciA9PiB0cmF2ZWxlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKSlcbn1cblxuZnVuY3Rpb24gaGlkZVVuc2VhcmNoZWRUcmF2ZWxlcnModHJhdmVsZXJJRHMpIHtcbiAgdHJhdmVsZXJJRHMuZm9yRWFjaChpZCA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9YCkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgfSlcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVBbm51YWxJbmNvbWUoKSB7XG4gIGNvbnN0IHByZXNlbnRJbmNvbWUgPSBjdXJyZW50QWdlbnQuY2FsY3VsYXRlVG90YWxJbmNvbWUoMjAyMSlcbiAgZG9tVXBkYXRlcy5kaXNwbGF5QWdlbnRBbm51YWxJbmNvbWUocHJlc2VudEluY29tZSlcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVUb2RheXNUcmF2ZWxlcnMoKSB7XG4gIGNvbnN0IHRvZGF5c1RyaXBzID0gY3VycmVudEFnZW50LnRyaXBzLmZpbHRlcih0cmlwID0+IHtcbiAgICBjb25zdCBkYXlzUGFzc2VkID0gZGV0ZXJtaW5lRGF0ZURpZmZlcmVuY2UodHJpcC5kYXRlKVxuICAgIGlmIChkYXlzUGFzc2VkIDwgMCAmJiBNYXRoLmFicyhkYXlzUGFzc2VkKSA8IHRyaXAuZHVyYXRpb24gJiZcbiAgICAgICAgdHJpcC5zdGF0dXMgPT09ICdhcHByb3ZlZCcpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuICBjb25zdCB0b2RheXNUcmF2ZWxlcnMgPSBjdXJyZW50QWdlbnQuZmluZFRvZGF5c1RyYXZlbGVycyh0b2RheXNUcmlwcylcbiAgZG9tVXBkYXRlcy5kaXNwbGF5VG9kYXlzVHJhdmVsZXJzKHRvZGF5c1RyYXZlbGVycylcbn1cblxuZnVuY3Rpb24gYXBwcm92ZVBlbmRpbmdUcmlwKGV2ZW50KSB7XG4gIGNvbnN0IHRyaXBJRCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RyaXBJRCcpXG4gIGNvbnN0IHJldmlzZWRUcmlwID0ge1xuICAgIGlkOiBOdW1iZXIodHJpcElEKSxcbiAgICBzdGF0dXM6ICdhcHByb3ZlZCdcbiAgfVxuXG4gIGZldGNoQXBpLnBvc3RNb2RpZnlUcmlwKHJldmlzZWRUcmlwKVxuXG4gIHJlbG9hZFNlcnZlckluZm9ybWF0aW9uKClcbiAgICAudGhlbihsb2FkVHJhdmVsZXJJbmZvcm1hdGlvbilcbn1cblxuZnVuY3Rpb24gZGVsZXRlUGVuZGluZ1RyaXAoKSB7XG4gIGNvbnN0IHRyaXBJRCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RyaXBJRCcpXG4gIGZldGNoQXBpLmRlbGV0ZVRyaXAoTnVtYmVyKHRyaXBJRCkpXG5cbiAgcmVsb2FkU2VydmVySW5mb3JtYXRpb24oKVxuICAgIC50aGVuKGxvYWRUcmF2ZWxlckluZm9ybWF0aW9uKVxufVxuXG5mdW5jdGlvbiBsb2FkVHJhdmVsZXJJbmZvcm1hdGlvbigpIHtcbiAgZG9tVXBkYXRlcy5jbGVhclRyYXZlbGVyQ2FyZERpc3BsYXlzKClcblxuICBjdXJyZW50QWdlbnQudHJhdmVsZXJzLmZvckVhY2godHJhdmVsZXIgPT4ge1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheVRyYXZlbGVySW5mb3JtYXRpb24odHJhdmVsZXIsIGN1cnJlbnRBZ2VudC5kZXN0aW5hdGlvbnMpXG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5UGVuZGluZ1RyaXBzKHRyYXZlbGVyLCBjdXJyZW50QWdlbnQuZGVzdGluYXRpb25zKVxuICB9KVxuXG4gIGFkZFBlbmRpbmdCdXR0b25FdmVudExpc3RlbmVycygpXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVRyaXBBbmRUcmF2ZWxlclZpZXcoZXZlbnQpIHtcbiAgY29uc3QgZHJvcGRvd25WYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuXG4gIGlmIChkcm9wZG93blZhbHVlID09PSAndHJpcHMnKSB7XG4gICAgY2hlY2tGb3JQZW5kaW5nVHJpcHMoKVxuICAgIGFnZW50RGFzaGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktdHJpcHMnKVxuICAgIGFnZW50RGFzaGJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktdHJhdmVsZXJzJylcblxuICB9IGVsc2Uge1xuICAgIGFnZW50RGFzaGJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktdHJpcHMnKVxuICAgIGFnZW50RGFzaGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktdHJhdmVsZXJzJylcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0ZvclBlbmRpbmdUcmlwcygpIHtcbiAgY29uc3QgcGVuZGluZ1RyaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlbmRpbmctLWFydGljbGUnKVxuICBjb25zdCB0cmlwTGlzdCA9IHBlbmRpbmdUcmlwcy5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlJylcbiAgY29uc3QgcGVuZGluZ01lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVuZGluZy0tbWVzc2FnZScpXG5cbiAgaWYgKCF0cmlwTGlzdCkge1xuICAgIHBlbmRpbmdNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xuICB9IGVsc2Uge1xuICAgIHBlbmRpbmdNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgfVxufVxuXG5cbi8vIEdFTkVSQUwgRlVOQ1RJT05BTElUWVxuZnVuY3Rpb24gZmluZERlc3RpbmF0aW9uSW5mb3JtYXRpb24oKSB7XG4gIGN1cnJlbnRUcmF2ZWxlci50cmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgIGNvbnN0IHBsYWNlID0gZmluZERlc3RpbmF0aW9uKHRyaXAuZGVzdGluYXRpb25JRClcbiAgICBjb25zdCBkYXlzUGFzc2VkID0gZGV0ZXJtaW5lRGF0ZURpZmZlcmVuY2UodHJpcC5kYXRlKVxuXG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5RGVzdGluYXRpb25JbmZvcm1hdGlvbih0cmlwLCBwbGFjZSwgZGF5c1Bhc3NlZClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmluZERlc3RpbmF0aW9uKGRlc3RpbmF0aW9uSUQpIHtcbiAgcmV0dXJuIGN1cnJlbnRBZ2VudC5kZXN0aW5hdGlvbnMuZmluZChkZXN0ID0+IGRlc3QuaWQgPT09IGRlc3RpbmF0aW9uSUQpXG59XG5cbmZ1bmN0aW9uIGRldGVybWluZURhdGVEaWZmZXJlbmNlKGRhdGVJbnB1dCkge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgY29uc3QgdGltZURpZmZlcmVuY2UgPSBEYXRlLnBhcnNlKGRhdGVJbnB1dCkgLSB0b2RheVxuICByZXR1cm4gTWF0aC5jZWlsKHRpbWVEaWZmZXJlbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKVxufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlRm9yUG9zdChkYXRlSW5wdXQpIHtcbiAgY29uc3QgZGF0ZVBhcnRzID0gZGF0ZUlucHV0LnNwbGl0KCctJylcbiAgcmV0dXJuIGRhdGVQYXJ0cy5qb2luKCcvJylcbn1cblxuZnVuY3Rpb24gYWRkUGVuZGluZ0J1dHRvbkV2ZW50TGlzdGVuZXJzKCkge1xuICBjb25zdCBhcHByb3ZlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tYXBwcm92ZScpXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLWRlbGV0ZScpXG5cbiAgYXBwcm92ZUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFwcHJvdmVQZW5kaW5nVHJpcClcbiAgfSlcblxuICBkZWxldGVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQZW5kaW5nVHJpcClcbiAgfSlcbn1cblxuXG4vLyBUT0dHTEUgQkVUV0VFTiBMT0dJTiBBTkQgREFTSEJPQVJEXG5mdW5jdGlvbiBsb2dPbldlYnNpdGUoc2VsZWN0ZWREYXNoYm9hcmQpIHtcbiAgc2VsZWN0ZWREYXNoYm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgbG9naW5WaWV3LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIGxvZ29mZkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxufVxuXG5mdW5jdGlvbiBsb2dPZmZXZWJzaXRlKCkge1xuICBsb2dpblZpZXcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgdHJhdmVsZXJEYXNoYm9hcmQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgYWdlbnREYXNoYm9hcmQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgbG9nb2ZmQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG59XG4iLCJjbGFzcyBUcmF2ZWxlciB7XG4gIGNvbnN0cnVjdG9yKHRyYXZlbGVyKSB7XG4gICAgdGhpcy5pZCA9IHRyYXZlbGVyLmlkXG4gICAgdGhpcy5uYW1lID0gdHJhdmVsZXIubmFtZVxuICAgIHRoaXMudHlwZSA9IHRyYXZlbGVyLnRyYXZlbGVyVHlwZVxuICAgIHRoaXMudHJpcHMgPSBbXVxuICB9XG5cbiAgc29ydFRyaXBzQnlEYXRlKCkge1xuICAgIHRoaXMudHJpcHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKERhdGUucGFyc2UoYS5kYXRlKSA8IERhdGUucGFyc2UoYi5kYXRlKSkge1xuICAgICAgICByZXR1cm4gMVxuICAgICAgfSBlbHNlIGlmIChEYXRlLnBhcnNlKGEuZGF0ZSkgPiBEYXRlLnBhcnNlKGIuZGF0ZSkpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNhbGN1bGF0ZVNwZW5kaW5nKGRlc3RpbmF0aW9ucywgeWVhcikge1xuICAgIGxldCB0b3RhbENvc3QgPSAwXG5cbiAgICB0aGlzLnRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBjb25zdCB0cmlwRGF0ZSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSlcbiAgICAgIGNvbnN0IHRyaXBZZWFyID0gdHJpcERhdGUuZ2V0RnVsbFllYXIoKVxuXG4gICAgICBpZiAodHJpcFllYXIgPT09IHllYXIgJiYgdHJpcC5zdGF0dXMgIT09ICdwZW5kaW5nJykge1xuICAgICAgICBjb25zdCB0b3RhbFBlclRyaXAgPSB0aGlzLmNhbGN1bGF0ZUNvc3RQZXJUcmlwKHRyaXAsIGRlc3RpbmF0aW9ucylcbiAgICAgICAgdG90YWxDb3N0ICs9IHRvdGFsUGVyVHJpcFxuXG4gICAgICB9IGVsc2UgaWYgKCF5ZWFyICYmIHRyaXAuc3RhdHVzICE9PSAncGVuZGluZycpIHtcbiAgICAgICAgY29uc3QgdG90YWxQZXJUcmlwID0gdGhpcy5jYWxjdWxhdGVDb3N0UGVyVHJpcCh0cmlwLCBkZXN0aW5hdGlvbnMpXG4gICAgICAgIHRvdGFsQ29zdCArPSB0b3RhbFBlclRyaXBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICh0b3RhbENvc3QgKiAxLjEpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMlxuICAgIH0pXG4gIH1cblxuICBjYWxjdWxhdGVDb3N0UGVyVHJpcCh0cmlwLCBkZXN0aW5hdGlvbnMpIHtcbiAgICBjb25zdCBwbGFjZSA9IGRlc3RpbmF0aW9ucy5maW5kKGRlc3QgPT4gZGVzdC5pZCA9PT0gdHJpcC5kZXN0aW5hdGlvbklEKVxuXG4gICAgY29uc3QgdG90YWxMb2RnaW5nID0gcGxhY2UubG9kZ2luZ0Nvc3RQZXJEYXkgKiB0cmlwLmR1cmF0aW9uXG4gICAgY29uc3QgdG90YWxGbGlnaHQgPSBwbGFjZS5mbGlnaHRDb3N0UGVyUGVyc29uXG4gICAgcmV0dXJuIHRvdGFsTG9kZ2luZyArIHRvdGFsRmxpZ2h0XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmF2ZWxlclxuIiwiY2xhc3MgVHJpcCB7XG4gIGNvbnN0cnVjdG9yKHRyaXApIHtcbiAgICB0aGlzLmlkID0gdHJpcC5pZFxuICAgIHRoaXMudXNlcklEID0gdHJpcC51c2VySURcbiAgICB0aGlzLmRlc3RpbmF0aW9uSUQgPSB0cmlwLmRlc3RpbmF0aW9uSURcbiAgICB0aGlzLnRyYXZlbGVycyA9IHRyaXAudHJhdmVsZXJzXG4gICAgdGhpcy5kYXRlID0gdHJpcC5kYXRlXG4gICAgdGhpcy5kdXJhdGlvbiA9IHRyaXAuZHVyYXRpb25cbiAgICB0aGlzLnN0YXR1cyA9IHRyaXAuc3RhdHVzXG4gICAgdGhpcy5zdWdnZXN0ZWRBY3Rpdml0aWVzID0gdHJpcC5zdWdnZXN0ZWRBY3Rpdml0aWVzXG4gIH1cblxuICBkZXRlcm1pbmVUcmlwU3RhdHVzKGRheXNQYXNzZWQpIHtcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdwZW5kaW5nJykge1xuICAgICAgcmV0dXJuICdQZW5kaW5nJ1xuXG4gICAgfSBlbHNlIGlmIChNYXRoLmFicyhkYXlzUGFzc2VkKSA8PSB0aGlzLmR1cmF0aW9uKSB7XG4gICAgICByZXR1cm4gJ1ByZXNlbnQnXG5cbiAgICB9IGVsc2UgaWYgKGRheXNQYXNzZWQgPiAwICYmIGRheXNQYXNzZWQgPD0gMzApIHtcbiAgICAgIHJldHVybiAnVXBjb21pbmcnXG4gICAgfVxuXG4gICAgcmV0dXJuICdQcmV2aW91cydcbiAgfVxuXG4gIGZvcm1hdERhdGUoKSB7XG4gICAgbGV0IGRhdGVQYXJ0c1xuXG4gICAgaWYgKHRoaXMuZGF0ZS5pbmNsdWRlcygnLycpKSB7XG4gICAgICBkYXRlUGFydHMgPSB0aGlzLmRhdGUuc3BsaXQoJy8nKVxuXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGUuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgZGF0ZVBhcnRzID0gdGhpcy5kYXRlLnNwbGl0KCctJylcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZVBhcnRzWzBdLCBkYXRlUGFydHNbMV0gLSAxLCBkYXRlUGFydHNbMl0pXG4gICAgdGhpcy5kYXRlID0gbmV3RGF0ZS50b0RhdGVTdHJpbmcoKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJpcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==