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

//Alternative solution using java script


// document.getElementById("SignUpButton").onclick = function(){
// const formData = document.pageForm.elements;
//     for(let i = 0; i < formData.length; i++){
//         if(formData[i].type != "submit"){
//             console.log(formData[i].value);
//         }
//     }
//     alert("Check answer at console");
// } 

$(function(){
    $("#SignUpButton").click(
        function(evt){ evt.preventDefault();
        $("form").find("input").each(
            function(){
            console.log($(this).val());
        })
    })
});

//2
