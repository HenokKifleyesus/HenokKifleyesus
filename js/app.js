"use strict";
//1 Solution one
// function myFunction(){
//                 let x = document.getElementById("emailAddress").value;
//                 let y = document.getElementById("pass").value;
//                 let z = document.getElementById("url").value;
//                 console.log(x);
//                 console.log(y);
//                 console.log(z);
//               }

//Alternative solution              
document.getElementById("SignUpButton").onclick = function(){
const formData = document.pageForm.elements;
    for(let i = 0; i < formData.length; i++){
        if(formData[i].type != "submit"){
            console.log(formData[i].value);
        }
    }
} 

//2
