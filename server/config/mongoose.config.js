const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/test_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("established connection to the database"))
  .catch((error) => console.log("error occured: ", error));
