
const BookRepo = require('../Repository/BookRepo');
const factory = require('../Repository/handlerFactory');
const Book = require('../model/bookModel');

const addBook = BookRepo.AddBook;
const getBooks = factory.getAll(Book);
const getBookDetails = factory.getOne(Book);
const editBook = factory.updateOne(Book)


module.exports = {
     addBook, getBooks, getBookDetails, editBook
}