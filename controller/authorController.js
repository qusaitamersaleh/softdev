
const AuthorRepo = require('../Repository/authorRepo');
 
const addAuthor =  AuthorRepo.AddAuthor;
const getAuthors = AuthorRepo.GetAuthors;
const getAuthorDetails = AuthorRepo.GetAuthorDetails;
const editAuthor = AuthorRepo.EditAuthor;
module.exports = {
    addAuthor,
    getAuthors,
    getAuthorDetails,
    editAuthor,
} ;
