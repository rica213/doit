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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #c5c5c5;\\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\\n}\\n\\nmain {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  margin: 0 auto;\\n  -webkit-box-shadow: 8px 10px 5px 0 rgba(237, 236, 236, 0.75);\\n  -moz-box-shadow: 8px 10px 5px 0 rgba(237, 236, 236, 0.75);\\n  box-shadow: 8px 10px 5px 0 rgba(237, 236, 236, 0.75);\\n  padding: 1rem 0;\\n  background-color: #fff;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  main {\\n    width: 50%;\\n    margin-top: 10%;\\n  }\\n}\\n\\n.title {\\n  border-bottom: 1px solid #c5c5c5;\\n  width: 100%;\\n  color: gray;\\n  padding-left: 0.25rem;\\n}\\n\\n.new-task-container {\\n  position: relative;\\n  width: 100%;\\n  margin: 0 auto;\\n  border-bottom: 1px solid #c5c5c5;\\n}\\n\\n#new-task {\\n  padding: 1rem 0;\\n  padding-left: 0.25rem;\\n  font-size: medium;\\n  font-style: italic;\\n  width: 99%;\\n  border: none;\\n}\\n\\n.fa-arrow-right {\\n  position: absolute;\\n  top: 35%;\\n  right: 0;\\n  color: #c5c5c5;\\n  padding-right: 1rem;\\n}\\n\\n.description {\\n  flex-grow: 7;\\n}\\n\\n.fa-ellipsis-v {\\n  align-self: center;\\n  padding-right: 1rem;\\n  flex-grow: 2;\\n  text-align: right;\\n}\\n\\n.fa-trash {\\n  align-self: center;\\n  padding-right: 1rem;\\n  flex-grow: 2;\\n  text-align: right;\\n}\\n\\n.list-tasks {\\n  padding: 0;\\n  width: 100%;\\n}\\n\\n.list-tasks li {\\n  display: flex;\\n  list-style: none;\\n  border-bottom: 1px solid #c5c5c5;\\n}\\n\\n.clear-tasks {\\n  width: 100%;\\n  padding: 1rem;\\n  margin: 0;\\n  font-size: 1.25rem;\\n  color: gray;\\n  border: none;\\n}\\n\\n.clear-tasks:hover {\\n  filter: contrast(0.5);\\n  color: #000;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tasks.js */ \"./src/modules/tasks.js\");\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/add.js */ \"./src/modules/add.js\");\n/* harmony import */ var _modules_taskElements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/taskElements.js */ \"./src/modules/taskElements.js\");\n/* harmony import */ var _modules_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/localeStorage.js */ \"./src/modules/localeStorage.js\");\n\n\n\n\n\n\n// add new task\n\n_modules_taskElements_js__WEBPACK_IMPORTED_MODULE_3__.newTask.addEventListener('keypress', (e) => {\n  if (e.key === 'Enter') {\n    if (_modules_taskElements_js__WEBPACK_IMPORTED_MODULE_3__.newTask.value === '') {\n      e.preventDefault();\n    } else {\n      const task = (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e);\n      _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].add(task);\n      _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n      (0,_modules_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.save)();\n      _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].display();\n    }\n  }\n});\n\n_modules_taskElements_js__WEBPACK_IMPORTED_MODULE_3__.addBtn.addEventListener('click', (e) => {\n  if (_modules_taskElements_js__WEBPACK_IMPORTED_MODULE_3__.newTask.value === '') {\n    e.preventDefault();\n  } else {\n    const task = (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e);\n    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].add(task);\n    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n    (0,_modules_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.save)();\n    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].display();\n  }\n});\n\n_modules_taskElements_js__WEBPACK_IMPORTED_MODULE_3__.tasksContainer.addEventListener('keypress', (e) => {\n  if (e.target.className === 'description' && e.key === 'Enter') {\n    if (e.target.textContent) {\n      e.preventDefault();\n      _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update(e.target.textContent, e.target.parentElement.id);\n      (0,_modules_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.save)();\n    } else {\n      e.preventDefault();\n    }\n  }\n});\n\n_modules_taskElements_js__WEBPACK_IMPORTED_MODULE_3__.tasksContainer.addEventListener('change', (e) => {\n  let desc = _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tasks[e.target.parentElement.id].description; // not striked\n  if (e.target.type === 'checkbox') {\n    if (e.target.checked) {\n      _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tasks[e.target.parentElement.id].completed = true;\n      e.target.nextElementSibling.innerHTML = `<strike>${desc}</strike>`;\n      _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tasks[e.target.parentElement.id].description = `<strike>${desc}</strike>`;\n      (0,_modules_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.save)();\n    } else {\n      _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tasks[e.target.parentElement.id].completed = false;\n      desc = e.target.nextElementSibling.innerHTML.replaceAll(/(<strike>|<\\/strike>)/g, '');\n      e.target.nextElementSibling.innerHTML = desc;\n      _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tasks[e.target.parentElement.id].description = desc;\n      (0,_modules_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.save)();\n    }\n  } else {\n    e.preventDefault();\n  }\n});\n\nwindow.addEventListener('load', () => {\n  (0,_modules_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.retrieve)();\n  _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].display();\n});\n\n_modules_taskElements_js__WEBPACK_IMPORTED_MODULE_3__.clearTasksBtn.addEventListener('click', () => {\n  _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteAllCompleted();\n  _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateIndex();\n  (0,_modules_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.save)();\n  _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].display();\n});\n\n_modules_taskElements_js__WEBPACK_IMPORTED_MODULE_3__.tasksContainer.addEventListener('click', (e) => {\n  if (e.target.className === 'fa fa-ellipsis-v') {\n    e.target.className = 'fa-solid fa-trash';\n  } else if (e.target.className === 'fa-solid fa-trash') {\n    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"delete\"](e.target.parentElement.id);\n    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateIndex();\n    (0,_modules_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.save)();\n    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].display();\n  } else if (e.target.className === 'description') {\n    e.preventDefault();\n  }\n});\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n/* harmony import */ var _taskElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskElements.js */ \"./src/modules/taskElements.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ \"./src/modules/tasks.js\");\n\n\n\n\nconst add = (event) => {\n  const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_taskElements_js__WEBPACK_IMPORTED_MODULE_1__.newTask.value, false, _tasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tasks.length + 1);\n  if (_taskElements_js__WEBPACK_IMPORTED_MODULE_1__.newTask.value === '') {\n    event.preventDefault();\n  } else {\n    _taskElements_js__WEBPACK_IMPORTED_MODULE_1__.newTask.value = '';\n  }\n  return task;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (add);\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/localeStorage.js":
/*!**************************************!*\
  !*** ./src/modules/localeStorage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"retrieve\": () => (/* binding */ retrieve),\n/* harmony export */   \"save\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ \"./src/modules/tasks.js\");\n\n\nconst save = () => {\n  localStorage.setItem('tasks', JSON.stringify(_tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks));\n};\n\nconst retrieve = () => {\n  const retrievedTasks = JSON.parse(localStorage.getItem('tasks'));\n  if (retrievedTasks === null) {\n    return;\n  }\n  retrievedTasks.forEach((task) => {\n    _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(task);\n  });\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/localeStorage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(description, completed, index) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/taskElements.js":
