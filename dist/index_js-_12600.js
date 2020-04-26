/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(window["webpackJsonpcloud"] = window["webpackJsonpcloud"] || []).push([["index_js-_12600"],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! namespace exports */
/*! export default [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"?9a3c\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_containers_Cloud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/containers/Cloud */ \"./src/containers/Cloud/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_containers_Cloud__WEBPACK_IMPORTED_MODULE_1__.default);\n\n//# sourceURL=webpack://cloud/./index.js?");

/***/ }),

/***/ "./src/containers/Cloud/actions.js":
/*!*****************************************!*\
  !*** ./src/containers/Cloud/actions.js ***!
  \*****************************************/
/*! namespace exports */
/*! export downloadFile [provided] [used] [could be renamed] */
/*! export downloadFileError [provided] [unused] [could be renamed] */
/*! export downloadFileSuccess [provided] [unused] [could be renamed] */
/*! export getFiles [provided] [used] [could be renamed] */
/*! export getFilesError [provided] [unused] [could be renamed] */
/*! export getFilesSuccess [provided] [unused] [could be renamed] */
/*! export syncFiles [provided] [unused] [could be renamed] */
/*! export syncFilesError [provided] [unused] [could be renamed] */
/*! export syncFilesSuccess [provided] [unused] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFiles\": () => /* binding */ getFiles,\n/* harmony export */   \"downloadFile\": () => /* binding */ downloadFile\n/* harmony export */ });\n/* unused harmony exports getFilesSuccess, getFilesError, syncFiles, syncFilesSuccess, syncFilesError, downloadFileSuccess, downloadFileError */\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/containers/Cloud/constants.js\");\n/*\n *\n * Cloud actions\n *\n */\n\nfunction getFiles(uid) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__.GET_FILES,\n    uid: uid\n  };\n}\nfunction getFilesSuccess(folders, files, currentFolder, root, tree) {\n  return function (dispatch) {\n    dispatch({\n      type: GET_FILES_SUCCESS,\n      folders: folders,\n      files: files,\n      currentFolder: currentFolder,\n      root: root,\n      tree: tree\n    });\n  };\n}\nfunction getFilesError(error) {\n  return function (dispatch) {\n    dispatch({\n      type: GET_FILES_ERROR,\n      error: error\n    });\n  };\n}\nfunction syncFiles() {\n  return {\n    type: SYNC_FILES\n  };\n}\nfunction syncFilesSuccess() {\n  return function (dispatch) {\n    dispatch({\n      type: SYNC_FILES_SUCCESS\n    });\n  };\n}\nfunction syncFilesError(error) {\n  return function (dispatch) {\n    dispatch({\n      type: SYNC_FILES_ERROR,\n      error: error\n    });\n  };\n}\nfunction downloadFile(uid, name) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__.DOWNLOAD_FILE,\n    uid: uid,\n    name: name\n  };\n}\nfunction downloadFileSuccess() {\n  return function (dispatch) {\n    dispatch({\n      type: DOWNLOAD_FILE_SUCCESS\n    });\n  };\n}\nfunction downloadFileError(error) {\n  return function (dispatch) {\n    dispatch({\n      type: DOWNLOAD_FILE_ERROR,\n      error: error\n    });\n  };\n}\n\n//# sourceURL=webpack://cloud/./src/containers/Cloud/actions.js?");

/***/ }),

/***/ "./src/containers/Cloud/constants.js":
/*!*******************************************!*\
  !*** ./src/containers/Cloud/constants.js ***!
  \*******************************************/
