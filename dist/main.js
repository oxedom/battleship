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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/styles.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../public/BigShouldersStencilText-Bold.ttf */ \"./public/BigShouldersStencilText-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../public/usnavy.ttf */ \"./public/usnavy.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: battleFont;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n@font-face {\\n  font-family: ships;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.dragging {\\ncursor: pointer;\\nbackground-color: brown;\\nopacity: 0;\\ncolor: black;\\n}\\n.gameboard {\\n  display: grid;\\n  grid-template-columns: repeat(10, 40px);\\n  grid-template-rows: repeat(10, 40px);\\n  padding: 10px;\\n  gap: 5px;\\n  border: 2px solid black;\\n}\\n\\n\\n.cell {\\n  \\n  background-color: rgb(197, 180, 180);\\n  border: 2px solid black;\\n  padding: 15px;\\n}\\n\\n.red {\\n  background-color: rgb(135, 0, 0);}\\n\\n.blue {\\n  background-color: rgb(22, 22, 67);\\n}\\n\\n\\n.center {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.arena {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\n\\n.header {\\n  /* position: absolute; */\\n  justify-self: center;\\n  /* align-self: stretch; */\\n  font-family: battleFont;\\n  font-size: 42px;\\n  text-align: center;\\n  background-color: rgb(176, 22, 22);\\n  border: 2px solid black;\\n}\\n\\n.flip {\\n  transform: rotate(-90deg);\\n}\\n\\n.shipText{\\n  transform: rotate(180); \\n}\\n\\n.ship {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 20px;\\n  font-family: ships;\\n  \\n}\\n\\n.ship:hover {\\n  transform: scale(1.2);\\n }\\n\\n\\n.main {\\n  display: flex;\\n  min-height: 100vh;\\n  background-color: rgb(128, 62, 62);\\n  flex-direction: column;\\n  justify-content: space-around;\\n}\\n\\n.footer {\\n  display: flex;\\n  justify-items: center;\\n  justify-content: center;\\n  padding: 10px;\\n  margin-top: 20px;\\n  border: 2px solid black;\\n  background-color: rgb(126, 10, 10);\\n}\\n\\n.arsenal {\\n  margin-left: 30px;\\n  display: flex;\\n  justify-content: center;\\n  gap: 50px;\\n}\\n.flip-btn {\\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\\n  background-color: rgba(255, 255, 255, 0.995);\\n  border: 1px black solid;\\n  font-size: 20px;\\n  justify-self: center;\\n  align-self: center;\\n  padding: 5px;\\n}\\n\\n.flip-btn:hover {\\ntransform: scale(1.1);\\n}\\n.selected {\\n  opacity: .5;\\n}\\n\\n.cellected {\\n  background-color: goldenrod;\\n}\\n\\n.shipLength{\\n  \\n  font-weight: 400;\\n  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\\n}\\n\\n.miss {\\n  background-color: darkblue;\\n}\\n\\n.hit {\\n  background-color: rgb(255, 0, 0);\\n}\\n\\n.overlay \\n{\\n  position: absolute;\\n  z-index: 1;\\n  top: 0px;\\n  right: 0px;\\n  height: 100%;\\n  width: 100%;\\n  background-color: black;\\n  opacity: 0.6;\\n}\\n\\n.card {\\n  text-align: center;\\n  flex-direction: column;\\n  display: flex;\\n  justify-content: center;\\n  margin: 15rem;\\n  font-size: 50px;\\n\\n}\\n\\n.rematchBtn{\\n  justify-self: center;\\n  align-self: center;\\n  transform: scale(4);\\n  border: 1px black solid;\\n }\\n\\n .rematchBtn:hover {\\n  background-color: red;\\n }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/js/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/js/styles.css":
/*!***************************!*\
  !*** ./src/js/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/js/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/js/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factorys_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factorys/player */ \"./src/js/factorys/player.js\");\n/* harmony import */ var _factorys_player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_factorys_player__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _factorys_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factorys/gameboard */ \"./src/js/factorys/gameboard.js\");\n/* harmony import */ var _factorys_gameboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_factorys_gameboard__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/js/dom.js\");\n/* harmony import */ var _comps_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/header */ \"./src/js/comps/header.js\");\n/* harmony import */ var _comps_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/footer */ \"./src/js/comps/footer.js\");\n/* harmony import */ var _comps_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/container */ \"./src/js/comps/container.js\");\n/* harmony import */ var _comps_gameboardComp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/gameboardComp */ \"./src/js/comps/gameboardComp.js\");\n/* harmony import */ var _comps_arsenalComp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/arsenalComp */ \"./src/js/comps/arsenalComp.js\");\n/* harmony import */ var _comps_arenaContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/arenaContainer */ \"./src/js/comps/arenaContainer.js\");\n/* harmony import */ var _comps_winCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/winCard */ \"./src/js/comps/winCard.js\");\n/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./libs */ \"./src/js/libs.js\");\n/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_libs__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {\n\n    function init() {\n\n\n        let mainElement = (0,_comps_container__WEBPACK_IMPORTED_MODULE_5__.container)()\n        let headerElement = (0,_comps_header__WEBPACK_IMPORTED_MODULE_3__.header)()\n        let footerElement = (0,_comps_footer__WEBPACK_IMPORTED_MODULE_4__.footer)()\n        let playerGameboardElement = (0,_comps_gameboardComp__WEBPACK_IMPORTED_MODULE_6__.gameboard)()\n        let winCardElement = (0,_comps_winCard__WEBPACK_IMPORTED_MODULE_9__.winCard)()\n        let enemyGameboardElement = (0,_comps_gameboardComp__WEBPACK_IMPORTED_MODULE_6__.gameboard)()\n        let arsenalElement = (0,_comps_arsenalComp__WEBPACK_IMPORTED_MODULE_7__.arsenal)()\n        let arenaElement = (0,_comps_arenaContainer__WEBPACK_IMPORTED_MODULE_8__.arena)()\n\n\n        arenaElement.append(playerGameboardElement, enemyGameboardElement)\n        mainElement.append(headerElement, arsenalElement, arenaElement, footerElement)\n        document.getElementById('content').append(mainElement)\n        //ADD MOVES TO ARENA ELEMENT\n\n    }\n\n\n\n\n\n\n\n    init()\n\n\n\n})());\n\n//# sourceURL=webpack://battleship/./src/js/app.js?");

