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

/***/ "./src/todayElements.js":
/*!******************************!*\
  !*** ./src/todayElements.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayToPage\": () => (/* binding */ displayToPage)\n/* harmony export */ });\n\nconst submitButton = document.getElementById('submitForm');\n\nconst main = document.querySelector('.right-main');\n\nfunction displayToPage() {\n\n  let fromLocal = localStorage.getItem('todoData')\n  let fromLocalArr = JSON.parse(fromLocal)\n  \n  fromLocalArr.forEach((x) => {\n    const box = document.createElement('div');\n    box.classList.add('box');\n    main.appendChild(box);\n\n    const iconsDiv = document.createElement('div');\n    iconsDiv.classList.add('iconsDiv');\n    box.appendChild(iconsDiv);\n\n    const check = document.createElement('i')\n    check.classList.add('fa-regular')\n    check.classList.add('fa-square')\n    iconsDiv.appendChild(check)\n\n    const edit = document.createElement('i')\n    edit.classList.add('fa-regular')\n    edit.classList.add('fa-pen-to-square')\n    iconsDiv.appendChild(edit)\n\n    const dlt = document.createElement('i')\n    dlt.classList.add('fa-solid')\n    dlt.classList.add('fa-trash')\n    iconsDiv.appendChild(dlt)\n\n    const titleDiv = document.createElement('div');\n    titleDiv.classList.add('titleDiv');\n    box.appendChild(titleDiv);\n\n    const dateDiv = document.createElement('div');\n    dateDiv.classList.add('dateDiv');\n    box.appendChild(dateDiv);\n\n    const noteDiv = document.createElement('div');\n    noteDiv.classList.add('noteDiv');\n    box.appendChild(noteDiv);\n\n    for (let i in x) {\n      if (i === 'title') {\n        const titleText = document.createElement('h1');\n        titleText.textContent = `${x[i]}`;\n        titleDiv.appendChild(titleText);\n      } else if (i === 'date') {\n        const titleText = document.createElement('h3');\n        titleText.textContent = `${x[i]}`;\n        dateDiv.appendChild(titleText);\n      } else if (i === 'text') {\n        const titleText = document.createElement('p');\n        titleText.textContent = `${x[i]}`;\n        noteDiv.appendChild(titleText);\n      } else if (i === 'priority') {\n        let y = parseInt(x[i]);\n\n        if (y < 20) {\n          iconsDiv.classList.add('priority');\n          iconsDiv.classList.add('low');\n        } else if (y >= 20 && y < 50) {\n          iconsDiv.classList.add('priority');\n          iconsDiv.classList.add('medium');\n        } else if (y >= 50 && y < 80) {\n          iconsDiv.classList.add('priority');\n          iconsDiv.classList.add('high');\n        } else if(y >= 80 && y <= 100){\n          iconsDiv.classList.add('priority');\n          iconsDiv.classList.add('urgent');\n        }else{\n          iconsDiv.classList.add('priority');\n          iconsDiv.classList.add('x');\n        }\n      }\n    }\n  });\n}\n\n\n//# sourceURL=webpack://todo/./src/todayElements.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/todayElements.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;