const { Match } = require("./match.model");

// Update matches (from API data)
function refreshMatches() {
  // Update matches process
}

// Calculate ELOs
function calculateElos() {
  // update Elo info in matches
  // update currentElo in campuses
}

// Get all matches from DB
function getMatches() {
  return Match.findAll();
}

module.exports = { refreshMatches, calculateElos, getMatches };
