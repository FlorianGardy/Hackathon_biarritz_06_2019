import React from "react";
import WildersList from "../../components/WildersList";
import { Table } from "reactstrap";

const WildersView = ({ wilders }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
        </tr>
      </thead>
      <tbody>
        {wilders.filter((wilder, i) => (
          <WildersList
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
