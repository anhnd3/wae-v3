const mainsiteController = require("../controllers/mainsite.controller");

module.exports = app => {
  app.get("/maintenance", mainsiteController.maintenance);
};
