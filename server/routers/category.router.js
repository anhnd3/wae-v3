const categoryController = require("../controllers/category.controller");

module.exports = app => {
  app.get("/api/categories", categoryController.getListCategory);
  app.get("/api/categories/:id", categoryController.getCategory);
  app.post("/api/categories", categoryController.createCategory);
  app.put("/api/categories/update", categoryController.updateCategory);
  app.put("/api/categories/delete", categoryController.deleteCategory);
};
