const { Campus } = require("./campus.model");
const getCampusesFromAPI = require("../../API/getCampusFromAPI");

// refresh campuses (from API data)
async function refreshCampuses() {
  // Update campus process
}

// Get all campuses from DB
function getCampuses() {
  return Campus.findAll();
}

module.exports = { refreshCampuses, getCampuses };
