const express = require("express");
const cors = require("cors");
const app = express();
require("./config/mongoose.config");
const PersonRoutes = require("./routes/person.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
PersonRoutes(app);

app.listen(8000, () => console.log("listening on port 8000"));
