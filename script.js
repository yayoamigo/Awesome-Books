const booksBody = document.getElementById('displayed-books');
const addBooksForm = document.getElementById('add-books');

const booksArr = [];

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

// function for removing books from interface
function removeBookUI(element) {
  element.parentElement.remove();
}

// Element target
booksBody.addEventListener('click', (e) => {
  const book = e.target.parentElement;
  removeBooks(book);
  removeBookUI(e.target);
});

addBooksForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newBook = {};
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  newBook.title = titleInput.value;
  newBook.author = authorInput.value;
  addBook(newBook);
  booksArr.push(newBook);
  localStorage.setItem('books', JSON.stringify(booksArr));
  titleInput.value = '';
  authorInput.value = '';
});