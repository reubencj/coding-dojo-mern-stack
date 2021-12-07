const express = require("express");

const app = express();

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const jokesRoutes = require("./routes/joke.routes");

jokesRoutes(app);

app.listen(8000, () => console.log("Listening on port 8000"));
