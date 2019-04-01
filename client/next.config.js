const path = require("path");
module.exports = {
  assetPrefix:
    process.env.NODE_ENV === "production" ? "//wae.vn/static/wae" : "",
  webpack: config => {
    config.output.publicPath =
      process.env.NODE_ENV === "production"
        ? `//wae.vn/static/wae${config.output.publicPath}`
        : `${config.output.publicPath}`;
    return config;
  }
  // exportPathMap: function() {
  //   return {
  //     "/": { page: "/" },
  //     "/about": { page: "/about" },
  //     "/blog": { page: "/blog" },
  //     "/blog_detail": { page: "/blog_detail" }
  //   };
  // }
};
