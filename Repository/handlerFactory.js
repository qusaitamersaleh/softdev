const { model } = require("mongoose");

const getAll = Model => async (req, res, next) => {

  let filter = {};
  if (req.params.userType) filter = { userType: req.params.userType }

  const doc = await Model.find(filter);

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: doc.length,
    data: doc

  });
}

const getOne = Model => async (req, res, next) => {


  const doc = await Model.findById(req.params.id);
  try {

    if (doc)
      return res.status(200).json({
        status: 'success',
        results: doc.length,
        data: doc

      });
    else
      return res.status(404).json({
        status: 'not found !',


      });

  } catch (e) {
    return res.send(e.message);
  }
}

const updateOne = Model => async (req, res, next) => {
  try {
      
       
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!doc) {
      return res.status(404).json({ error: "not found !" });
    }

    res.status(200).json({
      status: 'success',
      data: doc

    });
  } catch (error) {
    return res.send(error.message);
  }
}

module.exports = {
  getAll,
  getOne,
  updateOne
};
