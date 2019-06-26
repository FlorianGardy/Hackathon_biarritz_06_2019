"use strict";
const Sequelize = require("sequelize");
require("dotenv").config();

const Hapi = require("@hapi/hapi");

const server = Hapi.server({
  port: 3030,
  host: "localhost"
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
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
