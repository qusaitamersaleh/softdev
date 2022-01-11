const Joi = require('joi');

const addAuthor = Joi.object({
    first_name: Joi.string().min(1).max(10).required(),
    last_name: Joi.string().min(1).max(10).required()

})
const editAuthor = Joi.object({
    first_name: Joi.string().min(1).max(10).required(),
    last_name: Joi.string().min(1).max(10).required()
    // id:Joi.objectId()
})
const addBook = Joi.object({
    name: Joi.string().min(1).max(30).required(),
    isbn: Joi.string().min(1).max(9999999999999).required(),
    author: Joi.objectId()

})
const editBook = Joi.object({
    name: Joi.string().min(1).max(30).required(),
    isbn: Joi.string().min(1).max(9999999999999).required(),
    id: Joi.objectId()

})
/*
const addBook = Joi.object({

});*/

module.exports = {
    '/add-author': addAuthor,
    '/edit-author/:id': editAuthor,
    '/add-book': addBook,
    '/edit-book/:id':editBook,

};
