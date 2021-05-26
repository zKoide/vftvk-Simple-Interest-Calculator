function compute(){
    //save in variables the data from "form"
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    //verify if "principal" is greater than zero
    if(principal <= 0){
        //if dont open the alert and after focus the input "principal"
        alert("Enter a positive number!");
        document.getElementById("principal").focus();
        document.getElementById("result").innerHTML=""
    }
    //case true show result
    else{
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    }
}
//update rate value
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

        