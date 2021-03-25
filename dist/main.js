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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_frontPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/frontPage */ \"./src/modules/frontPage.js\");\n/* harmony import */ var _modules_createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createProject */ \"./src/modules/createProject.js\");\n\r\n\r\n\r\n(0,_modules_frontPage__WEBPACK_IMPORTED_MODULE_0__.createTodo)();\r\n(0,_modules_frontPage__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();\r\n\n\n//# sourceURL=webpack://todo-odin/./src/index.js?");

/***/ }),

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject)\n/* harmony export */ });\nfunction createProject() {\r\n  frontPage.remove();\r\n\r\n  const div = document.createElement('div');\r\n  const h2 = document.createElement('h2');\r\n  const labelProjectName = document.createElement('label');\r\n  const labelDesc = document.createElement('label');\r\n  const labelCheckbox = document.createElement('label');\r\n  const form = document.createElement('form');\r\n  const inputProjectName = document.createElement('input');\r\n  const inputDesc = document.createElement('input');\r\n  const inputCheckbox = document.createElement('input');\r\n  const br = document.createElement('br');\r\n  const br1 = document.createElement('br');\r\n  const br2 = document.createElement('br');\r\n  const button = document.createElement('button');\r\n\r\n  div.id = 'createTodo';\r\n  h2.innerHTML = 'Create a new project';\r\n  inputProjectName.innerHTML = 'Project name: ';\r\n  inputDesc.innerHTML = 'Description: ';\r\n  labelCheckbox.innerHTML = 'Done (Yes/No): ';\r\n  inputCheckbox.type = 'checkbox';\r\n  button.innerHTML = 'Add';\r\n\r\n  rightBar.appendChild(div);\r\n  div.appendChild(h2);\r\n  div.appendChild(form);\r\n  form.appendChild(labelProjectName);\r\n  form.appendChild(inputProjectName);\r\n  form.appendChild(br);\r\n  form.appendChild(labelDesc);\r\n  form.appendChild(inputDesc);\r\n  form.appendChild(br2);\r\n  form.appendChild(labelCheckbox);\r\n  form.appendChild(inputCheckbox);\r\n  form.appendChild(br1);\r\n  form.appendChild(button);\r\n\r\n  return div;\r\n}\r\n\r\nlet addTodo = () => {\r\n  let projectName = document.getElementById('title').value;\r\n  let author1 = document.getElementById('author').value;\r\n  let pages1 = document.getElementById('pages').value;\r\n  let read1 = document.getElementById('read').checked;\r\n  let newBook = new Book(title1, author1, pages1, read1);\r\n  myLibrary.push(newBook);\r\n\r\n  const d = document.createElement('div');\r\n  const a = document.createElement('div');\r\n  const title = document.createElement('h3');\r\n  const author = document.createElement('p');\r\n  const pages = document.createElement('p');\r\n  const read = document.createElement('p');\r\n  const btn = document.createElement('button');\r\n  const checkbox = document.createElement('input');\r\n  let s = document.querySelector('.main');\r\n  d.classList.add('books');\r\n  checkbox.type = 'checkbox';\r\n  btn.classList.add('deleteBtn');\r\n\r\n  s.appendChild(d);\r\n  d.appendChild(title);\r\n  d.appendChild(author);\r\n  d.appendChild(pages);\r\n  d.appendChild(a);\r\n  a.appendChild(read);\r\n  a.appendChild(checkbox);\r\n  d.appendChild(btn);\r\n\r\n  a.classList.add('readStatus');\r\n  checkbox.classList.add('checked');\r\n  d.setAttribute('data-id', myLibrary.length);\r\n  title.innerHTML = 'Title: ' + title1;\r\n  author.innerHTML = 'Author: ' + author1;\r\n  pages.innerHTML = 'Pages: ' + pages1;\r\n  if (read1 == true) {\r\n    read.innerHTML = 'Read';\r\n    checkbox.checked = true;\r\n  } else {\r\n    read.innerHTML = 'Not read';\r\n  }\r\n\r\n  checkbox.addEventListener('click', (e) => {\r\n    if (e.path[1].querySelector('p').innerHTML == 'Read') {\r\n      e.path[1].querySelector('p').innerHTML = 'Not read';\r\n    } else {\r\n      e.path[1].querySelector('p').innerHTML = 'Read';\r\n    }\r\n  });\r\n\r\n  btn.innerHTML = 'Delete';\r\n  btn.addEventListener('click', (id) => {\r\n    let selector = id.path[1];\r\n    let index = id.path[1].getAttribute('data-id');\r\n    myLibrary.splice(index, 1);\r\n    selector.parentNode.removeChild(selector);\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-odin/./src/modules/createProject.js?");

/***/ }),

/***/ "./src/modules/frontPage.js":
/*!**********************************!*\
  !*** ./src/modules/frontPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo),\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects)\n/* harmony export */ });\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ \"./src/modules/createProject.js\");\n/* harmony import */ var _showTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showTodo */ \"./src/modules/showTodo.js\");\n\r\n\r\nconst Todo = (description, checked) => {\r\n  return { description, checked };\r\n};\r\n\r\nlet Chores = Todo('Take out garbage', false);\r\nlet Chores1 = Todo('Clean', true);\r\nlet todos = [Chores, Chores1];\r\n\r\nfunction displayProjects() {\r\n  const div = document.createElement('div');\r\n  projectsNames.appendChild(div);\r\n\r\n  todos.forEach((todo) => {\r\n    const h4 = document.createElement('h4');\r\n\r\n    h4.innerHTML = todo.description;\r\n    h4.onclick = function () {\r\n      (0,_showTodo__WEBPACK_IMPORTED_MODULE_1__.test)(todo.description, todo.checked);\r\n    };\r\n\r\n    div.appendChild(h4);\r\n  });\r\n\r\n  const h3 = document.createElement('h3');\r\n  h3.innerHTML = 'New Project';\r\n  h3.onclick = function () {\r\n    (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createProject)();\r\n  };\r\n\r\n  div.appendChild(h3);\r\n  return div;\r\n}\r\n\r\nfunction createTodo() {\r\n  const div = document.createElement('div');\r\n  const h1 = document.createElement('h1');\r\n  const description = document.createElement('p');\r\n  const checkbox = document.createElement('input');\r\n  const button = document.createElement('button');\r\n\r\n  div.id = 'frontPage';\r\n  h1.innerHTML = 'Welcome';\r\n  description.innerHTML = Chores.description;\r\n  checkbox.type = 'checkbox';\r\n  description.className = 'descriptionStyle';\r\n  checkbox.className = 'checkboxStyle';\r\n  button.innerHTML = 'Create new project';\r\n  button.id = 'newProjectButton';\r\n  button.addEventListener('click', _createProject__WEBPACK_IMPORTED_MODULE_0__.createProject);\r\n\r\n  div.appendChild(h1);\r\n  div.appendChild(checkbox);\r\n  div.appendChild(description);\r\n  div.appendChild(button);\r\n  rightBar.appendChild(div);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-odin/./src/modules/frontPage.js?");

/***/ }),

/***/ "./src/modules/showTodo.js":
/*!*********************************!*\
  !*** ./src/modules/showTodo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"test\": () => (/* binding */ test)\n/* harmony export */ });\nfunction test(description, checked) {\r\n  rightBar.children[0].remove();\r\n\r\n  const div = document.createElement('div');\r\n  const h1 = document.createElement('h1');\r\n  const descriptionP = document.createElement('p');\r\n  const checkbox = document.createElement('input');\r\n  //const add = document.createElement('input');\r\n\r\n  div.id = 'showTodo';\r\n  descriptionP.innerHTML = description;\r\n  checkbox.type = 'checkbox';\r\n  descriptionP.className = 'descriptionStyle';\r\n  checkbox.className = 'checkboxStyle';\r\n\r\n  div.appendChild(h1);\r\n  div.appendChild(checkbox);\r\n  div.appendChild(descriptionP);\r\n  rightBar.appendChild(div);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-odin/./src/modules/showTodo.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;