const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/", (req, res) => {
    const actualPage = "/index";
    app.render(req, res, actualPage, req.query);
  });
  server.get("/blog", (req, res) => {
    const actualPage = "/blog";
    app.render(req, res, actualPage, req.query);
  });
  server.get("/blog_detail", (req, res) => {
    const actualPage = "/blog_detail";
    app.render(req, res, actualPage, req.query);
  });
  server.get("/about", (req, res) => {
    const actualPage = "/about";
    app.render(req, res, actualPage, req.query);
  });
  server.get("/search", (req, res) => {
    const actualPage = "/about";
    app.render(req, res, actualPage, req.query);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
