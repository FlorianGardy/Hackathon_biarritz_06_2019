"use strict";

const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 3030,
    host: "localhost"
  });

  server.route(require("./routes/campuses.routes"));
  server.route(require("./routes/matches.routes"));
  server.route(require("./routes/wilders.routes"));

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
