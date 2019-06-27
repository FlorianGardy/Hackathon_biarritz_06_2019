const should = require("should");
const { init } = require("../src/server");
const { Campus } = require("../src/db/campus/campus.model");
const { Wilder } = require("../src/db/wilder/wilder.model");

describe("# Campus", () => {
  let server;

  beforeEach(async () => {
    server = await init();
  });

  afterEach(async () => {
    await server.stop();
  });

  describe("## GET /campuses", () => {
    it("responds with 200", async () => {
      const res = await server.inject({
        method: "GET",
        url: "/campuses"
      });
      should(res.statusCode).equal(200);
    });

    it("responds an empty Campus list", async () => {
      const res = await server.inject({
        method: "GET",
        url: "/campuses"
      });
      const payload = JSON.parse(res.payload);
      should(payload).deepEqual([]);
    });

    it("responds an campuses list with two campus", async () => {
      const campus1 = {
        name: "Biarritz Campus",
        city: "biarritz",
        country: "france",
        uid: "bia",
        creation: "01/12/2010",
        manager: {
          firstname: "marylou",
          lastname: "moulon"
        }
      };
      const campus2 = {
        name: "Biarritz Campus",
        city: "biarritz",
        country: "france",
        uid: "bia",
        creation: "01/12/2010",
        manager: {
          firstname: "marylou",
          lastname: "moulon"
        }
      };
      await Campus.create(campus1);
      await Campus.create(campus2);
      const res = await server.inject({
        method: "GET",
        url: "/campuses"
      });
      const payload = JSON.parse(res.payload);
      should(payload).match([campus1, campus2]);
    });
  });
  // ##########################################################################################################
  describe("## GET /campuses/:id/wilders", () => {
    it("responds with 200", async () => {
      const res = await server.inject({
        method: "GET",
        url: "/campuses/bia/wilders"
      });
      should(res.statusCode).equal(200);
    });

    it("responds an empty wilder list", async () => {
      const res = await server.inject({
        method: "GET",
        url: "/campuses/bia/wilders"
      });
      const payload = JSON.parse(res.payload);
      should(payload).deepEqual([]);
    });

    it("responds an wilders list with two wilder", async () => {
      const wilder1 = {
        id: 1,
        firstname: "jonathan",
        lastname: "diniz",
        campus: "bia"
      };
      const wilder2 = {
        id: 2,
        firstname: "jonathan",
        lastname: "diniz",
        campus: "bia"
      };
      await Wilder.create(wilder1);
      await Wilder.create(wilder2);
      const res = await server.inject({
        method: "GET",
        url: "/campuses/bia/wilders"
      });
      const payload = JSON.parse(res.payload);
      should(payload).match([wilder1, wilder2]);
    });
  });
});
