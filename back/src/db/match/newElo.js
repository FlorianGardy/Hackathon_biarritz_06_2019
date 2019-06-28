const { getMatches } = require("./match.actions");
const sequelize = require("../connect");
const { campus: Campus, match: Match } = sequelize.models;

function eloRankingDelta(homeTeamElo, awayTeamElo, gameStatus) {
  let myChanceToWin = 1 / (1 + Math.pow(10, (awayTeamElo - homeTeamElo) / 400));
  return Math.round(32 * (gameStatus - myChanceToWin));
}

function getEloByCampus(matches, campuses, eloByCampuses) {
  let newEloByCampuses = { ...eloByCampuses };
  matches.forEach(({ homeTeam, awayTeam, winnerUid }) => {
    const homeTeamElo = eloByCampuses[homeTeam];
    const awayTeamElo = eloByCampuses[awayTeam];
    const isWinner = winnerUid === homeTeam ? 1 : 0;
    let eloDelta = eloRankingDelta(homeTeamElo, awayTeamElo, isWinner);
    newEloByCampuses[homeTeam] += eloDelta;
    newEloByCampuses[awayTeam] -= eloDelta;
  });
  return newEloByCampuses;
}

async function updateElo() {
  let campuses = await Campus.findAll();
  const matches = await Match.findAll();
  const eloByCampus = campuses.reduce((acc, campus) => {
    acc[campus.uid] = campus.currentElo;
    return acc;
  }, {});

  const newEloByCampus = getEloByCampus(matches, campuses, eloByCampus);

  await Promise.all(
    Object.keys(newEloByCampus).map(campusUid =>
      Campus.update(
        { currentElo: newEloByCampus[campusUid] },
        { where: { uid: campusUid } }
      )
    )
  );

  campuses = await Campus.findAll();

  return;
}

module.exports = { updateElo };
