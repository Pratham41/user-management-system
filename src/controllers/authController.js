const { AUTH_SERVICE } = require("../services");

const register = async (req, res, next) => {
  try {
    const { name, phoneNumber, password, email } = req.body;
    const { user, token } = await AUTH_SERVICE.createUser(
      name,
      phoneNumber,
      password,
      email
    );
    res.status(201).json({ user, token });
  } catch (err) {
    if (err.code === "P2002") {
      res
        .status(409)
        .json({ error: "Phone number or email already registered" });
    } else {
      next(err);
    }
  }
};

const login = async (req, res, next) => {
  try {
    const { phoneNumber, password } = req.body;
    const { user, token } = await AUTH_SERVICE.loginUser(phoneNumber, password);
    res.json({ user, token });
  } catch (err) {
    logger.error(`Error logging in user: ${err.message}`);
    res.status(401).json({ error: "Invalid phone number or password" });
  }
};

const authController = {
  register,
  login,
};

module.exports = authController;
