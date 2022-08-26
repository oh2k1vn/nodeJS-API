const headerRouter = require("./header");

function route(app) {
  // API header
  app.use("/api/header", headerRouter);

  // Page Home
  app.get("/", (req, res) => {
    res.render("home");
  });
}

module.exports = route;
