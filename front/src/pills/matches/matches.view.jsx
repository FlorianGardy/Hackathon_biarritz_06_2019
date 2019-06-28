import React from "react";
import MatchRow from "../../components/MatchRow";
import { Table } from "reactstrap";

const MatchesView = ({ matches, campus }) => {
  return (
    <Table
      responsive
      hover
      size="ml"
      className="p-3 my-5"
      style={{ backgroundColor: "#FFF" }}
    >
      <thead>
        <tr>
          <th>Liste des duels</th>
        </tr>
      </thead>
      <tbody>
        {matches.map((match, i) => (
          <MatchRow
            key={i}
            homeTeam={match.homeTeam}
            homeName={match.homeName}
            awayTeam={match.awayTeam}
            awayName={match.awayName}
            isoDate={match.isoDate}
            winnerUid={match.winnerUid}
            homeElo={match.homeElo}
            awayElo={match.awayElo}
            homeEloDiff={match.homeEloDiff}
            awayEloDiff={match.awayEloDiff}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default MatchesView;
