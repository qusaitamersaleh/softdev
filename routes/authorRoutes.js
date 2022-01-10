const express = require('express');
const AuthorConroller = require('../controller/authorController');
 
const router = express.Router();


// Protect all routes after this middleware
 
router.post('/add-author', AuthorConroller.addAuthor);
router.get('/get-authors', AuthorConroller.getAuthors);
router.get('/get-author/:id', AuthorConroller.getAuthorDetails);


module.exports = router;
