const PersonController = require("../controller/person.controller");

module.exports = (app) => {
  app.get("/api", PersonController.index);
  app.get("/api/people", PersonController.findAllPersons);
  app.post("/api/people", PersonController.createPerson);
  app.get("/api/people/:id", PersonController.findPerson);
};
