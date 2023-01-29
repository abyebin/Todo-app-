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

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNew\": () => (/* binding */ addNew),\n/* harmony export */   \"displayForm\": () => (/* binding */ displayForm),\n/* harmony export */   \"todoData\": () => (/* binding */ todoData),\n/* harmony export */   \"viewData\": () => (/* binding */ viewData)\n/* harmony export */ });\n/* harmony import */ var _todayElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todayElements */ \"./src/todayElements.js\");\n\r\n\r\nconst formDiv = document.querySelector('.addNewForm');\r\nconst form = document.getElementById('projectForm');\r\n\r\nconst todoData = [];\r\n\r\nfunction Todo(title, date, text) {\r\n  this.title = title;\r\n  this.date = date;\r\n  this.text = text;\r\n}\r\n\r\nfunction closeForm() {\r\n  formDiv.setAttribute('style', 'display: none');\r\n}\r\n\r\nfunction resetForm() {\r\n  form.reset();\r\n}\r\n\r\nfunction displayForm() {\r\n  formDiv.setAttribute('style', 'display: flex');\r\n}\r\n\r\nfunction addNew() {\r\n  const title = document.getElementById('todo').value;\r\n  const data = document.getElementById('date').value;\r\n  const text = document.getElementById('text').value;\r\n\r\n  const todo1 = new Todo(title, data, text);\r\n  todoData.push(todo1);\r\n  resetForm();\r\n  closeForm();\r\n  event.preventDefault();\r\n  (0,_todayElements__WEBPACK_IMPORTED_MODULE_0__.displayToPage)()\r\n  console.log(todoData)\r\n}\r\n\r\nfunction viewData() {\r\n  console.log(todoData,\"View Data\");\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/storage.js?");

/***/ }),

/***/ "./src/todayElements.js":
/*!******************************!*\
  !*** ./src/todayElements.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayToPage\": () => (/* binding */ displayToPage)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\r\n\r\n\r\nconst main = document.querySelector('.right-main');\r\n\r\nfunction displayToPage() {\r\n  _storage__WEBPACK_IMPORTED_MODULE_0__.todoData.forEach((x) => {\r\n    \r\n    const box = document.createElement('div');\r\n    box.classList.add('box')\r\n    main.appendChild(box);\r\n\r\n    // //main > box > h1\r\n    // const title = document.createElement('h1');\r\n\r\n    // box.appendChild(title);\r\n\r\n    // //mian box > Date\r\n    // const dateBox = document.createElement('h3');\r\n    // box.appendChild(dateBox);\r\n\r\n    // //main > box > para\r\n    // const para = document.createElement('p');\r\n    // box.appendChild(para); \r\n\r\n    for(let i in x){\r\n      console.log(i,'i')\r\n      if(i === \"title\"){\r\n        const titleText = document.createElement('h1') \r\n        titleText.textContent = `${x[i]}`\r\n        box.appendChild(titleText)\r\n      }\r\n      else if(i === \"date\"){\r\n        const titleText = document.createElement('h3') \r\n        titleText.textContent = `${x[i]}`\r\n        box.appendChild(titleText)\r\n      }\r\n      else if(i === \"text\"){\r\n        const titleText = document.createElement('p') \r\n        titleText.textContent = `${x[i]}`\r\n        box.appendChild(titleText)\r\n      }\r\n    }\r\n\r\n    \r\n\r\n  });\r\n\r\n\r\n  console.log(_storage__WEBPACK_IMPORTED_MODULE_0__.todoData, 'todo Elements');\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/todayElements.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/storage.js");
/******/ 	
/******/ })()
;