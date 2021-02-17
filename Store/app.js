const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(require("./routers/home"))
app.use(require("./routers/about"))
app.use(require("./routers/contact"))
app.use(require("./routers/ProductsPage"))

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
