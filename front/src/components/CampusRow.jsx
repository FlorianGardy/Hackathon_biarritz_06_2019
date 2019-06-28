import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const CampusRow = ({
  elo,
  country,
  name,
  city,
  uid,
  managerFn,
  managerLn,
  creationDate
}) => {
  return (
    <tr>
      <td>{elo}</td>
      <td>{country}</td>
      <td>{name}</td>
      <td>
        {city}-{uid}
      </td>
      <td>
        {managerFn} {managerLn}
      </td>
      <td>{creationDate}</td>
      <td>
        <NavLink to={`/campuses/${uid}/wilders`}>Show</NavLink>
      </td>
    </tr>
  );
};
export default CampusRow;

CampusRow.propTypes = {
  elo: PropTypes.number,
  country: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  manager: PropTypes.object,
  creationDate: PropTypes.string
};
