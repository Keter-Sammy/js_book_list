// Book class: Represent a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks

class UI {
     static displayBooks(){
        const StoredBooks = 
        [
            {
                title: 'Scavenger',
                author: 'Little John',
                isbn: '45454'
            },
            {
                title: 'Black Swan',
                author:'Zachary John',
                isbn: '23235'
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
     }

     static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
     }


     // Delete book from list

     static deleteBook(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
     }


     // Clear input fields after submit
     static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
     }
}


// Store Class: Handle Storage


// Event: Display Books

document.addEventListener('DOMContentLoaded', UI.displayBooks);


// Event: Add a Book

document.querySelector('#book-form').addEventListener('submit', (e) => 
{
    //Prevent actual submit

    e.preventDefault();
    
    
    //Get form values
    
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Instantiate book

    const book = new Book(title, author, isbn);

    // Add book to UI

    UI.addBookToList(book);


    // Clear Fields

    UI.clearFields();

});


// Event: Remove a Book

 document.querySelector('#book-list').addEventListener('click', function (e) {
         UI.deleteBook(e.target);
     }

 );