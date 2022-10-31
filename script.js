import {
  addBook, Books, removeBooks, startTime,
} from './modules/modules.js';

const booksBody = document.getElementById('displayed-books');
const addBooksForm = document.getElementById('add-books');

// display books

const displayBooks = () => {
  const books = JSON.parse(localStorage.getItem('books'));
  books.forEach((book) => addBook(book));
};

window.addEventListener('DOMContentLoaded', displayBooks);

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

setInterval(startTime, 1000);

// Add book pop-window
const addPage = document.getElementById('add-book-section');
const listPage = document.getElementById('all-books-section');
const contactPage = document.getElementById('contact-section');
const addSection = document.getElementById('add-book-form');
const listSection = document.getElementById('book-list');
const contactSection = document.getElementById('contact');

const showBooks = () => {
  addSection.classList.replace('hide', 'show');
  listSection.classList.replace('show', 'hide');
  contactSection.classList.replace('show', 'hide');
};

const showContact = () => {
  addSection.classList.replace('show', 'hide');
  listSection.classList.replace('show', 'hide');
  contactSection.classList.replace('hide', 'show');
};

const showList = () => {
  addSection.classList.replace('show', 'hide');
  listSection.classList.replace('hide', 'show');
  contactSection.classList.replace('show', 'hide');
};

addPage.addEventListener('click', showBooks);
listPage.addEventListener('click', showList);
contactPage.addEventListener('click', showContact);
