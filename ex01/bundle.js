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




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function cal(){
    let getdate = document.getElementById("date").value;
    if (getdate!=""){
        let date= new Date(getdate)
        console.log(date)
        let currentday= new Date();
        console.log(currentday)
        let result= currentday.getFullYear()- date.getFullYear();
        console.log(result+'nam tru nam')
        if (currentday.getFullYear()-date.getFullYear() >0){
            console.log( currentday.getMonth()+'thang hien tại'+ date.getMonth()+"thang input")
            if ( currentday.getMonth()- date.getMonth() >= 0){
                if (currentday.getMonth()- date.getMonth() == 0){
                    if (currentday.getDate() -date.getDate() < 0){
                        result -=1
                        console.log(result+'ngay tru ngay')
                    }
                }    
            }else{
                result-=1
                console.log(result+'thang tru thang')
            }
        } else{
            alert("Vui lòng nhập ngày tháng năm sinh hợp lý!")
        }
        console.log(currentday.getFullYear());
        document.getElementById("solution").innerHTML = `Bạn đang ở tuổi  ${result}`
        console.log("Success");
    }else{
        alert("Vui lòng nhập ngày tháng năm sinh!")
    }
}
window.cal = cal;


/***/ })
/******/ ]);