const errorHandlerMiddleware = (err, req, res) => {
  if (err) {
    res.json(err);
  }
};
module.exports = errorHandlerMiddleware;
