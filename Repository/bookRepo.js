const Book = require('../model/bookModel');
const Author = require('../model/authorModel');

const AddBook = async (req, res) => {

    const { name, isbn, authorID } = req.body;

    //  check if Author existed 
    const book = await Book.findOne({ isbn });
    if (book) {
        return res.status(400).json({
            error: 'The book aldready exist in the website',
        });
    }
    const authoer = Author.findById(authorID);
    if (!authoer)
        return res.status(404).json({
            error: 'auther ID is wrong ',
        });

    Book.create({
        name,
        isbn,
        author:authorID
    }).then((book) => {
        return res.status(200).json({
            book
        });
    })



}

const GetBooks = async (req, res) => {
    return res.status(200).json({
        Books: await Book.find()
    });
};
const GetBookDetails = async (req, res) => { };
const EditBook = async (req, res) => { };



module.exports = {
    AddBook, GetBooks, GetBookDetails, EditBook
}