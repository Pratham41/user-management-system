const express = require("express");
const { SPAM_CONTROLLER } = require("../controllers");
const { protect } = require("../middlewares");

const router = express.Router();

router.route("/").post(protect, SPAM_CONTROLLER.markAsSpam);

module.exports = router;
