const express = require("express");
const config = require("./config/config");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connection mongodb
const url = `mongodb://${config.mongodbHost}:${config.mongodbPort}`;
// mongoose.Promise = require("bluebird");
mongoose.connect(`${url}/${config.mongodbDatabase}`, { useNewUrlParser: true });
mongoose.set("useFindAndModify", false);

require("./routers/category.router")(app);
require("./routers/blog.router")(app);

app.set("view engine", "ejs");
require("./routers/admin.router")(app);
require("./routers/mainsite.router")(app);

const PORT = 3000;
app.listen(PORT, function() {
  console.log("Server start at port: " + PORT);
});
