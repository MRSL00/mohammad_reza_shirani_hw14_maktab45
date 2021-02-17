const express = require("express");
const router = express.Router();
const path = require("path");
router.use(express.static(path.join(__dirname, "../views/css")));
router.get("/contact", (req, res) => {
  res.render(path.join(__dirname, "../views/contact.ejs"));
});

module.exports = router;
