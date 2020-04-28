window.onload= function(){
    "use strict";
    
}
    document.getElementById("button").onclick= myButtonClick;

    function myButtonClick(){
        alert("Hello, World!");
    }

    function growLarger() {
        document.getElementById("text-area").style.fontSize = 
            (parseInt(window.getComputedStyle(document.getElementById("text-area")).fontSize) + 8 / 3) + "px";
    }

    document.getElementById("button").onclick = function() {
        setInterval(growLarger, 500);
    }

    // document.getElementById("button").onclick = function(){
    //     document.getElementById("text-area").style.fontSize ="24pt";
    // }

    document.getElementById("box").onchange = function(){
        let ischecked = document.getElementById("box").checked;
        if(ischecked){
            document.getElementById("text-area").style.font = "bold";
            document.getElementById("text-area").style.color ="green";
            document.getElementById("text-area").style.textDecoration = "underline";
            document.getElementById("body").style.backgroundImage = "url(image/hundred-dollar-bill.jpg)";
        }  else{
            document.getElementById("text-area").style.font = "normal";
            document.getElementById("text-area").style.color ="black";
            document.getElementById("text-area").style.textDecoration = "none";
            document.getElementById("body").style.backgroundImage = "none";
        } 
    }

    function pigLatin(string) {
        let firstLetter = string.charAt(0).toLowerCase();
        if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
            return string + "ay";
        } else {
            return string.charAt(1).toUpperCase() + string.substr(2) + firstLetter + "ay";
        }
    }
    
    function malkovizer(string) {
        if (string.length >= 5) {
            return "Malkovich";
        } else {
            return string;
        }
    }

    document.getElementById("pig_latin_button").onclick = function() {
        let userText = document.getElementById("text-area").value;
        let changedText = userText.split(" ").map(word => pigLatin(word)).join(" ");
        document.getElementById("text-area").value = changedText;
    }
    document.getElementById("malkovich_button").onclick = function() {
        let userText = document.getElementById("text-area").value;
        let changedText = userText.split(" ").map(word => malkovizer(word)).join(" ");
        document.getElementById("text-area").value = changedText;
    }