/*! namespace exports */
/*! export DOWNLOAD_FILE [provided] [used] [could be renamed] */
/*! export DOWNLOAD_FILE_ERROR [provided] [used] [could be renamed] */
/*! export DOWNLOAD_FILE_SUCCESS [provided] [used] [could be renamed] */
/*! export GET_FILES [provided] [used] [could be renamed] */
/*! export GET_FILES_ERROR [provided] [used] [could be renamed] */
/*! export GET_FILES_SUCCESS [provided] [used] [could be renamed] */
/*! export SYNC_FILES [provided] [used] [could be renamed] */
/*! export SYNC_FILES_ERROR [provided] [used] [could be renamed] */
/*! export SYNC_FILES_SUCCESS [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SYNC_FILES\": () => /* binding */ SYNC_FILES,\n/* harmony export */   \"SYNC_FILES_SUCCESS\": () => /* binding */ SYNC_FILES_SUCCESS,\n/* harmony export */   \"SYNC_FILES_ERROR\": () => /* binding */ SYNC_FILES_ERROR,\n/* harmony export */   \"GET_FILES\": () => /* binding */ GET_FILES,\n/* harmony export */   \"GET_FILES_SUCCESS\": () => /* binding */ GET_FILES_SUCCESS,\n/* harmony export */   \"GET_FILES_ERROR\": () => /* binding */ GET_FILES_ERROR,\n/* harmony export */   \"DOWNLOAD_FILE\": () => /* binding */ DOWNLOAD_FILE,\n/* harmony export */   \"DOWNLOAD_FILE_SUCCESS\": () => /* binding */ DOWNLOAD_FILE_SUCCESS,\n/* harmony export */   \"DOWNLOAD_FILE_ERROR\": () => /* binding */ DOWNLOAD_FILE_ERROR\n/* harmony export */ });\n/*\n *\n * Cloud constants\n *\n */\nvar SYNC_FILES = 'onyx/Cloud/SYNC_FILES';\nvar SYNC_FILES_SUCCESS = 'onyx/Cloud/SYNC_FILES_SUCCESS';\nvar SYNC_FILES_ERROR = 'onyx/Cloud/SYNC_FILES_ERROR';\nvar GET_FILES = 'onyx/Cloud/GET_FILES';\nvar GET_FILES_SUCCESS = 'onyx/Cloud/GET_FILES_SUCCESS';\nvar GET_FILES_ERROR = 'onyx/Cloud/GET_FILES_ERROR';\nvar DOWNLOAD_FILE = 'onyx/Cloud/DOWNLOAD_FILE';\nvar DOWNLOAD_FILE_SUCCESS = 'onyx/Cloud/DOWNLOAD_FILE_SUCCESS';\nvar DOWNLOAD_FILE_ERROR = 'onyx/Cloud/DOWNLOAD_FILE_ERROR';\n\n//# sourceURL=webpack://cloud/./src/containers/Cloud/constants.js?");

/***/ }),

/***/ "./src/containers/Cloud/index.js":
/*!***************************************!*\
  !*** ./src/containers/Cloud/index.js ***!
  \***************************************/
/*! namespace exports */
/*! export Cloud [provided] [unused] [could be renamed] */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* unused harmony export Cloud */\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"?9a3c\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"../../node_modules/react-helmet/lib/Helmet.js\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ \"?244e\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"?1277\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var onyx_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! onyx/utils */ \"?1509\");\n/* harmony import */ var onyx_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(onyx_utils__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var onyx_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! onyx/components */ \"?3158\");\n/* harmony import */ var onyx_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(onyx_components__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reselect */ \"?fdf0\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ \"?3edc\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selectors */ \"./src/containers/Cloud/selectors.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions */ \"./src/containers/Cloud/actions.js\");\n/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./saga */ \"./src/containers/Cloud/saga.js\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reducer */ \"./src/containers/Cloud/reducer.js\");\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./messages */ \"./src/containers/Cloud/messages.js\");\n/* eslint-disable no-undef */\n\n/**\n *\n * Cloud\n *\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Cloud(_ref) {\n  var user = _ref.user,\n      getFilesFunc = _ref.getFilesFunc,\n      downloadFileFunc = _ref.downloadFileFunc,\n      cloud = _ref.cloud,\n      match = _ref.match,\n      history = _ref.history;\n  (0,onyx_utils__WEBPACK_IMPORTED_MODULE_5__.useInjectReducer)({\n    key: 'cloud',\n    reducer: _reducer__WEBPACK_IMPORTED_MODULE_12__.default\n  });\n  (0,onyx_utils__WEBPACK_IMPORTED_MODULE_5__.useInjectSaga)({\n    key: 'cloud',\n    saga: _saga__WEBPACK_IMPORTED_MODULE_11__.default\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    getFilesFunc(match.params.uid);\n  }, [0]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, \"Cloud\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"description\",\n    content: \"Description of Cloud\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(onyx_components__WEBPACK_IMPORTED_MODULE_6__.Container, {\n    user: user,\n    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, _messages__WEBPACK_IMPORTED_MODULE_13__.default.header)\n  }, cloud && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, cloud.loadingFiles ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"uk-margin-small-right center\",\n    \"uk-spinner\": \"ratio: 1\"\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"uk-breadcrumb\"\n  }, cloud.tree && cloud.tree.map(function (tree) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      onClick: function onClick() {\n        return history.push('/cloud/' + tree.uid);\n      },\n      style: {\n        cursor: \"pointer\"\n      }\n    }, tree.name);\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"collection with-header\"\n  }, cloud.currentFolder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    class: \"collection-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", null, cloud.currentFolder.name)), cloud.folders.map(function (folder) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      className: \"collection-item avatar\",\n      onClick: function onClick() {\n        return history.push('/cloud/' + folder.uid);\n      },\n      style: {\n        cursor: \"pointer\"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-folder circle\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      className: \"title\"\n    }, folder.name));\n  }), cloud.files.map(function (file) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      className: \"collection-item avatar\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-file circle\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      className: \"title\"\n    }, file.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      onClick: function onClick() {\n        return downloadFileFunc(file.uid, file.name);\n      },\n      style: {\n        cursor: \"pointer\"\n      },\n      className: \"secondary-content fas fa-download\"\n    }));\n  })), cloud.files.length === 0 && cloud.folders.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    className: \"uk-card-title\"\n  }, \"Nothing Here\")))));\n}\nCloud.propTypes = {\n  user: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),\n  cloud: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),\n  getFilesFunc: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  downloadFileFunc: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({\n    push: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)\n  })\n};\nvar mapStateToProps = (0,reselect__WEBPACK_IMPORTED_MODULE_7__.createStructuredSelector)({\n  cloud: (0,_selectors__WEBPACK_IMPORTED_MODULE_9__.makeSelectCloud)()\n});\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    getFilesFunc: function getFilesFunc(uid) {\n      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_10__.getFiles)(uid));\n    },\n    downloadFileFunc: function downloadFileFunc(uid, name) {\n      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_10__.downloadFile)(uid, name));\n    }\n  };\n}\n\nvar withConnect = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, mapDispatchToProps);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_8__.compose)(withConnect, react__WEBPACK_IMPORTED_MODULE_0__.memo)(Cloud));\n\n//# sourceURL=webpack://cloud/./src/containers/Cloud/index.js?");

