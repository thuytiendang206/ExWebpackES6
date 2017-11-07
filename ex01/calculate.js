export default function cal(){
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
