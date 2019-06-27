import React from "react";

const duels = [
  { homeTeam: "bia", awayTeam: "bod", isoDate: "01/02/2018", winnerUid: "bia" },
  { homeTeam: "ber", awayTeam: "par", isoDate: "03/03/2018", winnerUid: "ber" },
  { homeTeam: "lon", awayTeam: "ber", isoDate: "03/04/2018", winnerUid: "lon" },
  { homeTeam: "mad", awayTeam: "bod", isoDate: "03/02/2019", winnerUid: "bod" },
  { homeTeam: "lon", awayTeam: "bod", isoDate: "05/06/2018", winnerUid: "bod" },
  { homeTeam: "bru", awayTeam: "bia", isoDate: "01/02/2019", winnerUid: "bia" },
  { homeTeam: "bru", awayTeam: "lon", isoDate: "01/03/2018", winnerUid: "lon" },
  { homeTeam: "lon", awayTeam: "par", isoDate: "02/04/2019", winnerUid: "bod" },
  { homeTeam: "lon", awayTeam: "par", isoDate: "02/04/2019", winnerUid: "lon" },
  { homeTeam: "bia", awayTeam: "buc", isoDate: "01/03/2019", winnerUid: "buc" },
  {
    homeTeam: "lis",
    awayTeam: "toul",
    isoDate: "03/06/2019",
    winnerUid: "toul"
  },
  { homeTeam: "lis", awayTeam: "bia", isoDate: "03/11/2018", winnerUid: "bia" },
  { homeTeam: "buc", awayTeam: "mar", isoDate: "03/12/2018", winnerUid: "mar" },
  { homeTeam: "mar", awayTeam: "par", isoDate: "25/12/2018", winnerUid: "mar" },
  { homeTeam: "stra", awayTeam: "bod", isoDate: "29/12/2018", winnerUid: "bod" }
];

const NewDuels = () => {
  return duels
    .map((duel, index) => (
      <div key={index}>
        {duel.homeTeam} / {duel.awayTeam} {duel.winnerUid}
      </div>
    ))
    .slice(0, 3);
};

export default NewDuels;
