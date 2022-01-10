
const BookRepo = require('../Repository/BookRepo');

const addBook = BookRepo.AddBook;
const getBooks = BookRepo.GetBooks;
const getBookDetails = BookRepo.GetBookDetails;
const editBook = BookRepo.EditBook;


module.exports = {
     addBook, getBooks, getBookDetails, editBook
}