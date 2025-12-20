const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller")

router.get("/employees", controller.getData);
router.post("/employees", controller.submitData);

module.exports = router;
