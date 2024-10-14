const DEFAULT_ERROR_LOG_LEVEL = process.env.DEFAULT_ERROR_LOG_LEVEL || "info";
const API_ERROR_LOG_LEVEL = process.env.API_ERROR_LOG_LEVEL || "info";

const loggerConfiguration = {
  appenders: {
    console: { type: "console" },
    file: {
      type: "file",
      filename: "logs/server.log",
      maxLogSize: 10485760,
      backups: 3,
      compress: true,
    },
  },
  categories: {
    default: { appenders: ["console", "file"], level: DEFAULT_ERROR_LOG_LEVEL },
    api: { appenders: ["console", "file"], level: API_ERROR_LOG_LEVEL },
  },
};

module.exports = { loggerConfiguration };
