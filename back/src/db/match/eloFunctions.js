const { Campus } = require("../campus/campus.model");

module.exports = async function(match) {
  const homeElo = await Campus.findOne({
    attributes: ["currentElo", "uid"],
    where: {
      uid: match.homeTeam
    }
  }).catch(err => console.log(err));

  const awayElo = await Campus.findOne({
    attributes: ["currentElo", "uid"],
    where: {
      uid: match.awayTeam
    }
  }).catch(err => console.log(err));

  if (homeElo && awayElo) {
    const Rating = await getRatingDelta(homeElo.currentElo, awayElo.currentElo);

    if (match.homeTeam === match.winnerUid) {
      homeNewElo = parseInt(homeElo.currentElo) + Rating;
      awayNewElo = awayElo.currentElo - Rating;
    } else {
      homeNewElo = homeElo.currentElo - Rating;
      awayNewElo = parseInt(awayElo.currentElo) + Rating;
    }

    Campus.update({ currentElo: homeNewElo }, { where: { uid: homeElo.uid } });
    Campus.update({ currentElo: awayNewElo }, { where: { uid: awayElo.uid } });

    return {
      ...match,
      homeElo: homeNewElo,
      awayElo: awayNewElo,
      homeEloDiff: homeNewElo - homeElo.currentElo,
      awayEloDiff: awayNewElo - awayElo.currentElo
    };
  }
  return null;
};

function getRatingDelta(team1, team2) {
  let myChanceToWin = 1 / (1 + Math.pow(10, (team2 - team1) / 400));
  return Math.round(32 * myChanceToWin);
}
