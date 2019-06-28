const { getCampuses } = require("../db/campus/campus.actions");
const { getWildersByCampus } = require("../db/wilder/wilder.actions");

module.exports = [
  {
    method: "GET",
    path: "/campuses",
    handler: async (request, h) => {
      try {
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
        return getWildersByCampus(campusId);
      } catch (error) {
        console.log(error);
      }
    }
  }
];
