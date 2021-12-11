const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/productManager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log(err));
