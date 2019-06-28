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
          {isoDate}
        </th>
      )}
      <tr>
        {winnerUid !== null ? (
          <td
            style={{
              color: winnerUid === homeTeam ? "green" : "red",
              width: "20vw",
              fontSize: "1.2rem"
            }}
          >
            {homeEloDiff}
          </td>
        ) : (
          <td style={{ color: "gray" }}>Coming Soon</td>
        )}
        <td>
          {homeName}({homeTeam})
        </td>
        <td>
          {awayName}({awayTeam})
        </td>
        <td
          style={{
            color: winnerUid === awayTeam ? "green" : "red",
            width: "20vw",
            fontSize: "1.2rem"
          }}
        >
          {awayEloDiff}
        </td>
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
