/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calculate__ = __webpack_require__(1);

Object(__WEBPACK_IMPORTED_MODULE_0__calculate__["a" /* default */])()



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cal;
function cal(){
    let str = document.getElementById("text").value;
    if (str!=""){
        // đây là code bờm của con bờm 
        // let num="";
        // let translate=""
        // for (let i=0;i<str.length;i++){
        //   if (str[i] >=2 && str[i]<=7){
        //       num+=`${str[i]} `
        //       switch(str[i]) {
        //         case '2':
        //             translate+=" on Monday,"
        //             break;
        //         case '3':
        //             translate+=" on Tuesday,"
        //             break;
        //         case '4':
        //             translate+=" on Wednesday,"
        //             break;
        //         case '5':
        //             translate+=" on Thursday,"
        //             break;
        //         case '6':
        //             translate+=" on Friday,"
        //             break;           
        //         default:
        //             translate+=" on Saturday,"
        //       }      
        //   }
        // }
        // translate=translate.slice(0,translate.length-1)
        let num = str.match(/\d+/g).join();
        const daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let translate = str.replace(/thu/gi, "on");
        translate = translate.replace(/\d+/gi, (x) => daysInWeek[x-2]);
        // link to use https://www.w3schools.com/jsref/jsref_obj_regexp.asp
        document.getElementById("solutionNumber").innerHTML = num
        document.getElementById("solutionEnglish").innerHTML = translate
        console.log("Success");
    }else{
        alert("Vui lòng nhập chuỗi VD: 'thu 2, thu 3, thu7' !")
    }
}
window.cal = cal;


/***/ })
/******/ ]);