const mongoose = require("mongoose");
const Blog = require("../models/blog.schema");

const createBlog = (req, res) => {
  let {
    title,
    author,
    description,
    content,
    index,
    highlight,
    keywords,
    categoryID
  } = req.body;

  const createdTime = Date.now();
  const updatedTime = Date.now();
  const category = mongoose.Types.ObjectId(categoryID);

  const blog = new Blog({
    title,
    author,
    description,
    content,
    createdTime,
    updatedTime,
    index,
    highlight,
    keywords,
    category
  });

  blog.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send({ returnCode: 0, returnMessage: "Success" });
  });
};

const updateBlog = (req, res) => {
  let {
    id,
    title,
    author,
    description,
    content,
    index,
    highlight,
    keywords,
    categoryID
  } = req.body;

  const updatedTime = Date.now();
  const category = mongoose.Types.ObjectId(categoryID);

  Blog.findByIdAndUpdate(
    id,
    {
      title,
      author,
      description,
      content,
      updatedTime,
      index,
      highlight,
      keywords,
      category
    },
    { new: true },
    err => {
      if (err) return res.status(500).send(err);
      return res.status(200).send({ returnCode: 0, returnMessage: "Success" });
    }
  );
};

const getBlog = (req, res) => {
  const { id } = req.params;
  Blog.findById(id)
    .populate("category")
    .exec((err, blog) => {
      if (err) return res.status(500).send(err);
      return res
        .status(200)
        .send({ returnCode: 0, returnMessage: "Success", data: blog });
    });
};

const getListBlog = (req, res) => {
  Blog.find({})
    .populate("category")
    .exec((err, blogs) => {
      if (err) return res.status(500).send(err);
      return res
        .status(200)
        .send({ returnCode: 0, returnMessage: "Success", data: blogs });
    });
};

const deleteBlog = (req, res) => {
  const { id } = req.body;
  Blog.findByIdAndRemove(id, (err, categories) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send({ returnCode: 0, returnMessage: "Success" });
  });
};

module.exports = {
  createBlog,
  updateBlog,
  getBlog,
  getListBlog,
  deleteBlog
};
