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
___CSS_LOADER_EXPORT___.push([module.i, "body, html {\n  background-color: #3D767B;\n  font-family: \"Yusei Magic\", sans-serif;\n  height: 100vh;\n  margin: 0 1rem 0 1rem;\n  padding: 0; }\n\nh2, h3, p {\n  margin: 0;\n  padding: 0; }\n\n.button-primary {\n  background-color: #FFB100;\n  border: none;\n  box-shadow: none;\n  border-radius: 0.2rem;\n  cursor: pointer;\n  font-family: \"Yusei Magic\", sans-serif;\n  padding: 0.5rem;\n  width: 150px; }\n  .button-primary:disabled {\n    background-color: #FFCE63;\n    cursor: default; }\n\n.button-secondary {\n  background-color: #FFB100;\n  border: none;\n  box-shadow: none;\n  border-radius: 0.2rem;\n  cursor: pointer;\n  font-family: \"Yusei Magic\", sans-serif;\n  padding: 0.5rem;\n  width: 150px;\n  background-color: #005256;\n  color: #FFCE63; }\n  .button-secondary:disabled {\n    background-color: #FFCE63;\n    cursor: default; }\n\n.hidden {\n  display: none !important; }\n\n.header {\n  align-items: center;\n  display: flex;\n  height: 10%;\n  justify-content: space-between;\n  padding: 0 1rem 0 1rem; }\n  .header .logo {\n    align-items: center;\n    display: flex; }\n  .header .slogan {\n    align-items: flex-end;\n    display: flex;\n    flex-direction: column;\n    justify-content: center; }\n  .header img {\n    height: 40px; }\n\n.list-unordered {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n  .list-unordered li {\n    font-size: 14px; }\n\n.welcome {\n  background-color: #FFB100;\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 1.5rem; }\n\n.container {\n  height: 88%; }\n\n.dashboard-user {\n  display: grid;\n  grid-gap: 0.5rem;\n  grid-template-areas: \"welcomeUser planningUser planningUser planningUser\" \"tripsUser tripsUser tripsUser tripsUser\";\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 2fr;\n  height: 100%; }\n\n#welcome-user {\n  grid-area: welcomeUser; }\n\n#planning-user {\n  grid-area: planningUser; }\n\n#trip-user {\n  grid-area: tripsUser; }\n\n@media screen and (max-width: 900px) {\n  .dashboard-user {\n    display: block; }\n  .header {\n    height: auto;\n    margin-bottom: 1rem; }\n  .welcome--spending {\n    align-items: flex-end;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap; }\n    .welcome--spending div {\n      align-items: flex-end;\n      display: flex; } }\n\n@media screen and (max-width: 650px) {\n  .header {\n    flex-direction: column;\n    justify-content: center;\n    text-align: center; }\n    .header .slogan {\n      align-items: center;\n      justify-content: center; }\n  .welcome {\n    align-items: center;\n    text-align: center;\n    padding: 0.5rem; }\n    .welcome--spending {\n      justify-content: center; } }\n\n@media screen and (max-width: 550px) {\n  .container {\n    height: 80%; } }\n\n@media screen and (max-width: 390px) {\n  .header {\n    margin-bottom: 1rem; }\n  .welcome--spending div {\n    align-items: center;\n    flex-direction: column; } }\n\n.planning-user,\n.planning-agent {\n  background-color: #005256;\n  border-radius: 0.5rem;\n  color: #FFEBC6;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding: 1rem; }\n  .planning-user .button,\n  .planning-agent .button {\n    background-color: #FFB100;\n    border: none;\n    box-shadow: none;\n    border-radius: 0.2rem;\n    cursor: pointer;\n    font-family: \"Yusei Magic\", sans-serif;\n    padding: 0.5rem;\n    width: 150px; }\n    .planning-user .button:disabled,\n    .planning-agent .button:disabled {\n      background-color: #FFCE63;\n      cursor: default; }\n\n.planning--bottom {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  width: 100%; }\n\n.planning--cost {\n  margin-bottom: 0.4rem; }\n\n.planning--date {\n  font-size: 14px;\n  height: 1.7rem; }\n\n.planning--dropdown {\n  font-size: 14px;\n  height: 2rem;\n  min-width: 3rem; }\n\n.planning--inputs {\n  display: grid;\n  grid-gap: 0.5rem;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n  grid-gap: 1rem;\n  grid-template-areas: \"date destination duration travelers\";\n  width: 100%; }\n\n.planning--text {\n  font-size: 14px;\n  margin: 0.5rem 0 0.5 0; }\n\n.planning--title {\n  margin: 0; }\n\n.form--section {\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end; }\n\n#input-date {\n  grid-area: date; }\n\n#input-destination {\n  grid-area: destination; }\n\n#input-duration {\n  grid-area: duration; }\n\n#input-travelers {\n  grid-area: travelers; }\n\n@media screen and (max-width: 1000px) {\n  .planning--inputs {\n    display: grid;\n    grid-gap: 0.5rem;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \"date destination\" \"duration travelers\"; }\n  .planning--text {\n    margin: 0.5rem 0 0.5rem 0; } }\n\n@media screen and (max-width: 550px) {\n  .planning--inputs {\n    display: block; }\n  .planning--dropdown {\n    max-width: 14rem; } }\n\n@media screen and (max-width: 390px) {\n  .planning--dropdown {\n    max-width: 12rem; } }\n\n.card--header {\n  position: relative;\n  width: 100%; }\n\n.card--body {\n  padding: 0.4rem; }\n\n.card--image {\n  top: 0;\n  right: 0;\n  height: 100px;\n  position: absolute;\n  object-fit: cover;\n  opacity: 0;\n  width: 100%; }\n\n.trip-user {\n  display: grid;\n  grid-gap: 0.5rem;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n  grid-template-areas: \"previous present upcoming pending\";\n  overflow: hidden; }\n  .trip-user .trip--card:hover {\n    cursor: default; }\n    .trip-user .trip--card:hover .card--image {\n      border-radius: 0.5rem 0.5rem 0 0;\n      opacity: 0.5;\n      transition: .8s ease;\n      z-index: 0; }\n    .trip-user .trip--card:hover h3 {\n      background-color: white;\n      opacity: 0.8; }\n\n.trip--article {\n  align-items: center;\n  background-color: #003844;\n  border-radius: 0.5rem;\n  color: #FFEBC6;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  padding: 1rem; }\n\n.trip--form {\n  display: none; }\n\n.trip--card {\n  align-items: center;\n  background-color: #FFEBC6;\n  border-radius: 0.5rem;\n  box-shadow: 5px 5px 5px #00262E;\n  color: #003844;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: 0.5rem 0;\n  text-align: center;\n  width: 90%; }\n  .trip--card h3 {\n    font-size: 18px;\n    margin: 2rem 0.5rem;\n    position: relative;\n    z-index: 1; }\n  .trip--card h4 {\n    font-size: 16px;\n    margin: 0.5rem 0;\n    text-decoration: underline; }\n  .trip--card p {\n    font-size: 14px;\n    margin: 0.5rem 0; }\n\n.user--card h3 {\n  margin-top: 1rem; }\n\n#trip--dropdown-message {\n  display: none;\n  margin-top: 1rem; }\n\n#trip--present {\n  grid-area: present; }\n\n#trip--upcoming {\n  grid-area: upcoming; }\n\n#trip--pending {\n  grid-area: pending; }\n\n#trip--previous {\n  grid-area: previous; }\n\n@media screen and (max-width: 900px) {\n  .display-previous .trip--article:not(.previous) {\n    display: none !important; }\n  .display-present .trip--article:not(.present) {\n    display: none !important; }\n  .display-upcoming .trip--article:not(.upcoming) {\n    display: none !important; }\n  .display-pending .trip--article:not(.pending) {\n    display: none !important; }\n  .card--image {\n    opacity: 0.5; }\n  .planning-user {\n    margin: 0.5rem 0; }\n  .trip--article {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    overflow: auto;\n    padding-top: 4rem;\n    min-height: 4rem; }\n    .trip--article h2 {\n      display: none !important; }\n  .trip--card {\n    margin: 1rem;\n    height: 20rem;\n    width: 15rem; }\n  .trip--form {\n    align-items: center;\n    color: #FFCE63;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    position: absolute;\n    transform: translate(-50%, 0);\n    top: 1rem;\n    left: 50%;\n    justify-content: flex-start;\n    min-height: 70px;\n    width: 100%; }\n  .trip-user {\n    display: block;\n    overflow: auto;\n    position: relative; } }\n\n@media screen and (max-width: 550px) {\n  .trip--card {\n    width: 90%; } }\n\n.login {\n  align-items: center;\n  display: flex;\n  justify-content: center; }\n  .login h2 {\n    text-shadow: 3px 3px 3px black; }\n\n.login--main {\n  align-items: center;\n  background-color: #003844;\n  border-radius: 1rem;\n  box-shadow: 4px 4px 6px 1px #00262E;\n  color: #FFCE63;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 80vh;\n  width: 80vw; }\n\n.login--body {\n  align-items: center;\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%; }\n  .login--body button {\n    background-color: #FFB100;\n    border: none;\n    box-shadow: none;\n    border-radius: 0.2rem;\n    cursor: pointer;\n    font-family: \"Yusei Magic\", sans-serif;\n    padding: 0.5rem;\n    width: 150px;\n    background-color: #005256;\n    color: #FFCE63; }\n    .login--body button:disabled {\n      background-color: #FFCE63;\n      cursor: default; }\n    .login--body button:disabled {\n      background-color: #3D767B; }\n\n.login--form {\n  align-items: center;\n  background-color: #FFB100;\n  border-radius: 0.5rem;\n  box-shadow: 4px 4px 6px 1px #00262E;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 25rem;\n  margin: 2rem;\n  width: 15rem; }\n  .login--form input {\n    font-size: 18px;\n    height: 25px; }\n\n.line {\n  background-color: #FFCE63;\n  height: 90%;\n  width: 1px; }\n\n@media screen and (max-width: 768px) {\n  .login--main {\n    margin-top: 1rem;\n    height: auto;\n    width: auto; }\n  .line {\n    height: 1px;\n    width: 90%; }\n  .login--body {\n    flex-direction: column;\n    justify-content: center; }\n  .login--form {\n    height: 12rem;\n    width: 20rem; } }\n\n@media screen and (max-width: 445px) {\n  .login--form {\n    height: 13rem;\n    width: 15rem; } }\n\n@media screen and (max-width: 375px) {\n  .container {\n    height: 85%; }\n  .login {\n    height: 100%; }\n  .login--body {\n    padding: 0 0.5rem 0 0.5rem; }\n  .login--form {\n    margin: 1rem; }\n  input {\n    max-width: 10rem; } }\n\n.traveler--header {\n  text-align: center;\n  padding-bottom: 1rem; }\n\n.traveler--cards,\n.pending--cards {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  overflow-y: auto; }\n\n.button-approve {\n  margin-top: 0.6rem; }\n\n.button-delete {\n  margin: 0.2rem 0; }\n\n.dashboard-agent {\n  display: grid;\n  grid-gap: 0.5rem;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n  grid-template-areas: \"welcomeAgent planningAgent planningAgent planningAgent\" \"tripsAgent planningAgent planningAgent planningAgent\" \"tripsAgent planningAgent planningAgent planningAgent\";\n  height: 100%; }\n\n.pending--article {\n  align-items: center;\n  background-color: #003844;\n  border-radius: 0.5rem;\n  color: #FFEBC6;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  padding: 1rem; }\n\n.planning-agent {\n  align-items: center;\n  justify-content: flex-start;\n  max-height: none;\n  width: 90%; }\n  .planning-agent .trip--card {\n    margin: 1rem;\n    width: 300px; }\n    .planning-agent .trip--card table {\n      border-spacing: 0.5rem 0;\n      text-align: left; }\n      .planning-agent .trip--card table thead {\n        text-decoration: underline; }\n    .planning-agent .trip--card h3 {\n      margin: 1rem 0 0 0; }\n\n.traveler--form {\n  display: none; }\n\n.traveler--search {\n  margin-top: 0.5rem;\n  text-align: center;\n  height: 20px;\n  width: 200px; }\n\n.traveler--search-box {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 0.5rem;\n  width: 100%; }\n\n.user--card {\n  align-items: center;\n  background-color: #FFEBC6;\n  border-radius: 0.5rem;\n  box-shadow: 5px 5px 5px #00262E;\n  color: #003844;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: 0.5rem 0;\n  text-align: center;\n  width: 90%;\n  min-width: 160px; }\n\n.welcome h3 {\n  text-decoration: underline; }\n\n#pending--message {\n  display: none; }\n\n#welcome-agent {\n  grid-area: welcomeAgent; }\n\n#planning-agent {\n  grid-area: planningAgent; }\n\n#pending--article {\n  grid-area: tripsAgent; }\n\n#server-error {\n  display: none;\n  margin-top: 1rem; }\n\n@media screen and (max-width: 910px) {\n  .dashboard-agent {\n    grid-template-areas: \"welcomeAgent welcomeAgent welcomeAgent\" \"tripsAgent planningAgent planningAgent\" \"tripsAgent planningAgent planningAgent\";\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 0.6fr 1fr 1fr; } }\n\n@media screen and (max-width: 710px) {\n  .dashboard-agent {\n    grid-template-areas: \"welcomeAgent welcomeAgent\" \"tripsAgent planningAgent\" \"tripsAgent planningAgent\";\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 0.6fr 1fr; } }\n\n@media screen and (max-width: 650px) {\n  h1 {\n    margin: 0.4rem; }\n  .agent--body h2 {\n    display: none; }\n  .dashboard-agent {\n    align-items: center;\n    display: flex;\n    flex-direction: column; }\n  .display-trips .agent--body:not(.trips) {\n    display: none !important; }\n  .display-travelers .agent--body:not(.travelers) {\n    display: none !important; }\n  .pending--article,\n  .planning-agent {\n    background-color: #003844;\n    padding-top: 4rem;\n    overflow-y: auto;\n    width: 90%; }\n  .trip--card {\n    max-width: 270px; }\n  .traveler--form-container {\n    position: relative;\n    text-align: center;\n    width: 100%; }\n  .traveler--form {\n    align-items: center;\n    color: #FFCE63;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    position: absolute;\n    transform: translate(-50%, 0);\n    top: 1rem;\n    left: 50%;\n    top: 1rem;\n    width: 100%; }\n  .welcome {\n    margin: 0 auto;\n    width: 90%; } }\n", "",{"version":3,"sources":["webpack://./src/css/_base.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_plans.scss","webpack://./src/css/_trips.scss","webpack://./src/css/_login.scss","webpack://./src/css/_agent.scss"],"names":[],"mappings":"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","sourcesContent":["* {\n  // border: 1px solid black;\n}\n\nbody, html {\n  background-color: $color-ming;\n  font-family: $font-primary;\n  height: 100vh;\n  margin: 0 1rem 0 1rem;\n  padding: 0;\n}\n\nh2, h3, p {\n  margin: 0;\n  padding: 0;\n}\n\n.button-primary {\n  @include button-primary;\n}\n\n.button-secondary {\n  @include button-secondary;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.header {\n  align-items: center;\n  display: flex;\n  height: 10%;\n  justify-content: space-between;\n  padding: 0 1rem 0 1rem;\n\n  .logo {\n    align-items: center;\n    display: flex;\n  }\n\n  .slogan {\n    align-items: flex-end;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  img {\n    height: 40px;\n  }\n}\n\n.list-unordered {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n\n  li {\n    font-size: 14px;\n  }\n}\n\n.welcome {\n  background-color: $color-honey;\n  border-radius: 0.5rem;\n  // box-shadow: 3px 3px 4px $color-deep-jungle;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 1.5rem;\n}\n\n.container {\n  height: 88%;\n}\n\n.dashboard-user {\n  display: grid;\n  grid-gap: 0.5rem;\n  grid-template-areas:\n  \"welcomeUser planningUser planningUser planningUser\"\n  \"tripsUser tripsUser tripsUser tripsUser\";\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 2fr;\n  height: 100%;\n}\n\n#welcome-user {\n  grid-area: welcomeUser;\n}\n\n#planning-user {\n  grid-area: planningUser;\n}\n\n#trip-user {\n  grid-area: tripsUser;\n}\n\n\n// MEDIA SCREENS\n@media screen and (max-width: 900px) {\n  .dashboard-user {\n    display: block;\n  }\n\n  .header {\n    height: auto;\n    margin-bottom: 1rem;\n  }\n\n  .welcome--spending {\n    align-items: flex-end;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n\n    div {\n      align-items: flex-end;\n      display: flex;\n    }\n  }\n}\n\n@media screen and (max-width: 650px) {\n  .header {\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n\n    .slogan {\n      align-items: center;\n      justify-content: center;\n    }\n  }\n\n  .welcome {\n    align-items: center;\n    text-align: center;\n    padding: 0.5rem;\n\n    &--spending {\n      justify-content: center;\n    }\n  }\n}\n\n@media screen and (max-width: 550px) {\n  .container {\n    height: 80%;\n  }\n}\n\n@media screen and (max-width: 390px) {\n  .header {\n    margin-bottom: 1rem;\n  }\n\n  .welcome--spending div {\n    align-items: center;\n    flex-direction: column;\n  }\n}\n","@mixin button-primary {\n  background-color: $color-honey;\n  border: none;\n  box-shadow: none;\n  border-radius: 0.2rem;\n  cursor: pointer;\n  font-family: $font-primary;\n  padding: 0.5rem;\n  width: 150px;\n\n  &:disabled {\n    background-color: $color-maize;\n    cursor: default;\n  }\n}\n\n@mixin button-secondary {\n  @include button-primary\n  background-color: $color-jungle-green;\n  color: $color-maize;\n}\n\n@mixin grid-presets-4x1 {\n  display: grid;\n  grid-gap: 0.5rem;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n}\n\n@mixin grid-presets-2x2 {\n  display: grid;\n  grid-gap: 0.5rem;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n@mixin mobile-dropdown {\n  align-items: center;\n  color: $color-maize;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: absolute;\n  transform: translate(-50%, 0);\n  top: 1rem;\n  left: 50%;\n}\n\n@mixin card-preset {\n  align-items: center;\n  background-color: $color-almond;\n  border-radius: 0.5rem;\n  box-shadow: 5px 5px 5px $color-deep-jungle;\n  color: $color-eagle-green;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: 0.5rem 0;\n  text-align: center;\n  width: 90%;\n}\n\n@mixin article-preset {\n  align-items: center;\n  background-color: $color-eagle-green;\n  border-radius: 0.5rem;\n  color: $color-almond;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  padding: 1rem;\n}\n\n$color-deep-jungle: #00262E; // shadow color\n$color-eagle-green: #003844; // darkest green\n$color-jungle-green: #005256; // mid green\n$color-ming: #3D767B; // light green\n$color-honey: #FFB100; // bright yellow\n$color-maize: #FFCE63; // light yellow\n$color-almond: #FFEBC6; // light tan\n\n$font-primary: 'Yusei Magic', sans-serif;\n",".planning-user,\n.planning-agent {\n  background-color: $color-jungle-green;\n  border-radius: 0.5rem;\n  // box-shadow: 3px 3px 4px $color-deep-jungle;\n  color: $color-almond;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding: 1rem;\n\n  .button {\n    @include button-primary;\n  }\n}\n\n.planning {\n  &--bottom {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n  }\n\n  &--cost {\n    margin-bottom: 0.4rem;\n  }\n\n  &--date {\n    font-size: 14px;\n    height: 1.7rem;\n  }\n\n  &--dropdown {\n    font-size: 14px;\n    height: 2rem;\n    min-width: 3rem;\n  }\n\n  &--inputs {\n    @include grid-presets-4x1;\n    grid-gap: 1rem;\n    grid-template-areas:\n      \"date destination duration travelers\";\n    width: 100%;\n  }\n\n  &--text {\n    font-size: 14px;\n    margin: 0.5rem 0 0.5 0;\n    // margin: 0.2rem 0 0 0;\n  }\n\n  &--title {\n    margin: 0;\n  }\n}\n\n.form--section {\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n#planning--warning {\n  // margin: 0.5rem 0 0 0;\n}\n\n#input-date {\n  grid-area: date;\n}\n\n#input-destination {\n  grid-area: destination;\n}\n\n#input-duration {\n  grid-area: duration;\n}\n\n#input-travelers {\n  grid-area: travelers;\n}\n\n// MEDIA SCREEN SIZES\n@media screen and (max-width: 1000px) {\n  .planning {\n    &--inputs {\n      @include grid-presets-2x2;\n      grid-template-areas:\n        \"date destination\"\n        \"duration travelers\";\n    }\n\n    &--text {\n      margin: 0.5rem 0 0.5rem 0;\n    }\n  }\n}\n\n@media screen and (max-width: 550px) {\n  .planning {\n    &--inputs {\n      display: block;\n    }\n\n    &--dropdown {\n      max-width: 14rem;\n    }\n  }\n}\n\n@media screen and (max-width: 390px) {\n  .planning--dropdown {\n    max-width: 12rem;\n  }\n}\n",".card {\n  &--header {\n    position: relative;\n    width: 100%;\n  }\n\n  &--body {\n    padding: 0.4rem;\n  }\n\n  &--image {\n    top: 0;\n    right: 0;\n    height: 100px;\n    position: absolute;\n    object-fit: cover;\n    opacity: 0;\n    width: 100%;\n  }\n}\n\n.trip-user {\n  @include grid-presets-4x1\n  grid-template-areas:\n    \"previous present upcoming pending\";\n  overflow: hidden;\n\n  .trip--card:hover {\n    cursor: default;\n\n    .card--image {\n      border-radius: 0.5rem 0.5rem 0 0;\n      opacity: 0.5;\n      transition: .8s ease;\n      z-index: 0;\n    }\n\n    h3 {\n      background-color: white;\n      opacity: 0.8;\n    }\n  }\n}\n\n.trip {\n  &--article {\n    @include article-preset;\n  }\n\n  &--form {\n    display: none;\n  }\n}\n\n.trip--card {\n  @include card-preset;\n\n  h3 {\n    font-size: 18px;\n    margin: 2rem 0.5rem;\n    position: relative;\n    z-index: 1;\n  }\n\n  h4 {\n    font-size: 16px;\n    margin: 0.5rem 0;\n    text-decoration: underline;\n  }\n\n  p {\n    font-size: 14px;\n    margin: 0.5rem 0;\n  }\n}\n\n.user--card h3 {\n  margin-top: 1rem;\n}\n\n#trip--dropdown-message {\n  display: none;\n  margin-top: 1rem;\n}\n\n#trip--present {\n  grid-area: present;\n}\n\n#trip--upcoming {\n  grid-area: upcoming;\n}\n\n#trip--pending {\n  grid-area: pending;\n}\n\n#trip--previous {\n  grid-area: previous;\n}\n\n// MEDIA SCREENS\n@media screen and (max-width: 900px) {\n  .display-previous .trip--article:not(.previous) {\n    display: none !important;\n  }\n\n  .display-present .trip--article:not(.present) {\n    display: none !important;\n  }\n\n  .display-upcoming .trip--article:not(.upcoming) {\n    display: none !important;\n  }\n\n  .display-pending .trip--article:not(.pending) {\n    display: none !important;\n  }\n\n  .card--image {\n    opacity: 0.5;\n  }\n\n  .planning-user {\n    margin: 0.5rem 0;\n  }\n\n  .trip--article {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    overflow: auto;\n    padding-top: 4rem;\n    min-height: 4rem;\n\n    h2 {\n      display: none !important;\n    }\n  }\n\n  .trip--card {\n    margin: 1rem;\n    height: 20rem;\n    width: 15rem;\n  }\n\n  .trip--form {\n    @include mobile-dropdown;\n    justify-content: flex-start;\n    min-height: 70px;\n    width: 100%;\n  }\n\n  .trip-user {\n    display: block;\n    overflow: auto;\n    position: relative;\n  }\n}\n\n@media screen and (max-width: 550px) {\n  .trip--card {\n    width: 90%;\n  }\n}\n",".login {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n\n  h2 {\n    text-shadow: 3px 3px 3px black;\n  }\n}\n\n.login--main {\n  align-items: center;\n  background-color: $color-eagle-green;\n  border-radius: 1rem;\n  box-shadow: 4px 4px 6px 1px $color-deep-jungle;\n  color: $color-maize;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 80vh;\n  width: 80vw;\n}\n\n.login--body {\n  align-items: center;\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n\n  button {\n    @include button-secondary;\n\n    &:disabled {\n      background-color: $color-ming;\n    }\n  }\n}\n\n.login--form {\n  align-items: center;\n  background-color: $color-honey;\n  border-radius: 0.5rem;\n  box-shadow: 4px 4px 6px 1px $color-deep-jungle;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 25rem;\n  margin: 2rem;\n  width: 15rem;\n\n  input {\n    font-size: 18px;\n    height: 25px;\n  }\n}\n\n.line {\n  background-color: $color-maize;\n  height: 90%;\n  width: 1px;\n}\n\n@media screen and (max-width: 768px) {\n  .login--main {\n    margin-top: 1rem;\n    height: auto;\n    width: auto;\n  }\n\n  .line {\n    height: 1px;\n    width: 90%;\n  }\n\n  .login--body {\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  .login--form {\n    height: 12rem;\n    width: 20rem;\n  }\n}\n\n@media screen and (max-width: 445px) {\n  .login--form {\n    height: 13rem;\n    width: 15rem;\n  }\n}\n\n@media screen and (max-width: 375px) {\n  .container {\n    height: 85%;\n  }\n\n  .login {\n    height: 100%;\n  }\n\n  .login--body {\n    padding: 0 0.5rem 0 0.5rem;\n  }\n\n  .login--form {\n    margin: 1rem;\n  }\n\n  input {\n    max-width: 10rem;\n  }\n}\n",".traveler--header {\n  text-align: center;\n  padding-bottom: 1rem;\n}\n\n.traveler--cards,\n.pending--cards {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  overflow-y: auto;\n}\n\n.button-approve {\n  margin-top: 0.6rem;\n}\n\n.button-delete {\n  margin: 0.2rem 0;\n}\n\n.dashboard-agent {\n  @include grid-presets-4x1\n  grid-template-areas:\n    \"welcomeAgent planningAgent planningAgent planningAgent\"\n    \"tripsAgent planningAgent planningAgent planningAgent\"\n    \"tripsAgent planningAgent planningAgent planningAgent\";\n  height: 100%;\n}\n\n.pending--article {\n  @include article-preset;\n}\n\n.planning-agent {\n  align-items: center;\n  justify-content: flex-start;\n  max-height: none;\n  width: 90%;\n\n  .trip--card {\n    margin: 1rem;\n    width: 300px;\n\n    table {\n      border-spacing: 0.5rem 0;\n      text-align: left;\n\n      thead {\n        text-decoration: underline;\n      }\n    }\n\n    h3 {\n      margin: 1rem 0 0 0;\n    }\n  }\n}\n\n.traveler--form {\n  display: none;\n}\n\n.traveler--search {\n  margin-top: 0.5rem;\n  text-align: center;\n  height: 20px;\n  width: 200px;\n}\n\n.traveler--search-box {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 0.5rem;\n  width: 100%;\n}\n\n.user--card {\n  @include card-preset;\n  min-width: 160px;\n}\n\n.welcome h3 {\n  text-decoration: underline;\n}\n\n#pending--message {\n  display: none;\n}\n\n#welcome-agent {\n  grid-area: welcomeAgent;\n}\n\n#planning-agent {\n  grid-area: planningAgent;\n}\n\n#pending--article {\n  grid-area: tripsAgent;\n}\n\n#server-error {\n  display: none;\n  margin-top: 1rem;\n}\n\n\n// MEDIA SCREENS\n@media screen and (max-width: 910px) {\n  .dashboard-agent {\n    grid-template-areas:\n      \"welcomeAgent welcomeAgent welcomeAgent\"\n      \"tripsAgent planningAgent planningAgent\"\n      \"tripsAgent planningAgent planningAgent\";\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 0.6fr 1fr 1fr;\n  }\n}\n\n@media screen and (max-width: 710px) {\n  .dashboard-agent {\n    grid-template-areas:\n      \"welcomeAgent welcomeAgent\"\n      \"tripsAgent planningAgent\"\n      \"tripsAgent planningAgent\";\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 0.6fr 1fr;\n  }\n}\n\n@media screen and (max-width: 650px) {\n  h1 {\n    margin: 0.4rem;\n  }\n\n  .agent--body h2 {\n    display: none;\n  }\n\n  .dashboard-agent {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .display-trips .agent--body:not(.trips) {\n    display: none !important;\n  }\n\n  .display-travelers .agent--body:not(.travelers) {\n    display: none !important;\n  }\n\n  .pending--article,\n  .planning-agent {\n    background-color: $color-eagle-green;\n    padding-top: 4rem;\n    overflow-y: auto;\n    width: 90%;\n  }\n\n  .trip--card {\n    max-width: 270px;\n  }\n\n  .traveler--form-container {\n    position: relative;\n    text-align: center;\n    width: 100%;\n  }\n\n  .traveler--form {\n    @include mobile-dropdown;\n    top: 1rem;\n    width: 100%;\n  }\n\n  .welcome {\n    margin: 0 auto;\n    width: 90%;\n  }\n\n}\n"],"sourceRoot":""}]);
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
    .catch(displayErrorMessage)
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
  .catch(displayErrorMessage)

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
    .catch(displayErrorMessage)
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
    .then(reloadServerInformation)
    .then(clearAllTripDisplays)
    .then(findDestinationInformation)
    .catch(displayErrorMessage)
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
    .catch(displayErrorMessage)
}

