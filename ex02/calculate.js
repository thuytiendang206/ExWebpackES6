import json from './country-by-avg-male-height.json';
//let json = require('./country-by-avg-male-height.json');
console.log(json);
export function sortname(){
    // Cách bờm của tiên
    // var sortedArray = [];
    //     for(let i in json)
    //       {
    //         sortedArray.push([json[i].country, json[i]]);
    //     }
    // let result=sortedArray.sort();
    let result = json.slice().sort((a, b) => {
        let countryA = a.country.toUpperCase();
        let countryB = b.country.toUpperCase();
        return countryA < countryB ? -1
               : countryA > countryB ? 1 : 0;
        })
    console.log(result);
    document.getElementById("solution").value=JSON.stringify(result);
}
export function sortheight(){
    // Cách bờm của tiên 
    // let sortedArray = [];
    //     for(let i in json)
    //     {
    //         sortedArray.push([json[i].height, json[i]]);
    //    }
    // let result=sortedArray.sort((a, b)=>{return b-a});
    let result = json.slice().sort((a, b) => b.height - a.height);
    console.log(result);
    document.getElementById("solution").value=JSON.stringify(result);
}
export function findName(){
    // cách bờm của con tiên
    // let findArray = [];
    // let sum=0;
    // console.log(json[0].country[0]);
    // for(let i in json)
    // {
    //     if ((json[i].height>=160 && json[i].height<=170)&&(json[i].country[0].toUpperCase()=='B' || json[i].country[0].toUpperCase()=='C')){
    //         findArray.push(json[i]);
    //         sum+=json[i].height;
    //     }
    // }
    // console.log(findArray);
    // console.log(sum);
    let findArray = json.filter((city) => {
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
