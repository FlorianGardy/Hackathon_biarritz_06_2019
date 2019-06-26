import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "reactstrap";

const CampusRow = ({ country, name, city, uid, manager, creationDate }) => {
  return (
    <tr>
      <th scope="row"></th>

      <td>{country}</td>
      <td>{name}</td>
      <td>
        {city}-{uid}
      </td>
      <td>{uid}</td>
      <td>{manager}</td>
      <td>{creationDate}</td>
      {/* <td>{button}</td> */}
    </tr>
  );
};
export default CampusRow;

CampusRow.propTypes = {
  country: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  manager: PropTypes.object,
  creationDate: PropTypes.string
  // button: PropTypes.func
};
