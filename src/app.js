const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");
const { errorMiddleware } = require("./middlewares");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1", routes);

app.use(errorMiddleware);

module.exports = app;
