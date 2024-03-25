/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/analytics/search.js":
/*!*********************************!*\
  !*** ./src/analytics/search.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// import {setTimeout} from 'timers/promises';\r\n// import products from '../data/products.js';\r\n\r\n// const {setTimeout} = require('awaitable-timers');\r\nconst products = __webpack_require__(/*! ../data/products */ \"./src/data/products.js\");\r\n\r\nconst filterProductsAsync = async() => {\r\n    // await setTimeout(1000);\r\n    if(products) {\r\n      return products.filter(p => p.price >= 75000);\r\n    }\r\n}\r\n\r\nmodule.exports = filterProductsAsync;\n\n//# sourceURL=webpack://es2015webpack/./src/analytics/search.js?");

/***/ }),

/***/ "./src/data/products.js":
/*!******************************!*\
  !*** ./src/data/products.js ***!
  \******************************/
/***/ ((module) => {

eval("const products = [\r\n    {\r\n      id : 3,\r\n      name : 'Iphone15',\r\n      price : 85456.5\r\n   },{\r\n      id : 4,\r\n      name : \"OnePlusR\",\r\n      price : 180829.9\r\n   },{\r\n      id : 1,\r\n      name : \"Samsung S24\",\r\n      price : 70000.23\r\n   }\r\n]\r\nmodule.exports = products\n\n//# sourceURL=webpack://es2015webpack/./src/data/products.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// import products from \"./data/products.js\"\r\n// import filterProductsAsync from \"./analytics/search.js\"\r\nconst products = __webpack_require__(/*! ./data/products */ \"./src/data/products.js\");\r\nconst filterProductsAsync = __webpack_require__(/*! ./analytics/search */ \"./src/analytics/search.js\");\r\n\r\nconst main = async() => {\r\n  const result = await filterProductsAsync();\r\n  console.log(result);\r\n}\r\n\r\nmain()\r\nconsole.log('outside main')\n\n//# sourceURL=webpack://es2015webpack/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;