import React from "react";
import CampusRow from "../../components/CampusRow";
import { Table } from "reactstrap";

const divStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "gray",
  backgroundColor: "white",
  fontWeight: "bold",
  fontSize: "2rem",
  height: "40px",
  padding: "40px",
  margin: "20px 0"
};

const CampusView = ({ campuses }) => {
  return (
    <>
      <div style={divStyle}>ALL CAMPUSES</div>

      <Table
        responsive
        hover
        className="p-2 table-sm"
        style={{ backgroundColor: "#FFF" }}
      >
        <thead>
          <tr>
            <th>Score</th>
            <th>Country</th>
            <th>Name</th>
            <th>City</th>
            <th>Manager</th>
            <th>Date of creation</th>
            <th>Wilders List</th>
          </tr>
        </thead>
        <tbody>
          {campuses.map((campus, i) => (
            <CampusRow
              key={i}
              elo={campus.currentElo}
              country={campus.country}
              name={campus.name}
              city={campus.city}
              uid={campus.uid}
              managerLn={campus.manager.lastname}
              managerFn={campus.manager.firstname}
              creationDate={campus.creation}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default CampusView;
