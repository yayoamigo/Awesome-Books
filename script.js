const booksBody = document.getElementById('displayed-books');
const addBooksForm = document.getElementById('add-books');

class Books { 
  //method for setting the inicial array
  static booksArr = [];

  constructor(title,author){
    this.title = title;
    this.author = author;
  }
  //method for pushing the new book into the array
  static pushBook(newBook){
    Books.booksArr.push(newBook);
  }
  //method for removing the book from the html
  static removeBookUI(element) {
    element.parentElement.remove();
  }
  
}

// function for adding a book
function addBook(newBook) {
  // book content
  const content = `<div class="books"><p id="title-input">${newBook.title}</p>
  <p class="author">${newBook.author}</p>
  <button class="remove-btn"> Remove</button>
  <hr></div>`;
  // inserting the book content to new div
  booksBody.insertAdjacentHTML('beforeend', content);
}

// function for displaying the books
function displayBooks() {
  const books = JSON.parse(localStorage.getItem('books'));
  books.forEach((book) => addBook(book));
}

window.addEventListener('DOMContentLoaded', displayBooks);

// function for removing books from local storage
function removeBooks(book) {
  const bookTitle = book.querySelector('#title-input').innerText;
  const b = JSON.parse(localStorage.getItem('books'));
  const filterIndex = b.findIndex((x) => x.title === bookTitle);
  b.splice(filterIndex, 1);
  localStorage.setItem('books', JSON.stringify(b));
}

// Element target
booksBody.addEventListener('click', (e) => {
  const book = e.target.parentElement;
  removeBooks(book);
  Books.removeBookUI(e.target);
});

addBooksForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const newBook = new Books(titleInput.value,authorInput.value);
  addBook(newBook);
  Books.pushBook(newBook);
  localStorage.setItem('books', JSON.stringify(Books.booksArr));
  titleInput.value = '';
  authorInput.value = '';
});