const express = require("express");
const dotenv = require("dotenv");
const users = require("./routes/users");
const connection = require("./config/database");

dotenv.config();
connection(process.env.MONGO_URL);

const app = express();
const PORT = 4000;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Welcome to instagram clone");
});

app.use("/", users);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
