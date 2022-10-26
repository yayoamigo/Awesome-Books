const booksBody = document.getElementById('displayed-books');
const addBooksForm = document.getElementById('add-books');

class Books {
  // method for setting the inicial array
  static booksArr = [];

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // method for pushing the new book into the array
  static pushBook(newBook) {
    Books.booksArr.push(newBook);
  }

  // method for removing the book from the html
  static removeBookUI(element) {
    element.parentElement.remove();
  }
}

// function for adding a book
function addBook(newBook) {
  // book content
  const content = `<div class="books"><div class="books-info"><p id="title-input">"${newBook.title}"</p><p>&nbsp;by&nbsp;</p>
  <p class="author">${newBook.author}</p></div>
  <button class="remove-btn"> Remove</button>
  </div>`;
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
  const newBook = new Books(titleInput.value, authorInput.value);
  addBook(newBook);
  Books.pushBook(newBook);
  localStorage.setItem('books', JSON.stringify(Books.booksArr));
  titleInput.value = '';
  authorInput.value = '';
});

// Date
const date = new Date();
const d = date.toDateString();
const local = date.toLocaleTimeString();
document.getElementsByClassName('time')[0].innerText = `${d} , ${local}`;

// Add book pop-window
const addPage = document.getElementById('add-book-section');
const listPage = document.getElementById('all-books-section');
const contactPage = document.getElementById('contact-section');
const addSection = document.getElementById('add-book-form');
const listSection = document.getElementById('book-list');
const contactSection = document.getElementById('contact');

function showBooks() {
  addSection.classList.replace('hide', 'show');
  listSection.classList.replace('show', 'hide');
  contactSection.classList.replace('show', 'hide');
}

function showContact() {
  addSection.classList.replace('show', 'hide');
  listSection.classList.replace('show', 'hide');
  contactSection.classList.replace('hide', 'show');
}

function showList() {
  addSection.classList.replace('show', 'hide');
  listSection.classList.replace('hide', 'show');
  contactSection.classList.replace('show', 'hide');
}

addPage.addEventListener('click', showBooks);
listPage.addEventListener('click', showList);
contactPage.addEventListener('click', showContact);