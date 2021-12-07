const jokesController = require("../controller/joke.controller");

module.exports = (app) => {
  app.get("/api/jokes", jokesController.findAllJoke);
  app.get("/api/jokes/:id", jokesController.findOneJoke);
  app.post("/api/jokes", jokesController.createJoke);
  app.put("/api/jokes/:id", jokesController.updateOneJoke);
  app.delete("/api/jokes/:id", jokesController.deleteOneJoke);
};
