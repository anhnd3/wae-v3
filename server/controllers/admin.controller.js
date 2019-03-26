const async = require("async");

const Category = require("../models/category.schema");
const Blog = require("../models/blog.schema");
const Config = require("../models/config.schema");

const dashboard = (req, res) => {
  Config.findOne({}, (err, config) => {
    if (err) return res.status(500).send(err);
    res.render("dashboard", { config: config });
  });
};

const config_createorupdate = (req, res) => {
  const {
    id,
    homeTitle,
    homeDescription,
    homeThumbnail,
    homeAboutMeContent,
    homeAboutMeThumbnail,
    homeLatestWorksTitle,
    homeLatestWorksDescription,
    homeFacebook,
    homeLinkedIn,
    homeTwitter,
    blogAboutAvatar,
    blogAboutThumbnail,
    blogAboutAuthor,
    blogAboutDescription
  } = req.body;

  console.log(
    id,
    homeTitle,
    homeDescription,
    homeThumbnail,
    homeAboutMeContent,
    homeAboutMeThumbnail,
    homeLatestWorksTitle,
    homeLatestWorksDescription,
    homeFacebook,
    homeLinkedIn,
    homeTwitter,
    blogAboutAvatar,
    blogAboutThumbnail,
    blogAboutAuthor,
    blogAboutDescription
  );

  if (!id) {
    const config = new Config({
      homeTitle,
      homeDescription,
      homeThumbnail,
      homeAboutMeContent,
      homeAboutMeThumbnail,
      homeLatestWorksTitle,
      homeLatestWorksDescription,
      homeFacebook,
      homeLinkedIn,
      homeTwitter,
      blogAboutAvatar,
      blogAboutThumbnail,
      blogAboutAuthor,
      blogAboutDescription
    });
    config.save(err => {
      if (err) return res.status(500).send(err);
      res.redirect("/cmstool");
    });
  } else {
    Config.findByIdAndUpdate(
      id,
      {
        homeTitle,
        homeDescription,
        homeThumbnail,
        homeAboutMeContent,
        homeAboutMeThumbnail,
        homeLatestWorksTitle,
        homeLatestWorksDescription,
        homeFacebook,
        homeLinkedIn,
        homeTwitter,
        blogAboutAvatar,
        blogAboutThumbnail,
        blogAboutAuthor,
        blogAboutDescription
      },
      { new: true },
      err => {
        if (err) return res.status(500).send(err);
        res.redirect("/cmstool");
      }
    );
  }
};

const login = (req, res) => {
  res.render("login");
};

const category = (req, res) => {
  Category.find({}, (err, categories) => {
    if (err) return res.status(500).send(err);
    res.render("category", { categories: categories });
  });
};

const category_detail = (req, res) => {
  const { id } = req.params;
  if (id) {
    Category.findById(id, (err, category) => {
      if (err) return res.status(500).send(err);
      res.render("category_detail", { category: category });
    });
  } else {
    res.render("category_detail");
  }
};

const category_createorupdate = (req, res) => {
  const { id, name, description } = req.body;
  if (!id) {
    const category = new Category({
      name,
      description
    });
    category.save(err => {
      if (err) return res.status(500).send(err);
      res.redirect("/cmstool/categories");
    });
  } else {
    Category.findByIdAndUpdate(
      id,
      { name, description },
      { new: true },
      err => {
        if (err) return res.status(500).send(err);
        res.redirect("/cmstool/categories");
      }
    );
  }
};

const category_delete = (req, res) => {
  const { id } = req.params;
  Category.findByIdAndRemove(id, (err, categories) => {
    if (err) return res.status(500).send(err);
    res.redirect("/cmstool/categories");
  });
};

const blog = (req, res) => {
  const { categoryID } = req.query;

  if (!categoryID) {
    res.redirect("/cmstool/categories");
    return;
  }

  Blog.find({ category: categoryID })
    .sort({ index: -1 })
    .populate("category")
    .exec((err, blogs) => {
      if (err) return res.status(500).send(err);

      console.log(blogs);
      res.render("blog", { blogs: blogs, categoryID: categoryID });
    });
};

const blog_detail = (req, res) => {
  const { id } = req.params;

  if (!id) {
    Category.find({}, (err, categories) => {
      if (err) return res.status(500).send(err);
      res.render("blog_detail", { categories: categories });
    });
  } else {
    async.parallel(
      {
        categories: callback => {
          Category.find({}).exec(callback);
        },
        blog: callback => {
          Blog.findById(id)
            .populate("category")
            .exec(callback);
        }
      },
      function(err, result) {
        if (err) return res.status(500).send(err);
        res.render("blog_detail", {
          categories: result.categories,
          blog: result.blog
        });
      }
    );
  }
};

const blog_createorupdate = (req, res) => {
  const {
    id,
    title,
    author,
    thumbnail,
    description,
    content,
    index,
    highlight,
    category,
    keywords
  } = req.body;
  if (!id) {
    const createdTime = Date.now();
    const updatedTime = createdTime;
    const blog = new Blog({
      title,
      author,
      thumbnail,
      description,
      content,
      index,
      highlight,
      category,
      keywords,
      createdTime,
      updatedTime
    });
    blog.save(err => {
      if (err) return res.status(500).send(err);
      res.redirect(`/cmstool/blogs?categoryID=${category}`);
    });
  } else {
    const updatedTime = Date.now();
    Blog.findByIdAndUpdate(
      id,
      {
        title,
        author,
        thumbnail,
        description,
        content,
        index,
        highlight,
        category,
        keywords,
        updatedTime
      },
      { new: true },
      err => {
        if (err) return res.status(500).send(err);
        res.redirect(`/cmstool/blogs?categoryID=${category}`);
      }
    );
  }
};

const blog_delete = (req, res) => {
  const { id } = req.params;
  const { categoryID } = req.query;
  Blog.findByIdAndRemove(id, err => {
    if (err) return res.status(500).send(err);
    res.redirect(`/cmstool/blogs?categoryID=${categoryID}`);
  });
};

module.exports = {
  dashboard,
  config_createorupdate,
  login,
  category,
  category_detail,
  category_createorupdate,
  category_delete,
  blog,
  blog_detail,
  blog_createorupdate,
  blog_delete
};
