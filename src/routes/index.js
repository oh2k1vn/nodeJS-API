const headerRouter = require("./header");

function route(app) {
  app.use("/api/header", headerRouter);

  app.get("/", (req, res) => {
    res.render("home");
  });
}

module.exports = route;
