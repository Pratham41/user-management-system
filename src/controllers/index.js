const authController = require("./authController");
const profileController = require("./profileController");
const searchController = require("./searchController");
const spamController = require("./spamController");
const contactController = require("./contactController");

module.exports = {
  AUTH_CONTROLLER: authController,
  PROFILE_CONTROLLER: profileController,
  SEARCH_CONTROLLER: searchController,
  SPAM_CONTROLLER: spamController,
  CONTACT_CONTROLLER: contactController,
};
