const express = require("express");
const app = express();
const port = 8000;

app.get("/api", (req, res) => {
  res.json({
    message: "You will change the world for the better, first change yourself",
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
