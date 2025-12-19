const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller")

router.get("/employee", controller.getData);
router.post("/employee", controller.submitData);

module.exports = router;
