import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCampuses } from "../pills/campuses/campuses.action";

const NewClassement = ({ campuses, dispatch }) => {
  useEffect(() => {
    dispatch(getCampuses());
  }, [dispatch]);
  return (
    <div style={{ textAlign: "left" }}>
      {campuses
        .sort((a, b) => {
          return a - b;
        })
        .map((classe, index) => (
          <div key={index} className="text-success">
            [{index + 1}] - {classe.name} - {classe.country} - {classe.city}
          </div>
        ))
        .slice(0, 3)}
      <hr style={{ border: "0.5px solid gray" }} />
      {campuses
        .sort((a, b) => {
          return b - a;
        })
        .map((classe, index) => (
          <div key={index} className="text-danger">
            [{index + 1}] - {classe.name} - {classe.country} - {classe.city}
          </div>
        ))
        .slice(campuses.length - 3, campuses.length)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    campuses: state.campusesReducer.campuses
  };
};

export default connect(mapStateToProps)(NewClassement);
