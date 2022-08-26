const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const handlebars = require("express-handlebars");
const app = express();
const port = process.env.PORT || 8000;

const route = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors()), app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json());

// HTTP logger => Thông báo dưới terminal
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// route init
route(app);

app.listen(port, () => {
  console.log(`Server is running ... ${port}`);
});

// dotenv
dotenv.config();
// connect to db
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connect Success !!!!");
});
