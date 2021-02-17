const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const merge = require("../tools/merge");


router.get("/:user", (req, res) => {
  let users = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../public/users.json"), "utf-8")
  );
  const find = users.find((el) => el.username === req.params.user);
  const changeIslog = false;
  find.isLoggedIn = changeIslog;
  merge(find, users, "../public/users.json");
  res.redirect("/login");
});

module.exports = router;