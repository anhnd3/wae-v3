const express = require("express");
const next = require("next");

const config = require("./config/config");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require("cors");

// Connection mongodb
const url = `mongodb://${config.mongodbHost}:${config.mongodbPort}`;
// mongoose.Promise = require("bluebird");
mongoose.connect(`${url}/${config.mongodbDatabase}`, { useNewUrlParser: true });
mongoose.set("useFindAndModify", false);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.set("view engine", "ejs");

require("./routers/category.router")(app);
require("./routers/blog.router")(app);
require("./routers/admin.router")(app);
require("./routers/mainsite.router")(app);

// const dev = process.env.NODE_ENV !== "production";
// const nextApp = next({ dev });
// nextApp.prepare().then(() => {
//   app.get("/about", (req, res) => {
//     return nextApp.render(req, res, "/about", req.query);
//   });
//   app.get("/blog", (req, res) => {
//     return nextApp.render(req, res, "/blog", req.query);
//   });
//   app.get("/blog_detail", (req, res) => {
//     return nextApp.render(req, res, "/blog_detail", req.query);
//   });
//   app.get("/search", (req, res) => {
//     return nextApp.render(req, res, "/", req.query);
//   });
// });

const PORT = 3000;
app.listen(PORT, function() {
  console.log("Server start at port: " + PORT);
});
