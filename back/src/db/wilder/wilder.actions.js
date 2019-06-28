const { Wilder } = require("./wilder.model");
const getWildersFromAPI = require("../../API/getWildersFromAPI");

// refresh wilders (from API data)
async function refreshWilders() {
  const wildersFromAPI = await getWildersFromAPI();
  const wildersFromDb = await Wilder.findAll();
  wildersFromAPI.map(async wilderAPI => {
    let found = false;
    for (let i = 0; i < wildersFromDb.length; i++) {
      if (wildersFromDb[i].uid === wilderAPI.id) {
        found = true;
        break;
      }
    }
    if (found === false) {
      await Wilder.create(wilderAPI);
      console.log(wilderAPI.firstname, "added to database");
    }
  });
}

// Get all wilders from DB
function getWildersByCampus(campusId) {
  return Wilder.findAll({ where: { campus: campusId } });
}

module.exports = { refreshWilders, getWildersByCampus };
