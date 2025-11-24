const newBtn = document.querySelector(".new-btn");
const bookDialog = document.querySelector("#book-dialog");
const form = bookDialog.querySelector("form");
const parentDiv = document.querySelector(".books");

const cancelBtn = bookDialog.querySelector("#cancel-btn");
const addBtn = bookDialog.querySelector("#add-btn");
const bookTitle = bookDialog.querySelector("#book-title");
const bookAuthor = bookDialog.querySelector("#book-author");
const bookPages = bookDialog.querySelector("#book-pages");


const library = [];

function Book(title, author, pages, status){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = crypto.randomUUID();
}
Book.prototype.toggleStatus = function (){
  this.status = !this.status;
}

newBtn.addEventListener("click", ()=> bookDialog.showModal());
cancelBtn.addEventListener("click", ()=> bookDialog.close());

addBtn.addEventListener("click", submitBook);

function setText(card, book){
  const span = card.querySelector(".status");

  if (book.status){
    span.textContent = "";
    card.classList.remove("no");
    card.classList.add("yes");
    span.textContent = "I have read it.";
  }else {
    span.textContent = "";
    card.classList.remove("yes");
    card.classList.add("no");
    span.textContent = "I haven't read it"
  }
}

function submitBook(e){
  e.preventDefault();

  const read = bookDialog.querySelector('input[name="read"]:checked');
  const isRead = read.value === "true";
  const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, isRead);
  addToLibrary(book);

  createCard(book);
  form.reset();

  bookDialog.close();
}

function addToLibrary(book){
  library.push(book);
}
function createCard(book){
  const card = document.createElement("div");
  card.dataset.id = book.id;
  card.classList.add("card");
  card.innerHTML = `
    <h2>${book.title}</h2>
    <span class="author">${book.author}</span>
    <span class="pages">${book.pages} pages</span>
    <span class="status"></span>
    <div class="edit-div">
      <button class="edit-btn change">Change Status</button>
      <button class="edit-btn delete">Delete</button>
    </div>
  `;
  setText(card, book);
  
  parentDiv.appendChild(card);

  const changeBtn = card.querySelector(".change");
  const deleteBtn = card.querySelector(".delete");

  changeBtn.addEventListener("click", ()=> {
    book.toggleStatus();
    setText(card, book);
  });
  deleteBtn.addEventListener("click", () => {
    const bookId = card.dataset.id;

    const index = library.findIndex(book => book.id === bookId);

    if (index !== -1){
      library.splice(index, 1);
    }
    
    card.remove();
  });
}