const logger = require("../utils/logger");

exports.errorMiddleware = (err, req, res, next) => {
  if (err.isJoi) {
    return res
      .status(400)
      .json({ error: err.details.map((e) => e.message).join(", ") });
  }
  logger.error(`Error: ${err.message}`);
  res.status(500).json({ error: "Internal Server Error" });
};
