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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Todo\": () => (/* binding */ Todo),\n/* harmony export */   \"todos\": () => (/* binding */ todos),\n/* harmony export */   \"Programming\": () => (/* binding */ Programming),\n/* harmony export */   \"projects\": () => (/* binding */ projects),\n/* harmony export */   \"Chores\": () => (/* binding */ Chores),\n/* harmony export */   \"Chores1\": () => (/* binding */ Chores1),\n/* harmony export */   \"Chores2\": () => (/* binding */ Chores2)\n/* harmony export */ });\n/* harmony import */ var _modules_frontPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/frontPage */ \"./src/modules/frontPage.js\");\n/* harmony import */ var _modules_showTodoFrontPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showTodoFrontPage */ \"./src/modules/showTodoFrontPage.js\");\n\r\n\r\n\r\nconst Project = (projectName, todoList) => {\r\n  return { projectName, todoList };\r\n};\r\n\r\nconst Todo = (description, checked) => {\r\n  return { description, checked };\r\n};\r\n\r\nlet Chores = Todo('Finish todo website', false);\r\nlet Chores1 = Todo('Read a book', false);\r\nlet Chores2 = Todo('Push to github', false);\r\n\r\nlet todos = [Chores, Chores1, Chores2];\r\n//let todos2 = [Chores, Chores1, Chores2];\r\n//let multipleTodos = [todos, todos2];\r\nlet Programming = Project('Today', todos);\r\n\r\nlet projects = [Programming];\r\n\r\n(0,_modules_frontPage__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();\r\n(0,_modules_showTodoFrontPage__WEBPACK_IMPORTED_MODULE_1__.displayTodoFrontPage)();\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-odin/./src/index.js?");

