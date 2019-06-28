const { Campus } = require("../campus/campus.model");

module.exports = async function(match) {
  const home = await Campus.findOne({
    attributes: ["currentElo", "uid"],
    where: {
      uid: match.homeTeam
    }
  }).catch(err => console.log(err));

  const away = await Campus.findOne({
    attributes: ["currentElo", "uid"],
    where: {
      uid: match.awayTeam
    }
  }).catch(err => console.log(err));

  const homeEloRatingDelta = getRatingDelta(home.currentElo, away.currentElo);

  homeNewElo = home.currentElo + homeEloRatingDelta;
  awayNewElo = away.currentElo - homeEloRatingDelta;

  await Campus.update({ currentElo: homeNewElo }, { where: { uid: home.uid } });
  await Campus.update({ currentElo: awayNewElo }, { where: { uid: away.uid } });

  return {
    homeElo: homeNewElo,
    awayElo: awayNewElo,
    homeEloDiff: homeNewElo,
    awayEloDiff: homeNewElo
  };
};

function getRatingDelta(team1, team2) {
  let myChanceToWin = 1 / (1 + Math.pow(10, (team2 - team1) / 400));
  return Math.round(32 * myChanceToWin);
}
