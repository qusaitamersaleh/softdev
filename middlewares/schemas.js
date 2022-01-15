const Joi = require('joi');

const addAuthor = data => {
    const schema = Joi.object({
        first_name: Joi.string().min(1).max(10).required(),
        last_name: Joi.string().min(1).max(10).required()

    })
    return schema.validate(data);
}

const editAuthor = data => {
    const schema = Joi.object({
        first_name: Joi.string().min(1).max(10).required(),
        last_name: Joi.string().min(1).max(10).required()
        
    })
    return schema.validate(data);
}

//books
const addBook = data => {
    const schema = Joi.object({
        name: Joi.string().min(1).max(30).required(),
        isbn: Joi.string().min(1).max(9999999999999).required(),
        authorID:Joi.string().required(),
    })
    return schema.validate(data);
}
const editBook = data => {
    const schema = Joi.object({
        name: Joi.string().min(1).max(30).required(),
        isbn: Joi.string().min(1).max(9999999999999).required(),

    })
    return schema.validate(data);
}
 

module.exports = {
    addAuthor,
    editAuthor,

    addBook,
    editBook,

};
