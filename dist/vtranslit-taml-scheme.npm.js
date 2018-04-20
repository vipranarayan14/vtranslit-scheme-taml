(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vTranslitTamlScheme"] = factory();
	else
		root["vTranslitTamlScheme"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var vTranslitTamlScheme = exports.vTranslitTamlScheme = {
  'about': { 'schemeCode': 'Taml', 'schemeName': 'Tamil', 'type': 'brahmic' },
  'data': {
    'ayogavaha': ['\u0B82', '\u0B83'],
    'consonants': ['\u0B95', '', '', '', '\u0B99', '\u0B9A', '', '\u0B9C', '', '\u0B9E', '\u0B9F', '', '', '', '\u0BA3', '\u0BA4', '', '', '', '\u0BA8', '\u0BA9', '\u0BAA', '', '', '', '\u0BAE', '\u0BAF', '\u0BB0', '\u0BB1', '\u0BB2', '\u0BB3', '\u0BB4', '\u0BB5', '\u0BB6', '\u0BB7', '\u0BB8', '\u0BB9'],
    'deadConsonants': ['\u0B95\u0BCD', '', '', '', '\u0B99\u0BCD', '\u0B9A\u0BCD', '', '\u0B9C\u0BCD', '', '\u0B9E\u0BCD', '\u0B9F\u0BCD', '', '', '', '\u0BA3\u0BCD', '\u0BA4\u0BCD', '', '', '', '\u0BA8\u0BCD', '\u0BA9\u0BCD', '\u0BAA\u0BCD', '', '', '', '\u0BAE\u0BCD', '\u0BAF\u0BCD', '\u0BB0\u0BCD', '\u0BB1\u0BCD', '\u0BB2\u0BCD', '\u0BB3\u0BCD', '\u0BB4\u0BCD', '\u0BB5\u0BCD', '\u0BB6\u0BCD', '\u0BB7\u0BCD', '\u0BB8\u0BCD', '\u0BB9\u0BCD'],
    'symbols': ['\u0BE6', '\u0BE7', '\u0BE8', '\u0BE9', '\u0BEA', '\u0BEB', '\u0BEC', '\u0BED', '\u0BEE', '\u0BEF', '', '', '\u0BD0', '', ''],
    'vowelMarks': ['', '\u0BBE', '\u0BBF', '\u0BC0', '\u0BC1', '\u0BC2', '', '', '', '', '\u0BC6', '\u0BC7', '\u0BC8', '\u0BCA', '\u0BCB', '\u0BCC'],
    'vowels': ['\u0B85', '\u0B86', '\u0B87', '\u0B88', '\u0B89', '\u0B8A', '', '', '', '', '\u0B8E', '\u0B8F', '\u0B90', '\u0B92', '\u0B93', '\u0B94']
  }
};

/***/ })
/******/ ])["vTranslitTamlScheme"];
});