/***/ }),

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"addTodos\": () => (/* binding */ addTodos),\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _frontPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frontPage */ \"./src/modules/frontPage.js\");\n\r\n\r\n\r\nfunction createProject() {\r\n  rightBar.children[0].remove();\r\n  console.log(_index__WEBPACK_IMPORTED_MODULE_0__.projects);\r\n  const div = document.createElement('div');\r\n  const h2 = document.createElement('h2');\r\n  const labelProjectName = document.createElement('label');\r\n  const form = document.createElement('form');\r\n  const inputProjectName = document.createElement('input');\r\n  const br = document.createElement('br');\r\n  const button = document.createElement('button');\r\n\r\n  div.id = 'createTodo';\r\n  h2.innerHTML = 'Create a new project';\r\n  inputProjectName.id = 'inputProjectName';\r\n  labelProjectName.innerHTML = 'Project name: ';\r\n  button.id = 'create';\r\n  button.innerHTML = 'Create';\r\n  button.addEventListener('click', createTodo);\r\n\r\n  rightBar.appendChild(div);\r\n  div.appendChild(h2);\r\n  div.appendChild(form);\r\n  form.appendChild(labelProjectName);\r\n  form.appendChild(inputProjectName);\r\n  form.appendChild(br);\r\n  form.appendChild(button);\r\n\r\n  return div;\r\n}\r\n\r\nfunction createTodo() {\r\n  //Prevents default since there is a form, and therefore the page get's refreshed\r\n  //Remove form?\r\n  event.preventDefault();\r\n  let projectName = document.getElementById('inputProjectName').value;\r\n  let newProject = (0,_index__WEBPACK_IMPORTED_MODULE_0__.Project)(projectName, []);\r\n  _index__WEBPACK_IMPORTED_MODULE_0__.projects.push(newProject);\r\n  console.log(_index__WEBPACK_IMPORTED_MODULE_0__.projects);\r\n\r\n  (0,_frontPage__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();\r\n  rightBar.children[0].remove();\r\n\r\n  const div = document.createElement('div');\r\n  const div2 = document.createElement('div');\r\n  const h2 = document.createElement('h2');\r\n  const p = document.createElement('p');\r\n  const p2 = document.createElement('p');\r\n  const labelDesc = document.createElement('label');\r\n  const inputDesc = document.createElement('input');\r\n  const br = document.createElement('br');\r\n  const br2 = document.createElement('br');\r\n  const button = document.createElement('button');\r\n\r\n  div.id = 'newTodo';\r\n  div2.id = 'displayTodos';\r\n  h2.innerHTML = projectName;\r\n  p2.innerHTML = 'Add new todos:';\r\n  inputDesc.id = 'inputDesc';\r\n  labelDesc.innerHTML = 'Description: ';\r\n  button.id = 'addBtn';\r\n  button.innerHTML = '+';\r\n  button.addEventListener('click', addTodos);\r\n\r\n  rightBar.appendChild(div);\r\n  div.appendChild(div2);\r\n  div2.appendChild(h2);\r\n  div.appendChild(p2);\r\n  div.appendChild(labelDesc);\r\n  div.appendChild(inputDesc);\r\n  div.appendChild(br);\r\n  div.appendChild(br2);\r\n  div.appendChild(button);\r\n}\r\nlet n = 0;\r\nfunction addTodos() {\r\n  const divTodo = document.createElement('div');\r\n  let p = document.createElement('p');\r\n  let checkbox = document.createElement('input');\r\n  let erase = document.createElement('button');\r\n\r\n  divTodo.id = inputDesc.value;\r\n  divTodo.className = 'todoID';\r\n  divTodo.setAttribute('data-id', inputDesc.value);\r\n  divTodo.setAttribute('data-id', n);\r\n  n += 1;\r\n  checkbox.classList.add('checkbox');\r\n  checkbox.type = 'checkbox';\r\n  p.innerHTML = inputDesc.value;\r\n  p.classList.add('descriptionStyle');\r\n  erase.innerHTML = 'X';\r\n  erase.id = 'eraseBtn';\r\n  erase.addEventListener('click', deleteTodo);\r\n\r\n  checkbox.addEventListener('click', function (e) {\r\n    if (e.srcElement.checked == true) {\r\n      p.classList.remove('unfinished');\r\n      p.classList.add('completed');\r\n    } else {\r\n      p.classList.remove('completed');\r\n      p.classList.add('unfinished');\r\n    }\r\n  });\r\n\r\n  displayTodos.appendChild(divTodo);\r\n  divTodo.appendChild(checkbox);\r\n  divTodo.appendChild(p);\r\n  divTodo.appendChild(erase);\r\n\r\n  let newTodo = (0,_index__WEBPACK_IMPORTED_MODULE_0__.Todo)(inputDesc.value, false);\r\n  _index__WEBPACK_IMPORTED_MODULE_0__.projects[_index__WEBPACK_IMPORTED_MODULE_0__.projects.length - 1].todoList.push(newTodo);\r\n  console.log(_index__WEBPACK_IMPORTED_MODULE_0__.projects);\r\n}\r\n\r\nfunction deleteTodo(e) {\r\n  //Try and find another way to select clicked event.\r\n  e.path[1].parentNode.removeChild(e.path[1]);\r\n\r\n  //Find the index of the clicked todo\r\n  let pos = _index__WEBPACK_IMPORTED_MODULE_0__.todos.map(function (e) {\r\n      return e.description;\r\n    })\r\n    .indexOf(e.path[1].getAttribute('data-id'));\r\n  //Removes the clicked todo from array\r\n  if (pos > -1) {\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.todos.splice(pos, 1);\r\n  }\r\n  console.log(_index__WEBPACK_IMPORTED_MODULE_0__.projects);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-odin/./src/modules/createProject.js?");

/***/ }),

/***/ "./src/modules/editTodo.js":
/*!*********************************!*\
  !*** ./src/modules/editTodo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editTodo\": () => (/* binding */ editTodo),\n/* harmony export */   \"editDescription\": () => (/* binding */ editDescription)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\r\n\r\nfunction editDescription(todo, description) {\r\n  console.log(todo);\r\n  console.log(todo);\r\n}\r\n\r\nfunction editTodo(todo) {\r\n  let duplicate = document.getElementById('editField');\r\n  let editDivCheck = document.getElementById('editField');\r\n\r\n  if (duplicate) {\r\n    if (editDivCheck) {\r\n      editField.remove();\r\n    }\r\n  } else {\r\n    if (!duplicate) {\r\n      let newDiv = document.createElement('div');\r\n      let br = document.createElement('br');\r\n      let editField = document.createElement('input');\r\n      let submitBtn = document.createElement('button');\r\n      let editDiv = document.getElementById(todo.description);\r\n\r\n      newDiv.id = 'editField';\r\n      editField.id = 'editInput';\r\n      submitBtn.id = 'submitBtn';\r\n      submitBtn.innerHTML = '+';\r\n\r\n      submitBtn.addEventListener('click', function () {\r\n        event.path[2].children[1].innerHTML = editInput.value;\r\n        todo.description = editInput.value;\r\n        console.log(todo);\r\n        console.log(_index__WEBPACK_IMPORTED_MODULE_0__.projects[0]);\r\n      });\r\n\r\n      editDiv.appendChild(br);\r\n      editDiv.appendChild(newDiv);\r\n      newDiv.appendChild(editField);\r\n      newDiv.appendChild(submitBtn);\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-odin/./src/modules/editTodo.js?");