/***/ }),

/***/ "./src/js/comps/arenaContainer.js":
/*!****************************************!*\
  !*** ./src/js/comps/arenaContainer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arena\": () => (/* binding */ arena)\n/* harmony export */ });\nconst arena = function () {\n    const arena = document.createElement('div')\n    arena.classList.add('arena')\n    return arena\n}\n\n//# sourceURL=webpack://battleship/./src/js/comps/arenaContainer.js?");

/***/ }),

/***/ "./src/js/comps/arsenalComp.js":
/*!*************************************!*\
  !*** ./src/js/comps/arsenalComp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arsenal\": () => (/* binding */ arsenal)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pubsub */ \"./src/js/pubsub.js\");\n\n\nconst arsenal = () => {\n\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('deleteShip', deleteShip)\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('gameStart', deleteFlip)\n    // pubsub.subscribe('changeDirection', toogleFlip)\n\n    function deleteFlip() {\n        document.querySelector(\"#arsenal > button\").style = 'display: none'\n    }\n\n    function deleteShip(selectedShip) {\n        document.getElementById(`ship_${selectedShip}`).style = 'display: none'\n    }\n\n    function toogleFlip() {\n        let ships = document.querySelectorAll('.ship')\n        ships.forEach(ship => {\n            if (ship.classList.contains('flip')) { ship.classList.remove('flip') }\n            else { ship.classList.add('flip') }\n        })\n    }\n\n\n    function ship(value) {\n        let ship = undefined\n        if (6 > value > 0) {\n            ship = document.createElement('span')\n            ship.classList.add('ship')\n            let shipLeter = undefined\n            switch (value) {\n                case 1:\n                    shipLeter = 'a'\n                    break;\n                case 2:\n                    shipLeter = 'b'\n                    break;\n                case 3:\n                    shipLeter = 'c'\n                    break;\n                case 4:\n                    shipLeter = 'd'\n                    break;\n                case 5:\n                    shipLeter = 'e'\n                    break;\n            }\n\n            ship.innerText = shipLeter\n            ship.setAttribute('value', value)\n            ship.setAttribute('id', `ship_${value}`)\n            return ship\n        }\n        else {\n            return new Error('NO SUCH SHIP');\n        }\n\n    }\n\n    const button = document.createElement('button')\n    button.value = 'CHANGE DIRECTION'\n    button.classList.add('flip-btn')\n    button.innerText = 'FLIP'\n    button.addEventListener('click', (e) => {\n        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('changeDirection')\n        toogleFlip()\n    })\n\n\n    const container = document.createElement('div')\n    container.setAttribute('id', 'arsenal')\n    container.classList.add('arsenal')\n    const ships = [ship(1), ship(2), ship(3), ship(4), ship(5)]\n    ships.forEach(ship => {\n        let shipLength = ship.attributes[1].value\n        ship.setAttribute('draggable', true)\n        const p = document.createElement('p')\n        p.innerText = shipLength\n        p.classList.add('shipLength')\n        const div = document.createElement('div')\n        div.append(ship, p)\n        ship.appendChild(p)\n        ship.addEventListener('dragstart', (e) => {\n            e.target.classList.add('dragging')\n            ships.forEach(ship => ship.classList.remove('selected'))\n            _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('selectedShip', ship.attributes[1].value)\n            ship.classList.add('selected')\n        })\n        ship.addEventListener('dragend', (e) => {\n            e.target.classList.remove('dragging')\n\n        })\n\n\n        ship.addEventListener('click', () => {\n            ships.forEach(ship => ship.classList.remove('selected'))\n            ship.classList.add('selected')\n            _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('selectedShip', ship.attributes[1].value)\n        })\n    })\n    container.append(...ships, button)\n\n    return container\n\n\n\n}\n\n//# sourceURL=webpack://battleship/./src/js/comps/arsenalComp.js?");

