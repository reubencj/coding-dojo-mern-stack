const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
  Product.find().then((products) => res.json({ allProducts: products }));
};
module.exports.createProduct = (req, res) => {
  const { title, price, description } = req.body;
  Product.create({ title, price, description }).then((created) =>
    res.json({ createdProduct: created })
  );
};
