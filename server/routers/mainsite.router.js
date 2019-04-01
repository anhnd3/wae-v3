const mainsiteController = require("../controllers/mainsite.controller");

module.exports = app => {
  app.get("/", (req, res) => {
    res.redirect("/maintenance");
    // res.render("mainsite");
  });
  app.get("/about", mainsiteController.about);
  app.get("/blog/:id", mainsiteController.blog);
  app.get("/blog_detail/:id", mainsiteController.blog_detail);
  app.get("/maintenance", mainsiteController.maintenance);
  app.get("/api/config", mainsiteController.config);
  app.get(
    "/api/mainsite/blog",
    mainsiteController.getListBlogByCategoryAndLimit
  );
};