/***/ }),

/***/ "./src/js/comps/container.js":
/*!***********************************!*\
  !*** ./src/js/comps/container.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"container\": () => (/* binding */ container)\n/* harmony export */ });\nconst container = function () {\n    const container = document.createElement('main')\n    container.classList.add('main')\n\n    return container\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/js/comps/container.js?");

/***/ }),

/***/ "./src/js/comps/footer.js":
/*!********************************!*\
  !*** ./src/js/comps/footer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\nconst footer = function () {\n    let footer = document.createElement('footer')\n    footer.classList.add('footer')\n    return footer\n}\n\n\n//# sourceURL=webpack://battleship/./src/js/comps/footer.js?");

/***/ }),

/***/ "./src/js/comps/gameboardComp.js":
/*!***************************************!*\
  !*** ./src/js/comps/gameboardComp.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameboard\": () => (/* binding */ gameboard)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pubsub */ \"./src/js/pubsub.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ \"./src/js/state.js\");\n\n\nconst gameboard = () => {\n\n\n\n\n    const board = document.createElement('div')\n    board.classList.add('gameboard')\n    let index = 1\n    for (let i = 0; i < 10; i++) {\n\n        for (let j = 0; j < 10; j++) {\n\n            const cell = document.createElement('div')\n            cell.setAttribute('index', index)\n            cell.setAttribute('y', i + 1)\n            cell.setAttribute('x', j + 1)\n            if (!_state__WEBPACK_IMPORTED_MODULE_1__.stateObject.getBuilt()) {\n                cell.addEventListener('click', (e) => _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('placeShipClick', e))\n                cell.classList.add('blue')\n\n            }\n\n            else {\n                cell.addEventListener('click', (e) => _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('attackShip', e))\n                cell.classList.add('red')\n            }\n            index++\n            cell.classList.add('cell')\n            board.append(cell)\n\n        }\n\n    }\n\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('built', undefined)\n\n\n    return board\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/js/comps/gameboardComp.js?");

