import React from "react";
import MatchRow from "../../components/MatchRow";
import { Table } from "reactstrap";

const divStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "gray",
  backgroundColor: "white",
  fontWeight: "bold",
  fontSize: "2rem",
  height: "40px",
  padding: "40px",
  margin: "20px 0"
};

const MatchesView = ({ matches }) => {
  return (
    <>
      <div style={divStyle}>ALL MATCHES</div>
      <Table
        responsive
        hover
        bordered
        className="p-2 table-sm"
        style={{ backgroundColor: "#FFF" }}
      >
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
    </>
  );
};

export default MatchesView;
