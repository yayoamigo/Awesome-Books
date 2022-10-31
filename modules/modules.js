export class Books {
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

export const removeBooks = (book) => {
  const bookTitle = book.querySelector('#title-input').innerText;
  const b = JSON.parse(localStorage.getItem('books'));
  const filterIndex = b.findIndex((x) => x.title === bookTitle);
  b.splice(filterIndex, 1);
  localStorage.setItem('books', JSON.stringify(b));
};

export const startTime = () => {
  /* eslint-disable */
  const { DateTime } = luxon;
  const time = DateTime.now().setZone('America/Bogota');
  const now = time.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  document.getElementById('time').innerHTML = now;
}
