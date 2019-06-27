import React, { useEffect } from "react";
import WildersView from "./wilders.view";
import { connect } from "react-redux";
import { updateWilders } from "../wilders/wilders.actions";

const WildersContainer = ({ dispatch, wilders, campusId }) => {
  useEffect(() => {
    dispatch(updateWilders());
  }, [dispatch]);

  return (
    <div>
      <WildersView
        wildersFromOneCampus={wilders.filter(
          wilder => wilder.campus === campusId
        )}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  wilders: state.wildersReducer.wilders
});

export default connect(mapStateToProps)(WildersContainer);
