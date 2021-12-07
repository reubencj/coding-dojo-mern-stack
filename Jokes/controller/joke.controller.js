const Joke = require("../models/joke.model");

module.exports.findAllJoke = (req, res) => {
  Joke.find()
    .then((allJokes) => res.json({ jokes: allJokes }))
    .catch((err) => {
      res.json({
        message: "something went wrong",
        error: err,
      });
    });
};

module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then((createdJoke) => res.json({ newJoke: req.body }))
    .catch((err) => {
      res.json({
        message: "something went wrong",
        error: err,
      });
    });
};

module.exports.updateOneJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((updatedJoke) => res.json({ updated: updatedJoke }))
    .catch((err) => {
      res.json({
        message: "something went wrong",
        error: err,
      });
    });
};

module.exports.findOneJoke = (req, res) => {
  Joke.find({ _id: req.params.id })
    .then((foundJoke) => res.json({ joke: foundJoke }))
    .catch((err) => {
      res.json({
        message: "something went wrong",
        error: err,
      });
    });
};

module.exports.deleteOneJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((deletedJoke) => res.json({ deleted: deletedJoke }))
    .catch((err) => {
      res.json({
        message: "something went wrong",
        error: err,
      });
    });
};
