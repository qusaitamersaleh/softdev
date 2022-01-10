const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
/*name = models.TextField()
isbn = models.TextField()
author = models.ForeignKey(Author)*/

    name: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },

    author: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'author',
      },
});


const Book = mongoose.model('book', BookSchema);

module.exports = Book;
