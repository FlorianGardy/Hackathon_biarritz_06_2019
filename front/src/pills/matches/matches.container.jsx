import React, { useEffect } from "react";
import MatchesView from "./matches.view";
import { connect } from "react-redux";
import { getMatches } from "../matches/matches.action";
import { getCampuses } from "../campuses/campuses.action";

const MatchesContainer = ({ dispatch, matches, campuses }) => {
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

  return (
    <div>
      <MatchesView matches={matches} />
    </div>
  );
};

const mapStateToProps = state => ({
  matches: state.matchesReducer.matches,
  campuses: state.campusesReducer.campuses
});

export default connect(mapStateToProps)(MatchesContainer);
