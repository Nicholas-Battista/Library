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

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  addToLibrary() {
    myLibrary.push(this);
  }
}

function handleSubmitBtn(event) {
  event.preventDefault();
  if (
    inputs.inputTitle.value.trim() === "" ||
    inputs.inputAuthor.value.trim() === "" ||
    inputs.inputPages.value.trim() === ""
  ) {
    form.classList.add("shake");

    setTimeout(() => {
      form.classList.remove("shake");
    }, 1000);

    return;
  }

  const newBook = new Book(
    inputs.inputTitle.value,
    inputs.inputAuthor.value,
    inputs.inputPages.value,
    inputs.inputRead.checked
  );
  newBook.addToLibrary();
  form.reset();
  form.classList.toggle("is-inactive");
  document.body.classList.toggle("overlay");
  displayLibrary();
}

submit.addEventListener("click", handleSubmitBtn);

function displayLibrary() {
  content.innerHTML = "";
  myLibrary.forEach((book) => {
    let div = document.createElement("div");

    let title = document.createElement("p");
    title.innerHTML = "<span class='label'>Title:</span> " + book.title;
    div.appendChild(title);

    let author = document.createElement("p");
    author.innerHTML = "<span class='label'>Author:</span> " + book.author;
    div.appendChild(author);

    let pages = document.createElement("p");
    pages.innerHTML = "<span class='label'>Pages:</span> " + book.pages;
    div.appendChild(pages);

    let read = document.createElement("p");
    read.innerHTML = book.read ? "Read" : "Not read";
    if (read.innerHTML === "Read") {
      read.style.backgroundColor = "#05F140";
    } else {
      read.style.backgroundColor = "#EF6F6C";
    }
    read.addEventListener("click", () => {
      if (read.innerHTML === "Read") {
        read.innerHTML = "Not Read";
        read.style.backgroundColor = "#EF6F6C";
        book.read = false;
      } else {
        read.innerHTML = "Read";
        read.style.backgroundColor = "#05F140";
        book.read = true;
      }
      console.log(myLibrary);
    });
    div.appendChild(read);

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 0 24 24");

    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"
    );

    svg.appendChild(path);
    div.appendChild(svg);
    svg.addEventListener("click", () => {
      div.remove();

      const index = myLibrary.findIndex(
        (bookItem) => bookItem.title === book.title
      );
      if (index !== -1) {
        myLibrary.splice(index, 1);
      }
      console.log(myLibrary);
    });

    div.classList.add("book");
    content.appendChild(div);
  });
}

addBook.addEventListener("click", () => {
  form.classList.toggle("is-inactive");
  document.body.classList.toggle("overlay");
});
