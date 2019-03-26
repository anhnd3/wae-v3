const Category = require("../models/category.schema");

const createCategory = (req, res) => {
  const { name } = req.body;
  const category = new Category({
    name
  });
  category.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send({ returnCode: 0, returnMessage: "Success" });
  });
};

const updateCategory = (req, res) => {
  const { id, name } = req.body;
  Category.findByIdAndUpdate(id, { name }, { new: true }, err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send({ returnCode: 0, returnMessage: "Success" });
  });
};

const getCategory = (req, res) => {
  const { id } = req.params;
  Category.findById(id, (err, category) => {
    if (err) return res.status(500).send(err);
    return res
      .status(200)
      .send({ returnCode: 0, returnMessage: "Success", data: category });
  });
};

const getListCategory = (req, res) => {
  Category.find({}, (err, categories) => {
    if (err) return res.status(500).send(err);
    return res
      .status(200)
      .send({ returnCode: 0, returnMessage: "Success", data: categories });
  });
};

const deleteCategory = (req, res) => {
  const { id } = req.body;
  Category.findByIdAndRemove(id, (err, categories) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send({ returnCode: 0, returnMessage: "Success" });
  });
};

module.exports = {
  createCategory,
  updateCategory,
  getCategory,
  getListCategory,
  deleteCategory
};
