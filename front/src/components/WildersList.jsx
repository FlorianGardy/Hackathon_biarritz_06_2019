import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const WildersList = ({ firstname, lastname }) => {
  return (
    <tr>
      <td>{firstname}</td>
      <td>{lastname}</td>
    </tr>
  );
};
export default WildersList;

// CampusRow.propTypes = {
//   country: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
//   uid: PropTypes.string.isRequired,
//   manager: PropTypes.object,
//   creationDate: PropTypes.string
//   button: PropTypes.func,
// };
