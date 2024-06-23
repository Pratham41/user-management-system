const express = require("express");
const { SEARCH_CONTROLLER } = require("../controllers");
const { protect } = require("../middlewares");

const router = express.Router();

router.route("/name").get(protect, SEARCH_CONTROLLER.searchByName);
router.route("/phone").get(protect, SEARCH_CONTROLLER.searchByPhoneNumber);

module.exports = router;
