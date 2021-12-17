const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
};
module.exports.createProduct = (req, res) => {
  const { title, price, description } = req.body;
  Product.create({ title, price, description })
    .then((created) => res.json({ createdProduct: created }))
    .catch((err) => res.json(err));
};

module.exports.findProductById = (req, res) => {
  Product.findById(req.params.id)
    .then((productFound) => res.json(productFound))
    .catch((err) => res.json(err));
};

module.exports.updateProduct = (req, res) => {
  Product.updateOne({ _id: req.params.id }, req.body, { new: true })
    .then((updateData) => res.json(updateData))
    .catch((err) => res.json(err));
};
module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((deleteData) => res.json(deleteData))
    .catch((err) => res.json(err));
};
