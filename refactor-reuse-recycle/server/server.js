const express = require("express");
const app = express();
const cors = require("cors");
require("./config/mongoose.config");
const productRoutes = require("./routes/product.routes");
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
productRoutes(app);

app.listen(8000, () => console.log("listening in port 8000"));
