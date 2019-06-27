import React from "react";
import WilderRow from "../../components/WilderRow";
import { Table } from "reactstrap";

const WildersView = ({ wildersFromOneCampus }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
        </tr>
      </thead>
      <tbody>
        {wildersFromOneCampus.map((wilder, i) => (
          <WilderRow
            key={i}
            firstname={wilder.firstname}
            lastname={wilder.lastname}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default WildersView;
