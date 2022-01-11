
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
 
/*
const EditAuthor = async (req, res) => {
// validation if ID exist and type of ID
    Author.findByIdAndUpdate(req.params.id, {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
    }
    ).then((author) => {
        if(author)return res.status(200).json({
            author
        });
        else 
        return res.status(404).json({
           error: "user not found!"
        });
    });

}*/
module.exports = {
    AddAuthor

}