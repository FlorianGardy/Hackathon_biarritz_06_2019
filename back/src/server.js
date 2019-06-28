"use strict";
const Sequelize = require("sequelize");
require("dotenv").config();
const cron = require("node-cron");

const Hapi = require("@hapi/hapi");

const { refreshCampuses } = require("./db/campus/campus.actions");
const { refreshWilders } = require("./db/wilder/wilder.actions");
const { refreshMatches } = require("./db/match/match.actions");
const { updateElo } = require("./db/match/newElo");

const server = Hapi.server({
  port: 3030,
  host: "localhost",
  routes: {
    cors: true
  }
});

server.route(require("./routes/campuses.routes"));
server.route(require("./routes/matches.routes"));

exports.init = async () => {
  const sequelize = require("./db/connect");
  await sequelize.sync({ force: true });
  await server.initialize();
  return server;
};

exports.start = async () => {
  const sequelize = require("./db/connect");
  await sequelize.sync({ force: true });
  await sequelize.authenticate();
  // .then(() => {
  //   console.log("Connection has been established successfully.");
  // })
  // .catch(err => {
  //   console.error("Unable to connect to the database:", err);
  // });
  await server.start();
  console.log("Server running on %s", server.info.uri);

  // Data refresh from API (Launched one time when server start)
  await refreshCampuses();
  await refreshWilders();
  await refreshMatches();
  await updateElo();

  // Data refresh from API (launched periodically)
  cron.schedule("*/10 * * * * *", async () => {
    await refreshCampuses();
    await refreshWilders();
    await refreshMatches();
    await updateElo();
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
