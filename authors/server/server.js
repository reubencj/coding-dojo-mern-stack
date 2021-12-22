const express = require("express");

const app = express();
const cors = require("cors");
app.use(cors());
require("./config/mongoose.config");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const authorRoutes = require("./routes/author.routes");
authorRoutes(app);
app.listen(8000, () => console.log("listening on port 8000"));
