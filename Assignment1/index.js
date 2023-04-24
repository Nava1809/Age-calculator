function  myfunction(){
    var date=document.getElementById("date").value
    var Month=document.getElementById("Month").value
    var Year=document.getElementById("Year").value
    if(parseInt(date)==NaN || parseInt(Month)==NaN || parseInt(Year)==NaN){
      document.getElementById("demo").innerHTML="please Enter valid input"   
    }
    
  
    
}