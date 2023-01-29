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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNew\": () => (/* binding */ addNew),\n/* harmony export */   \"closeForm\": () => (/* binding */ closeForm),\n/* harmony export */   \"displayForm\": () => (/* binding */ displayForm),\n/* harmony export */   \"resetForm\": () => (/* binding */ resetForm),\n/* harmony export */   \"todoData\": () => (/* binding */ todoData)\n/* harmony export */ });\n/* harmony import */ var _todayElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todayElements */ \"./src/todayElements.js\");\n\r\nconst formDiv = document.querySelector('.addNewForm');\r\nconst form = document.getElementById('projectForm');\r\n\r\nconst todoData = [\r\n  {\r\n    title: 'Wash Clothes',\r\n    date: '2023-01-31',\r\n    text: 'Its the end of the month, Wash Your Cloths.',\r\n    priority: '10',\r\n  },\r\n  {\r\n    title: 'Water Plants',\r\n    date: '2025-01-01',\r\n    text: 'Different people have different opinions on when and how to water the plants, but the most appropriate time of watering the plants is in the early morning or late evening..',\r\n    priority: '50',\r\n  },\r\n  {\r\n    title: 'Sea side walk',\r\n    date: '2023-02-06',\r\n    text: 'Go for a Walk',\r\n    priority: '30',\r\n  },\r\n  {\r\n    title: \"Ebin's BirthDay\",\r\n    date: '2023-09-26',\r\n    text: \"Its Ebin's Birth Day, Remember to bring gift.\",\r\n    priority: '90',\r\n  },\r\n];\r\n\r\nfunction Todo(title, date, text, priority) {\r\n  this.title = title;\r\n  this.date = date;\r\n  this.text = text;\r\n  this.priority = priority;\r\n}\r\n\r\nfunction closeForm() {\r\n  formDiv.setAttribute('style', 'display: none');\r\n}\r\n\r\nfunction resetForm() {\r\n  form.reset();\r\n}\r\n\r\nfunction displayForm() {\r\n  formDiv.setAttribute('style', 'display: flex');\r\n}\r\n\r\nfunction addNew() {\r\n  const title = document.getElementById('todo').value;\r\n  const date = document.getElementById('date').value;\r\n  const text = document.getElementById('text').value;\r\n  const priority = document.getElementById('priority').value;\r\n\r\n  if (title.length < 1 || date.length < 1) {\r\n    return;\r\n  } else {\r\n    const todo1 = new Todo(title, date, text, priority);\r\n    todoData.push(todo1);\r\n\r\n    resetForm();\r\n    closeForm();\r\n    event.preventDefault();\r\n    \r\n    //prevent tasks from doubiling\r\n    const page = (document.querySelector('.right-main').innerHTML = '');\r\n    (0,_todayElements__WEBPACK_IMPORTED_MODULE_0__.displayToPage)();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/storage.js?");

/***/ }),

/***/ "./src/todayElements.js":
/*!******************************!*\
  !*** ./src/todayElements.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayToPage\": () => (/* binding */ displayToPage)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\r\n\r\nconst main = document.querySelector('.right-main');\r\n\r\nfunction displayToPage() {\r\n  console.log(_storage__WEBPACK_IMPORTED_MODULE_0__.todoData);\r\n  _storage__WEBPACK_IMPORTED_MODULE_0__.todoData.forEach((x) => {\r\n    const box = document.createElement('div');\r\n    box.classList.add('box');\r\n    main.appendChild(box);\r\n\r\n    const iconsDiv = document.createElement('div');\r\n    iconsDiv.classList.add('iconsDiv');\r\n    box.appendChild(iconsDiv);\r\n\r\n    const check = document.createElement('i')\r\n    check.classList.add('fa-regular')\r\n    check.classList.add('fa-square')\r\n    iconsDiv.appendChild(check)\r\n\r\n    const edit = document.createElement('i')\r\n    edit.classList.add('fa-regular')\r\n    edit.classList.add('fa-pen-to-square')\r\n    iconsDiv.appendChild(edit)\r\n\r\n    const dlt = document.createElement('i')\r\n    dlt.classList.add('fa-solid')\r\n    dlt.classList.add('fa-trash')\r\n    iconsDiv.appendChild(dlt)\r\n\r\n    const titleDiv = document.createElement('div');\r\n    titleDiv.classList.add('titleDiv');\r\n    box.appendChild(titleDiv);\r\n\r\n    const dateDiv = document.createElement('div');\r\n    dateDiv.classList.add('dateDiv');\r\n    box.appendChild(dateDiv);\r\n\r\n    const noteDiv = document.createElement('div');\r\n    noteDiv.classList.add('noteDiv');\r\n    box.appendChild(noteDiv);\r\n\r\n    for (let i in x) {\r\n      console.log(x)\r\n      if (i === 'title') {\r\n        const titleText = document.createElement('h1');\r\n        titleText.textContent = `${x[i]}`;\r\n        titleDiv.appendChild(titleText);\r\n      } else if (i === 'date') {\r\n        const titleText = document.createElement('h3');\r\n        titleText.textContent = `${x[i]}`;\r\n        dateDiv.appendChild(titleText);\r\n      } else if (i === 'text') {\r\n        const titleText = document.createElement('p');\r\n        titleText.textContent = `${x[i]}`;\r\n        noteDiv.appendChild(titleText);\r\n      } else if (i === 'priority') {\r\n        let y = parseInt(x[i]);\r\n\r\n        const priorityx = document.createElement('h3');\r\n        if (y < 20) {\r\n          iconsDiv.classList.add('priority');\r\n          iconsDiv.classList.add('low');\r\n        } else if (y >= 20 && y < 50) {\r\n          iconsDiv.classList.add('priority');\r\n          iconsDiv.classList.add('medium');\r\n        } else if (y >= 50 && y < 80) {\r\n          iconsDiv.classList.add('priority');\r\n          iconsDiv.classList.add('high');\r\n        } else {\r\n          iconsDiv.classList.add('priority');\r\n          iconsDiv.classList.add('urgent');\r\n        }\r\n      }\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/todayElements.js?");

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