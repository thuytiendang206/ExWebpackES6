export default function cal(){
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
