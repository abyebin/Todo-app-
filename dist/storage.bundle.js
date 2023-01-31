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

/***/ "./src/newFile.js":
/*!************************!*\
  !*** ./src/newFile.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteItems\": () => (/* binding */ deleteItems),\n/* harmony export */   \"resetPage\": () => (/* binding */ resetPage)\n/* harmony export */ });\n/* harmony import */ var _todayElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todayElements */ \"./src/todayElements.js\");\n\r\n\r\n\r\nfunction resetPage(){\r\n    const storedData = JSON.parse(localStorage.getItem('todoData'))\r\n    storedData.pop()\r\n    localStorage.setItem('todoData',JSON.stringify(storedData))\r\n    const page = (document.querySelector('.right-main').innerHTML = '');\r\n    (0,_todayElements__WEBPACK_IMPORTED_MODULE_0__.displayToPage)()\r\n}\r\n\r\nfunction deleteItems(){\r\n    const storedData = JSON.parse(localStorage.getItem('todoData'))\r\n    \r\n    storedData.splice(0,1)\r\n    localStorage.setItem('todoData',JSON.stringify(storedData))\r\n    const page = (document.querySelector('.right-main').innerHTML = '');\r\n    (0,_todayElements__WEBPACK_IMPORTED_MODULE_0__.displayToPage)()\r\n}\r\n\r\n// const boxes = document.querySelector('.right-main')\r\n\r\n// boxes.addEventListener('click',(event)=>{\r\n//     if(event.target.matches('.fa-trash')){\r\n//         const parentDiv = event.target.closest('.box')\r\n//         parentDiv.remove()\r\n//     }\r\n// })\r\n\r\n\r\n// export function deleteX(){\r\n//     const deleteButton  = document.querySelector('fa-trash')\r\n//     deleteButton.addEventListener('click',function(){\r\n//         console.log(\"Hello\")\r\n//     })\r\n// }\r\n\n\n//# sourceURL=webpack://todo/./src/newFile.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNew\": () => (/* binding */ addNew),\n/* harmony export */   \"closeForm\": () => (/* binding */ closeForm),\n/* harmony export */   \"displayForm\": () => (/* binding */ displayForm),\n/* harmony export */   \"resetForm\": () => (/* binding */ resetForm),\n/* harmony export */   \"todoData\": () => (/* binding */ todoData)\n/* harmony export */ });\n/* harmony import */ var _todayElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todayElements */ \"./src/todayElements.js\");\n\nconst formDiv = document.querySelector('.addNewForm');\nconst form = document.getElementById('projectForm');\n\nlet todoData = [\n  {\n    title: 'Wash Clothes',\n    date: '2023-01-31',\n    text: 'Its the end of the month, Wash Your Cloths.',\n    priority: '10',\n  },\n  {\n    title: 'Water Plants',\n    date: '2025-01-01',\n    text: 'Different people have different opinions on when and how to water the plants, but the most appropriate time of watering the plants is in the early morning or late evening..',\n    priority: '50',\n  },\n  {\n    title: 'Sea side walk',\n    date: '2023-02-06',\n    text: 'Go for a Walk',\n    priority: '30',\n  },\n  {\n    title: \"Ebin's BirthDay\",\n    date: '2023-09-26',\n    text: \"Its Ebin's Birth Day, Remember to bring gift.\",\n    priority: '90',\n  },\n];\n\nfunction Todo(title, date, text, priority) {\n  this.title = title;\n  this.date = date;\n  this.text = text;\n  this.priority = priority;\n}\n\nfunction closeForm() {\n  formDiv.setAttribute('style', 'display: none');\n}\n\nfunction resetForm() {\n  form.reset();\n}\n\nfunction displayForm() {\n  formDiv.setAttribute('style', 'display: flex');\n}\n\nfunction addNew() {\n  const title = document.getElementById('todo').value;\n  const date = document.getElementById('date').value;\n  const text = document.getElementById('text').value;\n  const priority = document.getElementById('priority').value;\n\n  if (title.length < 1 || date.length < 1) {\n    return;\n  } else {\n    // const todo1 = new Todo(title, date, text, priority);\n    // todoData.push(todo1);\n    // localStorage.setItem('todoData',JSON.stringify(todoData))\n\n    resetForm();\n    closeForm();\n    // event.preventDefault();\n\n    const existingData = JSON.parse(localStorage.getItem('todoData')) || [];\n    todoData = [...existingData, new Todo(title, date, text, priority)];\n    localStorage.setItem('todoData', JSON.stringify(todoData));\n\n    //prevent tasks from doubiling\n    const page = (document.querySelector('.right-main').innerHTML = '');\n    (0,_todayElements__WEBPACK_IMPORTED_MODULE_0__.displayToPage)();\n    window.location.reload()\n  }\n}\n\n\n//# sourceURL=webpack://todo/./src/storage.js?");

