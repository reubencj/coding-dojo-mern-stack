const personController = require("../controller/product.controller");

module.exports = (app) => {
  app.get("/api/products", personController.findAllProducts);
  app.get("/api/products/:id", personController.findProductById);
  app.post("/api/products", personController.createProduct);
  app.put("/api/products/:id", personController.updateProduct);
  app.delete("/api/products/:id", personController.deleteProduct);
};
