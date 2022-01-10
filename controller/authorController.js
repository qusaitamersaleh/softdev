
const AuthorRepo = require('../Repository/authorRepo');
const factory = require('../Repository/handlerFactory');
const Author = require('../model/authorModel');

const addAuthor =  AuthorRepo.AddAuthor;
const getAuthors = factory.getAll(Author);;
const getAuthorDetails = factory.getOne(Author);
const editAuthor = factory.updateOne(Author)

module.exports = {
    addAuthor,
    getAuthors,
    getAuthorDetails,
    editAuthor,
} ;
