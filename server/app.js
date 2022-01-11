const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Welcome to instagram clone");
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
