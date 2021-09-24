
function changeColor()
{
var colors=document.getElementById("color").value;
document.body.style.color = colors;

}






function countDown()
{

    var secondPass;
   

var startDate=document.getElementById("start-date").value;
var startDateSeconds=startDate%100;
startDate=Math.floor(startDate/100);
var startDateMinutes=startDate%100;
startDate=Math.floor(startDate/100);
var startDateHours=startDate%100;


    var endDate=document.getElementById("end-date").value;
        var endDateSeconds=endDate%100;
        endDate=Math.floor(endDate/100);
        var endDateMinutes=endDate%100;
        endDate=Math.floor(endDate/100);
        var endDateHours=endDate%100;



var numberStartSecond=startDateHours*60*60+startDateMinutes*60+startDateSeconds;
var numberEndSecond=endDateHours*60*60+endDateMinutes*60+endDateSeconds;

       var countDiv=document.getElementById("timer");
  
var countCheck=setInterval(function(){

//"use strict";
secondPass();

},1000);
    


function secondPass()
{

//"use strict";

var hours=Math.floor(numberStartSecond/3600),minutes=Math.floor((numberStartSecond%3600)/60),second=((numberStartSecond%3600)%60);


countDiv.innerHTML=hours+":"+minutes+":"+second;
if(numberStartSecond>=numberEndSecond)
{
 

numberStartSecond-=1;

}
else
{

    document.getElementById("timer").style.display = "none";


}

}



}