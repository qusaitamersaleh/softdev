const express = require('express');
const AuthorConroller = require('../controller/authorController');
 
const router = express.Router();


// Protect all routes after this middleware
 
router.post('/create-author', AuthorConroller.createAuthor);
 

module.exports = router;
