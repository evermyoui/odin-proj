const myLibrary = [];

function Book(title, author, pages, isRead){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = crypto.randomUUID();
}
function info(book){
  let information = `${book.title} by ${book.author}, ${book.pages} pages`;
  if (book.isRead){
      return `${information}, read it.`
  }else {
      return `${information}, not read yet.`
  }
}
function addtoLibrary(book){
  myLibrary.push(book);
}



const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", false);


const newBtn = document.querySelector(".new-btn");
const bookDialog = document.querySelector("#book-dialog");
newBtn.addEventListener("click", ()=> {
  bookDialog.showModal();
})