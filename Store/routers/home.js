const express = require("express");
const router = express.Router();
const path = require("path");
const data = require("../public/carsInfo.json");
router.use(express.static(path.join(__dirname, "../public/img")));


router.get("/home", (req, res) => {
  if (!req.query.filter) {
    res.render("../views/home.ejs", { AllInfo: data });
  } else {
    res.render("../views/home.ejs", {
      AllInfo: data.filter(
        (el) =>
          el.title.includes(req.query.filter) ||
          el.description.includes(req.query.filter)
      ),
    });
  }
});

module.exports = router;
