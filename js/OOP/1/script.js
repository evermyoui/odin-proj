class Book {
    constructor(title, author, pages, isRead){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        this.info = function(){
            let information = `${this.title} by ${this.author}, ${this.pages} pages`;
            if (this.isRead){
                return `${information}, read it.`
            }else {
                return `${information}, not read yet.`
            }
        }
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", false);

const myLibrary = [];