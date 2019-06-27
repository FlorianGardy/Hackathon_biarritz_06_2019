import React from "react";
import WildersContainer from "../pills/wilders/wilders.container";

const Wilders = ({ match }) => {
  const campusId = match.params.campusId;

  return (
    <div>
      <WildersContainer campusId={campusId} />
    </div>
  );
};

export default Wilders;
