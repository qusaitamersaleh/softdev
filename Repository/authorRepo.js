
const Author = require('../model/authorModel');

const AddAuthor = async (req, res) => {


    const {
        first_name,
        last_name,
    } = req.body;

    //  check if Author existed 
    const author = await Author.findOne({
        first_name,
        last_name,
    });

    if (author) {

        return res.status(400).json({
            error: 'Authoer aldready exist in the website',
        });
    }
    Author.create({
        first_name,
        last_name,
    }).then((author) => {
        return res.status(200).json({
            author
        });
    })



}

const GetAuthors = async (req, res) => {
    return res.status(200).json({
        Authors: await Author.find()
    });
}

const GetAuthorDetails = async (req, res) => {

    const author = await Author.findById(req.params.id);

    if (!author)
        return res.status(404).json({
            error: "Author not found !"
        });

    return res.status(200).json({
        author
    });
}

module.exports = {
    AddAuthor,
    GetAuthors,
    GetAuthorDetails
}