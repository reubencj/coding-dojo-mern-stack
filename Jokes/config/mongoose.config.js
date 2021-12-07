const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log(`error connecting to DB: ${err}`));
