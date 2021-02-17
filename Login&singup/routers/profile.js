const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const merge = require("../tools/merge");

router.use(express.static(path.join(__dirname, "../views")));

router.get("/profile", (req, res) => {
  let users = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../public/users.json"), "utf-8")
  );
  res.render(
    "../views/profile.ejs",
    users.find((el) => el.username === global.finduser)
  );
});

router.post("/profile", (req, res) => {
  let users = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../public/users.json"), "utf-8")
  );
  let find = users.find((el) => el.username === global.finduser);
  const valid_pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!req.body.user || !req.body.email || !req.body.pass) {
    res.send("empty");
  } else {
    if (
      users.map((el) => el.username).includes(req.body.user) ||
      users.map((el) => el.email).includes(req.body.email)
    ) {
      res.send("Error");
    } else {
      if (req.body.pass.match(valid_pass)) {
        find.username = req.body.user;
        find.password = req.body.pass;
        find.email = req.body.email;
        const changeIslog = false;
        find.isLoggedIn = changeIslog;
        merge(find, users, "../public/users.json");
        res.send("update");
      } else {
        res.send("pass");
      }
    }
  }
});
module.exports = router;
