"use strict"
document.getElementById("button").onclick = function(){
    setInterval(function() {
        let date = new Date();
        let dateString = date.toString();//date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + ":" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        document.getElementById("clock").innerHTML = dateString;
        document.getElementById("image").src ="image/giphy3.gif";
    }, 1000);    
}