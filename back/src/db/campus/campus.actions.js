const { Campus } = require("./campus.model");
const getCampusesFromAPI = require("../../API/getCampusesFromAPI");

// refresh campuses (from API data)
async function refreshCampuses() {
  const campusesFromApi = await getCampusesFromAPI();
  const campusesFromDb = await Campus.findAll();
  campusesFromApi.map(async campusAPI => {
    let found = false;
    for (let i = 0; i < campusesFromDb.length; i++) {
      if (campusesFromDb[i].uid === campusAPI.uid) {
        found = true;
        break;
      }
    }
    if (found === false) {
      await Campus.create(campusAPI);
      console.log(campusAPI.name, "added to database");
    }
  });
}

// Get all campuses from DB
function getCampuses() {
  return Campus.findAll();
}

module.exports = { refreshCampuses, getCampuses };
