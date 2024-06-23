const express = require("express");
const { AUTH_CONTROLLER } = require("../controllers");
const { validateRegistration, validateLogin } = require("../middlewares");

const router = express.Router();

router.route("/register").post(validateRegistration, AUTH_CONTROLLER.register);
router.route("/login").post(validateLogin, AUTH_CONTROLLER.login);

module.exports = router;
