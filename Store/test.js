const express = require("express");
const app = express();
const path = require("path");

const data = require("./public/carsInfo.json");

console.log(
  data.filter((el) => el.title.includes(1) || el.description.includes(1))
);

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
