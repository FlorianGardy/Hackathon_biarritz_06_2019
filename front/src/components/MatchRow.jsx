import React from "react";
import PropTypes from "prop-types";

const playedStyle = {
  textAlign: "center",
  fontSize: "1rem",
  color: "white",
  backgroundColor: "#5bc15b"
};

const notPlayedStyle = {
  textAlign: "center",
  fontSize: "1rem",
  color: "white",
  backgroundColor: "#ca4116"
};

const winnerColor = {
  color: "#5bc15b"
};
const looserColor = {
  color: "#ca4116"
};

const MatchRow = ({
  homeTeam,
  homeName,
  awayTeam,
  awayName,
  isoDate,
  winnerUid,
  homeElo,
  awayElo,
  homeEloDiff,
  awayEloDiff
}) => {
  return (
    <>
      {winnerUid !== null ? (
        <th colSpan={4} style={playedStyle}>
          {isoDate}
        </th>
      ) : (
        <th colSpan={4} style={notPlayedStyle}>
          Comming Soon - {isoDate}
        </th>
      )}
      <tr>
        {winnerUid === awayTeam ? (
          <td style={looserColor}>
            {homeName}({homeTeam})
          </td>
        ) : (
          <td style={winnerColor}>
            {homeName}({homeTeam})
          </td>
        )}

        {winnerUid === homeTeam ? (
          <td style={looserColor}>
            {awayName}({awayTeam})
          </td>
        ) : (
          <td style={winnerColor}>
            {awayName}({awayTeam})
          </td>
        )}
      </tr>
    </>
  );
};

MatchRow.propTypes = {
  homeTeam: PropTypes.string.isRequired,
  awayTeam: PropTypes.string.isRequired,
  isoDate: PropTypes.string,
  winnerUid: PropTypes.string,
  homeElo: PropTypes.string.isRequired,
  awayElo: PropTypes.string.isRequired,
  homeEloDiff: PropTypes.string.isRequired,
  awayEloDiff: PropTypes.string.isRequired
};

export default MatchRow;
