const personController = require("../controller/product.controller");

module.exports = (app) => {
  app.get("/api/products", personController.findAllProducts);
  app.get("/api/products/:id", personController.findProductById);
  app.post("/api/products", personController.createProduct);
};