/***/ }),

/***/ "./src/modules/frontPage.js":
/*!**********************************!*\
  !*** ./src/modules/frontPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ \"./src/modules/createProject.js\");\n/* harmony import */ var _showTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showTodo */ \"./src/modules/showTodo.js\");\n\r\n\r\n\r\n\r\nfunction displayProjects() {\r\n  leftBar.children[0].remove();\r\n  const div = document.createElement('div');\r\n  leftBar.appendChild(div);\r\n\r\n  div.id = 'projectContainer';\r\n  let h41 = document.createElement('h4');\r\n  h41.innerHTML = 'Projects:';\r\n  div.appendChild(h41);\r\n  let n = 0;\r\n  _index__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {\r\n    const h4 = document.createElement('h4');\r\n    h4.id = n;\r\n    h4.innerHTML = project.projectName;\r\n    h4.onclick = function () {\r\n      (0,_showTodo__WEBPACK_IMPORTED_MODULE_2__.displayTodo)(_index__WEBPACK_IMPORTED_MODULE_0__.todos.description, _index__WEBPACK_IMPORTED_MODULE_0__.todos.checked);\r\n    };\r\n\r\n    div.appendChild(h4);\r\n    n += 1;\r\n  });\r\n\r\n  const h3 = document.createElement('h3');\r\n  h3.innerHTML = 'New Project';\r\n  h3.onclick = function () {\r\n    (0,_createProject__WEBPACK_IMPORTED_MODULE_1__.createProject)();\r\n  };\r\n\r\n  div.appendChild(h3);\r\n  return div;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-odin/./src/modules/frontPage.js?");

/***/ }),

/***/ "./src/modules/showTodo.js":
/*!*********************************!*\
  !*** ./src/modules/showTodo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTodo\": () => (/* binding */ displayTodo)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ \"./src/modules/createProject.js\");\n\r\n\r\n\r\nfunction displayTodo() {\r\n  rightBar.children[0].remove();\r\n\r\n  const div = document.createElement('div');\r\n  const div2 = document.createElement('div');\r\n  const h1 = document.createElement('h1');\r\n  const labelDesc = document.createElement('label');\r\n  const inputDesc = document.createElement('input');\r\n  const button = document.createElement('button');\r\n\r\n  div.id = 'newTodo';\r\n  div2.id = 'displayTodos';\r\n  h1.innerHTML = event.target.innerHTML;\r\n  inputDesc.id = 'inputDesc';\r\n  labelDesc.innerHTML = 'Description: ';\r\n  button.id = 'addBtn';\r\n  button.innerHTML = '+';\r\n  button.addEventListener('click', _createProject__WEBPACK_IMPORTED_MODULE_1__.addTodos);\r\n\r\n  div.appendChild(h1);\r\n\r\n  console.log(_index__WEBPACK_IMPORTED_MODULE_0__.projects[event.path[0].id]);\r\n  _index__WEBPACK_IMPORTED_MODULE_0__.projects[event.path[0].id].todoList.forEach((todo) => {\r\n    const divTodo = document.createElement('div');\r\n    const p = document.createElement('p');\r\n    const checkbox = document.createElement('input');\r\n    let erase = document.createElement('button');\r\n    const br = document.createElement('br');\r\n\r\n    divTodo.id = todo.description;\r\n    divTodo.className = 'todoID';\r\n    divTodo.setAttribute('data-id', inputDesc.value);\r\n    p.innerHTML = todo.description;\r\n    erase.innerHTML = 'X';\r\n    erase.id = 'eraseBtn';\r\n    erase.addEventListener('click', _createProject__WEBPACK_IMPORTED_MODULE_1__.deleteTodo);\r\n\r\n    checkbox.type = 'checkbox';\r\n    p.className = 'descriptionStyle';\r\n    checkbox.className = 'checkbox';\r\n\r\n    checkbox.addEventListener('click', function (e) {\r\n      if (e.srcElement.checked == true) {\r\n        p.classList.remove('unfinished');\r\n        p.classList.add('completed');\r\n      } else {\r\n        p.classList.remove('completed');\r\n        p.classList.add('unfinished');\r\n      }\r\n    });\r\n    divTodo.appendChild(checkbox);\r\n    divTodo.appendChild(p);\r\n    divTodo.appendChild(erase);\r\n    divTodo.appendChild(br);\r\n    div.appendChild(divTodo);\r\n    div.appendChild(div2);\r\n  });\r\n\r\n  div.appendChild(labelDesc);\r\n  div.appendChild(inputDesc);\r\n  div.appendChild(button);\r\n\r\n  rightBar.appendChild(div);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-odin/./src/modules/showTodo.js?");