/***/ }),

/***/ "./src/js/comps/header.js":
/*!********************************!*\
  !*** ./src/js/comps/header.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nconst header = function () {\n    const header = document.createElement('h1')\n    header.classList.add('header')\n    header.innerText = 'BATTLESHIP'\n\n    return header\n}\n\n\n//# sourceURL=webpack://battleship/./src/js/comps/header.js?");

/***/ }),

/***/ "./src/js/comps/winCard.js":
/*!*********************************!*\
  !*** ./src/js/comps/winCard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"winCard\": () => (/* binding */ winCard)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pubsub */ \"./src/js/pubsub.js\");\n\n\nconst winCard = function () {\n\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('handleWin', handleWinDom)\n\n    function handleWinDom(winner) {\n\n        const btn = document.createElement('button')\n        btn.innerText = 'REMATCH'\n        const div = document.createElement('div')\n        const card = document.createElement('div')\n        card.classList.add('card')\n        const h2 = document.createElement('h2')\n        h2.innerText = `The Winner is ${winner}`\n        card.append(h2)\n        div.append(card)\n        div.classList.add('overlay')\n        card.append(btn)\n        btn.classList.add('rematchBtn')\n        document.querySelector('#content').append(div)\n        btn.addEventListener('click', (e) => {\n            e.preventDefault()\n            location.reload()\n        })\n    }\n\n    return\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/js/comps/winCard.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/js/styles.css\");\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ \"./src/js/pubsub.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ \"./src/js/state.js\");\n/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs */ \"./src/js/libs.js\");\n/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_libs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst dom = (function () {\n\n    _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe('handleComputerAttack', handlePC)\n    _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe('paintShip', paintCells)\n    _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe('gameStart', gameStarted)\n    _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe('handleAttack', handleAttack)\n\n\n    function handlePC(objPara) {\n        let cell = document.querySelector(`[index=\"${objPara.index}\"]`)\n        cell ? cell.classList.add('hit') : cell.classList.add('miss')\n    }\n\n\n    function handleAttack(objPara) {\n        objPara.answer ? objPara.element.classList.add('hit') : objPara.element.classList.add('miss')\n    }\n\n    //PAINTS ARRAY OF CELLS\n    function paintCells(cellArr) {\n\n        cellArr.forEach(cell => {\n            document.querySelectorAll(`[index=\"${cell}\"]`)[0].classList.add('cellected')\n        });\n    }\n\n\n\n    function gameStarted() {\n        //REMOVE ALL EVENT LISTENRS FROM PLAYERBOARD\n        document.querySelectorAll('.gameboard')[0].childNodes.forEach(cell => { (0,_libs__WEBPACK_IMPORTED_MODULE_3__.recreateNode)(cell) })\n    }\n\n\n\n    return {};\n})();\n\n\n//# sourceURL=webpack://battleship/./src/js/dom.js?");

/***/ }),

