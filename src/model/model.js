const mongoose = require("mongoose");

const headerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  path: {
    type: String,
  },
  submit: {
    type: [{ name: String, path: String }],
  },
  icon: {
    type: String,
  },
});

let Header = mongoose.model("Header", headerSchema);

module.exports = { Header };
