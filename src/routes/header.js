const express = require("express");
const router = express.Router();

const headerController = require("../app/controllers/HeaderController");

router.get("", headerController.index);
router.post("", headerController.addHeader);

module.exports = router;
