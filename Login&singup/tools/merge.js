const fs = require("fs");
const path = require("path");
let merge = function (find, users, usersdir) {
  const update = Array.from(new Set([find, ...users]));
  fs.writeFileSync(path.join(__dirname, usersdir), JSON.stringify(update));
};
module.exports = merge;
