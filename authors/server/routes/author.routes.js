const authorController = require("../controllers/author.controller");

module.exports = (app) => {
  app.get("/api", (req, res) => res.send("<h1>All Good</h1>"));
  app.post("/api/author", authorController.createAuthor);
  app.get("/api/author", authorController.findAllAuthors);
  app.get("/api/author/:id", authorController.findOneAuthor);
  app.put("/api/author/:id", authorController.updateAuthor);
  app.delete("/api/author/:id", authorController.deleteAuthor);
};
