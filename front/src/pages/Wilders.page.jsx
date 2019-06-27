import React from "react";

const Wilders = ({ match }) => {
  const campusId = match.params.campusId;

  return <div>Wilders - {campusId}</div>;
};
export default Wilders;
