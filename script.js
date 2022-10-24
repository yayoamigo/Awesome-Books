const body = document.getElementById('displayed-books');
const addBtn = document.querySelector('.add');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');



function AddingBook (title,author){
 //creating a div 
 const booksDiv = document.createElement('div');
 //adding the class books to new div
 booksDiv.classList.add('books');
 //adding new div to the html page
 body.appendChild(booksDiv);
 //book data
 let title = titleInput.value;
 let author = authorInput.value;
 //book content
 const content = `<p class="book-title">Lorem ipsum</p>
 <p class="author"> Testeroo testy</p>
<button class="remove-btn"> Remove</button>
<hr>`;
//inserting the book content to new div
booksDiv.insertAdjacentHTML("beforeend", content);
}