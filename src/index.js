const app = require("./app");
const prisma = require("./config/db");
const logger = require("./utils/logger");
require("dotenv").config();

const PORT = process.env.PORT;

prisma
  .$connect()
  .then(() => {
    logger.info("Connected to the database");
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    logger.error(`Error connecting to the database: ${err.message}`);
    process.exit(1);
  });
