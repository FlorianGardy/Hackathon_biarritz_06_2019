import React, { useEffect } from "react";
import CampusView from "./campuses.view";
import { connect } from "react-redux";
import { updateCampuses } from "../campuses/campuses.action";

const CampusContainer = ({ dispatch, campuses }) => {
  useEffect(() => {
    console.log("coucou");

    dispatch(updateCampuses());
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
