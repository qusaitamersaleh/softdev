const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
 

    name: {
        type: String,
        required: true
    },
    isbn: {// if it's not text in the requirment would make it Mongoose objectID
        index: true,
        type: String,
        required: true
    },

    author: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'author',
      },
});


BookSchema.pre(/^find/, function (next) {

    this.populate({
      path: 'author',
      select: 'first_name last_name',
  
    });
  
    next();
  });

const Book = mongoose.model('book', BookSchema);

module.exports = Book;
