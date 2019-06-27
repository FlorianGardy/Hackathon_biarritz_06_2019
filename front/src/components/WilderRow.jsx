import React from "react";
import PropTypes from "prop-types";

const WilderRow = ({ firstname, lastname }) => {
  return (
    <tr>
      <td>{firstname}</td>
      <td>{lastname}</td>
    </tr>
  );
};
export default WilderRow;

WilderRow.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired
};
