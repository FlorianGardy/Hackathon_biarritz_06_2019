const { Wilder } = require("./wilder.model");

// Update wilders (from API data)
function updateWilders() {
  // Update wilders process
}

// Get all wilders from DB
function getWildersByCampus(campusId) {
  return Wilder.findAll({ where: { campus: campusId } });
}

module.exports = { updateWilders, getWildersByCampus };