function deletePendingTrip() {
  const tripID = event.target.getAttribute('tripID')
  _fetchApi__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTrip(Number(tripID))

  reloadServerInformation()
    .then(loadTravelerInformation)
    .catch(displayErrorMessage)
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

function displayErrorMessage(error) {
  const errorMessage = document.querySelector('#server-error')
  if (error) {
    console.log('ERROR MESSAGE: Unable to access server information at this time. Please check that the server is running and refresh the page.')
    errorMessage.style.display = 'inline-block'
  } else {
    errorMessage.style.display = 'none'
  }
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

    } else if (daysPassed > 0 && daysPassed <= 30) {
      return 'Upcoming'

    } else if (Math.abs(daysPassed) <= this.duration) {
      return 'Present'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzP2U5MDEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LnNjc3M/N2FiMSIsIndlYnBhY2s6Ly8vLi9zcmMvZGVzdGluYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZldGNoQXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbG9nby1wbGFuZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy90cmF2ZWxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJpcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7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QUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLHdEQUF3RCxNQUFNO0FBQzlEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixHQUFHO0FBQ2xDLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxtREFBVTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFLG1EQUFVO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsaURBQVE7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsaURBQVE7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG1EQUFVOztBQUVaO0FBQ0EsSUFBSSxtREFBVTtBQUNkLElBQUksbURBQVU7QUFDZCxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxtREFBVTtBQUNkLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaGVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovIH1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDsgfVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAvKiAxICovXFxuICBoZWlnaHQ6IDA7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7IH1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTsgfVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTsgfVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTsgfVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0OyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7XFxuICAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIC8qIDEgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICAvKiAyICovIH1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTsgfVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQUE7QUFFQTsrRUFBK0U7QUFHL0U7OztFQUNFO0FBSUY7RUFDRSxpQkFBaUI7RUFBRSxNQUFBO0VBQ25CLDhCQUE4QjtFQUFFLE1BQUEsRUFBTzs7QUFHekM7K0VBRCtFO0FBSS9FOztFQURFO0FBS0Y7RUFDRSxTQUFTLEVBQUE7O0FBR1g7O0VBSEU7QUFPRjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7OztFQUpFO0FBU0Y7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR2xCOytFQVIrRTtBQVcvRTs7O0VBUEU7QUFZRjtFQUNFLHVCQUF1QjtFQUFFLE1BQUE7RUFDekIsU0FBUztFQUFFLE1BQUE7RUFDWCxpQkFBaUI7RUFBRSxNQUFBLEVBQU87O0FBRzVCOzs7RUFORTtBQVdGO0VBQ0UsaUNBQWlDO0VBQUUsTUFBQTtFQUNuQyxjQUFjO0VBQUUsTUFBQSxFQUFPOztBQUd6QjsrRUFSK0U7QUFXL0U7O0VBUkU7QUFZRjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjs7O0VBVEU7QUFjRjtFQUNFLG1CQUFtQjtFQUFFLE1BQUE7RUFDckIsMEJBQTBCO0VBQUUsTUFBQTtFQUM1QixpQ0FBaUM7RUFBRSxNQUFBLEVBQU87O0FBRzVDOztFQVRFO0FBYUY7O0VBRUUsbUJBQW1CLEVBQUE7O0FBR3JCOzs7RUFWRTtBQWVGOzs7RUFHRSxpQ0FBaUM7RUFBRSxNQUFBO0VBQ25DLGNBQWM7RUFBRSxNQUFBLEVBQU87O0FBR3pCOztFQVhFO0FBZUY7RUFDRSxjQUFjLEVBQUE7O0FBR2hCOzs7RUFaRTtBQWlCRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsV0FBVyxFQUFBOztBQUdiOytFQWxCK0U7QUFxQi9FOztFQWxCRTtBQXNCRjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjsrRUFyQitFO0FBd0IvRTs7O0VBcEJFO0FBeUJGOzs7OztFQUtFLG9CQUFvQjtFQUFFLE1BQUE7RUFDdEIsZUFBZTtFQUFFLE1BQUE7RUFDakIsaUJBQWlCO0VBQUUsTUFBQTtFQUNuQixTQUFTO0VBQUUsTUFBQSxFQUFPOztBQUdwQjs7O0VBbEJFO0FBdUJGOztFQUNRLE1BQUE7RUFDTixpQkFBaUIsRUFBQTs7QUFHbkI7OztFQW5CRTtBQXdCRjs7RUFDUyxNQUFBO0VBQ1Asb0JBQW9CLEVBQUE7O0FBR3RCOztFQXJCRTtBQXlCRjs7OztFQUlFLDBCQUEwQixFQUFBOztBQUc1Qjs7RUF2QkU7QUEyQkY7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdaOztFQXpCRTtBQTZCRjs7OztFQUlFLDhCQUE4QixFQUFBOztBQUdoQzs7RUEzQkU7QUErQkY7RUFDRSw4QkFBOEIsRUFBQTs7QUFHaEM7Ozs7O0VBMUJFO0FBaUNGO0VBQ0Usc0JBQXNCO0VBQUUsTUFBQTtFQUN4QixjQUFjO0VBQUUsTUFBQTtFQUNoQixjQUFjO0VBQUUsTUFBQTtFQUNoQixlQUFlO0VBQUUsTUFBQTtFQUNqQixVQUFVO0VBQUUsTUFBQTtFQUNaLG1CQUFtQjtFQUFFLE1BQUEsRUFBTzs7QUFHOUI7O0VBekJFO0FBNkJGO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRzFCOztFQTNCRTtBQStCRjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7OztFQTVCRTtBQUNGOztFQWtDRSxzQkFBc0I7RUFBRSxNQUFBO0VBQ3hCLFVBQVU7RUFBRSxNQUFBLEVBQU87O0FBR3JCOztFQTdCRTtBQUNGOztFQWtDRSxZQUFZLEVBQUE7O0FBR2Q7OztFQTlCRTtBQUNGO0VBbUNFLDZCQUE2QjtFQUFFLE1BQUE7RUFDL0Isb0JBQW9CO0VBQUUsTUFBQSxFQUFPOztBQUcvQjs7RUEvQkU7QUFDRjtFQW1DRSx3QkFBd0IsRUFBQTs7QUFHMUI7OztFQWhDRTtBQXFDRjtFQUNFLDBCQUEwQjtFQUFFLE1BQUE7RUFDNUIsYUFBYTtFQUFFLE1BQUEsRUFBTzs7QUFHeEI7K0VBbEMrRTtBQXFDL0U7O0VBbENFO0FBc0NGO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjs7RUFwQ0U7QUF3Q0Y7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7K0VBdkMrRTtBQTBDL0U7O0VBdkNFO0FBMkNGO0VBQ0UsYUFBYSxFQUFBOztBQUdmOztFQXpDRTtBQUNGO0VBNkNFLGFBQWEsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHksIGh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNENzY3QjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiWXVzZWkgTWFnaWNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMCAxcmVtIDAgMXJlbTtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG5oMiwgaDMsIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5idXR0b24tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCMTAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiWXVzZWkgTWFnaWNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgd2lkdGg6IDE1MHB4OyB9XFxuICAuYnV0dG9uLXByaW1hcnk6ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDRTYzO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG4uYnV0dG9uLXNlY29uZGFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCMTAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiWXVzZWkgTWFnaWNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTI1NjtcXG4gIGNvbG9yOiAjRkZDRTYzOyB9XFxuICAuYnV0dG9uLXNlY29uZGFyeTpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkNFNjM7XFxuICAgIGN1cnNvcjogZGVmYXVsdDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuLmhlYWRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAxcmVtIDAgMXJlbTsgfVxcbiAgLmhlYWRlciAubG9nbyB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gIC5oZWFkZXIgLnNsb2dhbiB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC5oZWFkZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiA0MHB4OyB9XFxuXFxuLmxpc3QtdW5vcmRlcmVkIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG4gIC5saXN0LXVub3JkZXJlZCBsaSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDsgfVxcblxcbi53ZWxjb21lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkIxMDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcGFkZGluZzogMS41cmVtOyB9XFxuXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDg4JTsgfVxcblxcbi5kYXNoYm9hcmQtdXNlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDAuNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJ3ZWxjb21lVXNlciBwbGFubmluZ1VzZXIgcGxhbm5pbmdVc2VyIHBsYW5uaW5nVXNlclxcXCIgXFxcInRyaXBzVXNlciB0cmlwc1VzZXIgdHJpcHNVc2VyIHRyaXBzVXNlclxcXCI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbiN3ZWxjb21lLXVzZXIge1xcbiAgZ3JpZC1hcmVhOiB3ZWxjb21lVXNlcjsgfVxcblxcbiNwbGFubmluZy11c2VyIHtcXG4gIGdyaWQtYXJlYTogcGxhbm5pbmdVc2VyOyB9XFxuXFxuI3RyaXAtdXNlciB7XFxuICBncmlkLWFyZWE6IHRyaXBzVXNlcjsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuZGFzaGJvYXJkLXVzZXIge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLmhlYWRlciB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcbiAgLndlbGNvbWUtLXNwZW5kaW5nIHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgICAud2VsY29tZS0tc3BlbmRpbmcgZGl2IHtcXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgICAgZGlzcGxheTogZmxleDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gIC5oZWFkZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIC5oZWFkZXIgLnNsb2dhbiB7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgLndlbGNvbWUge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTsgfVxcbiAgICAud2VsY29tZS0tc3BlbmRpbmcge1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogODAlOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTBweCkge1xcbiAgLmhlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG4gIC53ZWxjb21lLS1zcGVuZGluZyBkaXYge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9IH1cXG5cXG4ucGxhbm5pbmctdXNlcixcXG4ucGxhbm5pbmctYWdlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTI1NjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGNvbG9yOiAjRkZFQkM2O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBhZGRpbmc6IDFyZW07IH1cXG4gIC5wbGFubmluZy11c2VyIC5idXR0b24sXFxuICAucGxhbm5pbmctYWdlbnQgLmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkIxMDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiWXVzZWkgTWFnaWNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIHdpZHRoOiAxNTBweDsgfVxcbiAgICAucGxhbm5pbmctdXNlciAuYnV0dG9uOmRpc2FibGVkLFxcbiAgICAucGxhbm5pbmctYWdlbnQgLmJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0U2MztcXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG4ucGxhbm5pbmctLWJvdHRvbSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ucGxhbm5pbmctLWNvc3Qge1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtOyB9XFxuXFxuLnBsYW5uaW5nLS1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGhlaWdodDogMS43cmVtOyB9XFxuXFxuLnBsYW5uaW5nLS1kcm9wZG93biB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBtaW4td2lkdGg6IDNyZW07IH1cXG5cXG4ucGxhbm5pbmctLWlucHV0cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDAuNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJkYXRlIGRlc3RpbmF0aW9uIGR1cmF0aW9uIHRyYXZlbGVyc1xcXCI7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5wbGFubmluZy0tdGV4dCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW46IDAuNXJlbSAwIDAuNSAwOyB9XFxuXFxuLnBsYW5uaW5nLS10aXRsZSB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4uZm9ybS0tc2VjdGlvbiB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxcblxcbiNpbnB1dC1kYXRlIHtcXG4gIGdyaWQtYXJlYTogZGF0ZTsgfVxcblxcbiNpbnB1dC1kZXN0aW5hdGlvbiB7XFxuICBncmlkLWFyZWE6IGRlc3RpbmF0aW9uOyB9XFxuXFxuI2lucHV0LWR1cmF0aW9uIHtcXG4gIGdyaWQtYXJlYTogZHVyYXRpb247IH1cXG5cXG4jaW5wdXQtdHJhdmVsZXJzIHtcXG4gIGdyaWQtYXJlYTogdHJhdmVsZXJzOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAucGxhbm5pbmctLWlucHV0cyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAwLjVyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiZGF0ZSBkZXN0aW5hdGlvblxcXCIgXFxcImR1cmF0aW9uIHRyYXZlbGVyc1xcXCI7IH1cXG4gIC5wbGFubmluZy0tdGV4dCB7XFxuICAgIG1hcmdpbjogMC41cmVtIDAgMC41cmVtIDA7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAucGxhbm5pbmctLWlucHV0cyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAucGxhbm5pbmctLWRyb3Bkb3duIHtcXG4gICAgbWF4LXdpZHRoOiAxNHJlbTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkwcHgpIHtcXG4gIC5wbGFubmluZy0tZHJvcGRvd24ge1xcbiAgICBtYXgtd2lkdGg6IDEycmVtOyB9IH1cXG5cXG4uY2FyZC0taGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmNhcmQtLWJvZHkge1xcbiAgcGFkZGluZzogMC40cmVtOyB9XFxuXFxuLmNhcmQtLWltYWdlIHtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnRyaXAtdXNlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDAuNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwicHJldmlvdXMgcHJlc2VudCB1cGNvbWluZyBwZW5kaW5nXFxcIjtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gIC50cmlwLXVzZXIgLnRyaXAtLWNhcmQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG4gICAgLnRyaXAtdXNlciAudHJpcC0tY2FyZDpob3ZlciAuY2FyZC0taW1hZ2Uge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbSAwLjVyZW0gMCAwO1xcbiAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG4gICAgICB6LWluZGV4OiAwOyB9XFxuICAgIC50cmlwLXVzZXIgLnRyaXAtLWNhcmQ6aG92ZXIgaDMge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgIG9wYWNpdHk6IDAuODsgfVxcblxcbi50cmlwLS1hcnRpY2xlIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzODQ0O1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY29sb3I6ICNGRkVCQzY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBwYWRkaW5nOiAxcmVtOyB9XFxuXFxuLnRyaXAtLWZvcm0ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi50cmlwLS1jYXJkIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFQkM2O1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggIzAwMjYyRTtcXG4gIGNvbG9yOiAjMDAzODQ0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTsgfVxcbiAgLnRyaXAtLWNhcmQgaDMge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbjogMnJlbSAwLjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTsgfVxcbiAgLnRyaXAtLWNhcmQgaDQge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbjogMC41cmVtIDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuICAudHJpcC0tY2FyZCBwIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW46IDAuNXJlbSAwOyB9XFxuXFxuLnVzZXItLWNhcmQgaDMge1xcbiAgbWFyZ2luLXRvcDogMXJlbTsgfVxcblxcbiN0cmlwLS1kcm9wZG93bi1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAxcmVtOyB9XFxuXFxuI3RyaXAtLXByZXNlbnQge1xcbiAgZ3JpZC1hcmVhOiBwcmVzZW50OyB9XFxuXFxuI3RyaXAtLXVwY29taW5nIHtcXG4gIGdyaWQtYXJlYTogdXBjb21pbmc7IH1cXG5cXG4jdHJpcC0tcGVuZGluZyB7XFxuICBncmlkLWFyZWE6IHBlbmRpbmc7IH1cXG5cXG4jdHJpcC0tcHJldmlvdXMge1xcbiAgZ3JpZC1hcmVhOiBwcmV2aW91czsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuZGlzcGxheS1wcmV2aW91cyAudHJpcC0tYXJ0aWNsZTpub3QoLnByZXZpb3VzKSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcbiAgLmRpc3BsYXktcHJlc2VudCAudHJpcC0tYXJ0aWNsZTpub3QoLnByZXNlbnQpIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuICAuZGlzcGxheS11cGNvbWluZyAudHJpcC0tYXJ0aWNsZTpub3QoLnVwY29taW5nKSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcbiAgLmRpc3BsYXktcGVuZGluZyAudHJpcC0tYXJ0aWNsZTpub3QoLnBlbmRpbmcpIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuICAuY2FyZC0taW1hZ2Uge1xcbiAgICBvcGFjaXR5OiAwLjU7IH1cXG4gIC5wbGFubmluZy11c2VyIHtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMDsgfVxcbiAgLnRyaXAtLWFydGljbGUge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcGFkZGluZy10b3A6IDRyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDRyZW07IH1cXG4gICAgLnRyaXAtLWFydGljbGUgaDIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcbiAgLnRyaXAtLWNhcmQge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGhlaWdodDogMjByZW07XFxuICAgIHdpZHRoOiAxNXJlbTsgfVxcbiAgLnRyaXAtLWZvcm0ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogI0ZGQ0U2MztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAudHJpcC11c2VyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAudHJpcC0tY2FyZCB7XFxuICAgIHdpZHRoOiA5MCU7IH0gfVxcblxcbi5sb2dpbiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAubG9naW4gaDIge1xcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggYmxhY2s7IH1cXG5cXG4ubG9naW4tLW1haW4ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDM4NDQ7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCA2cHggMXB4ICMwMDI2MkU7XFxuICBjb2xvcjogI0ZGQ0U2MztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICB3aWR0aDogODB2dzsgfVxcblxcbi5sb2dpbi0tYm9keSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDEwMCU7IH1cXG4gIC5sb2dpbi0tYm9keSBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCMTAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LWZhbWlseTogXFxcIll1c2VpIE1hZ2ljXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDUyNTY7XFxuICAgIGNvbG9yOiAjRkZDRTYzOyB9XFxuICAgIC5sb2dpbi0tYm9keSBidXR0b246ZGlzYWJsZWQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkNFNjM7XFxuICAgICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICAgIC5sb2dpbi0tYm9keSBidXR0b246ZGlzYWJsZWQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDc2N0I7IH1cXG5cXG4ubG9naW4tLWZvcm0ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkIxMDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiA0cHggNHB4IDZweCAxcHggIzAwMjYyRTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBoZWlnaHQ6IDI1cmVtO1xcbiAgbWFyZ2luOiAycmVtO1xcbiAgd2lkdGg6IDE1cmVtOyB9XFxuICAubG9naW4tLWZvcm0gaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGhlaWdodDogMjVweDsgfVxcblxcbi5saW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNFNjM7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiAxcHg7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmxvZ2luLS1tYWluIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogYXV0bzsgfVxcbiAgLmxpbmUge1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2lkdGg6IDkwJTsgfVxcbiAgLmxvZ2luLS1ib2R5IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC5sb2dpbi0tZm9ybSB7XFxuICAgIGhlaWdodDogMTJyZW07XFxuICAgIHdpZHRoOiAyMHJlbTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQ1cHgpIHtcXG4gIC5sb2dpbi0tZm9ybSB7XFxuICAgIGhlaWdodDogMTNyZW07XFxuICAgIHdpZHRoOiAxNXJlbTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDg1JTsgfVxcbiAgLmxvZ2luIHtcXG4gICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAubG9naW4tLWJvZHkge1xcbiAgICBwYWRkaW5nOiAwIDAuNXJlbSAwIDAuNXJlbTsgfVxcbiAgLmxvZ2luLS1mb3JtIHtcXG4gICAgbWFyZ2luOiAxcmVtOyB9XFxuICBpbnB1dCB7XFxuICAgIG1heC13aWR0aDogMTByZW07IH0gfVxcblxcbi50cmF2ZWxlci0taGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtOyB9XFxuXFxuLnRyYXZlbGVyLS1jYXJkcyxcXG4ucGVuZGluZy0tY2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogYXV0bzsgfVxcblxcbi5idXR0b24tYXBwcm92ZSB7XFxuICBtYXJnaW4tdG9wOiAwLjZyZW07IH1cXG5cXG4uYnV0dG9uLWRlbGV0ZSB7XFxuICBtYXJnaW46IDAuMnJlbSAwOyB9XFxuXFxuLmRhc2hib2FyZC1hZ2VudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDAuNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwid2VsY29tZUFnZW50IHBsYW5uaW5nQWdlbnQgcGxhbm5pbmdBZ2VudCBwbGFubmluZ0FnZW50XFxcIiBcXFwidHJpcHNBZ2VudCBwbGFubmluZ0FnZW50IHBsYW5uaW5nQWdlbnQgcGxhbm5pbmdBZ2VudFxcXCIgXFxcInRyaXBzQWdlbnQgcGxhbm5pbmdBZ2VudCBwbGFubmluZ0FnZW50IHBsYW5uaW5nQWdlbnRcXFwiO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLnBlbmRpbmctLWFydGljbGUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDM4NDQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogI0ZGRUJDNjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHBhZGRpbmc6IDFyZW07IH1cXG5cXG4ucGxhbm5pbmctYWdlbnQge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIG1heC1oZWlnaHQ6IG5vbmU7XFxuICB3aWR0aDogOTAlOyB9XFxuICAucGxhbm5pbmctYWdlbnQgLnRyaXAtLWNhcmQge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHdpZHRoOiAzMDBweDsgfVxcbiAgICAucGxhbm5pbmctYWdlbnQgLnRyaXAtLWNhcmQgdGFibGUge1xcbiAgICAgIGJvcmRlci1zcGFjaW5nOiAwLjVyZW0gMDtcXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICAgICAgLnBsYW5uaW5nLWFnZW50IC50cmlwLS1jYXJkIHRhYmxlIHRoZWFkIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuICAgIC5wbGFubmluZy1hZ2VudCAudHJpcC0tY2FyZCBoMyB7XFxuICAgICAgbWFyZ2luOiAxcmVtIDAgMCAwOyB9XFxuXFxuLnRyYXZlbGVyLS1mb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4udHJhdmVsZXItLXNlYXJjaCB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjAwcHg7IH1cXG5cXG4udHJhdmVsZXItLXNlYXJjaC1ib3gge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi51c2VyLS1jYXJkIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFQkM2O1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggIzAwMjYyRTtcXG4gIGNvbG9yOiAjMDAzODQ0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1pbi13aWR0aDogMTYwcHg7IH1cXG5cXG4ud2VsY29tZSBoMyB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbiNwZW5kaW5nLS1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4jd2VsY29tZS1hZ2VudCB7XFxuICBncmlkLWFyZWE6IHdlbGNvbWVBZ2VudDsgfVxcblxcbiNwbGFubmluZy1hZ2VudCB7XFxuICBncmlkLWFyZWE6IHBsYW5uaW5nQWdlbnQ7IH1cXG5cXG4jcGVuZGluZy0tYXJ0aWNsZSB7XFxuICBncmlkLWFyZWE6IHRyaXBzQWdlbnQ7IH1cXG5cXG4jc2VydmVyLWVycm9yIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAxcmVtOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTEwcHgpIHtcXG4gIC5kYXNoYm9hcmQtYWdlbnQge1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwid2VsY29tZUFnZW50IHdlbGNvbWVBZ2VudCB3ZWxjb21lQWdlbnRcXFwiIFxcXCJ0cmlwc0FnZW50IHBsYW5uaW5nQWdlbnQgcGxhbm5pbmdBZ2VudFxcXCIgXFxcInRyaXBzQWdlbnQgcGxhbm5pbmdBZ2VudCBwbGFubmluZ0FnZW50XFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjZmciAxZnIgMWZyOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MTBweCkge1xcbiAgLmRhc2hib2FyZC1hZ2VudCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJ3ZWxjb21lQWdlbnQgd2VsY29tZUFnZW50XFxcIiBcXFwidHJpcHNBZ2VudCBwbGFubmluZ0FnZW50XFxcIiBcXFwidHJpcHNBZ2VudCBwbGFubmluZ0FnZW50XFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNmZyIDFmcjsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gIGgxIHtcXG4gICAgbWFyZ2luOiAwLjRyZW07IH1cXG4gIC5hZ2VudC0tYm9keSBoMiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5kYXNoYm9hcmQtYWdlbnQge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuZGlzcGxheS10cmlwcyAuYWdlbnQtLWJvZHk6bm90KC50cmlwcykge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG4gIC5kaXNwbGF5LXRyYXZlbGVycyAuYWdlbnQtLWJvZHk6bm90KC50cmF2ZWxlcnMpIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuICAucGVuZGluZy0tYXJ0aWNsZSxcXG4gIC5wbGFubmluZy1hZ2VudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDM4NDQ7XFxuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB3aWR0aDogOTAlOyB9XFxuICAudHJpcC0tY2FyZCB7XFxuICAgIG1heC13aWR0aDogMjcwcHg7IH1cXG4gIC50cmF2ZWxlci0tZm9ybS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC50cmF2ZWxlci0tZm9ybSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjRkZDRTYzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC53ZWxjb21lIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiA5MCU7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3BsYW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3RyaXBzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2xvZ2luLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2FnZW50LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSx5QkN1RWtCO0VEdEVsQixzQ0MyRXNDO0VEMUV0QyxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR1o7RUNoQkUseUJBNEVtQjtFQTNFbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHNDQTJFc0M7RUExRXRDLGVBQWU7RUFDZixZQUFZLEVBQUE7RUFFWjtJQUNFLHlCQW1FaUI7SUFsRWpCLGVBQWUsRUFBQTs7QURTbkI7RUNwQkUseUJBNEVtQjtFQTNFbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHNDQTJFc0M7RUExRXRDLGVBQWU7RUFDZixZQUFZO0VBVVoseUJBeUQwQjtFQXhEMUIsY0EyRG1CLEVBQUE7RUFwRW5CO0lBQ0UseUJBbUVpQjtJQWxFakIsZUFBZSxFQUFBOztBRGFuQjtFQUNFLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTtFQUx4QjtJQVFJLG1CQUFtQjtJQUNuQixhQUFhLEVBQUE7RUFUakI7SUFhSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUIsRUFBQTtFQWhCM0I7SUFvQkksWUFBWSxFQUFBOztB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Z0IsRUFBQTtFQUdsQjtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVyxFQUFBO0VBR2I7SUp6SUEsbUJBQW1CO0lBQ25CLGNBd0NtQjtJQXZDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsU0FBUztJSW1JUCxTQUFTO0lBQ1QsV0FBVyxFQUFBO0VBR2I7SUFDRSxjQUFjO0lBQ2QsVUFBVSxFQUFBLEVBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuYm9keSwgaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbWluZztcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMCAxcmVtIDAgMXJlbTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmgyLCBoMywgcCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYnV0dG9uLXByaW1hcnkge1xcbiAgQGluY2x1ZGUgYnV0dG9uLXByaW1hcnk7XFxufVxcblxcbi5idXR0b24tc2Vjb25kYXJ5IHtcXG4gIEBpbmNsdWRlIGJ1dHRvbi1zZWNvbmRhcnk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtO1xcblxcbiAgLmxvZ28ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLnNsb2dhbiB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICBpbWcge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICB9XFxufVxcblxcbi5saXN0LXVub3JkZXJlZCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgbGkge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxufVxcblxcbi53ZWxjb21lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ob25leTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIC8vIGJveC1zaGFkb3c6IDNweCAzcHggNHB4ICRjb2xvci1kZWVwLWp1bmdsZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiA4OCU7XFxufVxcblxcbi5kYXNoYm9hcmQtdXNlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDAuNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICBcXFwid2VsY29tZVVzZXIgcGxhbm5pbmdVc2VyIHBsYW5uaW5nVXNlciBwbGFubmluZ1VzZXJcXFwiXFxuICBcXFwidHJpcHNVc2VyIHRyaXBzVXNlciB0cmlwc1VzZXIgdHJpcHNVc2VyXFxcIjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jd2VsY29tZS11c2VyIHtcXG4gIGdyaWQtYXJlYTogd2VsY29tZVVzZXI7XFxufVxcblxcbiNwbGFubmluZy11c2VyIHtcXG4gIGdyaWQtYXJlYTogcGxhbm5pbmdVc2VyO1xcbn1cXG5cXG4jdHJpcC11c2VyIHtcXG4gIGdyaWQtYXJlYTogdHJpcHNVc2VyO1xcbn1cXG5cXG5cXG4vLyBNRURJQSBTQ1JFRU5TXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5kYXNoYm9hcmQtdXNlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLmhlYWRlciB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIH1cXG5cXG4gIC53ZWxjb21lLS1zcGVuZGluZyB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuXFxuICAgIGRpdiB7XFxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gIC5oZWFkZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAuc2xvZ2FuIHtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICB9XFxuXFxuICAud2VsY29tZSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcblxcbiAgICAmLS1zcGVuZGluZyB7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkwcHgpIHtcXG4gIC5oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgfVxcblxcbiAgLndlbGNvbWUtLXNwZW5kaW5nIGRpdiB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblwiLFwiQG1peGluIGJ1dHRvbi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ob25leTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHdpZHRoOiAxNTBweDtcXG5cXG4gICY6ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbWFpemU7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJ1dHRvbi1zZWNvbmRhcnkge1xcbiAgQGluY2x1ZGUgYnV0dG9uLXByaW1hcnlcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1qdW5nbGUtZ3JlZW47XFxuICBjb2xvcjogJGNvbG9yLW1haXplO1xcbn1cXG5cXG5AbWl4aW4gZ3JpZC1wcmVzZXRzLTR4MSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDAuNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxufVxcblxcbkBtaXhpbiBncmlkLXByZXNldHMtMngyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMC41cmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG5AbWl4aW4gbW9iaWxlLWRyb3Bkb3duIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogJGNvbG9yLW1haXplO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgdG9wOiAxcmVtO1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG5AbWl4aW4gY2FyZC1wcmVzZXQge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1hbG1vbmQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAkY29sb3ItZGVlcC1qdW5nbGU7XFxuICBjb2xvcjogJGNvbG9yLWVhZ2xlLWdyZWVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuQG1peGluIGFydGljbGUtcHJlc2V0IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZWFnbGUtZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogJGNvbG9yLWFsbW9uZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiRjb2xvci1kZWVwLWp1bmdsZTogIzAwMjYyRTsgLy8gc2hhZG93IGNvbG9yXFxuJGNvbG9yLWVhZ2xlLWdyZWVuOiAjMDAzODQ0OyAvLyBkYXJrZXN0IGdyZWVuXFxuJGNvbG9yLWp1bmdsZS1ncmVlbjogIzAwNTI1NjsgLy8gbWlkIGdyZWVuXFxuJGNvbG9yLW1pbmc6ICMzRDc2N0I7IC8vIGxpZ2h0IGdyZWVuXFxuJGNvbG9yLWhvbmV5OiAjRkZCMTAwOyAvLyBicmlnaHQgeWVsbG93XFxuJGNvbG9yLW1haXplOiAjRkZDRTYzOyAvLyBsaWdodCB5ZWxsb3dcXG4kY29sb3ItYWxtb25kOiAjRkZFQkM2OyAvLyBsaWdodCB0YW5cXG5cXG4kZm9udC1wcmltYXJ5OiAnWXVzZWkgTWFnaWMnLCBzYW5zLXNlcmlmO1xcblwiLFwiLnBsYW5uaW5nLXVzZXIsXFxuLnBsYW5uaW5nLWFnZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1qdW5nbGUtZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAvLyBib3gtc2hhZG93OiAzcHggM3B4IDRweCAkY29sb3ItZGVlcC1qdW5nbGU7XFxuICBjb2xvcjogJGNvbG9yLWFsbW9uZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgLmJ1dHRvbiB7XFxuICAgIEBpbmNsdWRlIGJ1dHRvbi1wcmltYXJ5O1xcbiAgfVxcbn1cXG5cXG4ucGxhbm5pbmcge1xcbiAgJi0tYm90dG9tIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgJi0tY29zdCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG4gIH1cXG5cXG4gICYtLWRhdGUge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGhlaWdodDogMS43cmVtO1xcbiAgfVxcblxcbiAgJi0tZHJvcGRvd24ge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWluLXdpZHRoOiAzcmVtO1xcbiAgfVxcblxcbiAgJi0taW5wdXRzIHtcXG4gICAgQGluY2x1ZGUgZ3JpZC1wcmVzZXRzLTR4MTtcXG4gICAgZ3JpZC1nYXA6IDFyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgXFxcImRhdGUgZGVzdGluYXRpb24gZHVyYXRpb24gdHJhdmVsZXJzXFxcIjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAmLS10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW46IDAuNXJlbSAwIDAuNSAwO1xcbiAgICAvLyBtYXJnaW46IDAuMnJlbSAwIDAgMDtcXG4gIH1cXG5cXG4gICYtLXRpdGxlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbn1cXG5cXG4uZm9ybS0tc2VjdGlvbiB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuI3BsYW5uaW5nLS13YXJuaW5nIHtcXG4gIC8vIG1hcmdpbjogMC41cmVtIDAgMCAwO1xcbn1cXG5cXG4jaW5wdXQtZGF0ZSB7XFxuICBncmlkLWFyZWE6IGRhdGU7XFxufVxcblxcbiNpbnB1dC1kZXN0aW5hdGlvbiB7XFxuICBncmlkLWFyZWE6IGRlc3RpbmF0aW9uO1xcbn1cXG5cXG4jaW5wdXQtZHVyYXRpb24ge1xcbiAgZ3JpZC1hcmVhOiBkdXJhdGlvbjtcXG59XFxuXFxuI2lucHV0LXRyYXZlbGVycyB7XFxuICBncmlkLWFyZWE6IHRyYXZlbGVycztcXG59XFxuXFxuLy8gTUVESUEgU0NSRUVOIFNJWkVTXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAucGxhbm5pbmcge1xcbiAgICAmLS1pbnB1dHMge1xcbiAgICAgIEBpbmNsdWRlIGdyaWQtcHJlc2V0cy0yeDI7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJkYXRlIGRlc3RpbmF0aW9uXFxcIlxcbiAgICAgICAgXFxcImR1cmF0aW9uIHRyYXZlbGVyc1xcXCI7XFxuICAgIH1cXG5cXG4gICAgJi0tdGV4dCB7XFxuICAgICAgbWFyZ2luOiAwLjVyZW0gMCAwLjVyZW0gMDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLnBsYW5uaW5nIHtcXG4gICAgJi0taW5wdXRzIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgICAmLS1kcm9wZG93biB7XFxuICAgICAgbWF4LXdpZHRoOiAxNHJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTBweCkge1xcbiAgLnBsYW5uaW5nLS1kcm9wZG93biB7XFxuICAgIG1heC13aWR0aDogMTJyZW07XFxuICB9XFxufVxcblwiLFwiLmNhcmQge1xcbiAgJi0taGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gICYtLWJvZHkge1xcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxuICB9XFxuXFxuICAmLS1pbWFnZSB7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4udHJpcC11c2VyIHtcXG4gIEBpbmNsdWRlIGdyaWQtcHJlc2V0cy00eDFcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJwcmV2aW91cyBwcmVzZW50IHVwY29taW5nIHBlbmRpbmdcXFwiO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gIC50cmlwLS1jYXJkOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcblxcbiAgICAuY2FyZC0taW1hZ2Uge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbSAwLjVyZW0gMCAwO1xcbiAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG4gICAgICB6LWluZGV4OiAwO1xcbiAgICB9XFxuXFxuICAgIGgzIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBvcGFjaXR5OiAwLjg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnRyaXAge1xcbiAgJi0tYXJ0aWNsZSB7XFxuICAgIEBpbmNsdWRlIGFydGljbGUtcHJlc2V0O1xcbiAgfVxcblxcbiAgJi0tZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbi50cmlwLS1jYXJkIHtcXG4gIEBpbmNsdWRlIGNhcmQtcHJlc2V0O1xcblxcbiAgaDMge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbjogMnJlbSAwLjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG5cXG4gIGg0IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG5cXG4gIHAge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbjogMC41cmVtIDA7XFxuICB9XFxufVxcblxcbi51c2VyLS1jYXJkIGgzIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbiN0cmlwLS1kcm9wZG93bi1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4jdHJpcC0tcHJlc2VudCB7XFxuICBncmlkLWFyZWE6IHByZXNlbnQ7XFxufVxcblxcbiN0cmlwLS11cGNvbWluZyB7XFxuICBncmlkLWFyZWE6IHVwY29taW5nO1xcbn1cXG5cXG4jdHJpcC0tcGVuZGluZyB7XFxuICBncmlkLWFyZWE6IHBlbmRpbmc7XFxufVxcblxcbiN0cmlwLS1wcmV2aW91cyB7XFxuICBncmlkLWFyZWE6IHByZXZpb3VzO1xcbn1cXG5cXG4vLyBNRURJQSBTQ1JFRU5TXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5kaXNwbGF5LXByZXZpb3VzIC50cmlwLS1hcnRpY2xlOm5vdCgucHJldmlvdXMpIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmRpc3BsYXktcHJlc2VudCAudHJpcC0tYXJ0aWNsZTpub3QoLnByZXNlbnQpIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmRpc3BsYXktdXBjb21pbmcgLnRyaXAtLWFydGljbGU6bm90KC51cGNvbWluZykge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuZGlzcGxheS1wZW5kaW5nIC50cmlwLS1hcnRpY2xlOm5vdCgucGVuZGluZykge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuY2FyZC0taW1hZ2Uge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICB9XFxuXFxuICAucGxhbm5pbmctdXNlciB7XFxuICAgIG1hcmdpbjogMC41cmVtIDA7XFxuICB9XFxuXFxuICAudHJpcC0tYXJ0aWNsZSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcXG4gICAgbWluLWhlaWdodDogNHJlbTtcXG5cXG4gICAgaDIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnRyaXAtLWNhcmQge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGhlaWdodDogMjByZW07XFxuICAgIHdpZHRoOiAxNXJlbTtcXG4gIH1cXG5cXG4gIC50cmlwLS1mb3JtIHtcXG4gICAgQGluY2x1ZGUgbW9iaWxlLWRyb3Bkb3duO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnRyaXAtdXNlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLnRyaXAtLWNhcmQge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbn1cXG5cIixcIi5sb2dpbiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgaDIge1xcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggYmxhY2s7XFxuICB9XFxufVxcblxcbi5sb2dpbi0tbWFpbiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWVhZ2xlLWdyZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggNnB4IDFweCAkY29sb3ItZGVlcC1qdW5nbGU7XFxuICBjb2xvcjogJGNvbG9yLW1haXplO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogODB2aDtcXG4gIHdpZHRoOiA4MHZ3O1xcbn1cXG5cXG4ubG9naW4tLWJvZHkge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgYnV0dG9uIHtcXG4gICAgQGluY2x1ZGUgYnV0dG9uLXNlY29uZGFyeTtcXG5cXG4gICAgJjpkaXNhYmxlZCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW1pbmc7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmxvZ2luLS1mb3JtIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItaG9uZXk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiA0cHggNHB4IDZweCAxcHggJGNvbG9yLWRlZXAtanVuZ2xlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGhlaWdodDogMjVyZW07XFxuICBtYXJnaW46IDJyZW07XFxuICB3aWR0aDogMTVyZW07XFxuXFxuICBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgfVxcbn1cXG5cXG4ubGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbWFpemU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiAxcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAubG9naW4tLW1haW4ge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgLmxpbmUge1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG5cXG4gIC5sb2dpbi0tYm9keSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLmxvZ2luLS1mb3JtIHtcXG4gICAgaGVpZ2h0OiAxMnJlbTtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDVweCkge1xcbiAgLmxvZ2luLS1mb3JtIHtcXG4gICAgaGVpZ2h0OiAxM3JlbTtcXG4gICAgd2lkdGg6IDE1cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogODUlO1xcbiAgfVxcblxcbiAgLmxvZ2luIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgLmxvZ2luLS1ib2R5IHtcXG4gICAgcGFkZGluZzogMCAwLjVyZW0gMCAwLjVyZW07XFxuICB9XFxuXFxuICAubG9naW4tLWZvcm0ge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICB9XFxuXFxuICBpbnB1dCB7XFxuICAgIG1heC13aWR0aDogMTByZW07XFxuICB9XFxufVxcblwiLFwiLnRyYXZlbGVyLS1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcbi50cmF2ZWxlci0tY2FyZHMsXFxuLnBlbmRpbmctLWNhcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5idXR0b24tYXBwcm92ZSB7XFxuICBtYXJnaW4tdG9wOiAwLjZyZW07XFxufVxcblxcbi5idXR0b24tZGVsZXRlIHtcXG4gIG1hcmdpbjogMC4ycmVtIDA7XFxufVxcblxcbi5kYXNoYm9hcmQtYWdlbnQge1xcbiAgQGluY2x1ZGUgZ3JpZC1wcmVzZXRzLTR4MVxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIndlbGNvbWVBZ2VudCBwbGFubmluZ0FnZW50IHBsYW5uaW5nQWdlbnQgcGxhbm5pbmdBZ2VudFxcXCJcXG4gICAgXFxcInRyaXBzQWdlbnQgcGxhbm5pbmdBZ2VudCBwbGFubmluZ0FnZW50IHBsYW5uaW5nQWdlbnRcXFwiXFxuICAgIFxcXCJ0cmlwc0FnZW50IHBsYW5uaW5nQWdlbnQgcGxhbm5pbmdBZ2VudCBwbGFubmluZ0FnZW50XFxcIjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnBlbmRpbmctLWFydGljbGUge1xcbiAgQGluY2x1ZGUgYXJ0aWNsZS1wcmVzZXQ7XFxufVxcblxcbi5wbGFubmluZy1hZ2VudCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgbWF4LWhlaWdodDogbm9uZTtcXG4gIHdpZHRoOiA5MCU7XFxuXFxuICAudHJpcC0tY2FyZCB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcblxcbiAgICB0YWJsZSB7XFxuICAgICAgYm9yZGVyLXNwYWNpbmc6IDAuNXJlbSAwO1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuXFxuICAgICAgdGhlYWQge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGgzIHtcXG4gICAgICBtYXJnaW46IDFyZW0gMCAwIDA7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnRyYXZlbGVyLS1mb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50cmF2ZWxlci0tc2VhcmNoIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnRyYXZlbGVyLS1zZWFyY2gtYm94IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi51c2VyLS1jYXJkIHtcXG4gIEBpbmNsdWRlIGNhcmQtcHJlc2V0O1xcbiAgbWluLXdpZHRoOiAxNjBweDtcXG59XFxuXFxuLndlbGNvbWUgaDMge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNwZW5kaW5nLS1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN3ZWxjb21lLWFnZW50IHtcXG4gIGdyaWQtYXJlYTogd2VsY29tZUFnZW50O1xcbn1cXG5cXG4jcGxhbm5pbmctYWdlbnQge1xcbiAgZ3JpZC1hcmVhOiBwbGFubmluZ0FnZW50O1xcbn1cXG5cXG4jcGVuZGluZy0tYXJ0aWNsZSB7XFxuICBncmlkLWFyZWE6IHRyaXBzQWdlbnQ7XFxufVxcblxcbiNzZXJ2ZXItZXJyb3Ige1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcblxcbi8vIE1FRElBIFNDUkVFTlNcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MTBweCkge1xcbiAgLmRhc2hib2FyZC1hZ2VudCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgXFxcIndlbGNvbWVBZ2VudCB3ZWxjb21lQWdlbnQgd2VsY29tZUFnZW50XFxcIlxcbiAgICAgIFxcXCJ0cmlwc0FnZW50IHBsYW5uaW5nQWdlbnQgcGxhbm5pbmdBZ2VudFxcXCJcXG4gICAgICBcXFwidHJpcHNBZ2VudCBwbGFubmluZ0FnZW50IHBsYW5uaW5nQWdlbnRcXFwiO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNmZyIDFmciAxZnI7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcxMHB4KSB7XFxuICAuZGFzaGJvYXJkLWFnZW50IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICBcXFwid2VsY29tZUFnZW50IHdlbGNvbWVBZ2VudFxcXCJcXG4gICAgICBcXFwidHJpcHNBZ2VudCBwbGFubmluZ0FnZW50XFxcIlxcbiAgICAgIFxcXCJ0cmlwc0FnZW50IHBsYW5uaW5nQWdlbnRcXFwiO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC42ZnIgMWZyO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgaDEge1xcbiAgICBtYXJnaW46IDAuNHJlbTtcXG4gIH1cXG5cXG4gIC5hZ2VudC0tYm9keSBoMiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuZGFzaGJvYXJkLWFnZW50IHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5kaXNwbGF5LXRyaXBzIC5hZ2VudC0tYm9keTpub3QoLnRyaXBzKSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5kaXNwbGF5LXRyYXZlbGVycyAuYWdlbnQtLWJvZHk6bm90KC50cmF2ZWxlcnMpIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLnBlbmRpbmctLWFydGljbGUsXFxuICAucGxhbm5pbmctYWdlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZWFnbGUtZ3JlZW47XFxuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgLnRyaXAtLWNhcmQge1xcbiAgICBtYXgtd2lkdGg6IDI3MHB4O1xcbiAgfVxcblxcbiAgLnRyYXZlbGVyLS1mb3JtLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC50cmF2ZWxlci0tZm9ybSB7XFxuICAgIEBpbmNsdWRlIG1vYmlsZS1kcm9wZG93bjtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC53ZWxjb21lIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY2xhc3MgQWdlbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRyYXZlbGVycyA9IFtdXG4gICAgdGhpcy50cmlwcyA9IFtdXG4gICAgdGhpcy5kZXN0aW5hdGlvbnMgPSBbXVxuICB9XG5cbiAgY2FsY3VsYXRlVG90YWxJbmNvbWUoeWVhcikge1xuICAgIGxldCB0b3RhbEluY29tZSA9IDBcbiAgICBjb25zdCB5ZWFyVHJpcHMgPSB0aGlzLmZpbmRZZWFyVHJpcHMoeWVhcilcblxuICAgIHllYXJUcmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9ucy5maW5kKHBsYWNlID0+IHBsYWNlLmlkID09PSB0cmlwLmRlc3RpbmF0aW9uSUQpXG5cbiAgICAgIGNvbnN0IGxvZGdpbmdJbmNvbWUgPSB0cmlwLnRyYXZlbGVycyAqIHRyaXAuZHVyYXRpb24gKiBsb2NhdGlvbi5sb2RnaW5nQ29zdFBlckRheVxuICAgICAgY29uc3QgZmxpZ2h0SW5jb21lID0gdHJpcC50cmF2ZWxlcnMgKiBsb2NhdGlvbi5mbGlnaHRDb3N0UGVyUGVyc29uXG4gICAgICB0b3RhbEluY29tZSArPSAobG9kZ2luZ0luY29tZSArIGZsaWdodEluY29tZSlcbiAgICB9KVxuXG4gICAgcmV0dXJuICh0b3RhbEluY29tZSAqIDAuMSkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xuICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyXG4gICAgfSlcbiAgfVxuXG4gIGZpbmRZZWFyVHJpcHMoeWVhcikge1xuICAgIGxldCB5ZWFyVHJpcHMgPSBbXVxuXG4gICAgdGhpcy50cmF2ZWxlcnMuZm9yRWFjaCh0cmF2ZWxlciA9PiB7XG4gICAgICB0cmF2ZWxlci50cmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgICBpZiAodHJpcC5kYXRlLmluY2x1ZGVzKGAke3llYXJ9YCkgJiYgdHJpcC5zdGF0dXMgIT09ICdwZW5kaW5nJykge1xuICAgICAgICAgIHllYXJUcmlwcy5wdXNoKHRyaXApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiB5ZWFyVHJpcHNcbiAgfVxuXG4gIGZpbmRUb2RheXNUcmF2ZWxlcnModG9kYXlzVHJpcHMpIHtcbiAgICBjb25zdCB0b2RheXNUcmF2ZWxlcnMgPSB0b2RheXNUcmlwcy5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFRyYXZlbGVyID0gdGhpcy50cmF2ZWxlcnMuZmluZCh0cmF2ZWxlciA9PiB7XG4gICAgICAgIHJldHVybiB0cmF2ZWxlci5pZCA9PT0gY3Vyci51c2VySURcbiAgICAgIH0pXG5cbiAgICAgIGFjYy5wdXNoKCB7W2N1cnJlbnRUcmF2ZWxlci5uYW1lXTogY3VycmVudFRyYXZlbGVyLmlkfSApXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gdG9kYXlzVHJhdmVsZXJzXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBZ2VudFxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImNsYXNzIERlc3RpbmF0aW9uIHtcbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb24pIHtcbiAgICB0aGlzLmlkID0gZGVzdGluYXRpb24uaWRcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb24uZGVzdGluYXRpb25cbiAgICB0aGlzLmxvZGdpbmdDb3N0UGVyRGF5ID0gZGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXlcbiAgICB0aGlzLmZsaWdodENvc3RQZXJQZXJzb24gPSBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uXG4gICAgdGhpcy5pbWFnZSA9IGRlc3RpbmF0aW9uLmltYWdlXG4gICAgdGhpcy5hbHQgPSBkZXN0aW5hdGlvbi5hbHRcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlc3RpbmF0aW9uXG4iLCJpbXBvcnQgVHJhdmVsZXIgZnJvbSAnLi90cmF2ZWxlcidcblxuY29uc3QgdHJhdmVsZXJDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmF2ZWxlci0tY2FyZHMnKVxuY29uc3QgcGVuZGluZ0NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlbmRpbmctLWNhcmRzJylcbmNvbnN0IHRvZGF5c1RyaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlbGNvbWUtLXRyaXBzJylcbmNvbnN0IHRyaXBzID0ge1xuICBUZW1wbGF0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaXAtLXRlbXBsYXRlJyksXG4gIFByZXZpb3VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpcC0tcHJldmlvdXMnKSxcbiAgUHJlc2VudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaXAtLXByZXNlbnQnKSxcbiAgVXBjb21pbmc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlwLS11cGNvbWluZycpLFxuICBQZW5kaW5nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpcC0tcGVuZGluZycpXG59XG5cbmNvbnN0IGRvbVVwZGF0ZXMgPSB7XG5cbiAgLy8gVVNFUiBEQVNIQk9BUkRcbiAgcG9wdWxhdGVUcmF2ZWxlckdyZWV0aW5nKGN1cnJlbnRUcmF2ZWxlcikge1xuICAgIGNvbnN0IHdlbGNvbWVNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlbGNvbWUtLW1lc3NhZ2UnKVxuXG4gICAgY29uc3QgdHJhdmVsZXJOYW1lcyA9IGN1cnJlbnRUcmF2ZWxlci5uYW1lLnNwbGl0KCcgJylcbiAgICBjb25zdCB0cmF2ZWxlckZpcnN0TmFtZSA9IHRyYXZlbGVyTmFtZXNbMF1cblxuICAgIHdlbGNvbWVNZXNzYWdlLmlubmVyVGV4dCA9IGBXZWxjb21lICR7dHJhdmVsZXJGaXJzdE5hbWV9IWBcbiAgfSxcblxuICBkaXNwbGF5RGVzdGluYXRpb25JbmZvcm1hdGlvbih0cmlwLCBwbGFjZSwgZGF5c1Bhc3NlZCkge1xuICAgIGNvbnN0IHRyaXBDYXJkID0gdHJpcHMuVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICB0cmlwQ2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZC0tZGVzdGluYXRpb24nKS5pbm5lclRleHQgPSBwbGFjZS5kZXN0aW5hdGlvblxuICAgIHRyaXBDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLS1pbWFnZScpLnNyYyA9IHBsYWNlLmltYWdlXG4gICAgdHJpcENhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtLWltYWdlJykuYWx0ID0gcGxhY2UuYWx0XG4gICAgdHJpcENhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtLWRhdGUnKS5pbm5lclRleHQgPSBgU3RhcnQgRGF0ZTogJHt0cmlwLmRhdGV9YFxuICAgIHRyaXBDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLS1kdXJhdGlvbicpLmlubmVyVGV4dCA9IGBEdXJhdGlvbjogJHt0cmlwLmR1cmF0aW9ufSBEYXlzYFxuICAgIHRyaXBDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLS10cmF2ZWxlcnMnKS5pbm5lclRleHQgPSBgVHJhdmVsZXJzOiAke3RyaXAudHJhdmVsZXJzfSBBZHVsdHNgXG4gICAgdHJpcENhcmQucXVlcnlTZWxlY3RvcignLmNhcmQtLWxvZGdpbmcnKS5pbm5lclRleHQgPSBgTG9kZ2luZyBDb3N0IFBlciBEYXk6ICQke3BsYWNlLmxvZGdpbmdDb3N0UGVyRGF5fWBcbiAgICB0cmlwQ2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZC0tZmxpZ2h0JykuaW5uZXJUZXh0ID0gYEZsaWdodCBDb3N0OiAkJHtwbGFjZS5mbGlnaHRDb3N0UGVyUGVyc29ufWBcblxuICAgIGNvbnN0IHN0YXR1cyA9IHRyaXAuZGV0ZXJtaW5lVHJpcFN0YXR1cyhkYXlzUGFzc2VkKVxuICAgIHRyaXBzW3N0YXR1c10uYXBwZW5kQ2hpbGQodHJpcENhcmQpXG4gIH0sXG5cbiAgYWRkQ29zdFRvUHJvZmlsZSh5ZWFyU3BlbnQsIHRvdGFsQ29zdCkge1xuICAgIHllYXJTcGVudC5pbm5lclRleHQgPSBgJCR7dG90YWxDb3N0fWBcbiAgfSxcblxuICBhZGREZXN0aW5hdGlvbnNUb0Ryb3Bkb3duKGRlc3RpbmF0aW9ucywgZHJvcGRvd24pIHtcbiAgICBkZXN0aW5hdGlvbnMuZm9yRWFjaChsb2NhdGlvbiA9PiB7XG4gICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgbmV3T3B0aW9uLnZhbHVlID0gbG9jYXRpb24uaWRcbiAgICAgIG5ld09wdGlvbi5pbm5lclRleHQgPSBsb2NhdGlvbi5kZXN0aW5hdGlvblxuICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQobmV3T3B0aW9uKVxuICAgIH0pXG4gIH0sXG5cbiAgYWRkTnVtYmVyc1RvRHJvcGRvd25zKGRyb3Bkb3duKSB7XG4gICAgY29uc3QgcG9zc2libGVOdW1iZXJzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMF1cblxuICAgIHBvc3NpYmxlTnVtYmVycy5mb3JFYWNoKG51bWJlciA9PiB7XG4gICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgbmV3T3B0aW9uLnZhbHVlID0gbnVtYmVyXG4gICAgICBuZXdPcHRpb24uaW5uZXJUZXh0ID0gbnVtYmVyXG4gICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChuZXdPcHRpb24pXG4gICAgfSlcbiAgfSxcblxuICAvLyBBR0VOVCBEQVNIQk9BUkRcbiAgZGlzcGxheUFnZW50QW5udWFsSW5jb21lKHByZXNlbnRTcGVudCkge1xuICAgIGNvbnN0IHByZXNlbnRJbmNvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VsY29tZS0taW5jb21lJylcbiAgICBwcmVzZW50SW5jb21lLmlubmVyVGV4dCA9IGAkJHtwcmVzZW50U3BlbnR9YFxuICB9LFxuXG4gIGRpc3BsYXlUb2RheXNUcmF2ZWxlcnModG9kYXlzVHJhdmVsZXJzKSB7XG4gICAgdGhpcy5jbGVhclRyaXBMaXN0KClcbiAgICB0b2RheXNUcmF2ZWxlcnMuZm9yRWFjaCh0cmF2ZWxlciA9PiB7XG4gICAgICBjb25zdCBuZXdUcmF2ZWxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgIG5ld1RyYXZlbGVyLmlubmVyVGV4dCA9IGAke09iamVjdC5rZXlzKHRyYXZlbGVyKX0gKCMke09iamVjdC52YWx1ZXModHJhdmVsZXIpfSlgXG5cbiAgICAgIHRvZGF5c1RyaXBzLmFwcGVuZENoaWxkKG5ld1RyYXZlbGVyKVxuICAgIH0pXG4gIH0sXG5cbiAgZGlzcGxheVRyYXZlbGVySW5mb3JtYXRpb24odHJhdmVsZXIsIGRlc3RpbmF0aW9ucykge1xuICAgIGNvbnN0IHRyYXZlbGVyVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJhdmVsZXItLXRlbXBsYXRlJylcblxuICAgIGNvbnN0IG5ld1RyYXZlbGVyQ2FyZCA9IHRyYXZlbGVyVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBjb25zdCB0cmF2ZWxlck5hbWUgPSBgJHt0cmF2ZWxlci5uYW1lfSAoIyR7dHJhdmVsZXIuaWR9KWBcbiAgICBjb25zdCB0cmF2ZWxlclNwZW5kaW5nID0gdHJhdmVsZXIuY2FsY3VsYXRlU3BlbmRpbmcoZGVzdGluYXRpb25zKVxuXG4gICAgbmV3VHJhdmVsZXJDYXJkLnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGUnKS5pZCA9IHRyYXZlbGVyLmlkXG4gICAgbmV3VHJhdmVsZXJDYXJkLnF1ZXJ5U2VsZWN0b3IoJyN0cmF2ZWxlci0tbmFtZScpLmlubmVyVGV4dCA9IHRyYXZlbGVyTmFtZVxuICAgIG5ld1RyYXZlbGVyQ2FyZC5xdWVyeVNlbGVjdG9yKCcjdHJhdmVsZXItLXNwZW50JykuaW5uZXJUZXh0ID0gdHJhdmVsZXJTcGVuZGluZ1xuXG4gICAgdHJhdmVsZXIudHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICAgIGNvbnN0IGxvY2F0aW9uID0gdGhpcy5maW5kRGVzdGluYXRpb24oZGVzdGluYXRpb25zLCB0cmlwKVxuICAgICAgdGhpcy5idWlsZFRhYmxlRWxlbWVudHModHJpcCwgbG9jYXRpb24sIG5ld1RyYXZlbGVyQ2FyZClcbiAgICB9KVxuXG4gICAgdHJhdmVsZXJDYXJkcy5hcHBlbmRDaGlsZChuZXdUcmF2ZWxlckNhcmQpXG4gIH0sXG5cbiAgZGlzcGxheVBlbmRpbmdUcmlwcyh0cmF2ZWxlciwgZGVzdGluYXRpb25zKSB7XG4gICAgY29uc3QgcGVuZGluZ1RyaXBzID0gdHJhdmVsZXIudHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC5zdGF0dXMgPT09ICdwZW5kaW5nJylcblxuICAgIHBlbmRpbmdUcmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgY29uc3QgcGVuZGluZ1RlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlbmRpbmctLXRlbXBsYXRlJylcblxuICAgICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLmZpbmREZXN0aW5hdGlvbihkZXN0aW5hdGlvbnMsIHRyaXApXG4gICAgICBjb25zdCBuZXdDYXJkID0gcGVuZGluZ1RlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgICBjb25zdCB0cmF2ZWxlck5hbWUgPSBgJHt0cmF2ZWxlci5uYW1lfSAoIyR7dHJhdmVsZXIuaWR9KWBcbiAgICAgIGNvbnN0IHRyaXBJbmZvID0gYCR7dHJpcC5kYXRlfSAoJHt0cmlwLmR1cmF0aW9ufSBkYXlzKWBcblxuICAgICAgbmV3Q2FyZC5xdWVyeVNlbGVjdG9yKCcucGVuZGluZy0tbmFtZScpLmlubmVyVGV4dCA9IHRyYXZlbGVyTmFtZVxuICAgICAgbmV3Q2FyZC5xdWVyeVNlbGVjdG9yKCcucGVuZGluZy0tbG9jYXRpb24nKS5pbm5lclRleHQgPSBsb2NhdGlvbi5kZXN0aW5hdGlvblxuICAgICAgbmV3Q2FyZC5xdWVyeVNlbGVjdG9yKCcucGVuZGluZy0tZGF0ZScpLmlubmVyVGV4dCA9IHRyaXBJbmZvXG4gICAgICBuZXdDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tYXBwcm92ZScpLnNldEF0dHJpYnV0ZSgndHJpcElEJywgdHJpcC5pZClcbiAgICAgIG5ld0NhcmQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1kZWxldGUnKS5zZXRBdHRyaWJ1dGUoJ3RyaXBJRCcsIHRyaXAuaWQpXG5cbiAgICAgIHBlbmRpbmdDYXJkcy5hcHBlbmRDaGlsZChuZXdDYXJkKVxuICAgIH0pXG4gIH0sXG5cbiAgYnVpbGRUYWJsZUVsZW1lbnRzKHRyaXAsIGxvY2F0aW9uLCBjYXJkKSB7XG4gICAgY29uc3QgdHJhdmVsZXJMb2NhdGlvbnMgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJyN0cmF2ZWxlci0tbG9jYXRpb25zJylcbiAgICBjb25zdCBuZXdSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXG4gICAgY29uc3QgbG9jYXRpb25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKVxuICAgIGNvbnN0IHN0YXR1c0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpXG5cbiAgICBsb2NhdGlvbkNlbGwuaW5uZXJUZXh0ID0gbG9jYXRpb24uZGVzdGluYXRpb25cbiAgICBzdGF0dXNDZWxsLmlubmVyVGV4dCA9IHRyaXAuc3RhdHVzXG5cbiAgICB0cmF2ZWxlckxvY2F0aW9ucy5hcHBlbmRDaGlsZChuZXdSb3cpXG4gICAgbmV3Um93LmFwcGVuZENoaWxkKGxvY2F0aW9uQ2VsbClcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoc3RhdHVzQ2VsbClcbiAgfSxcblxuICAvLyBIRUxQRVIgRlVOQ1RJT05TXG4gIGZpbmREZXN0aW5hdGlvbihkZXN0aW5hdGlvbnMsIHRyaXApIHtcbiAgICByZXR1cm4gZGVzdGluYXRpb25zLmZpbmQocGxhY2UgPT4gcGxhY2UuaWQgPT09IHRyaXAuZGVzdGluYXRpb25JRClcbiAgfSxcblxuICBjbGVhclRyaXBEaXNwbGF5cyhzdGF0dXMpIHtcbiAgICB0cmlwc1tzdGF0dXNdLnF1ZXJ5U2VsZWN0b3JBbGwoJ2FydGljbGUnKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5yZW1vdmUoKSlcbiAgfSxcblxuICBjbGVhclRyaXBMaXN0KCkge1xuICAgIHRvZGF5c1RyaXBzLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykuZm9yRWFjaChsaSA9PiBsaS5yZW1vdmUoKSlcbiAgfSxcblxuICBjbGVhclRyYXZlbGVyQ2FyZERpc3BsYXlzKCkge1xuICAgIHRyYXZlbGVyQ2FyZHMucXVlcnlTZWxlY3RvckFsbCgnYXJ0aWNsZScpLmZvckVhY2goaXRlbSA9PiBpdGVtLnJlbW92ZSgpKVxuICAgIHBlbmRpbmdDYXJkcy5xdWVyeVNlbGVjdG9yQWxsKCdhcnRpY2xlJykuZm9yRWFjaChpdGVtID0+IGl0ZW0ucmVtb3ZlKCkpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21VcGRhdGVzXG4iLCJjb25zdCBmZXRjaEFwaSA9IHtcbiAgZ2V0VHJhdmVsZXJzKCkge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmF2ZWxlcnMnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICB9LFxuXG4gIGdldFNwZWNpZmljVHJhdmVsZXIodHJhdmVsZXJJRCkge1xuICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmF2ZWxlcnMvJHt0cmF2ZWxlcklEfWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIH0sXG5cbiAgZ2V0QWxsVHJpcHMoKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfSxcblxuICBnZXRBbGxEZXN0aW5hdGlvbnMoKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL2Rlc3RpbmF0aW9ucycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIH0sXG5cbiAgcG9zdE5ld1RyaXAobmV3VHJpcCkge1xuICAgIGNvbnN0IHBvc3RGb3JtYXQgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1RyaXApXG4gICAgfVxuXG4gICAgcmV0dXJuIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzJywgcG9zdEZvcm1hdClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfSxcblxuICBwb3N0TW9kaWZ5VHJpcChyZXZpc2VkVHJpcCkge1xuICAgIGNvbnN0IHBvc3RGb3JtYXQgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJldmlzZWRUcmlwKVxuICAgIH1cblxuICAgIHJldHVybiBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS91cGRhdGVUcmlwJywgcG9zdEZvcm1hdClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfSxcblxuICBkZWxldGVUcmlwKHRyaXBJRCkge1xuICAgIGNvbnN0IHBvc3RGb3JtYXQgPSB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgIH1cblxuICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwcy8ke3RyaXBJRH1gLCBwb3N0Rm9ybWF0KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoQXBpXG4iLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9sb2dvLXBsYW5lLnN2Z1wiOyIsImltcG9ydCAnbm9ybWFsaXplLmNzcydcbmltcG9ydCAnLi9jc3MvaW5kZXguc2NzcydcbmltcG9ydCAnLi9zY3JpcHRzLmpzJ1xuXG5pbXBvcnQgJy4vaW1hZ2VzL2xvZ28tcGxhbmUuc3ZnJ1xuIiwiLy8gRklMRSBJTVBPUlRTXG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMnXG5pbXBvcnQgZmV0Y2hBcGkgZnJvbSAnLi9mZXRjaEFwaSdcblxuaW1wb3J0ICcuL2Nzcy9pbmRleC5zY3NzJ1xuXG5pbXBvcnQgVHJhdmVsZXIgZnJvbSAnLi90cmF2ZWxlcidcbmltcG9ydCBBZ2VudCBmcm9tICcuL2FnZW50J1xuaW1wb3J0IFRyaXAgZnJvbSAnLi90cmlwJ1xuaW1wb3J0IERlc3RpbmF0aW9uIGZyb20gJy4vZGVzdGluYXRpb24nXG5cblxuLy8gUVVFUlkgU0VMRUNUT1JTIEFORCBHTE9CQUwgVkFSSUFCTEVTXG5jb25zdCB0cmF2ZWxlckxvZ2luQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbi10cmF2ZWxlcicpXG5jb25zdCBhZ2VudExvZ2luQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbi1hZ2VudCcpXG5jb25zdCBsb2dvZmZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLWxvZ29mZicpXG5jb25zdCBhZGRUb1RyaXBzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbi1hZGQtdHJpcCcpXG5jb25zdCB0cmF2ZWxlckRhc2hib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXNoYm9hcmQtdXNlcicpXG5jb25zdCBhZ2VudERhc2hib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXNoYm9hcmQtYWdlbnQnKVxuY29uc3QgbG9naW5WaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luJylcbmNvbnN0IHRyYXZlbGVyVXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZS10cmF2ZWxlcicpXG5jb25zdCBkZXN0aW5hdGlvbkRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYW5uaW5nLS1kZXN0aW5hdGlvbicpXG5jb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxhbm5pbmctLWRhdGUnKVxuY29uc3QgZXN0aW1hdGVkQ29zdE9mVHJpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFubmluZy0tY29zdCcpXG5jb25zdCBkdXJhdGlvbkRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYW5uaW5nLS1kdXJhdGlvbicpXG5jb25zdCB0cmF2ZWxlcnNEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFubmluZy0tdHJhdmVsZXJzJylcbmNvbnN0IHRyaXBNb2JpbGVEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlwLS1kcm9wZG93bicpXG5jb25zdCBhZ2VudE1vYmlsZURyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyYXZlbGVyLS1kcm9wZG93bicpXG5jb25zdCB0cmF2ZWxlclNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmF2ZWxlci0tc2VhcmNoJylcblxuY29uc3QgY3VycmVudEFnZW50ID0gbmV3IEFnZW50KClcbmxldCBjdXJyZW50VHJhdmVsZXJcblxuXG4vLyBFVkVOVCBMSVNURU5FUlNcbnRyYXZlbGVyTG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhdXRoZW50aWNhdGVVc2VyKVxuYWdlbnRMb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGF1dGhlbnRpY2F0ZVVzZXIpXG5sb2dvZmZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2dPZmZXZWJzaXRlKVxuYWRkVG9Ucmlwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRvUGVuZGluZ1RyaXBzKVxuZGVzdGluYXRpb25Ecm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVFc3RpbWF0ZWRDb3N0KVxuZHVyYXRpb25Ecm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVFc3RpbWF0ZWRDb3N0KVxudHJhdmVsZXJzRHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdXBkYXRlRXN0aW1hdGVkQ29zdClcbmRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB2YWxpZGF0ZUZvcm0pXG50cmlwTW9iaWxlRHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlVHJpcFZpZXcpXG5hZ2VudE1vYmlsZURyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRvZ2dsZVRyaXBBbmRUcmF2ZWxlclZpZXcpXG50cmF2ZWxlclNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHNlYXJjaEZvclVzZXIpXG5cblxuLy8gRkVUQ0ggU0VSVkVSIERBVEFcbmxldCB0cmF2ZWxlcnNSZXNwb25zZSA9IGZldGNoQXBpLmdldFRyYXZlbGVycygpXG5sZXQgdHJpcHNSZXNwb25zZSA9IGZldGNoQXBpLmdldEFsbFRyaXBzKClcbmxldCBkZXN0aW5hdGlvbnNSZXNwb25zZSA9IGZldGNoQXBpLmdldEFsbERlc3RpbmF0aW9ucygpXG5cbmZ1bmN0aW9uIHJlbG9hZFNlcnZlckluZm9ybWF0aW9uKCkge1xuICB0cmF2ZWxlcnNSZXNwb25zZSA9IGZldGNoQXBpLmdldFRyYXZlbGVycygpXG4gIHRyaXBzUmVzcG9uc2UgPSBmZXRjaEFwaS5nZXRBbGxUcmlwcygpXG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKFt0cmF2ZWxlcnNSZXNwb25zZSwgdHJpcHNSZXNwb25zZV0pXG4gICAgLnRoZW4ocmVzcG9uc2VzID0+IHtcbiAgICAgIGNvbnN0IGFsbFRyYXZlbGVycyA9IHJlc3BvbnNlc1swXS50cmF2ZWxlcnNcbiAgICAgIGNvbnN0IGFsbFRyaXBzID0gcmVzcG9uc2VzWzFdLnRyaXBzXG5cbiAgICAgIGN1cnJlbnRBZ2VudC50cmF2ZWxlcnMgPSBbXVxuICAgICAgY3VycmVudEFnZW50LnRyaXBzID0gW11cblxuICAgICAgcG9wdWxhdGVBZ2VudFRyYXZlbGVycyhhbGxUcmF2ZWxlcnMsIGFsbFRyaXBzKVxuICAgICAgcG9wdWxhdGVBZ2VudFRyaXBzKGFsbFRyaXBzKVxuICAgICAgYWxwaGFiZXRpemVEYXRhc2V0KGN1cnJlbnRBZ2VudC50cmF2ZWxlcnMsICduYW1lJylcbiAgICB9KVxuICAgIC5jYXRjaChkaXNwbGF5RXJyb3JNZXNzYWdlKVxufVxuXG5Qcm9taXNlLmFsbChbdHJhdmVsZXJzUmVzcG9uc2UsIHRyaXBzUmVzcG9uc2UsIGRlc3RpbmF0aW9uc1Jlc3BvbnNlXSlcbiAgLnRoZW4ocmVzcG9uc2VzID0+IHtcbiAgICBjb25zdCBhbGxUcmF2ZWxlcnMgPSByZXNwb25zZXNbMF0udHJhdmVsZXJzXG4gICAgY29uc3QgYWxsVHJpcHMgPSByZXNwb25zZXNbMV0udHJpcHNcbiAgICBjb25zdCBhbGxEZXN0aW5hdGlvbnM9IHJlc3BvbnNlc1syXS5kZXN0aW5hdGlvbnNcblxuICAgIHBvcHVsYXRlQWdlbnRUcmF2ZWxlcnMoYWxsVHJhdmVsZXJzLCBhbGxUcmlwcylcbiAgICBwb3B1bGF0ZUFnZW50VHJpcHMoYWxsVHJpcHMpXG4gICAgcG9wdWxhdGVBZ2VudERlc3RpbmF0aW9ucyhhbGxEZXN0aW5hdGlvbnMpXG4gIH0pXG4gIC50aGVuKHBvcHVsYXRlRHJvcGRvd25zKVxuICAuY2F0Y2goZGlzcGxheUVycm9yTWVzc2FnZSlcblxuZnVuY3Rpb24gcG9wdWxhdGVBZ2VudFRyYXZlbGVycyhhbGxUcmF2ZWxlcnMsIGFsbFRyaXBzKSB7XG4gIGFsbFRyYXZlbGVycy5mb3JFYWNoKHRyYXZlbGVyID0+IHtcbiAgICBjb25zdCBuZXdUcmF2ZWxlciA9IG5ldyBUcmF2ZWxlcih0cmF2ZWxlcilcbiAgICBmaW5kVHJhdmVsZXJUcmlwcyhhbGxUcmlwcywgbmV3VHJhdmVsZXIpXG4gICAgY3VycmVudEFnZW50LnRyYXZlbGVycy5wdXNoKG5ld1RyYXZlbGVyKVxuICB9KVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUFnZW50VHJpcHMoYWxsVHJpcHMpIHtcbiAgYWxsVHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICBjb25zdCBuZXdUcmlwID0gbmV3IFRyaXAodHJpcClcbiAgICBuZXdUcmlwLmZvcm1hdERhdGUoKVxuICAgIGN1cnJlbnRBZ2VudC50cmlwcy5wdXNoKG5ld1RyaXApXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlQWdlbnREZXN0aW5hdGlvbnMoYWxsRGVzdGluYXRpb25zKSB7XG4gIGFsbERlc3RpbmF0aW9ucy5mb3JFYWNoKHBsYWNlID0+IHtcbiAgICBjb25zdCBuZXdEZXN0aW5hdGlvbiA9IG5ldyBEZXN0aW5hdGlvbihwbGFjZSlcbiAgICBjdXJyZW50QWdlbnQuZGVzdGluYXRpb25zLnB1c2gobmV3RGVzdGluYXRpb24pXG4gIH0pXG59XG5cblxuLy8gVVNFUiBJTkZPUk1BVElPTiBQT1BVTEFUSU9OXG5mdW5jdGlvbiBhdXRoZW50aWNhdGVVc2VyKGV2ZW50KSB7XG4gIGNvbnN0IHRyYXZlbGVyUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzcy10cmF2ZWxlcicpXG4gIGNvbnN0IGFnZW50VXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZS1hZ2VudCcpXG4gIGNvbnN0IGFnZW50UGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzcy1hZ2VudCcpXG5cbiAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2J1dHRvbi10cmF2ZWxlcicgJiZcbiAgICAgIHRyYXZlbGVyVXNlcm5hbWUudmFsdWUuaW5jbHVkZXMoJ3RyYXZlbGVyJykgJiZcbiAgICAgIHRyYXZlbGVyUGFzc3dvcmQudmFsdWUgPT09ICd0cmF2ZWwyMDIwJykge1xuXG4gICAgbG9hZFRyYXZlbGVyRGFzaGJvYXJkKClcblxuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2J1dHRvbi1hZ2VudCcgJiZcbiAgICAgIGFnZW50VXNlcm5hbWUudmFsdWUgPT09ICdhZ2VuY3knICYmXG4gICAgICBhZ2VudFBhc3N3b3JkLnZhbHVlID09PSAndHJhdmVsMjAyMCcpIHtcblxuICAgIGxvYWRBZ2VudERhc2hib2FyZCgpXG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFRyYXZlbGVyRGFzaGJvYXJkKCkge1xuICBsb2dPbldlYnNpdGUodHJhdmVsZXJEYXNoYm9hcmQpXG4gIGNsZWFyQWxsVHJpcERpc3BsYXlzKClcbiAgcmVzZXRQbGFubmluZ0Zvcm0oKVxuICBjb25zdCB0cmF2ZWxlcklEID0gdHJhdmVsZXJVc2VybmFtZS52YWx1ZS5zbGljZSg4KVxuXG4gIGZldGNoQXBpLmdldFNwZWNpZmljVHJhdmVsZXIodHJhdmVsZXJJRClcbiAgICAudGhlbih0cmF2ZWxlciA9PiBjcmVhdGVUcmF2ZWxlclByb2ZpbGUodHJhdmVsZXIpKVxuICAgIC5jYXRjaChkaXNwbGF5RXJyb3JNZXNzYWdlKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUcmF2ZWxlclByb2ZpbGUodHJhdmVsZXIpIHtcbiAgY3VycmVudFRyYXZlbGVyID0gY3VycmVudEFnZW50LnRyYXZlbGVycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PT0gdHJhdmVsZXIuaWQpXG4gIGRvbVVwZGF0ZXMucG9wdWxhdGVUcmF2ZWxlckdyZWV0aW5nKGN1cnJlbnRUcmF2ZWxlcilcblxuICBmaW5kRGVzdGluYXRpb25JbmZvcm1hdGlvbigpXG4gIGRpc3BsYXlBbW91dFNwZW50KClcbn1cblxuZnVuY3Rpb24gZmluZFRyYXZlbGVyVHJpcHMoYWxsVHJpcHMsIHNlbGVjdGVkVHJhdmVsZXIgPSBjdXJyZW50VHJhdmVsZXIpIHtcbiAgY29uc3QgdHJhdmVsZXJUcmlwcyA9IGFsbFRyaXBzLmZpbHRlcih0cmlwID0+IHtcbiAgICByZXR1cm4gdHJpcC51c2VySUQgPT09IHNlbGVjdGVkVHJhdmVsZXIuaWRcbiAgfSlcblxuICB0cmF2ZWxlclRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgY29uc3QgbmV3VHJpcCA9IG5ldyBUcmlwKHRyaXApXG4gICAgbmV3VHJpcC5mb3JtYXREYXRlKClcbiAgICBzZWxlY3RlZFRyYXZlbGVyLnRyaXBzLnB1c2gobmV3VHJpcClcbiAgfSlcblxuICBzZWxlY3RlZFRyYXZlbGVyLnNvcnRUcmlwc0J5RGF0ZSgpXG59XG5cbmZ1bmN0aW9uIGNsZWFyQWxsVHJpcERpc3BsYXlzKCkge1xuICBkb21VcGRhdGVzLmNsZWFyVHJpcERpc3BsYXlzKCdQcmV2aW91cycpXG4gIGRvbVVwZGF0ZXMuY2xlYXJUcmlwRGlzcGxheXMoJ1ByZXNlbnQnKVxuICBkb21VcGRhdGVzLmNsZWFyVHJpcERpc3BsYXlzKCdVcGNvbWluZycpXG4gIGRvbVVwZGF0ZXMuY2xlYXJUcmlwRGlzcGxheXMoJ1BlbmRpbmcnKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5QW1vdXRTcGVudCgpIHtcbiAgY29uc3QgdG90YWxTcGVudFByZXZpb3VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NwZW5kaW5nLS1wcmV2aW91cy1hbW91bnQnKVxuICBjb25zdCB0b3RhbFNwZW50UHJlc2VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcGVuZGluZy0tcHJlc2VudC1hbW91bnQnKVxuXG4gIGNvbnN0IHByZXZpb3VzID0gY3VycmVudFRyYXZlbGVyLmNhbGN1bGF0ZVNwZW5kaW5nKGN1cnJlbnRBZ2VudC5kZXN0aW5hdGlvbnMsIDIwMjApXG4gIGNvbnN0IHByZXNlbnQgPSBjdXJyZW50VHJhdmVsZXIuY2FsY3VsYXRlU3BlbmRpbmcoY3VycmVudEFnZW50LmRlc3RpbmF0aW9ucywgMjAyMSlcblxuICBkb21VcGRhdGVzLmFkZENvc3RUb1Byb2ZpbGUodG90YWxTcGVudFByZXZpb3VzLCBwcmV2aW91cylcbiAgZG9tVXBkYXRlcy5hZGRDb3N0VG9Qcm9maWxlKHRvdGFsU3BlbnRQcmVzZW50LCBwcmVzZW50KVxufVxuXG5mdW5jdGlvbiBhZGRUb1BlbmRpbmdUcmlwcygpIHtcbiAgY3JlYXRlTmV3VHJpcCgpXG4gIHJlc2V0UGxhbm5pbmdGb3JtKClcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3VHJpcCgpIHtcbiAgY29uc3QgdHJpcEluZm9ybWF0aW9uID0ge1xuICAgIGlkOiAwLFxuICAgIHVzZXJJRDogTnVtYmVyKGN1cnJlbnRUcmF2ZWxlci5pZCksXG4gICAgZGVzdGluYXRpb25JRDogTnVtYmVyKGRlc3RpbmF0aW9uRHJvcGRvd24udmFsdWUpLFxuICAgIHRyYXZlbGVyczogTnVtYmVyKHRyYXZlbGVyc0Ryb3Bkb3duLnZhbHVlKSxcbiAgICBkYXRlOiBmb3JtYXREYXRlRm9yUG9zdChkYXRlSW5wdXQudmFsdWUpLFxuICAgIGR1cmF0aW9uOiBOdW1iZXIoZHVyYXRpb25Ecm9wZG93bi52YWx1ZSksXG4gICAgc3RhdHVzOiAncGVuZGluZycsXG4gICAgc3VnZ2VzdGVkQWN0aXZpdGllczogW11cbiAgfVxuXG4gIGNvbnN0IHRvdGFsVHJpcHMgPSBjdXJyZW50QWdlbnQudHJpcHMubGVuZ3RoIC0gMVxuICB0cmlwSW5mb3JtYXRpb24uaWQgPSBjdXJyZW50QWdlbnQudHJpcHNbdG90YWxUcmlwc10uaWQgKyAxXG5cbiAgY29uc3QgbmV3VHJpcCA9IG5ldyBUcmlwKHRyaXBJbmZvcm1hdGlvbilcbiAgbmV3VHJpcC5mb3JtYXREYXRlKClcbiAgY3VycmVudFRyYXZlbGVyLnRyaXBzLnB1c2gobmV3VHJpcClcblxuICBmZXRjaEFwaS5wb3N0TmV3VHJpcCh0cmlwSW5mb3JtYXRpb24pXG4gICAgLnRoZW4ocmVsb2FkU2VydmVySW5mb3JtYXRpb24pXG4gICAgLnRoZW4oY2xlYXJBbGxUcmlwRGlzcGxheXMpXG4gICAgLnRoZW4oZmluZERlc3RpbmF0aW9uSW5mb3JtYXRpb24pXG4gICAgLmNhdGNoKGRpc3BsYXlFcnJvck1lc3NhZ2UpXG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRyaXBWaWV3KGV2ZW50KSB7XG4gIGNvbnN0IHRyaXBTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaXAtdXNlcicpXG4gIHRyaXBTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktcHJldmlvdXMnKVxuICB0cmlwU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LXByZXNlbnQnKVxuICB0cmlwU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LXVwY29taW5nJylcbiAgdHJpcFNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1wZW5kaW5nJylcblxuICBjb25zdCBkcm9wZG93blZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gIHRyaXBTZWN0aW9uLmNsYXNzTGlzdC5hZGQoYGRpc3BsYXktJHtkcm9wZG93blZhbHVlfWApXG5cbiAgY29uc3QgdHJpcERyb3Bkb3duTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlwLS1kcm9wZG93bi1tZXNzYWdlJylcbiAgaWYgKCFjaGVja0ZvclRyaXBUeXBlKGRyb3Bkb3duVmFsdWUpKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBZb3UgZG8gbm90IGhhdmUgYW55ICR7ZHJvcGRvd25WYWx1ZX0gdHJpcHMgYXQgdGhpcyB0aW1lYFxuICAgIHRyaXBEcm9wZG93bk1lc3NhZ2UuaW5uZXJUZXh0ID0gbWVzc2FnZVxuICAgIHRyaXBEcm9wZG93bk1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snXG4gIH0gZWxzZSB7XG4gICAgdHJpcERyb3Bkb3duTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JUcmlwVHlwZShkcm9wZG93blZhbHVlKSB7XG4gIGNvbnN0IHRoaXNUcmlwVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0cmlwLS0ke2Ryb3Bkb3duVmFsdWV9YClcbiAgY29uc3QgdHJpcExpc3QgPSB0aGlzVHJpcFR5cGUucXVlcnlTZWxlY3RvckFsbCgnYXJ0aWNsZScpXG5cbiAgaWYgKHRyaXBMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cblxuLy8gUExBTk5JTkcgRk9STSBJTkZPUk1BVElPTlxuZnVuY3Rpb24gcmVzZXRQbGFubmluZ0Zvcm0oKSB7XG4gIGRhdGVJbnB1dC52YWx1ZSA9ICcnXG4gIGRlc3RpbmF0aW9uRHJvcGRvd24udmFsdWUgPSAwXG4gIGR1cmF0aW9uRHJvcGRvd24udmFsdWUgPSAxXG4gIHRyYXZlbGVyc0Ryb3Bkb3duLnZhbHVlID0gMVxuXG4gIGVzdGltYXRlZENvc3RPZlRyaXAuaW5uZXJUZXh0ID0gYEVzdGltYXRlZCBDb3N0OiAkMC4wMGBcbn1cblxuZnVuY3Rpb24gYWxwaGFiZXRpemVEYXRhc2V0KGRhdGFUeXBlLCBwcm9wZXJ0eSkge1xuICBkYXRhVHlwZS5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKGFbcHJvcGVydHldID4gYltwcm9wZXJ0eV0pIHtcbiAgICAgIHJldHVybiAxXG5cbiAgICB9IGVsc2UgaWYgKGFbcHJvcGVydHldIDwgYltwcm9wZXJ0eV0pIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVEcm9wZG93bnMoKSB7XG4gIGFscGhhYmV0aXplRGF0YXNldChjdXJyZW50QWdlbnQuZGVzdGluYXRpb25zLCAnZGVzdGluYXRpb24nKVxuXG4gIGRvbVVwZGF0ZXMuYWRkRGVzdGluYXRpb25zVG9Ecm9wZG93bihjdXJyZW50QWdlbnQuZGVzdGluYXRpb25zLCBkZXN0aW5hdGlvbkRyb3Bkb3duKVxuICBkb21VcGRhdGVzLmFkZE51bWJlcnNUb0Ryb3Bkb3ducyhkdXJhdGlvbkRyb3Bkb3duKVxuICBkb21VcGRhdGVzLmFkZE51bWJlcnNUb0Ryb3Bkb3ducyh0cmF2ZWxlcnNEcm9wZG93bilcbn1cblxuZnVuY3Rpb24gdXBkYXRlRXN0aW1hdGVkQ29zdChldmVudCkge1xuICBpZiAoZGVzdGluYXRpb25Ecm9wZG93bi52YWx1ZSkge1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gZmluZERlc3RpbmF0aW9uKE51bWJlcihkZXN0aW5hdGlvbkRyb3Bkb3duLnZhbHVlKSlcbiAgICBjb25zdCBudW1EYXlzID0gZHVyYXRpb25Ecm9wZG93bi52YWx1ZVxuICAgIGNvbnN0IG51bVBlb3BsZSA9IHRyYXZlbGVyc0Ryb3Bkb3duLnZhbHVlXG5cbiAgICBjb25zdCBsb2RnaW5nQ29zdCA9IGRlc3RpbmF0aW9uLmxvZGdpbmdDb3N0UGVyRGF5ICogbnVtRGF5cyAqIG51bVBlb3BsZVxuICAgIGNvbnN0IGZsaWdodENvc3QgPSBkZXN0aW5hdGlvbi5mbGlnaHRDb3N0UGVyUGVyc29uICogbnVtUGVvcGxlXG5cbiAgICBjb25zdCBwcmljZSA9ICgobG9kZ2luZ0Nvc3QgKyBmbGlnaHRDb3N0KSAqIDEuMSkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xuICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIH0pXG5cbiAgICBlc3RpbWF0ZWRDb3N0T2ZUcmlwLmlubmVyVGV4dCA9IGBFc3RpbWF0ZWQgQ29zdDogJCR7cHJpY2V9YFxuICB9XG5cbiAgdmFsaWRhdGVGb3JtKClcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xuICBjb25zdCBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShkYXRlSW5wdXQudmFsdWUpXG4gIGNvbnN0IGRhdGVEaWZmZXJlbmNlID0gZGV0ZXJtaW5lRGF0ZURpZmZlcmVuY2Uoc2VsZWN0ZWREYXRlKVxuXG4gIGlmIChkZXN0aW5hdGlvbkRyb3Bkb3duLnZhbHVlID4gMCAmJiBkYXRlRGlmZmVyZW5jZSA+IDApIHtcbiAgICBhZGRUb1RyaXBzQnV0dG9uLmRpc2FibGVkID0gZmFsc2VcblxuICB9IGVsc2Uge1xuICAgIGFkZFRvVHJpcHNCdXR0b24uZGlzYWJsZWQgPSB0cnVlXG4gIH1cbn1cblxuXG4vLyBBR0VOVCBGVU5DVElPTlNcbmZ1bmN0aW9uIGxvYWRBZ2VudERhc2hib2FyZCgpIHtcbiAgbG9nT25XZWJzaXRlKGFnZW50RGFzaGJvYXJkKVxuICBhbHBoYWJldGl6ZURhdGFzZXQoY3VycmVudEFnZW50LnRyYXZlbGVycywgJ25hbWUnKVxuXG4gIGxvYWRUcmF2ZWxlckluZm9ybWF0aW9uKClcbiAgcG9wdWxhdGVBbm51YWxJbmNvbWUoKVxuICBwb3B1bGF0ZVRvZGF5c1RyYXZlbGVycygpXG59XG5cbmZ1bmN0aW9uIHNlYXJjaEZvclVzZXIoZXZlbnQpIHtcbiAgY29uc3Qgc2VhcmNoVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKVxuXG4gIGNvbnN0IHRyYXZlbGVySURzID0gY3VycmVudEFnZW50LnRyYXZlbGVycy5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xuICAgIGlmICghY3Vyci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUpKSB7XG4gICAgICBhY2MucHVzaChjdXJyLmlkKVxuICAgIH1cbiAgICByZXR1cm4gYWNjXG4gIH0sIFtdKVxuXG4gIHVuaGlkZUFsbFRyYXZlbGVycygpXG4gIGhpZGVVbnNlYXJjaGVkVHJhdmVsZXJzKHRyYXZlbGVySURzKVxufVxuXG5mdW5jdGlvbiB1bmhpZGVBbGxUcmF2ZWxlcnMoKSB7XG4gIGNvbnN0IGFsbFRyYXZlbGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmlwLS1jYXJkJylcbiAgYWxsVHJhdmVsZXJzLmZvckVhY2godHJhdmVsZXIgPT4gdHJhdmVsZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJykpXG59XG5cbmZ1bmN0aW9uIGhpZGVVbnNlYXJjaGVkVHJhdmVsZXJzKHRyYXZlbGVySURzKSB7XG4gIHRyYXZlbGVySURzLmZvckVhY2goaWQgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlQW5udWFsSW5jb21lKCkge1xuICBjb25zdCBwcmVzZW50SW5jb21lID0gY3VycmVudEFnZW50LmNhbGN1bGF0ZVRvdGFsSW5jb21lKDIwMjEpXG4gIGRvbVVwZGF0ZXMuZGlzcGxheUFnZW50QW5udWFsSW5jb21lKHByZXNlbnRJbmNvbWUpXG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlVG9kYXlzVHJhdmVsZXJzKCkge1xuICBjb25zdCB0b2RheXNUcmlwcyA9IGN1cnJlbnRBZ2VudC50cmlwcy5maWx0ZXIodHJpcCA9PiB7XG4gICAgY29uc3QgZGF5c1Bhc3NlZCA9IGRldGVybWluZURhdGVEaWZmZXJlbmNlKHRyaXAuZGF0ZSlcbiAgICBpZiAoZGF5c1Bhc3NlZCA8IDAgJiYgTWF0aC5hYnMoZGF5c1Bhc3NlZCkgPCB0cmlwLmR1cmF0aW9uICYmXG4gICAgICAgIHRyaXAuc3RhdHVzID09PSAnYXBwcm92ZWQnKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcbiAgY29uc3QgdG9kYXlzVHJhdmVsZXJzID0gY3VycmVudEFnZW50LmZpbmRUb2RheXNUcmF2ZWxlcnModG9kYXlzVHJpcHMpXG4gIGRvbVVwZGF0ZXMuZGlzcGxheVRvZGF5c1RyYXZlbGVycyh0b2RheXNUcmF2ZWxlcnMpXG59XG5cbmZ1bmN0aW9uIGFwcHJvdmVQZW5kaW5nVHJpcChldmVudCkge1xuICBjb25zdCB0cmlwSUQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd0cmlwSUQnKVxuICBjb25zdCByZXZpc2VkVHJpcCA9IHtcbiAgICBpZDogTnVtYmVyKHRyaXBJRCksXG4gICAgc3RhdHVzOiAnYXBwcm92ZWQnXG4gIH1cblxuICBmZXRjaEFwaS5wb3N0TW9kaWZ5VHJpcChyZXZpc2VkVHJpcClcblxuICByZWxvYWRTZXJ2ZXJJbmZvcm1hdGlvbigpXG4gICAgLnRoZW4obG9hZFRyYXZlbGVySW5mb3JtYXRpb24pXG4gICAgLmNhdGNoKGRpc3BsYXlFcnJvck1lc3NhZ2UpXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVBlbmRpbmdUcmlwKCkge1xuICBjb25zdCB0cmlwSUQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd0cmlwSUQnKVxuICBmZXRjaEFwaS5kZWxldGVUcmlwKE51bWJlcih0cmlwSUQpKVxuXG4gIHJlbG9hZFNlcnZlckluZm9ybWF0aW9uKClcbiAgICAudGhlbihsb2FkVHJhdmVsZXJJbmZvcm1hdGlvbilcbiAgICAuY2F0Y2goZGlzcGxheUVycm9yTWVzc2FnZSlcbn1cblxuZnVuY3Rpb24gbG9hZFRyYXZlbGVySW5mb3JtYXRpb24oKSB7XG4gIGRvbVVwZGF0ZXMuY2xlYXJUcmF2ZWxlckNhcmREaXNwbGF5cygpXG5cbiAgY3VycmVudEFnZW50LnRyYXZlbGVycy5mb3JFYWNoKHRyYXZlbGVyID0+IHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlUcmF2ZWxlckluZm9ybWF0aW9uKHRyYXZlbGVyLCBjdXJyZW50QWdlbnQuZGVzdGluYXRpb25zKVxuICAgIGRvbVVwZGF0ZXMuZGlzcGxheVBlbmRpbmdUcmlwcyh0cmF2ZWxlciwgY3VycmVudEFnZW50LmRlc3RpbmF0aW9ucylcbiAgfSlcblxuICBhZGRQZW5kaW5nQnV0dG9uRXZlbnRMaXN0ZW5lcnMoKVxufVxuXG5mdW5jdGlvbiB0b2dnbGVUcmlwQW5kVHJhdmVsZXJWaWV3KGV2ZW50KSB7XG4gIGNvbnN0IGRyb3Bkb3duVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWVcblxuICBpZiAoZHJvcGRvd25WYWx1ZSA9PT0gJ3RyaXBzJykge1xuICAgIGNoZWNrRm9yUGVuZGluZ1RyaXBzKClcbiAgICBhZ2VudERhc2hib2FyZC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LXRyaXBzJylcbiAgICBhZ2VudERhc2hib2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LXRyYXZlbGVycycpXG5cbiAgfSBlbHNlIHtcbiAgICBhZ2VudERhc2hib2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LXRyaXBzJylcbiAgICBhZ2VudERhc2hib2FyZC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LXRyYXZlbGVycycpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JQZW5kaW5nVHJpcHMoKSB7XG4gIGNvbnN0IHBlbmRpbmdUcmlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZW5kaW5nLS1hcnRpY2xlJylcbiAgY29uc3QgdHJpcExpc3QgPSBwZW5kaW5nVHJpcHMucXVlcnlTZWxlY3RvcignYXJ0aWNsZScpXG4gIGNvbnN0IHBlbmRpbmdNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlbmRpbmctLW1lc3NhZ2UnKVxuXG4gIGlmICghdHJpcExpc3QpIHtcbiAgICBwZW5kaW5nTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaydcbiAgfSBlbHNlIHtcbiAgICBwZW5kaW5nTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIH1cbn1cblxuXG4vLyBHRU5FUkFMIEZVTkNUSU9OQUxJVFlcbmZ1bmN0aW9uIGZpbmREZXN0aW5hdGlvbkluZm9ybWF0aW9uKCkge1xuICBjdXJyZW50VHJhdmVsZXIudHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICBjb25zdCBwbGFjZSA9IGZpbmREZXN0aW5hdGlvbih0cmlwLmRlc3RpbmF0aW9uSUQpXG4gICAgY29uc3QgZGF5c1Bhc3NlZCA9IGRldGVybWluZURhdGVEaWZmZXJlbmNlKHRyaXAuZGF0ZSlcblxuICAgIGRvbVVwZGF0ZXMuZGlzcGxheURlc3RpbmF0aW9uSW5mb3JtYXRpb24odHJpcCwgcGxhY2UsIGRheXNQYXNzZWQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZpbmREZXN0aW5hdGlvbihkZXN0aW5hdGlvbklEKSB7XG4gIHJldHVybiBjdXJyZW50QWdlbnQuZGVzdGluYXRpb25zLmZpbmQoZGVzdCA9PiBkZXN0LmlkID09PSBkZXN0aW5hdGlvbklEKVxufVxuXG5mdW5jdGlvbiBkZXRlcm1pbmVEYXRlRGlmZmVyZW5jZShkYXRlSW5wdXQpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gIGNvbnN0IHRpbWVEaWZmZXJlbmNlID0gRGF0ZS5wYXJzZShkYXRlSW5wdXQpIC0gdG9kYXlcbiAgcmV0dXJuIE1hdGguY2VpbCh0aW1lRGlmZmVyZW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSlcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZUZvclBvc3QoZGF0ZUlucHV0KSB7XG4gIGNvbnN0IGRhdGVQYXJ0cyA9IGRhdGVJbnB1dC5zcGxpdCgnLScpXG4gIHJldHVybiBkYXRlUGFydHMuam9pbignLycpXG59XG5cbmZ1bmN0aW9uIGFkZFBlbmRpbmdCdXR0b25FdmVudExpc3RlbmVycygpIHtcbiAgY29uc3QgYXBwcm92ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLWFwcHJvdmUnKVxuICBjb25zdCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1kZWxldGUnKVxuXG4gIGFwcHJvdmVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHByb3ZlUGVuZGluZ1RyaXApXG4gIH0pXG5cbiAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlUGVuZGluZ1RyaXApXG4gIH0pXG59XG5cblxuLy8gVE9HR0xFIEJFVFdFRU4gTE9HSU4gQU5EIERBU0hCT0FSRFxuZnVuY3Rpb24gbG9nT25XZWJzaXRlKHNlbGVjdGVkRGFzaGJvYXJkKSB7XG4gIHNlbGVjdGVkRGFzaGJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gIGxvZ2luVmlldy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICBsb2dvZmZCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbn1cblxuZnVuY3Rpb24gbG9nT2ZmV2Vic2l0ZSgpIHtcbiAgbG9naW5WaWV3LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gIHRyYXZlbGVyRGFzaGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIGFnZW50RGFzaGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIGxvZ29mZkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5RXJyb3JNZXNzYWdlKGVycm9yKSB7XG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXJ2ZXItZXJyb3InKVxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnRVJST1IgTUVTU0FHRTogVW5hYmxlIHRvIGFjY2VzcyBzZXJ2ZXIgaW5mb3JtYXRpb24gYXQgdGhpcyB0aW1lLiBQbGVhc2UgY2hlY2sgdGhhdCB0aGUgc2VydmVyIGlzIHJ1bm5pbmcgYW5kIHJlZnJlc2ggdGhlIHBhZ2UuJylcbiAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snXG4gIH0gZWxzZSB7XG4gICAgZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgfVxufVxuIiwiY2xhc3MgVHJhdmVsZXIge1xuICBjb25zdHJ1Y3Rvcih0cmF2ZWxlcikge1xuICAgIHRoaXMuaWQgPSB0cmF2ZWxlci5pZFxuICAgIHRoaXMubmFtZSA9IHRyYXZlbGVyLm5hbWVcbiAgICB0aGlzLnR5cGUgPSB0cmF2ZWxlci50cmF2ZWxlclR5cGVcbiAgICB0aGlzLnRyaXBzID0gW11cbiAgfVxuXG4gIHNvcnRUcmlwc0J5RGF0ZSgpIHtcbiAgICB0aGlzLnRyaXBzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChEYXRlLnBhcnNlKGEuZGF0ZSkgPCBEYXRlLnBhcnNlKGIuZGF0ZSkpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICAgIH0gZWxzZSBpZiAoRGF0ZS5wYXJzZShhLmRhdGUpID4gRGF0ZS5wYXJzZShiLmRhdGUpKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjYWxjdWxhdGVTcGVuZGluZyhkZXN0aW5hdGlvbnMsIHllYXIpIHtcbiAgICBsZXQgdG90YWxDb3N0ID0gMFxuXG4gICAgdGhpcy50cmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgY29uc3QgdHJpcERhdGUgPSBuZXcgRGF0ZSh0cmlwLmRhdGUpXG4gICAgICBjb25zdCB0cmlwWWVhciA9IHRyaXBEYXRlLmdldEZ1bGxZZWFyKClcblxuICAgICAgaWYgKHRyaXBZZWFyID09PSB5ZWFyICYmIHRyaXAuc3RhdHVzICE9PSAncGVuZGluZycpIHtcbiAgICAgICAgY29uc3QgdG90YWxQZXJUcmlwID0gdGhpcy5jYWxjdWxhdGVDb3N0UGVyVHJpcCh0cmlwLCBkZXN0aW5hdGlvbnMpXG4gICAgICAgIHRvdGFsQ29zdCArPSB0b3RhbFBlclRyaXBcblxuICAgICAgfSBlbHNlIGlmICgheWVhciAmJiB0cmlwLnN0YXR1cyAhPT0gJ3BlbmRpbmcnKSB7XG4gICAgICAgIGNvbnN0IHRvdGFsUGVyVHJpcCA9IHRoaXMuY2FsY3VsYXRlQ29zdFBlclRyaXAodHJpcCwgZGVzdGluYXRpb25zKVxuICAgICAgICB0b3RhbENvc3QgKz0gdG90YWxQZXJUcmlwXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAodG90YWxDb3N0ICogMS4xKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJcbiAgICB9KVxuICB9XG5cbiAgY2FsY3VsYXRlQ29zdFBlclRyaXAodHJpcCwgZGVzdGluYXRpb25zKSB7XG4gICAgY29uc3QgcGxhY2UgPSBkZXN0aW5hdGlvbnMuZmluZChkZXN0ID0+IGRlc3QuaWQgPT09IHRyaXAuZGVzdGluYXRpb25JRClcblxuICAgIGNvbnN0IHRvdGFsTG9kZ2luZyA9IHBsYWNlLmxvZGdpbmdDb3N0UGVyRGF5ICogdHJpcC5kdXJhdGlvblxuICAgIGNvbnN0IHRvdGFsRmxpZ2h0ID0gcGxhY2UuZmxpZ2h0Q29zdFBlclBlcnNvblxuICAgIHJldHVybiB0b3RhbExvZGdpbmcgKyB0b3RhbEZsaWdodFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhdmVsZXJcbiIsImNsYXNzIFRyaXAge1xuICBjb25zdHJ1Y3Rvcih0cmlwKSB7XG4gICAgdGhpcy5pZCA9IHRyaXAuaWRcbiAgICB0aGlzLnVzZXJJRCA9IHRyaXAudXNlcklEXG4gICAgdGhpcy5kZXN0aW5hdGlvbklEID0gdHJpcC5kZXN0aW5hdGlvbklEXG4gICAgdGhpcy50cmF2ZWxlcnMgPSB0cmlwLnRyYXZlbGVyc1xuICAgIHRoaXMuZGF0ZSA9IHRyaXAuZGF0ZVxuICAgIHRoaXMuZHVyYXRpb24gPSB0cmlwLmR1cmF0aW9uXG4gICAgdGhpcy5zdGF0dXMgPSB0cmlwLnN0YXR1c1xuICAgIHRoaXMuc3VnZ2VzdGVkQWN0aXZpdGllcyA9IHRyaXAuc3VnZ2VzdGVkQWN0aXZpdGllc1xuICB9XG5cbiAgZGV0ZXJtaW5lVHJpcFN0YXR1cyhkYXlzUGFzc2VkKSB7XG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSAncGVuZGluZycpIHtcbiAgICAgIHJldHVybiAnUGVuZGluZydcblxuICAgIH0gZWxzZSBpZiAoZGF5c1Bhc3NlZCA+IDAgJiYgZGF5c1Bhc3NlZCA8PSAzMCkge1xuICAgICAgcmV0dXJuICdVcGNvbWluZydcblxuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGF5c1Bhc3NlZCkgPD0gdGhpcy5kdXJhdGlvbikge1xuICAgICAgcmV0dXJuICdQcmVzZW50J1xuICAgIH1cblxuICAgIHJldHVybiAnUHJldmlvdXMnXG4gIH1cblxuICBmb3JtYXREYXRlKCkge1xuICAgIGxldCBkYXRlUGFydHNcblxuICAgIGlmICh0aGlzLmRhdGUuaW5jbHVkZXMoJy8nKSkge1xuICAgICAgZGF0ZVBhcnRzID0gdGhpcy5kYXRlLnNwbGl0KCcvJylcblxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRlLmluY2x1ZGVzKCctJykpIHtcbiAgICAgIGRhdGVQYXJ0cyA9IHRoaXMuZGF0ZS5zcGxpdCgnLScpXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGVQYXJ0c1swXSwgZGF0ZVBhcnRzWzFdIC0gMSwgZGF0ZVBhcnRzWzJdKVxuICAgIHRoaXMuZGF0ZSA9IG5ld0RhdGUudG9EYXRlU3RyaW5nKClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyaXBcbiJdLCJzb3VyY2VSb290IjoiIn0=