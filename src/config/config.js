const { config } = require("dotenv");

config();

module.exports = {
  SERVER: {
    PORT: process.env.PORT ?? 3000,
  },
  DATABASE: {
    USERNAME: process.env.DB_USERNAME ?? "test",
    PASSWORD: process.env.DB_PASSWORD ?? "test"
  },
  TOKEN: {
    jwtToken: process.env.SECRET_ACCESS_TOKEN,
  }
};