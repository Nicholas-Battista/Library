const content = document.querySelector(".content");
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addToLibrary(book) {
  myLibrary.push(book);
}

const theHobbit = new Book("hobbit", "JRR TOLK", 250, "i have read");
addToLibrary(theHobbit);
const one = new Book("one piece", "oda", 250, "i have not");
addToLibrary(one);

myLibrary.forEach((book) => {
  let div = document.createElement("div");

  let title = document.createElement("p");
  title.innerHTML = book.title;
  div.appendChild(title);

  let author = document.createElement("p");
  author.innerHTML = book.author;
  div.appendChild(author);

  let pages = document.createElement("p");
  pages.innerHTML = book.pages;
  div.appendChild(pages);

  let read = document.createElement("p");
  read.innerHTML = book.read;
  div.appendChild(read);

  div.classList.add("book");
  content.appendChild(div);
});
