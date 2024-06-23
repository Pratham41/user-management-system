const express = require("express");
const { PROFILE_CONTROLLER } = require("../controllers");
const { protect } = require("../middlewares");

const router = express.Router();

router.route("/").get(protect, PROFILE_CONTROLLER.getProfile);
router.route("/").put(protect, PROFILE_CONTROLLER.updateProfile);

module.exports = router;
