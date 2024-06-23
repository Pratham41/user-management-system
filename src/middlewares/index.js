const { protect } = require("./auth");
const { validateRegistration, validateLogin, validateContact } = require("./validation");
const { errorMiddleware } = require("./error");

module.exports = {
  protect,
  validateRegistration,
  validateLogin,
  errorMiddleware,
  validateContact
};
