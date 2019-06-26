const { updateCampuses, getCampuses } = require("../db/campus/campus.actions");
const {
  updateWilders,
  getWildersByCampus
} = require("../db/wilder/wilder.actions");
const { updateMatches, calculateElos } = require("../db/match/match.actions");

module.exports = [
  {
    method: "GET",
    path: "/campuses",
    handler: async (request, h) => {
      try {
        await updateCampuses();
        await updateMatches();
        await calculateElos();
        return await getCampuses();
      } catch (error) {
        console.log(error);
      }
    }
  },
  {
    method: "GET",
    path: "/campuses/{campusId}/wilders",
    handler: async (request, h) => {
      try {
        const campusId = request.params.campusId;
        await updateCampuses();
        await updateWilders();
        return getWildersByCampus(campusId);
      } catch (error) {
        console.log(error);
      }
    }
  }
];
