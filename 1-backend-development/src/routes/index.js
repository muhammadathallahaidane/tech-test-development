const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller")

router.post("/employee", controller.submitData);

module.exports = router;
