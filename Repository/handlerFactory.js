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
};

module.exports = {
  getAll
};
