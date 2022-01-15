const express = require('express');
const AuthorConroller = require('../controller/authorController');

const { addAuthor ,editAuthor} = require('../middlewares/schemas');
const  validator  = require('../middlewares/schemaValidator');

const router = express.Router();

router.post('/add-author', validator(addAuthor), AuthorConroller.addAuthor);


router.get('/get-authors', AuthorConroller.getAuthors);
router.get('/get-author/:id', AuthorConroller.getAuthorDetails);
router.put('/edit-author/:id',validator(editAuthor), AuthorConroller.editAuthor);
 
module.exports = router;

