import React from "react";
import CampusRow from "../../components/CampusRow";
import { Table } from "reactstrap";

const CampusView = ({ campuses }) => {
  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>Score</th>
            <th>Country</th>
            <th>Name</th>
            <th>City</th>
            <th>Manager Name</th>
            <th>Date of creation</th>
            <th>Wilders List</th>
          </tr>
        </thead>
        <tbody>
          {campuses.map((campus, i) => (
            <CampusRow
              key={i}
              elo={campus.elo}
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
