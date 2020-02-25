const express = require("express");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const setupGlobalMiddleware = require("./setup-middleware");

const server = express();

setupGlobalMiddleware(server);

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send("It's working!");
});

module.exports = server;
