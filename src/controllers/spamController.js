const { SPAM_SERVICE } = require("../services");

const markAsSpam = async (req, res, next) => {
  try {
    await SPAM_SERVICE.markAsSpam(req.user.id, req.body.phoneNumber);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

const spamController = {
  markAsSpam,
};

module.exports = spamController;
