const adminController = require("../controllers/admin.controller");

module.exports = app => {
  app.get("/cmstool", adminController.dashboard);
  app.post(
    "/cmstool/dashboard/createorupdate",
    adminController.config_createorupdate
  );
  app.get("/cmstool/login", adminController.login);
  app.get("/cmstool/categories", adminController.category);
  app.get("/cmstool/categories/add", adminController.category_detail);
  app.get("/cmstool/categories/detail/:id", adminController.category_detail);
  app.post(
    "/cmstool/categories/createorupdate",
    adminController.category_createorupdate
  );
  app.get("/cmstool/categories/delete/:id", adminController.category_delete);
  app.get("/cmstool/blogs", adminController.blog);
  app.get("/cmstool/blogs/add", adminController.blog_detail);
  app.get("/cmstool/blogs/detail/:id", adminController.blog_detail);
  app.post(
    "/cmstool/blogs/createorupdate",
    adminController.blog_createorupdate
  );
  app.get("/cmstool/blogs/delete/:id", adminController.blog_delete);
};
