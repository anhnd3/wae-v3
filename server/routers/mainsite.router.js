const mainsiteController = require("../controllers/mainsite.controller");

module.exports = app => {
  app.get("/", (req, res) => {
    res.redirect("/maintenance");
  });
  // app.get("/", mainsiteController.index);
  app.get("/about", mainsiteController.about);
  app.get("/blog", mainsiteController.blog);
  app.get("/blog_detail", mainsiteController.blog_detail);
  app.get("/maintenance", mainsiteController.maintenance);

  app.get("/api/config", mainsiteController.config);
  app.get(
    "/api/mainsite/blog",
    mainsiteController.getListBlogByCategoryAndLimit
  );
  app.get("/api/mainsite/blogsearch", mainsiteController.getListBlogBySearch);
  app.get("/search", mainsiteController.search);
};
