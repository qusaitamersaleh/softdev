const express = require('express');
const BookConroller = require('../controller/bookController');

const { addBook, editBook } = require('../middlewares/schemas');
const validator = require('../middlewares/schemaValidator');

const router = express.Router();



router.post('/add-book', validator(addBook), BookConroller.addBook);
router.get('/get-books', BookConroller.getBooks);
router.get('/get-book/:id', BookConroller.getBookDetails);
router.put('/edit-book/:id', validator(editBook), BookConroller.editBook);



module.exports = router;