/*!*************************************!*\
  !*** ./src/modules/taskElements.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addBtn\": () => (/* binding */ addBtn),\n/* harmony export */   \"clearTasksBtn\": () => (/* binding */ clearTasksBtn),\n/* harmony export */   \"newTask\": () => (/* binding */ newTask),\n/* harmony export */   \"tasksContainer\": () => (/* binding */ tasksContainer)\n/* harmony export */ });\nconst addBtn = document.querySelector('.fa-arrow-right');\nconst clearTasksBtn = document.querySelector('.clear-tasks');\nconst newTask = document.getElementById('new-task');\nconst tasksContainer = document.querySelector('.list-tasks');\n\n//# sourceURL=webpack://to-do-list/./src/modules/taskElements.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _taskElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskElements.js */ \"./src/modules/taskElements.js\");\n\n\nclass Tasks {\n  constructor() {\n    this.tasks = [];\n  }\n\n  init = () => {\n    _taskElements_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.innerHTML = '';\n  };\n\n  add = (task) => {\n    this.tasks.push(task);\n  };\n\n  update = (desc, id) => {\n    this.tasks[id].description = desc;\n  };\n\n  display = () => {\n    this.tasks.forEach((task, index) => {\n      const taskItem = document.createElement('li');\n      taskItem.id = index;\n      taskItem.innerHTML = `\n      <input type=\"checkbox\" id=\"task-${task.index}\" name=\"task-${task.index}\" ${task.completed ? 'checked' : 'unchecked'}>\n      <p contenteditable=\"true\" class=\"description\">${task.description}</p>\n      <i class=\"fa fa-ellipsis-v\"><br>\n      `;\n      _taskElements_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.appendChild(taskItem);\n    });\n  };\n\n  deleteAllCompleted = () => {\n    this.tasks = this.tasks.filter((task) => task.completed === false);\n    _taskElements_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.innerHTML = '';\n  };\n\n  updateIndex = () => {\n    this.tasks.forEach((task, index) => {\n      task.index = index + 1;\n    });\n  };\n\n  delete = (index) => {\n    this.tasks = this.tasks.filter((task) => task.index !== Number(index) + 1);\n  };\n}\n\nconst currentTasks = new Tasks();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentTasks);\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/tasks.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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