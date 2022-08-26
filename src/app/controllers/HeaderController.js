const { Header } = require("../../model/model");

module.exports = {
  // add header
  addHeader: async (req, res) => {
    try {
      const newHeader = new Header(req.body);
      const saveHeader = await newHeader.save();
      res.status(200).json(saveHeader);
    } catch (error) {
      res.status(500).json(err);
    }
  },
  // get header
  index: async (req, res) => {
    try {
      const header = await Header.find();
      res.status(200).json(header);
    } catch (error) {
      res.status(500).json(err);
    }
  },
};
