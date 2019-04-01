const async = require("async");
const mongoose = require("mongoose");

const Category = require("../models/category.schema");
const Blog = require("../models/blog.schema");
const Config = require("../models/config.schema");

const maintenance = (req, res) => {
  res.render("maintenance");
};
const index = (req, res) => {
  res.render("mainsite");
};
const about = (req, res) => {
  res.render("mainsite_about");
};
const blog = (req, res) => {
  res.render("mainsite_blog");
};
const blog_detail = (req, res) => {
  res.render("mainsite_blog_detail");
};

const config = (req, res) => {
  async.parallel(
    {
      categories: cbCate => {
        Category.find({}).exec(cbCate);
      },
      config: cbConfig => {
        Config.findOne({}).exec(cbConfig);
      }
    },
    function(err, result) {
      if (err) return res.status(500).send(err);

      res.setHeader("Content-Type", "application/json");
      return res.status(200).json({
        returnCode: 0,
        returnMessage: "Success",
        data: result
      });
    }
  );
};

const getListBlogByCategoryAndLimit = (req, res) => {
  let limit = req.query.limit || 20;
  let page = req.query.page || 1;
  let skip = (page - 1) * limit;

  let category = req.query.category || "";
  if (category) {
    category = mongoose.Types.ObjectId(category);
    Blog.find({ category: category })
      .populate("category")
      .skip(skip)
      .limit(parseInt(limit))
      .exec((err, blogs) => {
        if (err) return res.status(500).send(err);
        return res
          .status(200)
          .send({ returnCode: 0, returnMessage: "Success", data: blogs });
      });
  } else {
    Blog.find()
      .populate("category")
      .skip(skip)
      .limit(limit)
      .exec((err, blogs) => {
        if (err) return res.status(500).send(err);
        return res
          .status(200)
          .send({ returnCode: 0, returnMessage: "Success", data: blogs });
      });
  }
};

module.exports = {
  maintenance,
  config,
  index,
  about,
  blog,
  blog_detail,
  getListBlogByCategoryAndLimit
};
