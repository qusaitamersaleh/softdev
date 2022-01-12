const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({

    first_name: {
        type: String,
        required: true,
        maxlength: [10, 'first name must have less or equal than 10 characters'],
        minlength: [1, 'first name must have more or equal than 1 characters']
    },
    last_name: {
        type: String,
        required: true,
        maxlength: [10, 'last name must have less or equal than 10 characters'],
        minlength: [1, 'last name must have more or equal than 1 characters']
    },


});


const Author = mongoose.model('author', authorSchema);

module.exports = Author;