/***/ "./src/js/factorys/gameboard.js":
/*!**************************************!*\
  !*** ./src/js/factorys/gameboard.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { ShipFactory } = __webpack_require__(/*! ./ship */ \"./src/js/factorys/ship.js\");\nconst { indexToXY, checkLegalMove } = __webpack_require__(/*! ../libs */ \"./src/js/libs.js\"\n)\n\nconst GameboardFactory = () => {\n  let _ships = [];\n  let _missedHits = [];\n  let _hits = []\n\n  const getAllhits = () => {\n    let allHits = [..._missedHits, ..._hits].sort()\n\n    return allHits\n  }\n\n  const getShips = () => {\n    return _ships;\n  };\n\n  const placeShip = (cordsArr) => {\n    if (!canPlace(cordsArr)) { return }\n    const ship = ShipFactory();\n    ship.setLength(cordsArr.length)\n    ship.setCords(cordsArr);\n    _ships.push(ship);\n  };\n\n  const canPlace = (cordsArr) => {\n\n    let answer = true\n    let allCords = []\n    _ships.forEach(ship => {\n      allCords.push(ship.getCords())\n    })\n    allCords = allCords.flat()\n\n    cordsArr.forEach(cord => {\n      if (allCords.includes(cord)) {\n        answer = false\n      }\n    })\n    return answer\n  }\n\n  const receiveAttack = (cord) => {\n    if (_missedHits.includes(cord)) { return }\n    let _wasHit = false;\n    //Cycles through all ships on a Players Gameboard\n    _ships.forEach((ship) => {\n      //Get Coards returns an array of it's cords\n      if (ship.hitShip(cord)) {\n        _wasHit = true;\n        _hits.push(cord)\n      }\n    });\n    if (!_wasHit) {\n      _missedHits.push(cord);\n    }\n    return _wasHit;\n  };\n\n  const getMissed = () => {\n    return _missedHits;\n  };\n\n  const sunkenShips = () => {\n    let arr = [];\n    let answer = undefined;\n    _ships.forEach((ship) => arr.push(ship.isSunk()));\n    if (arr.includes(false)) {\n      answer = false;\n    } else {\n      answer = true;\n    }\n    return answer;\n  };\n\n  const getRandom = () => {\n    let gotRandom = false\n    let cord = undefined\n    while (!gotRandom) {\n      cord = Math.floor(Math.random() * 100) + 1;\n      if (!getAllhits().includes(cord)) { gotRandom = true }\n    }\n    return cord\n  }\n\n  const getRandomPlacement = () => {\n    let gotRandom = false\n    let cord = undefined\n    while (!gotRandom) {\n      cord = Math.floor(Math.random() * 100) + 1;\n      if (!_ships.includes(cord)) { gotRandom = true }\n    }\n    return cord\n  }\n\n\n\n\n  const randomAttack = () => {\n    let cord = getRandom()\n    let answer = receiveAttack(cord)\n    return { answer: answer, index: cord }\n  }\n\n\n  const createRandom = (times) => {\n    let cord = undefined\n    let arr = []\n    let sit = undefined\n    cord = getRandomPlacement()\n    let parsedCord = indexToXY(cord)\n    if (parsedCord.x > 10) { sit = true }\n\n    for (let index = 0; index < times; index++) {\n\n      arr.push(cord)\n      sit ? cord-- : cord++\n\n    }\n\n    let parsedIndex = indexToXY(arr[0])\n\n    if (!checkLegalMove(parsedIndex.y, parsedIndex.x, times, 'row')) { return createRandom(times) }\n    return arr\n  }\n\n\n  const placeRandom = (length) => {\n\n    arr1 = [99]\n    arr2 = [2, 3]\n    arr3 = [5, 6, 7]\n    arr4 = [30, 40, 50, 60]\n    arr5 = [72, 73, 74, 75, 76]\n\n    let arr6 = createRandom(1)\n    let arr7 = createRandom(2)\n    let arr8 = createRandom(3)\n    let arr9 = createRandom(4)\n    let arr10 = createRandom(5)\n    console.log(arr6, arr7, arr8, arr9, arr10);\n\n    placeShip(arr6)\n    placeShip(arr7)\n    placeShip(arr8)\n    placeShip(arr9)\n    placeShip(arr10)\n\n  }\n\n  return { placeShip, getShips, receiveAttack, getMissed, sunkenShips, canPlace, placeRandom, randomAttack };\n}\n\nmodule.exports = { GameboardFactory };\n\n\n//# sourceURL=webpack://battleship/./src/js/factorys/gameboard.js?");

/***/ }),

/***/ "./src/js/factorys/player.js":
/*!***********************************!*\
  !*** ./src/js/factorys/player.js ***!
  \***********************************/
