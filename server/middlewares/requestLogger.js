const log4js = require("log4js");

const logger = log4js.getLogger("api");

function endpointLogMiddleware(req, res, next) {
  const { method, originalUrl, body, query, params } = req;
  const logMessage = {
    method,
    url: originalUrl,
    body,
    query,
    params,
  };
  logger.info("Incoming request:", logMessage);
  next();
}

module.exports = { endpointLogMiddleware };
