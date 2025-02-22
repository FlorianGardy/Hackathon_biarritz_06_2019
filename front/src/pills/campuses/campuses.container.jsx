import React, { useEffect } from "react";
import CampusView from "./campuses.view";
import { connect } from "react-redux";
import { getCampuses } from "../campuses/campuses.action";

const CampusContainer = ({ dispatch, campuses }) => {
  useEffect(() => {
    dispatch(getCampuses());
  }, [dispatch]);

  return (
    <div>
      <CampusView campuses={campuses} />
    </div>
  );
};

const mapStateToProps = state => ({
  campuses: state.campusesReducer.campuses
});

export default connect(mapStateToProps)(CampusContainer);
