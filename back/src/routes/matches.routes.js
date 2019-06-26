const { getMatches } = require("../db/match/match.actions");

module.exports = [
  {
    method: "GET",
    path: "/matches",
    handler: async (request, h) => {
      try {
        return await getMatches();
      } catch (error) {
        console.log(error);
      }
    }
  }
];
