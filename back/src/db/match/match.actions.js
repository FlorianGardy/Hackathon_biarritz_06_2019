const { Match } = require("./match.model");
const getMatchesFromAPI = require("../../API/getMatchesFromAPI");
const calculateElos = require("./eloFunctions");

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
    if (found === false) {
      const matchWithElo = await calculateElos(matchAPI);
      if (matchWithElo) {
        await Match.create(matchWithElo);
        console.log(
          matchAPI.homeTeam,
          "vs",
          matchAPI.awayTeam,
          "added to database"
        );
      }
    }
  });
}

// Get all matches from DB
function getMatches() {
  return Match.findAll();
}

module.exports = { refreshMatches, calculateElos, getMatches };
