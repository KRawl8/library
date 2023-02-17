let myLibrary = [];
// theHobbit, aGameOfThrones

// const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, 1);

// const aGameOfThrones = new Book(
//   "A Game of Thrones",
//   "George.R.R.Martin",
//   694,
//   1
// );

const addBookButton = document.querySelector(".add-book"); // Identifies "Add Book +" button
addBookButton.addEventListener("click", () => {
  createNewBook();
});

// Opens up the pop-up form to enter in new book details
const popupForm = document.querySelector(".popup-form");
function createNewBook() {
  popupForm.style.display = "block";
}

// When the add book button is pressed all of the forms inputs gets passed to the object constructor
const enterBookButton = document.querySelector(".enter-book");
enterBookButton.addEventListener("click", (event) => {
  event.preventDefault();
  let title = document.querySelector(".title");
  let newTitle = title.textContent;
  let author = document.querySelector(".author");
  let newAuthor = author.textContent;
  let pages = document.querySelector(".pages");
  let newPages = pages.textContent;
  let newRead = document.querySelector(".read");
  newBook = new Book(newTitle, newAuthor, newPages, newRead);
  myLibrary.push(newBook);
  popupForm.style.display = "none";
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, has been read ${read} times`;
  };
}

// function addBookToLibrary() {}
