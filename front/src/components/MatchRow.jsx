import React from "react";
import PropTypes from "prop-types";

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
      <tr>{isoDate}</tr>
      <tr>
        {winnerUid !== null ? (
          <td style={{ color: winnerUid === homeTeam ? "green" : "red" }}>
            {homeEloDiff}
          </td>
        ) : (
          <td>Coming Soon</td>
        )}
        <td>
          {homeName}({homeTeam})
        </td>
        <td>
          {awayName}({awayTeam})
        </td>
        <td style={{ color: winnerUid === awayTeam ? "green" : "red" }}>
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
