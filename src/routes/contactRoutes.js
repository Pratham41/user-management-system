const express = require("express");
const { CONTACT_CONTROLLER } = require("../controllers");
const { protect, validateContact } = require("../middlewares");

const router = express.Router();

router
  .route("/add")
  .post(protect, validateContact, CONTACT_CONTROLLER.addContact);

module.exports = router;