/***/ }),

/***/ "./src/containers/Cloud/messages.js":
/*!******************************************!*\
  !*** ./src/containers/Cloud/messages.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! export scope [provided] [unused] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* unused harmony export scope */\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ \"?244e\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * Cloud Messages\n *\n * This contains all the text for the Cloud container.\n */\n\nvar scope = 'app.containers.Cloud';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({\n  header: {\n    id: \"\".concat(scope, \".header\"),\n    defaultMessage: 'Cloud'\n  }\n}));\n\n//# sourceURL=webpack://cloud/./src/containers/Cloud/messages.js?");

/***/ }),

/***/ "./src/containers/Cloud/reducer.js":
/*!*****************************************!*\
  !*** ./src/containers/Cloud/reducer.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! export initialState [provided] [unused] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* unused harmony export initialState */\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ \"../../node_modules/immer/dist/immer.module.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/containers/Cloud/constants.js\");\n/*\n *\n * Cloud reducer\n *\n */\n\n\nvar initialState = {\n  errorText: '',\n  loadingFiles: true,\n  syncing: false,\n  root: {},\n  tree: [],\n  currentFolder: {},\n  files: [],\n  folders: [],\n  folderUid: undefined,\n  fileUid: '',\n  fileName: ''\n};\n/* eslint-disable default-case, no-param-reassign */\n\nvar cloudReducer = function cloudReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  return (0,immer__WEBPACK_IMPORTED_MODULE_0__.default)(state, function (draft) {\n    switch (action.type) {\n      case _constants__WEBPACK_IMPORTED_MODULE_1__.GET_FILES:\n        draft.loadingFiles = true;\n        draft.folderUid = action.uid;\n        break;\n\n      case _constants__WEBPACK_IMPORTED_MODULE_1__.GET_FILES_SUCCESS:\n        draft.root = action.root;\n        draft.currentFolder = action.currentFolder;\n        draft.files = action.files;\n        draft.folders = action.folders;\n        draft.tree = action.tree;\n        draft.loadingFiles = false;\n        break;\n\n      case _constants__WEBPACK_IMPORTED_MODULE_1__.GET_FILES_ERROR:\n        draft.loadingFiles = false;\n        draft.errorText = action.error;\n        break;\n\n      case _constants__WEBPACK_IMPORTED_MODULE_1__.DOWNLOAD_FILE:\n        draft.fileUid = action.uid;\n        draft.fileName = action.name;\n        break;\n\n      case _constants__WEBPACK_IMPORTED_MODULE_1__.DOWNLOAD_FILE_SUCCESS:\n        draft.fileUid = '';\n        draft.fileName = '';\n        break;\n\n      case _constants__WEBPACK_IMPORTED_MODULE_1__.DOWNLOAD_FILE_ERROR:\n        draft.fileUid = '';\n        draft.fileName = '';\n        draft.errorText = action.error;\n        break;\n\n      case _constants__WEBPACK_IMPORTED_MODULE_1__.SYNC_FILES:\n        draft.syncing = true;\n        break;\n\n      case _constants__WEBPACK_IMPORTED_MODULE_1__.SYNC_FILES_SUCCESS:\n        draft.syncing = false;\n        break;\n\n      case _constants__WEBPACK_IMPORTED_MODULE_1__.SYNC_FILES_ERROR:\n        draft.syncing = false;\n        draft.errorText = action.error;\n        break;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudReducer);\n\n//# sourceURL=webpack://cloud/./src/containers/Cloud/reducer.js?");

