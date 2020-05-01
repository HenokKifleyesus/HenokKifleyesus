
"use strict";

//alert("Open the page");


//     document.getElementById("NewProductNumber").onclick = function(){
//     let x = document.getElementById("productNumber").value;
//     let y = document.getElementById("quantityInStock").value;
//     let z = document.getElementById("name").value;
//     let a = document.getElementById("supplier").value;
//     let b = document.getElementById("unitPrice").value;
//     let c = document.getElementById("dateSupplied").value;

//     let myWindow = window.open("","MsgWindow", "width=200", "height=100");
//         myWindow.document.write("Details of the Product"+ 
//             "<br> ProductNumber:" +x
//             +"<br>"+" QuantityInStock:" +y 
//             +" <br> Name:" +z
//             +"<br> Supplier:"+a
//             +"<br> UnitPrice:"+b
//             +"<br> DateSupplied:"+c);


// }
$(function(){
$("#NewProductNumber").submit(
    function(evt){
        evt.preventDefault();
        $(".container").append($("<div></div>",{
            "id": "form_data_display"
        }));
        $("input").each(function() {
            $("#form_data_display").append(
                $(`<p>${$(this).val()}</p>`)
            );
        }
        );
    }
);
}
);