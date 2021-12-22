const Author = require("../models/author.model");

module.exports = {
  createAuthor: (req, res) => {
    const { name } = req.body;
    Author.create({ name })
      .then((created) => res.json({ created }))
      .catch((err) => res.status(400).json(err));
  },

  findAllAuthors: (req, res) => {
    Author.find()
      .then((authors) => res.json(authors))
      .catch((err) => res.status(400).json(err));
  },
  findOneAuthor: (req, res) => {
    Author.find({ _id: req.params.id })
      .then((oneAuthor) => res.json(oneAuthor))
      .catch((err) => res.status(400).json(err));
  },
  updateAuthor: (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err));
  },
  deleteAuthor: (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then((data) => res.json(data))
      .catch((err) => res.status(400).json(err));
  },
};