/***/ }),

/***/ "./src/containers/Cloud/saga.js":
/*!**************************************!*\
  !*** ./src/containers/Cloud/saga.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [not provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements:  */
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/aituglo/lab/dev/onyx/onyx/neurons/cloud/src/containers/Cloud/saga.js: Identifier 'loadGetFiles' has already been declared (37:17)\\n\\n\\u001b[0m \\u001b[90m 35 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 36 | \\u001b[39m\\u001b[90m// Get Files\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 37 | \\u001b[39m\\u001b[36mexport\\u001b[39m \\u001b[36mfunction\\u001b[39m\\u001b[33m*\\u001b[39m loadGetFiles() {\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                 \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 38 | \\u001b[39m  \\u001b[36mconst\\u001b[39m token \\u001b[33m=\\u001b[39m localStorage\\u001b[33m.\\u001b[39mgetItem(\\u001b[32m'access_token'\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 39 | \\u001b[39m  \\u001b[36mconst\\u001b[39m cloud \\u001b[33m=\\u001b[39m yield select(makeSelectCloud())\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 40 | \\u001b[39m\\u001b[0m\\n    at Object._raise (/home/aituglo/lab/dev/onyx/onyx/neurons/cloud/node_modules/@babel/parser/lib/index.js:742:17)\\n    at Object.raiseWithData (/home/aituglo/lab/dev/onyx/onyx/neurons/cloud/node_modules/@babel/parser/lib/index.js:735:17)\\n    at Object.raise (/home/aituglo/lab/dev/onyx/onyx/neurons/cloud/node_modules/@babel/parser/lib/index.js:729:17)\\n    at ScopeHandler.checkRedeclarationInScope (/home/aituglo/lab/dev/onyx/onyx/neurons/cloud/node_modules/@babel/parser/lib/index.js:4769:12)\\n    at ScopeHandler.declareName (/home/aituglo/lab/dev/onyx/onyx/neurons/cloud/node_modules/@babel/parser/lib/index.js:4735:12)\\n    at Object.registerFunctionStatementId (/home/aituglo/lab/dev/onyx/onyx/neurons/cloud/node_modules/@babel/parser/lib/index.js:11826:16)\\n    at Object.parseFunction (/home/aituglo/lab/dev/onyx/onyx/neurons/cloud/node_modules/@babel/parser/lib/index.js:11802:12)\\n    at Object.parseFunctionStatement (/home/aituglo/lab/dev/onyx/onyx/neurons/cloud/node_modules/@babel/parser/lib/index.js:11427:17)\\n    at Object.parseStatementContent (/home/aituglo/lab/dev/onyx/onyx/neurons/cloud/node_modules/@babel/parser/lib/index.js:11119:21)\\n    at Object.parseStatement (/home/aituglo/lab/dev/onyx/onyx/neurons/cloud/node_modules/@babel/parser/lib/index.js:11081:17)\");\n\n//# sourceURL=webpack://cloud/./src/containers/Cloud/saga.js?");

/***/ }),

/***/ "./src/containers/Cloud/selectors.js":
/*!*******************************************!*\
  !*** ./src/containers/Cloud/selectors.js ***!
  \*******************************************/
/*! namespace exports */
/*! export makeSelectCloud [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeSelectCloud\": () => /* binding */ makeSelectCloud\n/* harmony export */ });\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ \"?fdf0\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar selectCloud = function selectCloud(state) {\n  return state.cloud;\n};\n\nvar makeSelectCloud = function makeSelectCloud() {\n  return (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectCloud, function (cloudState) {\n    return cloudState;\n  });\n};\n\n\n\n//# sourceURL=webpack://cloud/./src/containers/Cloud/selectors.js?");

/***/ })

}]);