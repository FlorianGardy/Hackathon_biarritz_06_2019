import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMatches } from "../pills/matches/matches.action";
import { getCampuses } from "../pills/campuses/campuses.action";

const NewDuels = ({ matches, campuses, dispatch }) => {
  useEffect(() => {
    dispatch(getMatches());
    dispatch(getCampuses());
  }, [dispatch]);

  matches.map(match =>
    campuses.map(campus => {
      if (campus.uid === match.homeTeam) {
        match.homeName = campus.name;
      }
      if (campus.uid === match.awayTeam) {
        match.awayName = campus.name;
      }
      return campus;
    })
  );

  return matches
    .slice(matches.length - 3, matches.length)
    .map((match, index) => (
      <div key={index}>
        {match.homeName} / {match.awayName}
      </div>
    ))
    .slice(0, 3);
};

const mapStateToProps = state => ({
  matches: state.matchesReducer.matches,
  campuses: state.campusesReducer.campuses
});

export default connect(mapStateToProps)(NewDuels);
