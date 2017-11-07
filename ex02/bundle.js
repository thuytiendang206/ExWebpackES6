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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = [{"country":"Netherlands","height":181},{"country":"Iceland","height":179.8},{"country":"Norway","height":179.7},{"country":"Sweden","height":179.3},{"country":"Denmark","height":178.8},{"country":"Finland","height":178.4},{"country":"Eritrea","height":175.8},{"country":"Czech Republic","height":178.3},{"country":"Slovenia","height":178.1},{"country":"Luxembourg","height":178},{"country":"Croatia","height":177.6},{"country":"Germany","height":177.4},{"country":"Estonia","height":177.1},{"country":"Austria","height":177},{"country":"Belgium","height":176.6},{"country":"Serbia","height":176.5},{"country":"Switzerland","height":176.5},{"country":"United States","height":176.4},{"country":"Australia","height":176.3},{"country":"Poland","height":176},{"country":"Greece","height":175.7},{"country":"New Zealand","height":175.5},{"country":"United Kingdom","height":175.4},{"country":"Hungary","height":175.3},{"country":"Ukraine","height":175},{"country":"Ireland","height":175},{"country":"Russia","height":175},{"country":"Israel","height":175},{"country":"Lithuania","height":175},{"country":"Canada","height":174.3},{"country":"Lebanon","height":174.2},{"country":"Turkey","height":174.1},{"country":"France","height":174.1},{"country":"Uzbekistan","height":173.4},{"country":"Italy","height":173.2},{"country":"Senegal","height":173},{"country":"Jamaica","height":172.8},{"country":"Mali","height":172.5},{"country":"Spain","height":172},{"country":"Romania","height":172},{"country":"Azerbaijan","height":172},{"country":"Uruguay","height":171.8},{"country":"Argentina","height":171.3},{"country":"SouthKorea","height":171},{"country":"Syria","height":171},{"country":"Morocco","height":170.7},{"country":"Iran","height":170.6},{"country":"Portugal","height":170.5},{"country":"Ivory Coast","height":170.4},{"country":"Egypt","height":170.3},{"country":"Tunisia","height":170.3},{"country":"Algeria","height":170.2},{"country":"South Africa","height":170},{"country":"Cameroon","height":170},{"country":"Gambia","height":170},{"country":"Ghana","height":169.8},{"country":"Brazil","height":169.5},{"country":"Colombia","height":169.5},{"country":"Taiwan","height":169.3},{"country":"Chile","height":169.2},{"country":"Venezuela","height":169},{"country":"Paraguay","height":169},{"country":"Japan","height":168.6},{"country":"Hong Kong","height":168.5},{"country":"China","height":168.3},{"country":"Mexico","height":167.5},{"country":"Pakistan","height":167},{"country":"Singapore","height":166.6},{"country":"Thailand","height":166.4},{"country":"Mongolia","height":166.4},{"country":"Malaysia","height":166},{"country":"Sri Lanka","height":166},{"country":"Malawi","height":166},{"country":"Bahrain","height":165.6},{"country":"Iraq","height":165.4},{"country":"Nigeria","height":165},{"country":"Peru","height":164.3},{"country":"NorthKorea","height":163.8},{"country":"India","height":162.3},{"country":"Vietnam","height":162.1},{"country":"Philippines","height":162},{"country":"Indonesia","height":161.5},{"country":"Cambodia","height":160.3}]

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calculate__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__country_by_avg_male_height_json__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__country_by_avg_male_height_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__country_by_avg_male_height_json__);


//const jsonConst = require('./country-by-avg-male-height.json');
console.log(__WEBPACK_IMPORTED_MODULE_1__country_by_avg_male_height_json___default.a);
document.getElementById("showJSON").value=JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__country_by_avg_male_height_json___default.a)


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sortname */
/* unused harmony export sortheight */
/* unused harmony export findName */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__country_by_avg_male_height_json__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__country_by_avg_male_height_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__country_by_avg_male_height_json__);

//let json = require('./country-by-avg-male-height.json');
console.log(__WEBPACK_IMPORTED_MODULE_0__country_by_avg_male_height_json___default.a);
function sortname(){
    // Cách bờm của tiên
    // var sortedArray = [];
    //     for(let i in json)
    //       {
    //         sortedArray.push([json[i].country, json[i]]);
    //     }
    // let result=sortedArray.sort();
    let result = __WEBPACK_IMPORTED_MODULE_0__country_by_avg_male_height_json___default.a.slice().sort((a, b) => {
        let countryA = a.country.toUpperCase();
        let countryB = b.country.toUpperCase();
        return countryA < countryB ? -1
               : countryA > countryB ? 1 : 0;
        })
    console.log(result);
    document.getElementById("solution").value=JSON.stringify(result);
}
function sortheight(){
    // Cách bờm của tiên 
    // let sortedArray = [];
    //     for(let i in json)
    //     {
    //         sortedArray.push([json[i].height, json[i]]);
    //    }
    // let result=sortedArray.sort((a, b)=>{return b-a});
    let result = __WEBPACK_IMPORTED_MODULE_0__country_by_avg_male_height_json___default.a.slice().sort((a, b) => b.height - a.height);
    console.log(result);
    document.getElementById("solution").value=JSON.stringify(result);
}
function findName(){
    // cách bờm của con tiên
    // let findArray = [];
    // let sum=0;
    // console.log(json[0].country[0]);
    // for(let i in json)
    // {
    //     if ((json[i].height>=160 && json[i].height<=180)&&(json[i].country[0].toUpperCase()=='B' || json[i].country[0].toUpperCase()=='C')){
    //         findArray.push(json[i]);
    //         sum+=json[i].height;
    //     }
    // }
    // console.log(findArray);
    // console.log(sum);
    let findArray = __WEBPACK_IMPORTED_MODULE_0__country_by_avg_male_height_json___default.a.filter((city) => {
        return (city.height >= 160 && city.height <= 170) && (city.country[0].toUpperCase() === 'B' || city.country[0].toUpperCase() === 'C');
    })
    let sum =findArray.reduce((height, city) => {
        return height += city.height
        }, 0)
    document.getElementById("solution").value=JSON.stringify(findArray);
    document.getElementById("sumHeight").innerHTML = `Sum of height = ${sum}`;
}
window.sortname = sortname;
window.sortheight = sortheight;
window.findName = findName;


/***/ })
/******/ ]);