let myLibrary = [];
// theHobbit, aGameOfThrones

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
myLibrary.push(theHobbit);

const aGameOfThrones = new Book(
  "A Game of Thrones",
  "George.R.R Martin",
  694,
  true
);
myLibrary.push(aGameOfThrones);

// Identifies "Add Book +" button
const addBookButton = document.querySelector(".add-book");
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
  let newTitle = title.value;
  let author = document.querySelector(".author");
  let newAuthor = author.value;
  let pages = document.querySelector(".pages");
  let newPages = pages.value;
  let read = document.querySelector(".read");
  let newRead = read.checked;
  let newBook = new Book(newTitle, newAuthor, newPages, newRead);
  myLibrary.push(newBook);
  popupForm.style.display = "none";
  libraryUpdate();
});

// The object constructor function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Updates the display to show all the books
const libraryUpdate = () => {
  let bookSection = document.querySelector(".book-section");

  // Clears display to allow for the update
  while (bookSection.firstChild) {
    bookSection.removeChild(bookSection.lastChild);
  }

  // Creates all new elements to populate the card for each book. Then adds them to the HTML
  for (let i = 0; i < myLibrary.length; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "book");
    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", "book-content");
    let title = document.createElement("p");
    title.textContent = myLibrary[i].title;
    let author = document.createElement("p");
    author.textContent = myLibrary[i].author;
    let pages = document.createElement("p");
    pages.textContent = myLibrary[i].pages + " pages";
    let read = document.createElement("button");
    read.setAttribute("class", "read-button");
    if (myLibrary[i].read === false) {
      read.textContent = "Not Read";
      read.style.backgroundColor = "red";
    } else if (myLibrary[i].read === true) {
      read.textContent = "Read";
      read.style.backgroundColor = "green";
    }

    card.appendChild(cardContent);
    cardContent.appendChild(title);
    cardContent.appendChild(author);
    cardContent.appendChild(pages);
    cardContent.appendChild(read);

    bookSection.appendChild(card);
  }

  // Allow the read buttton to be toggled
  let readButton = document.querySelectorAll(".read-button");
  readButton.forEach((readButton) => {
    readButton.addEventListener("click", () => {
      if (readButton.textContent === "Read") {
        readButton.textContent = "Not Read";
        readButton.style.backgroundColor = "red";
      } else if (readButton.textContent === "Not Read") {
        readButton.textContent = "Read";
        readButton.style.backgroundColor = "green";
      }
    });
  });
};
