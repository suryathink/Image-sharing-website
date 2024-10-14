const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const log4js = require("log4js");

const connectDatabase = require("./config/db");
const authRouter = require("./routes/auth.routes");
const { endpointLogMiddleware } = require("./middlewares/requestLogger");
const { loggerConfiguration } = require("./config/log4js.config");

log4js.configure(loggerConfiguration);

const logger = log4js.getLogger();
const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(endpointLogMiddleware);
app.use("/", authRouter);

connectDatabase().then(() => {
  app.listen(8080, () =>
    logger.log("Server listening on http://localhost:8080")
  );
});
