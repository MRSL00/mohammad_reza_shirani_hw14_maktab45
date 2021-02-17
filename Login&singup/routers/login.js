const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");


router.use(express.static(path.join(__dirname, "../views")));

router.get("/login", (req, res) => {
  res.render("../views/login.ejs");
});

router.post("/login", (req, res) => {
  let users = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../public/users.json"), "utf-8")
  );
  console.log("log: "+users);
  let find = users.find(
    (el) => el.username === req.body.user && el.password === req.body.pass
  );
  if (!req.body.user || !req.body.pass) {
    res.send("empty");
  } else {
    if (!find) {
      res.send("Error");
    } else {
      global.finduser = req.body.user;

      const changeIslog = true;
      find.isLoggedIn = changeIslog;
      const update = Array.from(new Set([find, ...users]));
      fs.writeFileSync(path.join(__dirname,"../public/users.json"), JSON.stringify(update));
      res.send("ok");
    }
  }
});

module.exports = router;
