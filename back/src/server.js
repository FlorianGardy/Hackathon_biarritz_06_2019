"use strict";
const Sequelize = require("sequelize");
require("dotenv").config();
const cron = require("node-cron");

const Hapi = require("@hapi/hapi");

const { refreshCampuses } = require("./db/campus/campus.actions");
const { refreshWilders } = require("./db/wilder/wilder.actions");
const { refreshMatches } = require("./db/match/match.actions");

const server = Hapi.server({
  port: 3030,
  host: "localhost",
  routes: {
    cors: true
  }
});

server.route(require("./routes/campuses.routes"));
server.route(require("./routes/matches.routes"));

const init = async () => {
  const sequelize = require("./db/connect");
  sequelize.sync();
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch(err => {
      console.error("Unable to connect to the database:", err);
    });
  await server.start();
  console.log("Server running on %s", server.info.uri);
  cron.schedule("*/2 * * * *", async () => {
    await refreshCampuses();
    await refreshWilders();
    await refreshMatches();
    console.log("Data refreshed from API");
  });
};

// Logs management
server.events.on("response", function(request) {
  console.log(
    request.info.remoteAddress +
      ": " +
      request.method.toUpperCase() +
      " " +
      request.path +
      " --> " +
      request.response.statusCode
  );
});

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
