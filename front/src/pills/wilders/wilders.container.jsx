import React, { useEffect } from "react";
import WildersView from "./wilders.view";
import { connect } from "react-redux";
import { updateWilders } from "../wilders/wilders.action";

const WildersContainer = ({ dispatch, wilders }) => {
  useEffect(() => {
    dispatch(updateWilders());
  }, [dispatch]);

  return (
    <div>
      <WildersView wilders={wilders} />
    </div>
  );
};

const mapStateToProps = state => ({
  wilders: state.wildersReducer.wilders
});

export default connect(mapStateToProps)(WildersContainer);
