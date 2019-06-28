import React, { useEffect } from "react";
import WildersView from "./wilders.view";
import { connect } from "react-redux";
import { getWilders } from "../wilders/wilders.actions";

const WildersContainer = ({ dispatch, wilders, campusId }) => {
  useEffect(() => {
    dispatch(getWilders(campusId));
  }, [dispatch, campusId]);

  return (
    <div>
      <WildersView wildersFromOneCampus={wilders} />
    </div>
  );
};

const mapStateToProps = state => ({
  wilders: state.wildersReducer.wilders
});

export default connect(mapStateToProps)(WildersContainer);