/***/ ((module) => {

eval("const attackEnemy = (enemyGameBoard, cord) => {\n  return enemyGameBoard.receiveAttack(cord);\n};\n\nconst PlayerFactory = () => {\n\n  return { attackEnemy };\n};\n\nconst ComputerPlayerFactory = () => {\n\n  const computerAttack = (enemyGameBoard) => {\n\n    //Returns Boolean\n    return enemyGameBoard.randomAttack()\n\n\n\n  };\n  return { computerAttack };\n};\n\nmodule.exports = { PlayerFactory, ComputerPlayerFactory };\n\n\n//# sourceURL=webpack://battleship/./src/js/factorys/player.js?");

/***/ }),

/***/ "./src/js/factorys/ship.js":
/*!*********************************!*\
  !*** ./src/js/factorys/ship.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const libs = __webpack_require__(/*! ../libs */ \"./src/js/libs.js\");\n\nconst ShipFactory = () => {\n\n  let _shipCords = [];\n  let _hitCords = [];\n  let shipLength = 0;\n\n  const _setArray = (targetArr, valuesArr) => {\n    if (valuesArr.length != shipLength) { return Error(`${cordsArr.length} is not equal to ${shipLength}}`) }\n    valuesArr.forEach((value) => {\n      if (value > 100) {\n        return new Error(\"VALUE TOO BIG FOR GAMEBOARD\");\n      } else {\n        targetArr.push(value);\n      }\n    });\n  };\n\n\n  const getLength = () => {\n    return shipLength;\n  };\n\n  const setLength = (para) => {\n    shipLength = para\n    return shipLength\n  }\n\n  const setCords = (cordsArr) => {\n    _setArray(_shipCords, cordsArr);\n  };\n\n  const clearCords = () => {\n    _shipCords = [];\n  };\n\n  const getCords = () => {\n    return _shipCords;\n  };\n  const hitShip = (cord) => {\n    if (_hitCords.includes(cord)) { return }\n    cord = parseInt(cord)\n    let answer = _shipCords.includes(cord);\n    if (answer) {\n      _hitCords.push(cord);\n    }\n    return answer;\n  };\n\n  const isSunk = () => {\n    return libs.compare(_hitCords.sort(), _shipCords.sort());\n  };\n\n  return { setCords, getCords, hitShip, clearCords, isSunk, setLength, getLength };\n};\n\nmodule.exports = { ShipFactory };\n\n\n//# sourceURL=webpack://battleship/./src/js/factorys/ship.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/js/dom.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n\n\n\n//# sourceURL=webpack://battleship/./src/js/index.js?");

/***/ }),

