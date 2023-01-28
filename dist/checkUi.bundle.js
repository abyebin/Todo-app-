/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/checkUi.js":
/*!************************!*\
  !*** ./src/checkUi.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isEmpty)\n/* harmony export */ });\n/* harmony import */ var _todayElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todayElements */ \"./src/todayElements.js\");\nconst main = document.querySelector('.right-main')\r\n;\r\n\r\nfunction isEmpty(){\r\n        main.textContent = ''\r\n        ;(0,_todayElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n}\n\n//# sourceURL=webpack://todo/./src/checkUi.js?");

/***/ }),

/***/ "./src/todayElements.js":
/*!******************************!*\
  !*** ./src/todayElements.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ todaysTodo)\n/* harmony export */ });\nconst main = document.querySelector('.right-main');\r\nfunction todaysTodo() {\r\n  const box = document.createElement('div');\r\n  box.classList.add('box');\r\n  main.appendChild(box);\r\n\r\n  //main > box > h1\r\n  const title = document.createElement('h1');\r\n  title.textContent = 'Text Temp Title';\r\n  box.appendChild(title);\r\n\r\n  //mian box > Date\r\n  const dateBox = document.createElement('h3');\r\n  dateBox.textContent = '28/01/2023';\r\n  box.appendChild(dateBox);\r\n\r\n  //main > box > para\r\n  const para = document.createElement('p');\r\n  para.textContent =\r\n    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime numquam recusandae eveniet, ipsam minima ex fugit doloremque ratione consectetur est?';\r\n  box.appendChild(para);\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/todayElements.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/checkUi.js");
/******/ 	
/******/ })()
;