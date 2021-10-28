// Read environment variables

require("dotenv").config();

const config = {
  PORT: process.env.PORT || 3000,
  MONGODB_HOST: process.env.MONGODB_HOST || "localhost",
  MONGODB_DATABASE: process.env.MONGODB_DB || "notes-app",
  MONGODB_URI: `mongodb://${process.env.MONGODB_HOST || "localhost"}/${
    process.env.MONGODB_DATABASE || "notes-app"
  }`,
};

module.exports = config;