/***/ "./src/js/libs.js":
/*!************************!*\
  !*** ./src/js/libs.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const stateObject = __webpack_require__(/*! ./state */ \"./src/js/state.js\");\n\nconst compare = function (arr1, arr2) {\n  let answer = true;\n  // compare lengths - can save a lot of time\n  if (arr1.length != arr2.length) {\n    answer = false;\n    return answer;\n  } else {\n    for (var i = 0; i < arr1.length; i++) {\n      if (arr1[i] !== arr2[i]) {\n        answer = false;\n      }\n    }\n  }\n\n  return answer;\n};\n\nconst XYtoIndex = function (row, column) {\n  let i = undefined\n  i = column + 10 * (row - 1)\n\n  return i\n}\n\nconst indexToXY = function (index) {\n  index = index - 1\n  let x = (index % 10) + 1\n  let y = Math.floor(index / 10) + 1\n\n  return { x, y }\n}\n\n\n\nconst checkLegalMove = (row, column, shipLength, direction) => {\n\n  let answer = undefined\n\n  shipLength = parseInt(shipLength)\n  row = parseInt(row)\n  column = parseInt(column)\n\n  if (shipLength === 1) { return true }\n  //ROW CASE\n  if (direction === 'row') {\n    if ((shipLength + column) > 11) {\n      answer = false\n    }\n    else { answer = true }\n\n  }\n  //COLUMN CASE\n  if (direction === 'column') {\n    if ((shipLength + row) > 11) {\n      answer = false\n    }\n    else { answer = true }\n  }\n\n\n  return answer\n}\n\nconst getShipArray = (cellIndex, length, direction) => {\n  let arr = []\n  if (direction == 'row') {\n    for (let index = 0; index < length; index++) {\n      arr.push(cellIndex)\n      cellIndex++\n    }\n  }\n  if (direction == 'column') {\n    for (let index = 0; index < length; index++) {\n      arr.push(cellIndex)\n      cellIndex = cellIndex + 10\n    }\n  }\n\n  if (arr.includes(101)) { alert('ERORROROROROROROR') }\n\n  return arr\n}\n\n\n// Here's a function that is also based on cloneNode, but with an option to clone only the parent node and move all the children (to preserve their event listeners):\n\nfunction recreateNode(el, withChildren) {\n  if (withChildren) {\n    el.parentNode.replaceChild(el.cloneNode(true), el);\n  }\n  else {\n    var newEl = el.cloneNode(false);\n    while (el.hasChildNodes()) newEl.appendChild(el.firstChild);\n    el.parentNode.replaceChild(newEl, el);\n  }\n}\n\n\n\nmodule.exports = { compare, XYtoIndex, getShipArray, recreateNode, indexToXY, checkLegalMove };\n\n\n//# sourceURL=webpack://battleship/./src/js/libs.js?");

/***/ }),

/***/ "./src/js/pubsub.js":
/*!**************************!*\
  !*** ./src/js/pubsub.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pubsub\": () => (/* binding */ pubsub)\n/* harmony export */ });\nconst pubsub = {\n  events: {},\n  subscribe(evName, fn) {\n    console.log(`PUBSUB: someone just subscribed to know about ${evName}`);\n    // add an event with a name as new or to existing list\n    this.events[evName] = this.events[evName] || [];\n    this.events[evName].push(fn);\n  },\n  unsubscribe(evName, fn) {\n    console.log(`PUBSUB: someone just UNsubscribed from ${evName}`);\n    // remove an event function by name\n    if (this.events[evName]) {\n      this.events[evName] = this.events[evName].filter((f) => f !== fn);\n    }\n  },\n  publish(evName, data) {\n    console.log(`PUBSUB: Making an broadcast about ${evName} with ${data}`);\n    // emit|publish|announce the event to anyone who is subscribed\n    if (this.events[evName]) {\n      this.events[evName].forEach((f) => {\n        f(data);\n      });\n    }\n  },\n};\n\n\n//# sourceURL=webpack://battleship/./src/js/pubsub.js?");

/***/ }),

