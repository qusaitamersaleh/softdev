const express = require('express');
const AuthorConroller = require('../controller/authorController');

const SchemaValidator = require('../middlewares/SchemaValidator');
const validateRequest = SchemaValidator(true);

const router = express.Router();


// Protect all routes after this middleware
 
router.post('/add-author',AuthorConroller.addAuthor);
router.get('/get-authors', AuthorConroller.getAuthors);
router.get('/get-author/:id', AuthorConroller.getAuthorDetails);
router.put('/edit-author/:id', AuthorConroller.editAuthor);


module.exports = router;
