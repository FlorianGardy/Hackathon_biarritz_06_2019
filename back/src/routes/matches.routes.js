const { updateCampuses } = require("../db/campus/campus.actions");
const {
  updateMatches,
  calculateElos,
  getMatches
} = require("../db/match/match.actions");

module.exports = [
  {
    method: "GET",
    path: "/matches",
    handler: async (request, h) => {
      try {
        await updateCampuses();
        await updateMatches();
        await calculateElos();
        return await getMatches();
      } catch (error) {
        console.log(error);
      }
    }
  }
];
