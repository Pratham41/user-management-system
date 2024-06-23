const authService = require("./authService");
const profileService = require("./profileService");
const searchService = require("./searchService");
const spamService = require("./spamService");
const contactService = require("./contactService");

module.exports = {
  AUTH_SERVICE: authService,
  SEARCH_SERVICE: searchService,
  SPAM_SERVICE: spamService,
  PROFILE_SERVICE: profileService,
  CONTACT_SERVICE: contactService,
};
