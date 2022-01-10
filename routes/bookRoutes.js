const express = require('express');
const BookConroller = require('../controller/bookController');
 
const router = express.Router();


 
router.post('/add-book', BookConroller.addBook);
router.get('/get-books', BookConroller.getBooks);
router.get('/get-book/:id', BookConroller.getBookDetails);
router.put('/edit-book/:id', BookConroller.editBook);



module.exports = router;
