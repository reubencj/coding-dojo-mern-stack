const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/crmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("established connection to mongoDB"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );
