const mongoose = require("mongoose");
const dotenv = require("dotenv");
const log4js = require("log4js");
dotenv.config();
mongoose.set("strictQuery", true);
const logger = log4js.getLogger();

const LINK = process.env.LINK;

async function connectDatabase() {
  try {
    // await mongoose.connect(LINK);
    await mongoose.connect(LINK, {
      useNewUrlParser: false,
      useUnifiedTopology: false,
    });
    logger.log("Connected to Database");
  } catch (error) {
    logger.error("Could not connect to the database", error);
  }
}

module.exports = connectDatabase;
