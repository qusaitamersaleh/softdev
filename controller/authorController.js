
const AuthorRepo = require('../Repository/authorRepo');
 
const addAuthor =  AuthorRepo.AddAuthor;
const getAuthors = AuthorRepo.GetAuthors;
const getAuthorDetails = AuthorRepo.GetAuthorDetails;

module.exports = {
    addAuthor,
    getAuthors,
    getAuthorDetails
} ;
