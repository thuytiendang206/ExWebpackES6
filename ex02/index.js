// 2.
// Cho Countries: https://github.com/samayo/country-json/blob/master/src/country-by-avg-male-height.json;
// a. Sort: Theo tên(tăng dần)
// b. Sort: Theo height(giảm dần)
// c. Tìm các quốc gia có height [160;170] và tên quốc gia bắt đầu bằng ký tự B hoặc C
// d. Tính tổng height của câu c
import cal from './calculate';
import jsonConst from './country-by-avg-male-height.json';
//const jsonConst = require('./country-by-avg-male-height.json');
console.log(jsonConst);
document.getElementById("showJSON").value=JSON.stringify(jsonConst)
