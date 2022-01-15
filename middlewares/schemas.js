const Joi = require('joi');

const addAuthor = data => {
    const schema = Joi.object({
        first_name: Joi.string().min(1).max(10).required(),
        last_name: Joi.string().min(1).max(10).required()

    })
    return schema.validate(data);
}

const editAuthor = data => {
    Joi.object({
        first_name: Joi.string().min(1).max(10).required(),
        last_name: Joi.string().min(1).max(10).required()
      //  id: Joi.objectId().required()
    })
}
const addBook = data => {
    Joi.object({
        name: Joi.string().min(1).max(30).required(),
        isbn: Joi.string().min(1).max(9999999999999).required(),
        //author: Joi.objectId()

    })
}
const editBook = data => {
    Joi.object({
        name: Joi.string().min(1).max(30).required(),
        isbn: Joi.string().min(1).max(9999999999999).required(),
      

    })
}
/*
const addBook = Joi.object({
 
});*/

module.exports = {
    addAuthor,
    editAuthor,

    addBook,
    editBook,

};
