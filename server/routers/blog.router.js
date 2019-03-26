const blogController = require("../controllers/blog.controller");

module.exports = app => {
  app.get("/api/blogs", blogController.getListBlog);
  app.get("/api/blogs/:id", blogController.getBlog);
  app.get("/api/blogs/category/:id", blogController.getListBlog);
  app.post("/api/blogs", blogController.createBlog);
  app.put("/api/blogs/update", blogController.updateBlog);
  app.put("/api/blogs/delete", blogController.deleteBlog);
};
