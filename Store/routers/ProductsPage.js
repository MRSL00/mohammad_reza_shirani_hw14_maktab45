const express = require("express");
const router = express.Router();
const path = require("path");
const data = require("../public/carsInfo.json");
router.use(express.static(path.join(__dirname, "../public/img")));
router.use(express.static(path.join(__dirname, "../views/css")));

router.get("/car:num", (req, res) => {
  if (+req.params.num > 0 && +req.params.num < 7) {
    res.render(
      path.join(__dirname, "../views/car.ejs"),
      data[+req.params.num - 1]
    );
  }else{
    res.status(404).send("Page Not Found!!!")
  }
});
module.exports = router;
