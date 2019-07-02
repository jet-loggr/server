const json = require("express").json();
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const auth = require("../routes/auth");
const users = require("../routes/users");
const flights = require("../routes/flights");
const aircrafts = require("../routes/aircrafts");

const configureMiddleware = server => {
  server.use(json);
  server.use(helmet());
  server.use(morgan("dev"));
  server.use(cors());
  server.use("/api/auth", auth);
  server.use("/api/users", users);
  server.use("/api/flights", flights);
  server.use("/api/aircrafts", aircrafts);
};

module.exports = {
  configureMiddleware
};
