//refactor global variables out of functions

// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(bookList, bookName) {
  let bookListAdded = [...bookList];

  bookListAdded.push(bookName);
  return bookListAdded;

  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  const bookListRemoved = [...bookList];
  const book_index = bookListRemoved.indexOf(bookName);
  if (book_index >= 0) {
    bookListRemoved.splice(book_index, 1);
    return bookListRemoved;

    // Change code above this line
  }
}

console.log(add(bookList, "A Brief History of Time"));

console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));

console.log(bookList);
