let myLibrary = [theHobbit, aGameOfThrones];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, has been read ${read} times`;
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, 1);
// console.log(theHobbit.info());

const aGameOfThrones = new Book(
  "A Game of Thrones",
  "George.R.R.Martin",
  694,
  1
);

function addBookToLibrary() {
  // do stuff here
}
