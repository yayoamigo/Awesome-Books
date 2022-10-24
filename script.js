const body = document.getElementById('displayed-books');
const addBtn = document.querySelector('.add');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addBooksForm = document.getElementById('add-books');

let booksArr = [];

//function for adding a book

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
 localStorage.setItem('books', JSON.stringify(booksArr));
 console.log(booksArr);

 //book content
 const content = `<p id="${newBook.title}">${newBook.title}</p>
 <p class="author">${newBook.author}</p>
<button onclick="remove(this)"> Remove</button>
<hr>`;
//inserting the book content to new div
booksDiv.insertAdjacentHTML("beforeend", content);
}

window.addEventListener('DOMContentLoaded', () => {
  const x = JSON.parse(localStorage.getItem('books'));
  if (localStorage.getItem('books')) {
  titleInput.value = x[0].title;
  authorInput.value = x[0].author;
  } else {
    console.log('No data')
  };

});

//function for deleting a book
function remove(e){
 e.parentNode.parentNode.removeChild(e.parentNode);
}




addBooksForm.addEventListener('submit', (e) => {
  AddingBook();
  e.preventDefault();
})