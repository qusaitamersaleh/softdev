const validator = (schema) => (req, res, next) => {

    const { error } = schema(req.body);

    if (!error)
        next();
    else {
        return res.status(400).send(error.message);
    }
}

module.exports = validator;