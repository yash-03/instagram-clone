const express = require("express");
const users = require("../controllers/users");

const router = express.Router();

router
  .post("/login", (req, res) => {
    const { username = "", password = "" } = req.body;
    res.json({
      data: "login",
    });
  })
  .post("/register", async (req, res) => {
    const user = await users.register(req.body);
    res.json({
      data: user,
    });
  });

module.exports = router;
