"use strict"
var myVar;
document.getElementById("Start-button").onclick = function(){
       myVar= setInterval(myTimer, 1000);
       //document.body.style.backgroundImage = "url(./image/giphy3.gif)";
}

document.getElementById("Stop-button").onclick = function(){
    clearInterval(myVar);    
    document.getElementById("image").src = "";
}

function myTimer() {
    let date = new Date();
    let dateString = date.toString();//date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + ":" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    document.getElementById("clock").innerHTML = dateString;
    document.getElementById("image").src ="image/giphy3.gif";
}

