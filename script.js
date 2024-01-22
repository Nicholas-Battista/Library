const content = document.querySelector(".content");
const addBook = document.querySelector(".addBook");
const form = document.querySelector("form");
const submit = document.querySelector(".submit");

const inputs = {
  inputTitle: document.querySelector(".title"),
  inputAuthor: document.querySelector(".author"),
  inputPages: document.querySelector(".pages"),
  inputRead: document.querySelector(".read"),
};
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

function handleSubmitBtn(event) {
  event.preventDefault();

  const newBook = new Book(
    inputs.inputTitle.value,
    inputs.inputAuthor.value,
    inputs.inputPages.value,
    inputs.inputRead.checked
  );
  addToLibrary(newBook);
  form.reset();
  form.classList.toggle("is-inactive");
  displayLibrary();
}

submit.addEventListener("click", handleSubmitBtn);

function displayLibrary() {
  content.innerHTML = "";
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
    read.innerHTML = book.read ? "Read" : "Not read";
    div.appendChild(read);

    div.classList.add("book");
    content.appendChild(div);
  });
}

addBook.addEventListener("click", () => {
  form.classList.toggle("is-inactive");
});
