const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const profileRoutes = require("./profileRoutes");
const searchRoutes = require("./searchRoutes");
const spamRoutes = require("./spamRoutes");
const contactRoutes = require("./contactRoutes");

router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);
router.use("/search", searchRoutes);
router.use("/spam", spamRoutes);
router.use("/contact", contactRoutes);

module.exports = router;
