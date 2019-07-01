const json = require("express").json();
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const auth = require("../routes/auth");
const flights = require("../routes/flights");

const configureMiddleware = server => {
  server.use(json);
  server.use(helmet());
  server.use(morgan("dev"));
  server.use(cors());
  server.use("/api/auth", auth);
  server.use("/api/flights", flights);
};

module.exports = {
  configureMiddleware
};