/***/ "./src/js/state.js":
/*!*************************!*\
  !*** ./src/js/state.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stateObject\": () => (/* binding */ stateObject)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/js/pubsub.js\");\n/* harmony import */ var _factorys_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factorys/gameboard */ \"./src/js/factorys/gameboard.js\");\n/* harmony import */ var _factorys_gameboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_factorys_gameboard__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs */ \"./src/js/libs.js\");\n/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_libs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _factorys_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factorys/player */ \"./src/js/factorys/player.js\");\n/* harmony import */ var _factorys_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_factorys_player__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst stateObject = (function () {\n\n    let direction = 'row'\n    let selectedShip = undefined\n\n    let gameStart = false\n    let firstBuilt = false\n    let player = (0,_factorys_player__WEBPACK_IMPORTED_MODULE_3__.PlayerFactory)()\n    let computer = (0,_factorys_player__WEBPACK_IMPORTED_MODULE_3__.ComputerPlayerFactory)()\n\n    let playerGameboard = (0,_factorys_gameboard__WEBPACK_IMPORTED_MODULE_1__.GameboardFactory)()\n    let computerGameboard = (0,_factorys_gameboard__WEBPACK_IMPORTED_MODULE_1__.GameboardFactory)()\n\n    computerGameboard.placeRandom()\n\n\n\n\n\n\n\n    //PUBSUBS\n\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('placeShipClick', placeShipClick)\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('paintShip', deleteShip)\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('changeDirection', setDirection)\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('selectedShip', setShip)\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('built', setFirstBuilt)\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('gameStart', handleStart)\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('attackShip', handleAttackShip)\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe('handleComputerAttack', handleComputerAttack)\n    // pubsub.subscribe('handleWin', handleWin)\n\n    function handleComputerAttack(obj) {\n\n        if (playerGameboard.sunkenShips()) {\n            _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('handleWin', 'computer')\n        }\n\n    }\n\n    function handleStart() {\n        gameStart = true\n    }\n\n    // DEBUGGER FUNCTION TO VISUALIZE COMPUTER SHIPS\n    // computerGameboard.getShips().forEach(ship => {\n    //     setTimeout(() => {\n    //         ship.getCords().forEach(cord => {\n    //             document.querySelector(`#content > main > div.arena > div:nth-child(2) > div:nth-child(${cord})`).classList.add('cellected')\n    //         })\n\n    //     }, 0);\n    // })\n\n\n\n    function deleteShip() {\n        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('deleteShip', selectedShip)\n        selectedShip = undefined\n    }\n\n    function placeShipClick(e) {\n\n        if (!gameStart && selectedShip > 0 && playerGameboard.getShips().length < 5) {\n            let x = parseInt(e.target.getAttribute('x'))\n            let y = parseInt(e.target.getAttribute('y'))\n            if ((0,_libs__WEBPACK_IMPORTED_MODULE_2__.checkLegalMove)(y, x, selectedShip, direction)) {\n                let index = parseInt(e.target.getAttribute('index'))\n                let shipArr = (0,_libs__WEBPACK_IMPORTED_MODULE_2__.getShipArray)(index, selectedShip, direction)\n                if (!playerGameboard.canPlace(shipArr)) { return }\n                playerGameboard.placeShip(shipArr)\n                _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('paintShip', shipArr)\n                if (playerGameboard.getShips().length === 5) {\n                    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('gameStart')\n                }\n            }\n        }\n    }\n\n\n    function handleAttackShip(e) {\n        if (gameStart) { attackShip(e) }\n\n    }\n    function attackShip(e) {\n\n        player.attackEnemy(computerGameboard, parseInt(e.target.getAttribute('index'))) ?\n            e.target.classList.add('hit') : e.target.classList.add('miss')\n        ;(0,_libs__WEBPACK_IMPORTED_MODULE_2__.recreateNode)(e.target)\n\n\n        if (computerGameboard.sunkenShips()) {\n\n            _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('handleWin', 'player')\n        }\n\n        _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('handleComputerAttack', computer.computerAttack(playerGameboard))\n    }\n\n\n    function setShip(value) {\n        selectedShip = value\n    }\n\n    function setDirection() {\n        if (direction == 'row') {\n            return direction = 'column'\n        }\n        if (direction == 'column') {\n            return direction = 'row'\n        }\n    }\n\n    function setFirstBuilt() {\n        firstBuilt = true\n    }\n\n    function getBuilt() {\n        return firstBuilt\n    }\n\n    return { getBuilt }\n\n})()\n\n//# sourceURL=webpack://battleship/./src/js/state.js?");

/***/ }),

/***/ "./public/BigShouldersStencilText-Bold.ttf":
/*!*************************************************!*\
  !*** ./public/BigShouldersStencilText-Bold.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ddae1fd3d677dc21e7c0.ttf\";\n\n//# sourceURL=webpack://battleship/./public/BigShouldersStencilText-Bold.ttf?");

/***/ }),

/***/ "./public/usnavy.ttf":
/*!***************************!*\
  !*** ./public/usnavy.ttf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fab30e56b6cad0407169.ttf\";\n\n//# sourceURL=webpack://battleship/./public/usnavy.ttf?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;