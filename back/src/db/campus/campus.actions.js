const { Campus } = require("./campus.model");
const getCampusesFromAPI = require("../../API/getCampusFromAPI");

// refresh campuses (from API data)
async function refreshCampuses() {
  const campusFromApi = await getCampusesFromAPI();
  const campusFromDb = await Campus.findAll();
  campusFromApi.data.map(async campusAPI => {
    if (campusFromDb.length === 0) {
      await Campus.create(campusAPI);
    }
  });
}

// Get all campuses from DB
function getCampuses() {
  return Campus.findAll();
}

module.exports = { refreshCampuses, getCampuses };