/***/ }),

/***/ "./src/todayElements.js":
/*!******************************!*\
  !*** ./src/todayElements.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayToPage\": () => (/* binding */ displayToPage)\n/* harmony export */ });\n/* harmony import */ var _newFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newFile */ \"./src/newFile.js\");\n\n\nconst main = document.querySelector('.right-main');\n\nfunction displayToPage() {\n\n  let fromLocal = localStorage.getItem('todoData')\n  let fromLocalArr = JSON.parse(fromLocal)\n  \n  fromLocalArr.forEach((x) => {\n    const box = document.createElement('div');\n    box.classList.add('box');\n    main.appendChild(box);\n\n    const iconsDiv = document.createElement('div');\n    iconsDiv.classList.add('iconsDiv');\n    box.appendChild(iconsDiv);\n\n    const check = document.createElement('i')\n    check.classList.add('fa-regular')\n    check.classList.add('fa-square')\n    iconsDiv.appendChild(check)\n\n    const edit = document.createElement('i')\n    edit.classList.add('fa-regular')\n    edit.classList.add('fa-pen-to-square')\n    iconsDiv.appendChild(edit)\n\n    const deleteContainer = document.createElement('div')\n    deleteContainer.classList.add('deleteB')\n    deleteContainer.addEventListener('click',function(){\n      console.log(\"Helloo\")\n    })\n    iconsDiv.appendChild(deleteContainer)\n    const dlt = document.createElement('i')\n    dlt.classList.add('fa-solid')\n    dlt.classList.add('fa-trash')\n    deleteContainer.appendChild(dlt)\n\n    const titleDiv = document.createElement('div');\n    titleDiv.classList.add('titleDiv');\n    box.appendChild(titleDiv);\n\n    const dateDiv = document.createElement('div');\n    dateDiv.classList.add('dateDiv');\n    box.appendChild(dateDiv);\n\n    const noteDiv = document.createElement('div');\n    noteDiv.classList.add('noteDiv');\n    box.appendChild(noteDiv);\n\n    for (let i in x) {\n      if (i === 'title') {\n        const titleText = document.createElement('h1');\n        titleText.textContent = `${x[i]}`;\n        titleDiv.appendChild(titleText);\n      } else if (i === 'date') {\n        const titleText = document.createElement('h3');\n        titleText.textContent = `${x[i]}`;\n        dateDiv.appendChild(titleText);\n      } else if (i === 'text') {\n        const titleText = document.createElement('p');\n        titleText.textContent = `${x[i]}`;\n        noteDiv.appendChild(titleText);\n      } else if (i === 'priority') {\n        let y = parseInt(x[i]);\n\n        if (y < 20) {\n          iconsDiv.classList.add('priority');\n          iconsDiv.classList.add('low');\n        } else if (y >= 20 && y < 50) {\n          iconsDiv.classList.add('priority');\n          iconsDiv.classList.add('medium');\n        } else if (y >= 50 && y < 80) {\n          iconsDiv.classList.add('priority');\n          iconsDiv.classList.add('high');\n        } else if(y >= 80 && y <= 100){\n          iconsDiv.classList.add('priority');\n          iconsDiv.classList.add('urgent');\n        }else{\n          iconsDiv.classList.add('priority');\n          iconsDiv.classList.add('x');\n        }\n      }\n    }\n  });\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/todayElements.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/storage.js");
/******/ 	
/******/ })()
;