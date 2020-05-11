$(document).ready(function(){
      "use strict";

      fetchAllBooks();

      function fetchAllBooks(){
          fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
          .then(response=>{
              if(response.ok){
                  return response.json();
              }
              else {
                  return Promise.reject({status:response.status, statusText:response.statusText});
              }
          })
          .then(theBooks=>{
              let content = "";
              if(theBooks.length>0){
                  theBooks.forEach(function(book,i){
                      content+= 
                      `
                        <tr>
                            <th scope="row">${i+1}.</th>
                            <td>${book.isbn}</td>
                            <td>${book.title}</td>
                            <td>${book.overdueFee}</td>
                            <td>${book.publisher}</td>
                            <td>${book.datePublished}</td>
                        </tr>
                    `
                  
                      
                  });
              }
              else {
                content += `
                <tr>
                    <td style="color:red text-align: center;" colspan="9">No books found</td>
                </tr>
                `;
              }
              $("#bookList").html(content);
              $("#formContainer").hide();
          })
          .catch(err => {
            const tbodyErrMsg = `<tr>
                <td style="text-align: center;" colspan="9"><p style='color:#ff0000;'>
                We are sorry. The book list service is unavailable. Please try again later.</p></td>
                </tr>`;
            $("#bookList").html(tbodyErrMsg);
            $("#formContainer").hide();
            console.log("Error message:", err);        
        });
      }

      $(".add-new-book-button").each(function(){
          $(this).click(function(evt){
              evt.preventDefault();
              $("#listContainer").hide();
              $("#msg_and_nav_container").hide();
              $("#formContainer").show();
          })
      })

      $("#return_book_list").click(function(evt) {
        evt.preventDefault();
        $("#formContainer").hide();
        $("#msg_and_nav_container").hide();
        $("#listContainer").show();
    })

    $("#newBookForm").submit(function(evt) {
        evt.preventDefault();
        const bookId = Math.floor(Math.random() * 1000000);
        const isbn = $("#isbn").val();
        const bookTitle = $("#bookTitle").val();
        const overdueFee = $("#overdueFee").val();
        const publisher = $("#publisher").val();
        const publishedDate = $("#publishedDate").val();

        const bookData = {
            "bookId": bookId,
            "isbn": isbn,
            "title":bookTitle,
            "overdueFee": overdueFee,
            "publisher": publisher,
            "datePublished": publishedDate
        }

    fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
            method: "post",
            body: JSON.stringify(bookData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => { return {"status": "ok"};})
        .then(function() {
            $("#form_reset_button").click();
            $("#formContainer").hide();
            $("#msg_display").html(`You've submitted the book ${bookTitle}.`);
            $("#msg_and_nav_container").show();
        })
        .catch(function(err) {
            console.log(err);
        });        
    })























})