const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const merge = require("../tools/merge");

router.use(express.static(path.join(__dirname, "../views")));

router.get("/singup", (req, res) => {
  res.render("../views/singup.ejs");
});
router.post("/singup", (req, res) => {
  let users = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../public/users.json"), "utf-8")
  );
  console.log("singup: "+users);
  const valid_pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (
    !req.body.user ||
    !req.body.email ||
    !req.body.pass ||
    !req.body.cpass ||
    !req.body.gender === "gender"
  ) {
    res.send("empty");
  } else {
    if (
      users.map((el) => el.username).includes(req.body.user) ||
      users.map((el) => el.email).includes(req.body.email)
    ) {
      res.send("Error");
    } else {
      if (req.body.pass === req.body.cpass) {
        if (req.body.pass.match(valid_pass)) {
          const find = {
            username: req.body.user,
            password: req.body.pass,
            email: req.body.email,
            gender: req.body.gender,
            isLoggedIn: false,
          };
          merge(find, users, "../public/users.json");
          res.send("added");
        } else {
          res.send("pass");
        }
      } else {
        res.send("INcode");
      }
    }
  }
});

module.exports = router;
