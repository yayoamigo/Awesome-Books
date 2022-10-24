const body = document.getElementById('displayed-books');
const addBtn = document.querySelector('.add');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addBooksForm = document.getElementById('add-books');

let booksArr = [];

function AddingBook (){
 //creating a div 
 const booksDiv = document.createElement('div');
 //adding the class books to new div
 booksDiv.classList.add('books');
 //adding new div to the html page
 body.appendChild(booksDiv);
 //book data

  const newBook = {
    title: titleInput.value,
    author: authorInput.value,
  }
 booksArr.push(newBook);
 console.log(booksArr);

 //book content
 const content = `<p class="book-title">${newBook.title}</p>
 <p class="author">${newBook.author}</p>
<button class="remove-btn"> Remove</button>
<hr>`;
//inserting the book content to new div
booksDiv.insertAdjacentHTML("beforeend", content);
}

addBooksForm.addEventListener('submit', (e) => {
  AddingBook();
  e.preventDefault();
})