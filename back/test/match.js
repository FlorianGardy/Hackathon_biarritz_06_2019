const should = require("should");
const { init } = require("../src/server");
const { Match } = require("../src/db/match/match.model");

describe("# Match", () => {
  let server;

  beforeEach(async () => {
    server = await init();
  });

  afterEach(async () => {
    await server.stop();
  });

  describe("## GET /matches", () => {
    it("responds with 200", async () => {
      const res = await server.inject({
        method: "GET",
        url: "/matches"
      });
      should(res.statusCode).equal(200);
    });

    it("responds an empty match list", async () => {
      const res = await server.inject({
        method: "GET",
        url: "/matches"
      });
      const payload = JSON.parse(res.payload);
      should(payload).deepEqual([]);
    });

    it("responds an matches list with two match", async () => {
      const match1 = {
        homeTeam: "bia",
        awayTeam: "bor",
        isoDate: "01/02/2018",
        winnerUid: "bia"
      };
      const match2 = {
        homeTeam: "bia",
        awayTeam: "bor",
        isoDate: "01/02/2018",
        winnerUid: "bia"
      };
      await Match.create(match1);
      await Match.create(match2);
      const res = await server.inject({
        method: "GET",
        url: "/matches"
      });
      const payload = JSON.parse(res.payload);
      should(payload).match([match1, match2]);
    });
  });
});
