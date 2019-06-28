const { Campus } = require("../campus/campus.model");
const { Match } = require("./match.model");
const getMatchesFromAPI = require("../../API/getMatchesFromAPI");
const calculateElo = require("./eloFunctions");

// Update matches (from API data)
async function refreshMatches() {
  const matchesFromApi = await getMatchesFromAPI();
  const matchesFromDb = await Match.findAll();
  matchesFromApi.map(async matchAPI => {
    let found = false;
    for (let i = 0; i < matchesFromDb.length; i++) {
      if (
        matchesFromDb[i].homeTeam === matchAPI.homeTeam &&
        matchesFromDb[i].awayTeam === matchAPI.awayTeam &&
        matchesFromDb[i].isoDate === matchAPI.isoDate
      ) {
        found = true;
        break;
      }
    }
    if (!found) {
      await Match.create(matchAPI);
    }
  });
}

// Get all matches from DB
function getMatches() {
  return Match.findAll();
}

module.exports = { refreshMatches, calculateElo, getMatches };
