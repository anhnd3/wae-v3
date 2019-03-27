const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/blog/:category", (req, res) => {
    return app.render(req, res, "/blog", { category: req.params.category });
  });
  server.get("/blog_detail/:blog", (req, res) => {
    return app.render(req, res, "/blog_detail", { blog: req.params.blog });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
