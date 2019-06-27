const { Campus } = require("./campus.model");
const getCampusesFromAPI = require("../../API/getCampusesFromAPI");

// refresh campuses (from API data)
async function refreshCampuses() {
  const campusesFromApi = await getCampusesFromAPI();
  const campusesFromDb = await Campus.findAll();

  campusesFromApi.forEach(campusFromAPI => {
    const campusExistsInDB = campusesFromDb.some(
      campusFromDB => campusFromDB.uid === campusFromAPI.uid
    );
    if (!campusExistsInDB) {
      Campus.create(campusFromAPI).then(() => {
        console.log(`${campusFromAPI.name} created in database`);
      });
    }
  });
}

// Get all campuses from DB
function getCampuses() {
  return Campus.findAll();
}

module.exports = { refreshCampuses, getCampuses };