/***/ }),

/***/ "./src/modules/showTodoFrontPage.js":
/*!******************************************!*\
  !*** ./src/modules/showTodoFrontPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTodoFrontPage\": () => (/* binding */ displayTodoFrontPage)\n/* harmony export */ });\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ \"./src/modules/createProject.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _editTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editTodo */ \"./src/modules/editTodo.js\");\n\r\n\r\n\r\n\r\nfunction displayTodoFrontPage() {\r\n  const div = document.createElement('div');\r\n  const h1 = document.createElement('h1');\r\n  const div2 = document.createElement('div');\r\n  const labelDesc = document.createElement('label');\r\n\r\n  div.id = 'newTodo';\r\n  div2.id = 'displayTodos';\r\n  h1.innerHTML = _index__WEBPACK_IMPORTED_MODULE_1__.Programming.projectName;\r\n\r\n  div.appendChild(h1);\r\n\r\n  _index__WEBPACK_IMPORTED_MODULE_1__.todos.forEach((todo) => {\r\n    const divTodo = document.createElement('div');\r\n    const p = document.createElement('p');\r\n    const inputCheckbox = document.createElement('input');\r\n    const br = document.createElement('br');\r\n    const erase = document.createElement('button');\r\n    const edit = document.createElement('button');\r\n\r\n    divTodo.id = todo.description;\r\n    divTodo.className = 'todoID';\r\n    divTodo.setAttribute('data-id', todo.description);\r\n    p.innerHTML = todo.description;\r\n    inputCheckbox.type = 'checkbox';\r\n    p.className = 'descriptionStyle';\r\n    inputCheckbox.id = 'inputCheckbox';\r\n    erase.innerHTML = 'X';\r\n    edit.innerHTML = 'Edit';\r\n    erase.id = 'eraseBtn';\r\n    edit.id = 'editBtn';\r\n    erase.onclick = _createProject__WEBPACK_IMPORTED_MODULE_0__.deleteTodo;\r\n    edit.addEventListener('click', function () {\r\n      (0,_editTodo__WEBPACK_IMPORTED_MODULE_2__.editTodo)(todo);\r\n    });\r\n\r\n    if (inputCheckbox.checked == true) {\r\n      checkbox.checked = true;\r\n      p.classList.add('completed');\r\n    }\r\n\r\n    inputCheckbox.addEventListener('click', function (e) {\r\n      if (e.srcElement.checked == true) {\r\n        p.classList.remove('unfinished');\r\n        p.classList.add('completed');\r\n      } else {\r\n        p.classList.remove('completed');\r\n        p.classList.add('unfinished');\r\n      }\r\n    });\r\n\r\n    divTodo.appendChild(inputCheckbox);\r\n    divTodo.appendChild(p);\r\n    divTodo.appendChild(br);\r\n    divTodo.appendChild(erase);\r\n    divTodo.appendChild(edit);\r\n    div.appendChild(divTodo);\r\n    div.appendChild(div2);\r\n  });\r\n\r\n  const inputDesc = document.createElement('input');\r\n  const button = document.createElement('button');\r\n\r\n  button.id = 'addBtn';\r\n  button.innerHTML = '+';\r\n  button.addEventListener('click', _createProject__WEBPACK_IMPORTED_MODULE_0__.addTodos);\r\n  inputDesc.id = 'inputDesc';\r\n  labelDesc.innerHTML = 'Description: ';\r\n\r\n  rightBar.appendChild(div);\r\n  div.appendChild(labelDesc);\r\n  div.appendChild(inputDesc);\r\n\r\n  div.appendChild(button);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-odin/./src/modules/showTodoFrontPage.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;